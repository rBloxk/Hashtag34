# Wishlist Table Setup Instructions

## Issue
The wishlist page is showing "failed to load wishlist items" because the `wishlist` table doesn't exist in the database yet.

## Solution
You need to create the wishlist table in your Supabase database. Here are the steps:

### Method 1: Using Supabase Dashboard (Recommended)

1. **Go to your Supabase Dashboard**: https://supabase.com/dashboard
2. **Select your project**: "Hashtag34"
3. **Navigate to**: **SQL Editor**
4. **Run this SQL script**:

```sql
-- Create wishlist table
CREATE TABLE IF NOT EXISTS wishlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  product_id uuid REFERENCES products(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, product_id) -- Prevent duplicate wishlist entries
);

ALTER TABLE wishlist ENABLE ROW LEVEL SECURITY;

-- Users can view their own wishlist items
CREATE POLICY "Users can view own wishlist"
  ON wishlist FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Users can add items to their own wishlist
CREATE POLICY "Users can add to own wishlist"
  ON wishlist FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Users can remove items from their own wishlist
CREATE POLICY "Users can remove from own wishlist"
  ON wishlist FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Admins can view all wishlist items
CREATE POLICY "Admins can view all wishlist items"
  ON wishlist FOR SELECT
  TO authenticated
  USING (EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.is_admin = true));
```

### Method 2: Using Supabase CLI (If configured)

```bash
supabase db push
```

## After Setup
Once the table is created, the wishlist functionality will work properly:
- Users can add products to their wishlist
- Users can view their wishlist at `/wishlist`
- Users can remove items from their wishlist
- Users can add wishlist items to cart

## Testing
After creating the table, test the wishlist functionality:
1. Go to `/shop` and add a product to wishlist
2. Go to `/wishlist` to view your wishlist
3. Try removing items and adding them to cart

The wishlist page will now load without errors!
