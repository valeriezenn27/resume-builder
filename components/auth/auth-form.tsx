"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const router = useRouter(); const [loading,setLoading]=useState(false); const [error,setError]=useState(""); const [message,setMessage]=useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) { e.preventDefault(); setLoading(true); setError(""); const form=new FormData(e.currentTarget); const email=String(form.get("email")); const password=String(form.get("password")); const supabase=createClient();
    const result = mode === "login" ? await supabase.auth.signInWithPassword({email,password}) : await supabase.auth.signUp({email,password,options:{emailRedirectTo:`${location.origin}/auth/callback`}});
    setLoading(false); if(result.error){setError(result.error.message);return;} if(mode==="register" && !result.data.session){setMessage("Check your email to confirm your account.");return;} router.push("/dashboard"); router.refresh(); }
  const login=mode==="login";
  return <div className="w-full"><h1 className="font-serif text-4xl font-bold">{login?"Welcome back":"Create your account"}</h1><p className="mt-2 text-sm text-black/55">{login?"Your next opportunity is waiting.":"Start building a resume you’re proud to send."}</p><form onSubmit={submit} className="mt-8 space-y-5"><label><span className="label">Email</span><input name="email" type="email" required autoComplete="email" className="input" placeholder="you@example.com"/></label><label><span className="label">Password</span><input name="password" type="password" minLength={6} required autoComplete={login?"current-password":"new-password"} className="input" placeholder="At least 6 characters"/></label>{error&&<p role="alert" className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}{message&&<p className="rounded-xl bg-forge-50 p-3 text-sm text-forge-700">{message}</p>}<button disabled={loading} className="btn-primary w-full">{loading&&<Loader2 size={16} className="animate-spin"/>}{login?"Sign in":"Create account"}</button></form><p className="mt-6 text-center text-sm text-black/55">{login?"New to BetterResume? ":"Already have an account? "}<Link className="font-semibold text-forge-700 hover:underline" href={login?"/register":"/login"}>{login?"Create one":"Sign in"}</Link></p></div>;
}
