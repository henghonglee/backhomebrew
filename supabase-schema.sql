-- Supabase schema for Back Home Brew products table
-- Run this in the Supabase SQL Editor to set up the database

CREATE TABLE products (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    product_id TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT NOT NULL,
    btc_price NUMERIC NOT NULL,
    sats_price INTEGER NOT NULL,
    usd_price NUMERIC NOT NULL,
    option_type TEXT NOT NULL CHECK (option_type IN ('size', 'color')),
    options JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Allow public read access (anyone can view products)
CREATE POLICY "Products are publicly readable"
    ON products FOR SELECT
    USING (true);

-- Allow authenticated users to manage products (for admin panel)
CREATE POLICY "Authenticated users can insert products"
    ON products FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "Authenticated users can update products"
    ON products FOR UPDATE
    TO authenticated
    USING (true);

CREATE POLICY "Authenticated users can delete products"
    ON products FOR DELETE
    TO authenticated
    USING (true);

-- Seed data: the 6 original hardcoded products
INSERT INTO products (product_id, name, description, image_url, btc_price, sats_price, usd_price, option_type, options) VALUES
(
    'tshirt',
    'Back Home Brew T-Shirt',
    'Premium cotton tee with our signature logo',
    'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a',
    0.0008,
    80000,
    25.00,
    'size',
    '[{"value": "S", "label": "Small"}, {"value": "M", "label": "Medium"}, {"value": "L", "label": "Large"}, {"value": "XL", "label": "X-Large"}, {"value": "XXL", "label": "XX-Large"}]'::jsonb
),
(
    'cap',
    'Coffee Lover''s Cap',
    'Adjustable cap with embroidered logo',
    'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    0.0006,
    60000,
    20.00,
    'color',
    '[{"value": "black", "label": "Black"}, {"value": "brown", "label": "Coffee Brown"}, {"value": "cream", "label": "Cream"}]'::jsonb
),
(
    'cup',
    'Ceramic Coffee Cup',
    'Perfect 12oz ceramic mug for your morning brew',
    'https://images.unsplash.com/photo-1541167760496-1628856ab772',
    0.0005,
    50000,
    15.00,
    'color',
    '[{"value": "white", "label": "Classic White"}, {"value": "brown", "label": "Coffee Brown"}, {"value": "black", "label": "Midnight Black"}]'::jsonb
),
(
    'jacket',
    'Back Home Brew Hoodie',
    'Cozy fleece hoodie perfect for coffee runs',
    'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg',
    0.002,
    200000,
    65.00,
    'size',
    '[{"value": "S", "label": "Small"}, {"value": "M", "label": "Medium"}, {"value": "L", "label": "Large"}, {"value": "XL", "label": "X-Large"}, {"value": "XXL", "label": "XX-Large"}]'::jsonb
),
(
    'bag',
    'Messenger Bag',
    'Durable canvas bag for your daily essentials',
    'https://images.unsplash.com/photo-1547949003-9792a18a2601',
    0.0015,
    150000,
    45.00,
    'color',
    '[{"value": "khaki", "label": "Khaki"}, {"value": "brown", "label": "Coffee Brown"}, {"value": "black", "label": "Black"}]'::jsonb
),
(
    'tumbler',
    'Insulated Tumbler',
    '20oz stainless steel tumbler keeps drinks hot or cold',
    'https://images.pexels.com/photos/8581023/pexels-photo-8581023.jpeg',
    0.0007,
    70000,
    22.00,
    'color',
    '[{"value": "silver", "label": "Stainless Steel"}, {"value": "black", "label": "Matte Black"}, {"value": "brown", "label": "Coffee Brown"}]'::jsonb
);
