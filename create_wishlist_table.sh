#!/bin/bash

# Script to create wishlist table in Supabase
# Run this script to set up the wishlist functionality

echo "Creating wishlist table in Supabase..."

# SQL to create the wishlist table
SQL="
-- Create wishlist table
CREATE TABLE IF NOT EXISTS wishlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  product_id uuid REFERENCES products(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, product_id)
);

ALTER TABLE wishlist ENABLE ROW LEVEL SECURITY;

-- Users can view their own wishlist items
CREATE POLICY \"Users can view own wishlist\"
  ON wishlist FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Users can add items to their own wishlist
CREATE POLICY \"Users can add to own wishlist\"
  ON wishlist FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Users can remove items from their own wishlist
CREATE POLICY \"Users can remove from own wishlist\"
  ON wishlist FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Admins can view all wishlist items
CREATE POLICY \"Admins can view all wishlist items\"
  ON wishlist FOR SELECT
  TO authenticated
  USING (EXISTS (SELECT 1 FROM profiles WHERE profiles.id = auth.uid() AND profiles.is_admin = true));
"

echo "SQL to execute:"
echo "$SQL"
echo ""
echo "Please copy the above SQL and run it in your Supabase Dashboard:"
echo "1. Go to https://supabase.com/dashboard"
echo "2. Select your project"
echo "3. Go to SQL Editor"
echo "4. Paste and run the SQL"
echo ""
echo "After running the SQL, the wishlist functionality will work!"
