create table public.users (
  id uuid primary key default gen_random_uuid(),
  owner_id text not null unique,
  username text,
  email text,
  avatar_url text,
  created_at timestamptz default now()
);

alter table public.users enable row level security;

create policy "Users can update themselves" on public.users
  for update using (owner_id = auth.jwt() ->> 'sub');

create policy "Users can delete themselves" on public.users
  for delete using (owner_id = auth.jwt() ->> 'sub');