import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createClient } from "@/lib/supabase/server";
import { resumeSchema } from "@/lib/validation";

export async function PUT(request: Request, { params }: { params: Promise<{ id:string }> }) {
  try {
    const { id } = await params; const supabase=await createClient(); const {data:{user}}=await supabase.auth.getUser();
    if(!user) return NextResponse.json({error:"Unauthorized"},{status:401});
    const parsed=resumeSchema.safeParse(await request.json());
    if(!parsed.success) return NextResponse.json({error:"Please fix the highlighted fields.",issues:parsed.error.flatten()},{status:400});
    const exists=await prisma.resume.findFirst({where:{id,userId:user.id},select:{id:true}}); if(!exists)return NextResponse.json({error:"Resume not found"},{status:404});
    const d=parsed.data;
    await prisma.$transaction(async tx=>{
      await tx.resume.update({where:{id},data:{title:d.title,template:d.template,summary:d.summary,profile:{upsert:{create:d.profile,update:d.profile}}}});
      await Promise.all([tx.resumeExperience.deleteMany({where:{resumeId:id}}),tx.resumeEducation.deleteMany({where:{resumeId:id}}),tx.resumeSkill.deleteMany({where:{resumeId:id}}),tx.resumeProject.deleteMany({where:{resumeId:id}}),tx.resumeCertification.deleteMany({where:{resumeId:id}})]);
      await Promise.all([
        d.experiences.length&&tx.resumeExperience.createMany({data:d.experiences.map((x,i)=>({...x,id:undefined,resumeId:id,sortOrder:i}))}),
        d.educations.length&&tx.resumeEducation.createMany({data:d.educations.map((x,i)=>({...x,id:undefined,resumeId:id,sortOrder:i}))}),
        d.skills.length&&tx.resumeSkill.createMany({data:d.skills.map((x,i)=>({...x,id:undefined,resumeId:id,sortOrder:i}))}),
        d.projects.length&&tx.resumeProject.createMany({data:d.projects.map((x,i)=>({...x,id:undefined,resumeId:id,sortOrder:i}))}),
        d.certifications.length&&tx.resumeCertification.createMany({data:d.certifications.map((x,i)=>({...x,id:undefined,resumeId:id,sortOrder:i}))}),
      ]);
    });
    return NextResponse.json({ok:true});
  } catch(error){console.error(error);return NextResponse.json({error:"Unable to save your resume."},{status:500})}
}
