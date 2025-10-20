# 🚀 Complete Supabase Setup Guide - Hashtag34 Stories

## 📋 **Step-by-Step Supabase Setup**

### **Step 1: Access Supabase Dashboard**
1. Go to [https://supabase.com/login](https://supabase.com/login)
2. Sign in with your credentials
3. Navigate to your "Hashtag34" project

### **Step 2: Get Project Credentials**
1. Go to **Project Settings** → **API**
2. Copy your **Project URL** and **anon public key**
3. Update your `.env.local` file with these credentials

### **Step 3: Run Database Migrations**
Execute the following SQL scripts in your Supabase SQL Editor:

---

## 🗄️ **Database Setup Scripts**

### **Script 1: Create Admin User and Functions**
```sql
-- Create admin user and security functions
-- Run this in your Supabase SQL Editor

-- First, create the admin user profile (replace with actual user ID from auth.users)
-- You'll need to create a user account first through Supabase Auth, then get their ID

-- Create admin profile (replace 'your-admin-user-id' with actual UUID from auth.users)
INSERT INTO profiles (
  id,
  email,
  full_name,
  phone,
  is_admin,
  created_at,
  updated_at
) VALUES (
  'your-admin-user-id-here', -- Replace with actual admin user ID from auth.users
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
```

### **Script 2: Create Sample Products**
```sql
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
  'Classic T-Shirt',
  'classic-t-shirt',
  'Premium quality cotton t-shirt perfect for custom designs',
  'Apparel',
  25.99,
  '/images/products/tshirt-white.png',
  '["White", "Black", "Red", "Blue"]'::jsonb,
  '["XS", "S", "M", "L", "XL", "XXL"]'::jsonb,
  true,
  true
),
(
  gen_random_uuid(),
  'Premium Hoodie',
  'premium-hoodie',
  'Soft fleece hoodie with kangaroo pocket',
  'Apparel',
  45.99,
  '/images/products/hoodie-black.png',
  '["Black", "Gray", "Navy"]'::jsonb,
  '["S", "M", "L", "XL", "XXL"]'::jsonb,
  true,
  true
),
(
  gen_random_uuid(),
  'Custom Mug',
  'custom-mug',
  'Ceramic mug perfect for custom printing',
  'Gifts',
  12.99,
  '/images/products/mug-white.png',
  '["White", "Black"]'::jsonb,
  '["Standard"]'::jsonb,
  true,
  true
);
```

### **Script 3: Create Sample Orders**
```sql
-- Create sample orders for testing
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
  'your-admin-user-id-here', -- Replace with actual user ID
  'HS20250119001',
  'pending',
  89.97,
  '{"street": "123 Main St", "city": "New York", "state": "NY", "zip": "10001", "country": "USA"}'::jsonb,
  'pending',
  'pay_123456789',
  'Sample order for testing'
),
(
  gen_random_uuid(),
  'your-admin-user-id-here', -- Replace with actual user ID
  'HS20250118002',
  'shipped',
  45.99,
  '{"street": "456 Oak Ave", "city": "Los Angeles", "state": "CA", "zip": "90210", "country": "USA"}'::jsonb,
  'completed',
  'pay_987654321',
  'Sample shipped order'
);
```

---

## 🔧 **Environment Configuration**

### **Update .env.local**
Make sure your `.env.local` file has the correct Supabase credentials:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://amgkkhncuarkkmwtfrct.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtZ2traG5jdWFya2ttd3RmcmN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA4MDI4NDksImV4cCI6MjA3NjM3ODg0OX0.MuFFuddby6h9pc1Lwh7p1enmWRkES6r5dUFQhJNjG4I

# Optional: Service Role Key (for admin operations)
# SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

---

## 🔐 **Authentication Setup**

### **Step 1: Configure Auth Settings**
1. Go to **Authentication** → **Settings**
2. Set **Site URL** to: `http://localhost:3000`
3. Add **Redirect URLs**:
   - `http://localhost:3000/auth/callback`
   - `http://localhost:3000/auth/error`
   - `http://localhost:3000/admin`

### **Step 2: Create Admin User**
1. Go to **Authentication** → **Users**
2. Click **"Add user"**
3. Enter:
   - **Email:** `admin@hashtag34stories.com`
   - **Password:** `admin123` (or your preferred password)
   - **Email Confirm:** `true`
4. Click **"Create user"**
5. **Copy the User ID** from the created user
6. **Replace `'your-admin-user-id-here'`** in the SQL scripts above with this User ID

---

## 🗃️ **Database Schema Verification**

### **Check Tables Exist**
Run this query to verify all tables are created:

```sql
-- Check if all tables exist
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN (
  'profiles', 'products', 'designs', 'orders', 
  'order_items', 'cart_items', 'corporate_enquiries', 'coupons'
);
```

### **Check Admin User**
```sql
-- Verify admin user exists
SELECT id, email, full_name, is_admin, created_at 
FROM profiles 
WHERE is_admin = true;
```

### **Check Functions**
```sql
-- Verify admin functions exist
SELECT routine_name, routine_type 
FROM information_schema.routines 
WHERE routine_schema = 'public' 
AND routine_name IN ('is_admin', 'promote_to_admin', 'demote_from_admin');
```

---

## 🧪 **Testing Your Setup**

### **Test 1: Admin Login**
1. Go to `http://localhost:3000/admin/login`
2. Use credentials:
   - **Email:** `admin@hashtag34stories.com`
   - **Password:** `admin123`
3. Should redirect to admin dashboard

### **Test 2: User Management**
1. Go to Admin Dashboard → **Users** tab
2. Should see all users with promote/demote buttons
3. Test promoting a regular user to admin

### **Test 3: Product Management**
1. Go to Admin Dashboard → **Products** tab
2. Should see sample products
3. Test adding/editing products

### **Test 4: Regular User Access**
1. Try accessing `/admin` without admin privileges
2. Should be redirected to home page with "Access denied" message

---

## 🚨 **Troubleshooting**

### **Common Issues:**

#### **"Access denied. Admin privileges required."**
- **Solution:** Check if user exists in `profiles` table with `is_admin = true`
- **Query:** `SELECT * FROM profiles WHERE email = 'admin@hashtag34stories.com';`

#### **"Function does not exist"**
- **Solution:** Run the admin functions SQL script again
- **Check:** Verify functions exist with the verification query above

#### **"Table does not exist"**
- **Solution:** Run the main database schema migration
- **File:** `supabase/migrations/20251018155600_create_ecommerce_schema.sql`

#### **Authentication errors**
- **Solution:** Check redirect URLs in Supabase Auth settings
- **Verify:** Environment variables are correct in `.env.local`

---

## 📞 **Support**

If you encounter any issues:

1. **Check Supabase logs** in the dashboard
2. **Verify database schema** with the verification queries
3. **Test authentication** with the provided test steps
4. **Contact support** if issues persist

---

## 🎯 **Next Steps After Setup**

1. **Create your first admin user** using the steps above
2. **Test all admin functionality** with the test checklist
3. **Add more products** through the admin dashboard
4. **Set up additional admins** through user management
5. **Configure production settings** when ready to deploy

Your Supabase backend will be fully configured and secure! 🚀

