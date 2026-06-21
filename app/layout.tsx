import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: { default: "BetterResume", template: "%s · BetterResume" }, description: "Build polished, job-ready resumes with confidence." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="font-sans">{children}</body></html>;
}
