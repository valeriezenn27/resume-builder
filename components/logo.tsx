import Link from "next/link";
import { Leaf } from "lucide-react";
export function Logo() { return <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight"><span className="grid size-9 place-items-center rounded-xl bg-forge-600 text-white"><Leaf size={18}/></span>ResuMint</Link>; }
