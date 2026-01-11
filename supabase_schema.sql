-- Enable Row Level Security
alter table if exists public.artists enable row level security;
alter table if exists public.products enable row level security;

-- Artists Table
create table public.artists (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  avatar_url text,
  bio text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Products (Blueprints) Table
create table public.products (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  artist_id uuid references public.artists(id),
  price_text text not null, -- e.g. "$45 + Shipping"
  before_image_url text,
  after_image_url text,
  slots_remaining integer default 0,
  max_slots integer default 10,
  tags text[], -- Array of strings
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS Policies (Allow read access to everyone)
create policy "Allow public read access" on public.artists for select using (true);
create policy "Allow public read access" on public.products for select using (true);

-- Insert Mock Data
insert into public.artists (name, avatar_url, bio) values 
('Yuki Stitch', 'https://placehold.co/100x100/121212/CCFF00?text=YS', 'Sashiko repair specialist.'),
('NeoThread', 'https://placehold.co/100x100/121212/00FFCC?text=NT', 'Cyberpunk patchworks.');

-- (You would insert products referencing these artist IDs in the dashboard)
