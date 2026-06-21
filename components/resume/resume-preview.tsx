import type { ResumeInput } from "@/lib/validation";
import { cn } from "@/lib/utils";

export function ResumePreview({ data, compact=false }: { data:ResumeInput; compact?:boolean }) {
  const modern=data.template==="modern"; const p=data.profile;
  return <div className={cn("min-h-full bg-white text-[#202521]",compact?"p-8 text-[8px]":"p-[7%] text-[11px]",modern&&"border-l-[12px] border-forge-600")}>
    <header className={cn(modern?"":"border-b-2 border-ink pb-4")}><h1 className={cn("font-serif font-bold",compact?"text-2xl":"text-4xl")}>{p.fullName||"Your Name"}</h1><div className="mt-2 flex flex-wrap gap-x-3 text-black/55">{[p.email,p.phone,p.location,p.website,p.linkedIn].filter(Boolean).map((x,i)=><span key={i}>{x}</span>)}</div></header>
    {data.summary&&<Section title="Professional Summary" modern={modern}><p className="whitespace-pre-line leading-relaxed">{data.summary}</p></Section>}
    {!!data.experiences.length&&<Section title="Experience" modern={modern}>{data.experiences.map((x,i)=><Entry key={i} title={x.position} subtitle={x.company+(x.location?` · ${x.location}`:"")} date={`${x.startDate}${x.startDate||x.endDate?" — ":""}${x.current?"Present":x.endDate}`} details={x.details}/>)}</Section>}
    {!!data.educations.length&&<Section title="Education" modern={modern}>{data.educations.map((x,i)=><Entry key={i} title={x.degree+(x.field?` in ${x.field}`:"")} subtitle={x.school} date={`${x.startDate}${x.startDate||x.endDate?" — ":""}${x.endDate}`} details={x.details}/>)}</Section>}
    {!!data.projects.length&&<Section title="Projects" modern={modern}>{data.projects.map((x,i)=><Entry key={i} title={x.name} subtitle={x.technologies} date={x.url} details={x.description}/>)}</Section>}
    <div className="grid grid-cols-2 gap-8">{!!data.skills.length&&<Section title="Skills" modern={modern}><p className="leading-relaxed">{data.skills.map(x=>x.name+(x.level?` (${x.level})`:"")).join(" · ")}</p></Section>}{!!data.certifications.length&&<Section title="Certifications" modern={modern}>{data.certifications.map((x,i)=><div className="mb-2" key={i}><b>{x.name}</b><div className="text-black/55">{[x.issuer,x.date].filter(Boolean).join(" · ")}</div></div>)}</Section>}</div>
  </div>;
}
function Section({title,modern,children}:{title:string;modern:boolean;children:React.ReactNode}){return <section className="mt-6"><h2 className={cn("mb-3 font-bold uppercase tracking-[.18em]",modern?"text-forge-700":"border-b border-black/20 pb-1")}>{title}</h2>{children}</section>}
function Entry({title,subtitle,date,details}:{title:string;subtitle:string;date:string;details:string}){return <div className="mb-4 break-inside-avoid"><div className="flex items-start justify-between gap-3"><div><h3 className="font-bold">{title}</h3><p className="text-black/60">{subtitle}</p></div><span className="shrink-0 text-black/45">{date}</span></div>{details&&<p className="mt-1.5 whitespace-pre-line leading-relaxed">{details}</p>}</div>}
