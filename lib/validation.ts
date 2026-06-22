import { z } from "zod";
import { templateIds } from "@/lib/templates";
import { fontIds } from "@/lib/fonts";

const text = z.string().trim().max(2000);
const itemBase = z.object({ id: z.string().optional() });
export const resumeSchema = z.object({
  title: z.string().trim().min(1, "Resume title is required").max(100),
  template: z.enum(templateIds),
  fontFamily: z.enum(fontIds),
  summary: text,
  profile: z.object({
    fullName: z.string().trim().min(1, "Full name is required").max(100),
    email: z.string().trim().email("Enter a valid email"),
    phone: z.string().max(30), location: z.string().max(100), website: z.string().max(200), linkedIn: z.string().max(200),
  }),
  experiences: z.array(itemBase.extend({ company: z.string().min(1, "Company is required"), position: z.string().min(1, "Position is required"), location: text, startDate: text, endDate: text, current: z.boolean(), details: text })),
  educations: z.array(itemBase.extend({ school: z.string().min(1, "School is required"), degree: z.string().min(1, "Degree is required"), field: text, startDate: text, endDate: text, details: text })),
  skills: z.array(itemBase.extend({ name: z.string().min(1, "Skill is required"), level: text })),
  projects: z.array(itemBase.extend({ name: z.string().min(1, "Project name is required"), description: text, url: text, technologies: text })),
  certifications: z.array(itemBase.extend({ name: z.string().min(1, "Certification is required"), issuer: text, date: text, url: text })),
  customSections: z.array(itemBase.extend({ title: z.string().trim().min(1, "Section title is required").max(100), content: text })),
});
export type ResumeInput = z.infer<typeof resumeSchema>;
