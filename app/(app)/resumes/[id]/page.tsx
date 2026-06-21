import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { ResumeEditor } from "@/components/resume/resume-editor";
import { prisma } from "@/lib/prisma";
import { resumeInclude, toResumeInput } from "@/lib/resume";
import { createClient } from "@/lib/supabase/server";
export const metadata:Metadata={title:"Resume editor"};
export default async function ResumePage({params}:{params:Promise<{id:string}>}){const {id}=await params;const supabase=await createClient();const {data:{user}}=await supabase.auth.getUser();if(!user)redirect("/login");const resume=await prisma.resume.findFirst({where:{id,userId:user.id},include:resumeInclude});if(!resume)notFound();return <ResumeEditor id={id} initial={toResumeInput(resume)}/>}
