import type { Resume, ResumeProfile, ResumeExperience, ResumeEducation, ResumeSkill, ResumeProject, ResumeCertification } from "@prisma/client";
import type { ResumeInput } from "./validation";
import { getTemplate } from "./templates";
import { getFont } from "./fonts";

export type FullResume = Resume & { profile: ResumeProfile | null; experiences: ResumeExperience[]; educations: ResumeEducation[]; skills: ResumeSkill[]; projects: ResumeProject[]; certifications: ResumeCertification[] };
export const resumeInclude = { profile: true, experiences: { orderBy: { sortOrder: "asc" as const } }, educations: { orderBy: { sortOrder: "asc" as const } }, skills: { orderBy: { sortOrder: "asc" as const } }, projects: { orderBy: { sortOrder: "asc" as const } }, certifications: { orderBy: { sortOrder: "asc" as const } } };

export function toResumeInput(r: FullResume): ResumeInput {
  return {
    title: r.title, template: getTemplate(r.template).id, fontFamily: getFont(r.fontFamily).id, summary: r.summary,
    profile: r.profile ?? { fullName: "", email: "", phone: "", location: "", website: "", linkedIn: "" },
    experiences: r.experiences, educations: r.educations, skills: r.skills, projects: r.projects, certifications: r.certifications,
  };
}
