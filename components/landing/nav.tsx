import Link from "next/link";
import { Logo } from "@/components/logo";
export function LandingNav() { return <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8"><Logo/><nav className="flex items-center gap-2"><Link href="/login" className="btn px-3">Sign in</Link><Link href="/register" className="btn-primary">Build my resume</Link></nav></header>; }
