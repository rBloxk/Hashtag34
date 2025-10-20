-- Complete Supabase Setup Script for Hashtag34 Stories
-- Run this entire script in your Supabase SQL Editor

-- ========================================
-- 1. CREATE ADMIN USER AND SECURITY FUNCTIONS
-- ========================================

-- First, you need to create a user account through Supabase Auth
-- Go to Authentication > Users > Add user
-- Email: admin@hashtag34stories.com
-- Password: admin123
-- Then copy the User ID and replace 'YOUR_ADMIN_USER_ID_HERE' below

-- Create admin profile (replace with actual user ID from auth.users)
INSERT INTO profiles (
  id,
  email,
  full_name,
  phone,
  is_admin,
  created_at,
  updated_at
) VALUES (
  'YOUR_ADMIN_USER_ID_HERE', -- Replace with actual admin user ID from auth.users
  'admin@hashtag34stories.com',
  'Admin User',
  '+1 (555) 123-4567',
  true,
  now(),
  now()
) ON CONFLICT (id) DO UPDATE SET
  is_admin = true,
  updated_at = now();

-- Create additional admin policies for better security
CREATE POLICY "Admins can view all profiles"
  ON profiles FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.is_admin = true
    )
  );

CREATE POLICY "Admins can update all profiles"
  ON profiles FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.is_admin = true
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.is_admin = true
    )
  );

-- Create function to check if user is admin
CREATE OR REPLACE FUNCTION is_admin(user_id uuid)
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM profiles 
    WHERE id = user_id 
    AND is_admin = true
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to promote user to admin (only existing admins can use this)
CREATE OR REPLACE FUNCTION promote_to_admin(target_user_id uuid)
RETURNS boolean AS $$
BEGIN
  -- Check if current user is admin
  IF NOT is_admin(auth.uid()) THEN
    RAISE EXCEPTION 'Access denied. Admin privileges required.';
  END IF;
  
  -- Update target user to admin
  UPDATE profiles 
  SET is_admin = true, updated_at = now()
  WHERE id = target_user_id;
  
  RETURN FOUND;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to demote admin (only existing admins can use this)
CREATE OR REPLACE FUNCTION demote_from_admin(target_user_id uuid)
RETURNS boolean AS $$
BEGIN
  -- Check if current user is admin
  IF NOT is_admin(auth.uid()) THEN
    RAISE EXCEPTION 'Access denied. Admin privileges required.';
  END IF;
  
  -- Prevent demoting yourself
  IF target_user_id = auth.uid() THEN
    RAISE EXCEPTION 'Cannot demote yourself.';
  END IF;
  
  -- Update target user to non-admin
  UPDATE profiles 
  SET is_admin = false, updated_at = now()
  WHERE id = target_user_id;
  
  RETURN FOUND;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ========================================
-- 2. CREATE SAMPLE PRODUCTS
-- ========================================

-- Create sample products for testing
INSERT INTO products (
  id,
  name,
  slug,
  description,
  category,
  base_price,
  base_image_url,
  available_colors,
  available_sizes,
  is_customizable,
  is_active
) VALUES 
(
  gen_random_uuid(),
  'Classic Cotton T-Shirt',
  'classic-cotton-t-shirt',
  'Premium quality 100% cotton t-shirt perfect for custom designs and everyday wear',
  'Apparel',
  25.99,
  '/images/products/tshirt-white.png',
  '["White", "Black", "Red", "Blue", "Gray"]'::jsonb,
  '["XS", "S", "M", "L", "XL", "XXL"]'::jsonb,
  true,
  true
),
(
  gen_random_uuid(),
  'Premium Hoodie',
  'premium-hoodie',
  'Soft fleece hoodie with kangaroo pocket and adjustable drawstring hood',
  'Apparel',
  45.99,
  '/images/products/hoodie-black.png',
  '["Black", "Gray", "Navy", "White"]'::jsonb,
  '["S", "M", "L", "XL", "XXL"]'::jsonb,
  true,
  true
),
(
  gen_random_uuid(),
  'Custom Ceramic Mug',
  'custom-ceramic-mug',
  'High-quality ceramic mug perfect for custom printing and daily use',
  'Gifts',
  12.99,
  '/images/products/mug-white.png',
  '["White", "Black"]'::jsonb,
  '["Standard"]'::jsonb,
  true,
  true
),
(
  gen_random_uuid(),
  'Designer Tote Bag',
  'designer-tote-bag',
  'Eco-friendly canvas tote bag with reinforced handles for heavy items',
  'Gifts',
  18.99,
  '/images/products/tote-bag.png',
  '["Natural", "Black", "Navy"]'::jsonb,
  '["Standard"]'::jsonb,
  true,
  true
),
(
  gen_random_uuid(),
  'Corporate Polo Shirt',
  'corporate-polo-shirt',
  'Professional polo shirt perfect for corporate events and team building',
  'Corporate',
  35.99,
  '/images/products/polo-shirt.png',
  '["White", "Navy", "Black", "Gray"]'::jsonb,
  '["S", "M", "L", "XL", "XXL"]'::jsonb,
  true,
  true
);

-- ========================================
-- 3. CREATE SAMPLE ORDERS
-- ========================================

-- Create sample orders for testing (replace with actual user ID)
INSERT INTO orders (
  id,
  user_id,
  order_number,
  status,
  total_amount,
  shipping_address,
  payment_status,
  payment_id,
  notes
) VALUES 
(
  gen_random_uuid(),
  'YOUR_ADMIN_USER_ID_HERE', -- Replace with actual user ID
  'HS20250119001',
  'pending',
  89.97,
  '{"street": "123 Main St", "city": "New York", "state": "NY", "zip": "10001", "country": "USA"}'::jsonb,
  'pending',
  'pay_123456789',
  'Sample order for testing admin dashboard'
),
(
  gen_random_uuid(),
  'YOUR_ADMIN_USER_ID_HERE', -- Replace with actual user ID
  'HS20250118002',
  'shipped',
  45.99,
  '{"street": "456 Oak Ave", "city": "Los Angeles", "state": "CA", "zip": "90210", "country": "USA"}'::jsonb,
  'completed',
  'pay_987654321',
  'Sample shipped order for testing'
),
(
  gen_random_uuid(),
  'YOUR_ADMIN_USER_ID_HERE', -- Replace with actual user ID
  'HS20250117003',
  'delivered',
  67.98,
  '{"street": "789 Pine St", "city": "Chicago", "state": "IL", "zip": "60601", "country": "USA"}'::jsonb,
  'completed',
  'pay_456789123',
  'Sample delivered order'
);

-- ========================================
-- 4. CREATE SAMPLE DESIGNS
-- ========================================

-- Create sample designs for testing
INSERT INTO designs (
  id,
  user_id,
  name,
  description,
  design_data,
  thumbnail_url,
  is_public,
  tags
) VALUES 
(
  gen_random_uuid(),
  'YOUR_ADMIN_USER_ID_HERE', -- Replace with actual user ID
  'Company Logo Design',
  'Professional logo design for corporate branding',
  '{"type": "logo", "elements": [{"type": "text", "content": "Company Name", "font": "Arial", "size": 24}]}'::jsonb,
  '/images/designs/company-logo.png',
  true,
  '["corporate", "logo", "professional"]'::jsonb
),
(
  gen_random_uuid(),
  'YOUR_ADMIN_USER_ID_HERE', -- Replace with actual user ID
  'Birthday Celebration',
  'Fun birthday design with balloons and confetti',
  '{"type": "celebration", "elements": [{"type": "text", "content": "Happy Birthday!", "font": "Comic Sans", "size": 20}]}'::jsonb,
  '/images/designs/birthday-design.png',
  true,
  '["birthday", "celebration", "fun"]'::jsonb
);

-- ========================================
-- 5. VERIFICATION QUERIES
-- ========================================

-- Check if all tables exist
SELECT 'Tables Check' as check_type, table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN (
  'profiles', 'products', 'designs', 'orders', 
  'order_items', 'cart_items', 'corporate_enquiries', 'coupons'
)
ORDER BY table_name;

-- Verify admin user exists
SELECT 'Admin User Check' as check_type, id, email, full_name, is_admin, created_at 
FROM profiles 
WHERE is_admin = true;

-- Verify admin functions exist
SELECT 'Functions Check' as check_type, routine_name, routine_type 
FROM information_schema.routines 
WHERE routine_schema = 'public' 
AND routine_name IN ('is_admin', 'promote_to_admin', 'demote_from_admin')
ORDER BY routine_name;

-- Check sample data
SELECT 'Products Count' as check_type, COUNT(*) as count FROM products;
SELECT 'Orders Count' as check_type, COUNT(*) as count FROM orders;
SELECT 'Designs Count' as check_type, COUNT(*) as count FROM designs;

-- ========================================
-- SETUP COMPLETE!
-- ========================================

-- Your Supabase database is now fully configured with:
-- ✅ Admin user and security functions
-- ✅ Sample products for testing
-- ✅ Sample orders for dashboard
-- ✅ Sample designs for customization
-- ✅ Proper RLS policies and security

-- Next steps:
-- 1. Replace 'YOUR_ADMIN_USER_ID_HERE' with actual user ID from auth.users
-- 2. Test admin login at http://localhost:3000/admin/login
-- 3. Verify all functionality in the admin dashboard

