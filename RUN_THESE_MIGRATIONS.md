# 🚀 Database Migrations Required

You need to run 2 SQL migrations in Supabase to fix the issues:

## 📍 Where to Run

Go to: [Supabase SQL Editor](https://supabase.com/dashboard/project/amgkkhncuarkkmwtfrct/sql/new)

Or manually:
1. Go to https://supabase.com/dashboard
2. Select **Hashtag34** project  
3. Click **SQL Editor** → **New Query**

---

## Migration 1: Add Multiple Images Support to Products

**Issue:** Admin dashboard fails when adding products because `image_urls` column is missing.

**Solution:** Run this SQL:

```sql
-- Add image_urls column to products table for multiple images support
ALTER TABLE products 
ADD COLUMN IF NOT EXISTS image_urls TEXT[] DEFAULT ARRAY[]::TEXT[];

-- Update existing products to have their base_image_url in the image_urls array
UPDATE products 
SET image_urls = ARRAY[base_image_url] 
WHERE base_image_url IS NOT NULL 
  AND base_image_url != '' 
  AND (image_urls IS NULL OR array_length(image_urls, 1) IS NULL);

-- Set default value for products without images
UPDATE products 
SET image_urls = ARRAY['/images/products/placeholder.png'] 
WHERE image_urls IS NULL OR array_length(image_urls, 1) IS NULL;

-- Add comment to the column
COMMENT ON COLUMN products.image_urls IS 'Array of image URLs for the product. First image is typically the primary image.';
```

**Click "Run"** ✅

---

## Migration 2: Add Stripe Payment ID to Orders

**Issue:** Webhook can't update order status after payment because `stripe_payment_id` column is missing.

**Solution:** Run this SQL:

```sql
-- Add stripe_payment_id column to orders table
ALTER TABLE orders ADD COLUMN IF NOT EXISTS stripe_payment_id TEXT;

-- Add index for faster lookups
CREATE INDEX IF NOT EXISTS idx_orders_stripe_payment_id ON orders(stripe_payment_id);

-- Add comment
COMMENT ON COLUMN orders.stripe_payment_id IS 'Stripe payment intent ID for tracking payments';
```

**Click "Run"** ✅

---

## ✅ Verify Migrations

After running both migrations, verify they worked:

```sql
-- Check if columns exist
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'products' 
  AND column_name = 'image_urls';

SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'orders' 
  AND column_name = 'stripe_payment_id';
```

You should see both columns listed.

---

## 🎯 What This Fixes

✅ **Admin Dashboard:**
- Can now add products successfully
- Supports multiple product images
- No more errors when creating products

✅ **Payment System:**
- Stripe webhook can store payment IDs
- Orders automatically update to "paid" status
- Full payment tracking enabled

---

## 📝 Quick Steps Summary

1. Open [Supabase SQL Editor](https://supabase.com/dashboard/project/amgkkhncuarkkmwtfrct/sql/new)
2. Copy Migration 1 SQL → Paste → Run
3. Copy Migration 2 SQL → Paste → Run
4. Done! 🎉

**After this, both your admin dashboard and payment system will work perfectly!**

