-- Run after `npx prisma db push`. Prisma owns the schema; this file enables
-- Supabase's defense-in-depth policies for browser/direct database access.
alter table public.resumes enable row level security;
alter table public.resume_profiles enable row level security;
alter table public.resume_experiences enable row level security;
alter table public.resume_educations enable row level security;
alter table public.resume_skills enable row level security;
alter table public.resume_projects enable row level security;
alter table public.resume_certifications enable row level security;

create policy "Users manage their resumes" on public.resumes
for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "Users manage their resume profiles" on public.resume_profiles
for all using (exists (select 1 from public.resumes r where r.id = resume_id and r.user_id = auth.uid()))
with check (exists (select 1 from public.resumes r where r.id = resume_id and r.user_id = auth.uid()));

create policy "Users manage their resume experiences" on public.resume_experiences
for all using (exists (select 1 from public.resumes r where r.id = resume_id and r.user_id = auth.uid()))
with check (exists (select 1 from public.resumes r where r.id = resume_id and r.user_id = auth.uid()));

create policy "Users manage their resume educations" on public.resume_educations
for all using (exists (select 1 from public.resumes r where r.id = resume_id and r.user_id = auth.uid()))
with check (exists (select 1 from public.resumes r where r.id = resume_id and r.user_id = auth.uid()));

create policy "Users manage their resume skills" on public.resume_skills
for all using (exists (select 1 from public.resumes r where r.id = resume_id and r.user_id = auth.uid()))
with check (exists (select 1 from public.resumes r where r.id = resume_id and r.user_id = auth.uid()));

create policy "Users manage their resume projects" on public.resume_projects
for all using (exists (select 1 from public.resumes r where r.id = resume_id and r.user_id = auth.uid()))
with check (exists (select 1 from public.resumes r where r.id = resume_id and r.user_id = auth.uid()));

create policy "Users manage their resume certifications" on public.resume_certifications
for all using (exists (select 1 from public.resumes r where r.id = resume_id and r.user_id = auth.uid()))
with check (exists (select 1 from public.resumes r where r.id = resume_id and r.user_id = auth.uid()));
