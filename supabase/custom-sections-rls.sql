-- Run once in the Supabase SQL Editor after adding custom resume sections.
alter table public.resume_custom_sections enable row level security;

drop policy if exists "Users manage their custom resume sections" on public.resume_custom_sections;
create policy "Users manage their custom resume sections" on public.resume_custom_sections
for all
using (
  exists (
    select 1 from public.resumes r
    where r.id = resume_id and r.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1 from public.resumes r
    where r.id = resume_id and r.user_id = auth.uid()
  )
);
