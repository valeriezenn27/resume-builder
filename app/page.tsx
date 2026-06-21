import Link from "next/link";
import { ArrowRight, Check, FileText, LayoutTemplate, Sparkles } from "lucide-react";
import { LandingNav } from "@/components/landing/nav";

export default function Home() {
  return <main className="min-h-screen overflow-hidden">
    <LandingNav/>
    <section className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pt-24">
      <div><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-forge-600/20 bg-forge-50 px-3 py-1.5 text-xs font-bold text-forge-700"><Sparkles size={14}/> Your story, professionally forged</div>
        <h1 className="max-w-3xl font-serif text-5xl font-bold leading-[1.04] tracking-tight sm:text-7xl">A resume that feels like <em className="text-forge-600">you</em>—at your best.</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-black/60">Shape your experience into a polished, job-ready resume. Beautiful templates, thoughtful guidance, and instant PDF export.</p>
        <div className="mt-9 flex flex-wrap gap-3"><Link href="/register" className="btn-primary px-6 py-3.5 text-base">Create your resume <ArrowRight size={18}/></Link><Link href="#features" className="btn-secondary px-6 py-3.5 text-base">See how it works</Link></div>
        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-black/55">{["Free to start", "No design skills needed", "PDF ready"].map(x=><span key={x} className="flex items-center gap-1.5"><Check size={15} className="text-forge-600"/>{x}</span>)}</div>
      </div>
      <div className="relative"><div className="absolute -inset-16 -z-10 rounded-full bg-forge-500/10 blur-3xl"/><div className="rotate-2 rounded-3xl border border-black/10 bg-white p-3 shadow-soft"><div className="rounded-2xl bg-[#fbfaf7] p-8 sm:p-12"><div className="border-b-2 border-ink pb-5"><div className="text-3xl font-bold">Maya Chen</div><div className="mt-1 text-sm text-black/55">Product Designer · maya@example.com · Singapore</div></div><PreviewSection title="Profile">Product designer translating complex systems into calm, useful experiences.</PreviewSection><PreviewSection title="Experience"><b>Senior Product Designer</b><br/><span className="text-black/55">Northstar Studio · 2022 — Present</span><p className="mt-2">Led end-to-end design for a B2B platform used by 12,000 teams.</p></PreviewSection><div className="mt-6 flex gap-2">{["Figma","Research","Strategy"].map(x=><span className="rounded-full bg-forge-50 px-3 py-1 text-xs font-semibold text-forge-700" key={x}>{x}</span>)}</div></div></div></div>
    </section>
    <section id="features" className="bg-ink px-5 py-20 text-white"><div className="mx-auto max-w-7xl"><p className="text-sm font-bold uppercase tracking-widest text-green-300">Built for momentum</p><h2 className="mt-3 max-w-2xl font-serif text-4xl font-bold">From blank page to ready-to-send.</h2><div className="mt-10 grid gap-4 md:grid-cols-3">{[[FileText,"Guided editor","Focus on one section at a time with clear, helpful fields."],[LayoutTemplate,"Flexible templates","Switch styles instantly without rebuilding your content."],[Sparkles,"Live preview","See every change as you type, then export a crisp PDF."]].map(([Icon,title,text])=>{const I=Icon as typeof FileText; return <div key={title as string} className="rounded-2xl border border-white/10 bg-white/[.06] p-6"><I className="text-green-300"/><h3 className="mt-5 font-bold">{title as string}</h3><p className="mt-2 text-sm leading-6 text-white/60">{text as string}</p></div>})}</div></div></section>
  </main>;
}
function PreviewSection({ title, children }: { title:string; children:React.ReactNode }) { return <div className="mt-7"><div className="mb-2 text-xs font-bold uppercase tracking-[.2em] text-forge-600">{title}</div><div className="text-sm leading-6">{children}</div></div>; }
