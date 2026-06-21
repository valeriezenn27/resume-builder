import Link from "next/link";
import { LogOut, Plus } from "lucide-react";
import { Logo } from "./logo";
import { createResume, signOut } from "@/app/(app)/actions";

export function AppHeader({ email }: { email?: string }) { return <header className="border-b border-black/[.07] bg-white"><div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8"><Logo/><nav className="flex items-center gap-2"><Link href="/dashboard" className="hidden text-sm font-semibold sm:block">My resumes</Link><form action={createResume}><button className="btn-primary py-2"><Plus size={16}/> <span className="hidden sm:inline">New resume</span></button></form><form action={signOut}><button aria-label={`Sign out ${email ?? ""}`} className="btn px-2 text-black/50 hover:text-black"><LogOut size={18}/></button></form></nav></div></header>; }
