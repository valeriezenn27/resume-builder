"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { createClient } from "@/lib/supabase/server";
import { resumeInclude } from "@/lib/resume";

async function userId() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");
  return user.id;
}

export async function createResume() {
  const uid = await userId();
  const resume = await prisma.resume.create({ data: { userId: uid, title: "Untitled Resume", profile: { create: {} } } });
  redirect(`/resumes/${resume.id}`);
}

export async function deleteResume(id: string) {
  const uid = await userId();
  await prisma.resume.deleteMany({ where: { id, userId: uid } });
  revalidatePath("/dashboard");
}

export async function renameResume(id: string, title: string) {
  const uid = await userId();
  const clean = title.trim().slice(0, 100);
  if (!clean) return { error: "A title is required." };
  await prisma.resume.updateMany({ where: { id, userId: uid }, data: { title: clean } });
  revalidatePath("/dashboard");
  return { ok: true };
}

export async function duplicateResume(id: string) {
  const uid = await userId();
  const source = await prisma.resume.findFirst({ where: { id, userId: uid }, include: resumeInclude });
  if (!source) return { error: "Resume not found." };
  await prisma.resume.create({ data: {
    userId: uid, title: `${source.title} (Copy)`, template: source.template, fontFamily: source.fontFamily, colorTheme: source.colorTheme, summary: source.summary,
    profile: source.profile ? { create: { fullName: source.profile.fullName, email: source.profile.email, phone: source.profile.phone, location: source.profile.location, website: source.profile.website, linkedIn: source.profile.linkedIn } } : undefined,
    experiences: { create: source.experiences.map(({ company,position,location,startDate,endDate,current,details,sortOrder })=>({company,position,location,startDate,endDate,current,details,sortOrder})) },
    educations: { create: source.educations.map(({ school,degree,field,startDate,endDate,details,sortOrder })=>({school,degree,field,startDate,endDate,details,sortOrder})) },
    skills: { create: source.skills.map(({name,level,sortOrder})=>({name,level,sortOrder})) },
    projects: { create: source.projects.map(({name,description,url,technologies,sortOrder})=>({name,description,url,technologies,sortOrder})) },
    certifications: { create: source.certifications.map(({name,issuer,date,url,sortOrder})=>({name,issuer,date,url,sortOrder})) },
    customSections: { create: source.customSections.map(({title,content,sortOrder})=>({title,content,sortOrder})) },
  } });
  revalidatePath("/dashboard"); return { ok: true };
}

export async function signOut() { const supabase=await createClient(); await supabase.auth.signOut(); redirect("/"); }
