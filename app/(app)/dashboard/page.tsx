import type { Metadata } from "next";
import { FileText, Plus } from "lucide-react";
import { redirect } from "next/navigation";
import { createResume } from "@/app/(app)/actions";
import { ResumeCard } from "@/components/dashboard/resume-card";
import { EmptyState } from "@/components/ui";
import { prisma } from "@/lib/prisma";
import { createClient } from "@/lib/supabase/server";
export const metadata:Metadata={title:"My resumes"};
export default async function Dashboard(){const supabase=await createClient();const {data:{user}}=await supabase.auth.getUser();if(!user)redirect("/login");const resumes=await prisma.resume.findMany({where:{userId:user.id},orderBy:{updatedAt:"desc"},include:{profile:true}});return <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8"><div className="flex items-end justify-between"><div><p className="text-sm font-bold text-forge-700">YOUR WORKSPACE</p><h1 className="mt-1 font-serif text-4xl font-bold">My resumes</h1><p className="mt-2 text-sm text-black/50">Create a tailored resume for every opportunity.</p></div><form action={createResume} className="hidden sm:block"><button className="btn-primary"><Plus size={17}/>New resume</button></form></div><div className="mt-8">{resumes.length?<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{resumes.map(r=><ResumeCard key={r.id} resume={r}/>)}</div>:<EmptyState icon={<FileText/>} title="Create your first resume" text="Add your experience once, shape it beautifully, and export it when you’re ready." action={<form action={createResume}><button className="btn-primary"><Plus size={17}/>Create a resume</button></form>}/>}</div></main>}
