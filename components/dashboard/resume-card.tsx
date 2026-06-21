"use client";
import Link from "next/link";
import { useState, useTransition } from "react";
import { Copy, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { deleteResume, duplicateResume, renameResume } from "@/app/(app)/actions";
import { formatDate } from "@/lib/utils";

export function ResumeCard({ resume }: { resume: { id:string; title:string; template:string; updatedAt:Date; profile:{fullName:string}|null } }) {
  const [open,setOpen]=useState(false); const [pending,startTransition]=useTransition();
  function rename(){const title=window.prompt("Rename resume",resume.title);if(title&&title!==resume.title)startTransition(()=>void renameResume(resume.id,title));setOpen(false)}
  function duplicate(){startTransition(()=>void duplicateResume(resume.id));setOpen(false)}
  function remove(){if(window.confirm(`Delete “${resume.title}”? This cannot be undone.`))startTransition(()=>void deleteResume(resume.id));setOpen(false)}
  return <article className={`card group overflow-hidden transition hover:-translate-y-0.5 hover:shadow-soft ${pending?"opacity-60":""}`}><Link href={`/resumes/${resume.id}`} className="block aspect-[1.414] border-b border-black/[.07] bg-[#f8f7f3] p-6"><div className={`mx-auto h-full max-w-[75%] bg-white p-5 shadow-sm ${resume.template==="modern"?"border-l-8 border-forge-600":"border-t-4 border-ink"}`}><div className="h-2 w-2/3 bg-ink/80"/><div className="mt-2 h-1 w-full bg-black/10"/><div className="mt-6 h-1 w-1/3 bg-forge-500/70"/><div className="mt-2 space-y-1">{[1,2,3].map(x=><div key={x} className="h-1 bg-black/10"/>)}</div></div></Link><div className="relative flex items-start justify-between p-4"><Link href={`/resumes/${resume.id}`} className="min-w-0"><h2 className="truncate font-bold">{resume.title}</h2><p className="mt-1 text-xs text-black/45">Edited {formatDate(resume.updatedAt)}</p></Link><button onClick={()=>setOpen(!open)} aria-label="Resume actions" className="rounded-lg p-2 hover:bg-black/5"><MoreHorizontal size={18}/></button>{open&&<div className="absolute right-3 top-12 z-10 w-40 rounded-xl border border-black/10 bg-white p-1.5 text-sm shadow-xl"><Menu icon={<Pencil/>} onClick={rename}>Rename</Menu><Menu icon={<Copy/>} onClick={duplicate}>Duplicate</Menu><Menu icon={<Trash2/>} onClick={remove} danger>Delete</Menu></div>}</div></article>;
}
function Menu({icon,children,onClick,danger}:{icon:React.ReactElement;children:React.ReactNode;onClick:()=>void;danger?:boolean}){return <button onClick={onClick} className={`flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left hover:bg-black/5 [&_svg]:size-15 ${danger?"text-red-600":""}`}>{icon}{children}</button>}
