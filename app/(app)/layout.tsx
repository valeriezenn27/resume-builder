import { AppHeader } from "@/components/app-header"; import { createClient } from "@/lib/supabase/server";
export default async function AppLayout({children}:{children:React.ReactNode}){const supabase=await createClient();const {data:{user}}=await supabase.auth.getUser();return <div className="min-h-screen"><AppHeader email={user?.email}/>{children}</div>}
