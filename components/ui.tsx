import { cn } from "@/lib/utils";
import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export function Field({ label, error, className, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }) {
  return <label className={className}><span className="label">{label}</span><input className={cn("input", error && "border-red-400")} {...props}/>{error && <span className="mt-1 block text-xs text-red-600">{error}</span>}</label>;
}
export function TextArea({ label, error, className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; error?: string }) {
  return <label className={className}><span className="label">{label}</span><textarea className={cn("input min-h-28 resize-y", error && "border-red-400")} {...props}/>{error && <span className="mt-1 block text-xs text-red-600">{error}</span>}</label>;
}
export function EmptyState({ icon, title, text, action }: { icon: React.ReactNode; title: string; text: string; action?: React.ReactNode }) {
  return <div className="card flex flex-col items-center px-6 py-16 text-center"><div className="mb-4 grid size-12 place-items-center rounded-2xl bg-forge-50 text-forge-600">{icon}</div><h2 className="text-lg font-bold">{title}</h2><p className="mt-2 max-w-sm text-sm text-black/55">{text}</p>{action && <div className="mt-6">{action}</div>}</div>;
}
