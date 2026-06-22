import { LogOut } from "lucide-react";
import { Logo } from "./logo";
import { signOut } from "@/app/(app)/actions";

export function AppHeader({ email }: { email?: string }) { return <header className="border-b border-black/[.07] bg-white"><div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8"><Logo href="/dashboard"/><div className="flex items-center gap-3"><span className="hidden max-w-56 truncate text-sm text-black/45 md:block">{email}</span><form action={signOut}><button aria-label={`Sign out ${email ?? ""}`} className="btn-secondary py-2"><LogOut size={16}/><span className="hidden sm:inline">Sign out</span></button></form></div></div></header>; }
