-- Make trips idempotent on (owner_id, title, start_date)
create unique index if not exists trips_unique_seed_idx
  on public.trips (owner_id, title, start_date);

-- USERS (UPSERT) — fill all columns; keep original created_at on conflict
insert into public.users (id, owner_id, username, email, avatar_url, created_at) values
  (gen_random_uuid(), 'user_001', 'alice',  'alice@example.com',  'https://i.pravatar.cc/150?img=1',  '2025-08-01T09:00:00Z'),
  (gen_random_uuid(), 'user_002', 'bob',    'bob@example.com',    'https://i.pravatar.cc/150?img=2',  '2025-08-02T09:00:00Z'),
  (gen_random_uuid(), 'user_003', 'carol',  'carol@example.com',  'https://i.pravatar.cc/150?img=3',  '2025-08-03T09:00:00Z'),
  (gen_random_uuid(), 'user_004', 'dave',   'dave@example.com',   'https://i.pravatar.cc/150?img=4',  '2025-08-04T09:00:00Z'),
  (gen_random_uuid(), 'user_005', 'erin',   'erin@example.com',   'https://i.pravatar.cc/150?img=5',  '2025-08-05T09:00:00Z'),
  (gen_random_uuid(), 'user_006', 'frank',  'frank@example.com',  'https://i.pravatar.cc/150?img=6',  '2025-08-06T09:00:00Z'),
  (gen_random_uuid(), 'user_007', 'grace',  'grace@example.com',  'https://i.pravatar.cc/150?img=7',  '2025-08-07T09:00:00Z'),
  (gen_random_uuid(), 'user_008', 'heidi',  'heidi@example.com',  'https://i.pravatar.cc/150?img=8',  '2025-08-08T09:00:00Z'),
  (gen_random_uuid(), 'user_009', 'ivan',   'ivan@example.com',   'https://i.pravatar.cc/150?img=9',  '2025-08-09T09:00:00Z'),
  (gen_random_uuid(), 'user_010', 'judy',   'judy@example.com',   'https://i.pravatar.cc/150?img=10', '2025-08-10T09:00:00Z')
on conflict (owner_id) do update
set username   = excluded.username,
    email      = excluded.email,
    avatar_url = excluded.avatar_url;

-- TRIPS (UPSERT) — deterministic, won’t duplicate on re-run
insert into public.trips
  (id, owner_id, title, start_location, end_location, start_date, end_date, cost, means_of_transportation, created_at)
values
  (gen_random_uuid(), 'user_001', 'London Museums Sprint',  'Camden',          'South Kensington', '2025-08-22', '2025-08-22',  45.50, 'tube',  '2025-08-11T10:00:00Z'),
  (gen_random_uuid(), 'user_002', 'Brighton Day Escape',    'Victoria',        'Brighton Pier',    '2025-08-23', '2025-08-23',  32.00, 'train', '2025-08-11T10:10:00Z'),
  (gen_random_uuid(), 'user_003', 'Cambridge Punting',      'Cambridge Stn',   'River Cam',        '2025-08-24', '2025-08-24',  28.75, 'train', '2025-08-11T10:20:00Z'),
  (gen_random_uuid(), 'user_004', 'Oxford Colleges Walk',   'Oxford Stn',      'Radcliffe Sq',     '2025-08-24', '2025-08-24',  21.40, 'train', '2025-08-11T10:30:00Z'),
  (gen_random_uuid(), 'user_005', 'Peak District Hike',     'Edale',           'Kinder Scout',     '2025-08-25', '2025-08-25',  15.00, 'train', '2025-08-11T10:40:00Z'),
  (gen_random_uuid(), 'user_006', 'Bath & Roman Baths',     'Bath Spa',        'Bath Abbey',       '2025-08-26', '2025-08-26',  38.20, 'train', '2025-08-11T10:50:00Z'),
  (gen_random_uuid(), 'user_007', 'York City Walls Loop',   'York Stn',        'Shambles',         '2025-08-27', '2025-08-27',  29.90, 'train', '2025-08-11T11:00:00Z'),
  (gen_random_uuid(), 'user_008', 'Snowdonia Ridge Walk',   'Betws-y-Coed',    'Snowdon',          '2025-08-28', '2025-08-28',  42.00, 'car',   '2025-08-11T11:10:00Z'),
  (gen_random_uuid(), 'user_009', 'Seven Sisters Cliffs',   'Seaford',         'Birling Gap',      '2025-08-29', '2025-08-29',  26.30, 'train', '2025-08-11T11:20:00Z'),
  (gen_random_uuid(), 'user_010', 'Windsor Castle Circuit', 'Windsor & Eton',  'Long Walk',        '2025-08-30', '2025-08-30',  24.60, 'train', '2025-08-11T11:30:00Z')
on conflict (owner_id, title, start_date) do update
set end_location            = excluded.end_location,
    end_date                = excluded.end_date,
    cost                    = excluded.cost,
    means_of_transportation = excluded.means_of_transportation;
