import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: { default: "ResuMint", template: "%s · ResuMint" }, description: "Build polished, job-ready resumes with confidence." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="font-sans">{children}</body></html>;
}
