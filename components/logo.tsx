import Link from "next/link";
import { FileCheck2 } from "lucide-react";
export function Logo() { return <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight"><span className="grid size-9 place-items-center rounded-xl bg-forge-600 text-white"><FileCheck2 size={18}/></span>BetterResume</Link>; }
