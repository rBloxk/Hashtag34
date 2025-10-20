# 🚀 Complete Supabase Setup - Step by Step

## 📋 **Follow These Steps Exactly**

### **Step 1: Access Supabase Dashboard**
1. Go to [https://supabase.com/login](https://supabase.com/login)
2. Sign in with your credentials
3. Click on your "Hashtag34" project

### **Step 2: Create Admin User**
1. Go to **Authentication** → **Users**
2. Click **"Add user"**
3. Fill in:
   - **Email:** `admin@hashtag34stories.com`
   - **Password:** `admin123` (or your preferred password)
   - **Email Confirm:** Check this box
4. Click **"Create user"**
5. **IMPORTANT:** Copy the **User ID** (it looks like: `12345678-1234-1234-1234-123456789abc`)

### **Step 3: Run Database Setup**
1. Go to **SQL Editor** in your Supabase dashboard
2. Open the file `supabase_setup_complete.sql` from your project
3. **Replace ALL instances of `'YOUR_ADMIN_USER_ID_HERE'`** with the User ID you copied in Step 2
4. Click **"Run"** to execute the entire script

### **Step 4: Configure Authentication Settings**
1. Go to **Authentication** → **Settings**
2. Set **Site URL** to: `http://localhost:3000`
3. In **Redirect URLs**, add these URLs (one per line):
   ```
   http://localhost:3000/auth/callback
   http://localhost:3000/auth/error
   http://localhost:3000/admin
   ```
4. Click **"Save"**

### **Step 5: Verify Setup**
Run these verification queries in SQL Editor:

```sql
-- Check admin user
SELECT id, email, full_name, is_admin FROM profiles WHERE is_admin = true;

-- Check functions
SELECT routine_name FROM information_schema.routines 
WHERE routine_schema = 'public' 
AND routine_name IN ('is_admin', 'promote_to_admin', 'demote_from_admin');

-- Check sample data
SELECT COUNT(*) as products_count FROM products;
SELECT COUNT(*) as orders_count FROM orders;
```

### **Step 6: Test Your Setup**
1. Make sure your development server is running: `npm run dev`
2. Go to `http://localhost:3000/admin/login`
3. Login with:
   - **Email:** `admin@hashtag34stories.com`
   - **Password:** `admin123`
4. You should be redirected to the admin dashboard

---

## 🔧 **Environment Variables Check**

Make sure your `.env.local` file contains:

```env
NEXT_PUBLIC_SUPABASE_URL=https://amgkkhncuarkkmwtfrct.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtZ2traG5jdWFya2ttd3RmcmN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA4MDI4NDksImV4cCI6MjA3NjM3ODg0OX0.MuFFuddby6h9pc1Lwh7p1enmWRkES6r5dUFQhJNjG4I
```

---

## 🧪 **Testing Checklist**

After setup, test these features:

### **Admin Authentication**
- [ ] Admin login works at `/admin/login`
- [ ] Non-admin users cannot access `/admin`
- [ ] Admin dashboard loads correctly
- [ ] User management page works at `/admin/users`

### **User Management**
- [ ] Can view all users in admin dashboard
- [ ] Can promote regular users to admin
- [ ] Can demote admins to regular users
- [ ] Cannot modify own admin status

### **Product Management**
- [ ] Can view sample products
- [ ] Can add new products
- [ ] Can edit existing products
- [ ] Can delete products

### **Order Management**
- [ ] Can view sample orders
- [ ] Can update order status
- [ ] Order statistics display correctly

---

## 🚨 **Troubleshooting**

### **"Access denied. Admin privileges required."**
- **Check:** User exists in `profiles` table with `is_admin = true`
- **Query:** `SELECT * FROM profiles WHERE email = 'admin@hashtag34stories.com';`

### **"Function does not exist"**
- **Solution:** Re-run the setup SQL script
- **Check:** Functions exist with verification query

### **"Table does not exist"**
- **Solution:** Run the main schema migration first
- **File:** `supabase/migrations/20251018155600_create_ecommerce_schema.sql`

### **Authentication errors**
- **Check:** Redirect URLs in Supabase Auth settings
- **Verify:** Environment variables are correct

---

## 🎯 **What You'll Have After Setup**

✅ **Secure admin authentication** with database verification  
✅ **Sample products** for testing the admin dashboard  
✅ **Sample orders** to see order management in action  
✅ **User management system** to promote/demote admins  
✅ **Database security functions** for safe admin operations  
✅ **Row Level Security (RLS)** policies protecting your data  
✅ **Complete admin dashboard** with all features working  

---

## 📞 **Need Help?**

If you encounter any issues:

1. **Check the verification queries** above
2. **Verify your User ID** is correctly replaced in the SQL script
3. **Ensure redirect URLs** are properly configured
4. **Test step by step** using the testing checklist

Your Supabase backend will be fully configured and secure! 🚀

