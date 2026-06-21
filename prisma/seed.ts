import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const userId=process.env.SEED_USER_ID;
  if(!userId) throw new Error("Set SEED_USER_ID to the UUID of an existing Supabase Auth user.");
  await prisma.resume.deleteMany({where:{userId,title:"Sample Product Designer Resume"}});
  await prisma.resume.create({data:{
    userId,title:"Sample Product Designer Resume",template:"modern",summary:"Product designer with 7+ years of experience turning complex workflows into clear, accessible products. Strong partner to engineering and product teams, with a bias toward measurable outcomes.",
    profile:{create:{fullName:"Maya Chen",email:"maya.chen@example.com",phone:"+65 9123 4567",location:"Singapore",website:"mayachen.design",linkedIn:"linkedin.com/in/mayachen"}},
    experiences:{create:[
      {position:"Senior Product Designer",company:"Northstar Labs",location:"Singapore",startDate:"Mar 2022",endDate:"",current:true,details:"Led redesign of the analytics workspace, improving task completion by 28%.\nBuilt a research practice that brought customer insight into every product cycle.",sortOrder:0},
      {position:"Product Designer",company:"Atlas Commerce",location:"Remote",startDate:"Jun 2019",endDate:"Feb 2022",current:false,details:"Shipped merchant onboarding used by 8,000+ small businesses.\nCreated and maintained the company’s first accessible design system.",sortOrder:1}
    ]},
    educations:{create:[{school:"National University of Singapore",degree:"Bachelor of Arts",field:"Industrial Design",startDate:"2014",endDate:"2018",details:"Honours, Distinction",sortOrder:0}]},
    skills:{create:["Product strategy","User research","Interaction design","Figma","Design systems","Prototyping"].map((name,sortOrder)=>({name,level:"",sortOrder}))},
    projects:{create:[{name:"Wayfinder Design System",description:"A WCAG 2.2-aligned component library serving five product teams.",url:"mayachen.design/wayfinder",technologies:"Figma · Storybook · React",sortOrder:0}]},
    certifications:{create:[{name:"NN/g UX Certification",issuer:"Nielsen Norman Group",date:"2023",url:"",sortOrder:0}]}
  }});
}
main().then(()=>console.log("Sample resume created.")).catch(e=>{console.error(e);process.exit(1)}).finally(()=>prisma.$disconnect());
