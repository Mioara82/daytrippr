create table public.trips (
  id uuid primary key default gen_random_uuid(),
  owner_id text references public.users(owner_id),
  title text not null,
  start_location text,
  end_location text,
  start_date date,
  end_date date,
  cost numeric,
  means_of_transportation text,
  created_at timestamptz default now()
);

alter table public.trips enable row level security;

create policy "Users can view their own trips" on public.trips
  for select using (owner_id = (auth.jwt() ->> 'sub')::text);

-- Users can update only their own trips
create policy "Users can update their own trips" on public.trips
  for update using (owner_id = (auth.jwt() ->> 'sub')::text)
  with check (owner_id = (auth.jwt() ->> 'sub')::text);

-- Users can delete only their own trips
create policy "Users can delete their own trips" on public.trips
  for delete using (owner_id = (auth.jwt() ->> 'sub')::text);

-- Users can insert trips linked to themselves
create policy "Users can insert trips for themselves" on public.trips
  for insert with check (owner_id = (auth.jwt() ->> 'sub')::text);

create index if not exists trips_owner_id_idx on public.trips(owner_id);