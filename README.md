# ResuMint

ResuMint is a full-stack resume builder with Supabase authentication, Prisma-backed PostgreSQL persistence, two live templates, and browser-side PDF export.

## Stack

- Next.js 15, React 19, and TypeScript
- Tailwind CSS
- Supabase Auth and PostgreSQL
- Prisma ORM
- React Hook Form and Zod
- `@react-pdf/renderer`

## Local setup

1. Create a [Supabase](https://supabase.com) project.
2. In Supabase **Authentication → URL Configuration**, set the site URL to `http://localhost:3000` and add `http://localhost:3000/auth/callback` as a redirect URL.
3. Copy `.env.example` to `.env.local` and fill in the project URL, anon key, pooled database URL, and direct database URL. Supabase shows these under **Connect** and **Project Settings → API**.
4. Install and prepare the database:

   ```bash
   npm install
   npx prisma generate
   npx prisma db push
   ```

5. Open the Supabase SQL editor and run [`supabase/rls.sql`](supabase/rls.sql). This enables ownership policies on every resume table.
6. Start the app:

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000), create an account, and confirm the email if email confirmation is enabled.

## Sample data

Create or register a Supabase Auth user, copy that user's UUID from **Authentication → Users**, then run:

```bash
SEED_USER_ID="00000000-0000-0000-0000-000000000000" npm run db:seed
```

The seed is safe to rerun: it replaces only that user's resume named `Sample Product Designer Resume`.

## Security model

Every server query scopes resumes to the authenticated Supabase user. Child records can only be changed through an owned resume. PostgreSQL Row Level Security mirrors those rules for defense in depth. Never expose a Supabase service-role key to the browser.

## Deploy to Vercel

1. Push the repository to GitHub and import it into Vercel.
2. Add the four variables from `.env.example` to the Vercel project.
3. Add `https://your-domain.vercel.app/auth/callback` to Supabase's allowed redirect URLs and update the site URL.
4. Deploy. The build script generates Prisma Client before running `next build`.

For production schema changes, prefer committed Prisma migrations (`npx prisma migrate dev`) over `db push`.

## Useful commands

```bash
npm run dev        # local development
npm run typecheck  # TypeScript validation
npm run build      # production build
npm run db:seed    # sample resume (requires SEED_USER_ID)
```
