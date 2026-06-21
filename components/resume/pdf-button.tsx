"use client";
import dynamic from "next/dynamic";
import { Download } from "lucide-react";
import type { ResumeInput } from "@/lib/validation";
const PDFDownloadLink=dynamic(()=>import("@react-pdf/renderer").then(m=>m.PDFDownloadLink),{ssr:false});
import { ResumePdf } from "./resume-pdf";
export function PdfButton({data}:{data:ResumeInput}){return <PDFDownloadLink document={<ResumePdf data={data}/>} fileName={`${data.title.replace(/[^a-z0-9]+/gi,"-").toLowerCase()||"resume"}.pdf`} className="btn-primary py-2">{({loading})=><><Download size={16}/>{loading?"Preparing…":"Export PDF"}</>}</PDFDownloadLink>}
