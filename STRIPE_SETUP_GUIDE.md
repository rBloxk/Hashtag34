# Stripe Payment Gateway Setup Guide

This guide will help you set up Stripe payment gateway for the Hashtag34 Stories e-commerce platform.

## Prerequisites

1. A Stripe account (sign up at https://stripe.com)
2. Node.js and npm installed
3. The project already running locally

## Step 1: Get Stripe API Keys

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com)
2. Click on **Developers** in the left sidebar
3. Click on **API keys**
4. You'll see two keys:
   - **Publishable key** (starts with `pk_test_` for test mode)
   - **Secret key** (starts with `sk_test_` for test mode) - Click "Reveal test key"

## Step 2: Set Up Environment Variables

Add the following environment variables to your `.env.local` file:

```bash
# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Application URL (for redirects)
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Existing Supabase variables
NEXT_PUBLIC_SUPABASE_URL=https://amgkkhncuarkkmwtfrct.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_existing_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## Step 3: Set Up Stripe Webhook (Important!)

Webhooks allow Stripe to notify your application when payment events occur.

### For Local Development (using Stripe CLI):

1. **Install Stripe CLI:**
   ```bash
   # On macOS
   brew install stripe/stripe-cli/stripe
   
   # On Windows (with Scoop)
   scoop install stripe
   
   # Or download from: https://stripe.com/docs/stripe-cli
   ```

2. **Login to Stripe CLI:**
   ```bash
   stripe login
   ```

3. **Forward webhooks to your local server:**
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```

4. **Copy the webhook signing secret:**
   - The CLI will display a webhook signing secret (starts with `whsec_`)
   - Add it to your `.env.local` as `STRIPE_WEBHOOK_SECRET`

5. **Keep the CLI running** while testing payments locally

### For Production:

1. Go to [Stripe Dashboard > Developers > Webhooks](https://dashboard.stripe.com/webhooks)
2. Click **Add endpoint**
3. Enter your endpoint URL: `https://yourdomain.com/api/webhooks/stripe`
4. Select events to listen to:
   - `checkout.session.completed`
   - `payment_intent.payment_failed`
5. Click **Add endpoint**
6. Copy the **Signing secret** and add it to your production environment variables

## Step 4: Update Supabase Service Role Key

The webhook needs elevated permissions to update order status:

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to **Settings > API**
4. Copy the **service_role** key (secret)
5. Add it to `.env.local`:
   ```bash
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
   ```

## Step 5: Add stripe_payment_id Column to Orders Table

Run this SQL in your Supabase SQL Editor:

```sql
-- Add stripe_payment_id column to orders table
ALTER TABLE orders ADD COLUMN IF NOT EXISTS stripe_payment_id TEXT;

-- Add index for faster lookups
CREATE INDEX IF NOT EXISTS idx_orders_stripe_payment_id ON orders(stripe_payment_id);
```

## Step 6: Restart Your Development Server

```bash
# Stop the current server (Ctrl+C)
npm run dev
```

## Step 7: Test the Payment Flow

1. **Add items to cart:**
   - Navigate to http://localhost:3000/shop
   - Add products to your cart

2. **Go to checkout:**
   - Click on the cart icon
   - Click "Proceed to Checkout"

3. **Fill in shipping information:**
   - Enter your address details
   - Click "Place Order"

4. **Complete payment on Stripe:**
   - You'll be redirected to Stripe Checkout
   - Use test card: `4242 4242 4242 4242`
   - Use any future expiry date (e.g., 12/34)
   - Use any 3-digit CVC (e.g., 123)
   - Use any 5-digit ZIP code (e.g., 12345)

5. **Verify success:**
   - After payment, you'll be redirected to the success page
   - Check your orders at http://localhost:3000/orders
   - Verify the payment status is "Paid" and order status is "Confirmed"

## Test Card Numbers

Stripe provides test cards for different scenarios:

| Card Number | Description |
|------------|-------------|
| 4242 4242 4242 4242 | Successful payment |
| 4000 0000 0000 0002 | Card declined |
| 4000 0000 0000 9995 | Insufficient funds |
| 4000 0025 0000 3155 | Requires authentication (3D Secure 2) |

## Troubleshooting

### Webhook not working:
- Make sure Stripe CLI is running (`stripe listen --forward-to localhost:3000/api/webhooks/stripe`)
- Check that `STRIPE_WEBHOOK_SECRET` is set correctly
- Check the terminal logs for webhook events

### Payment not updating order status:
- Verify `SUPABASE_SERVICE_ROLE_KEY` is set
- Check the webhook logs in Stripe Dashboard
- Look for errors in your server logs

### Redirect URLs not working:
- Ensure `NEXT_PUBLIC_APP_URL` is set correctly
- For production, update it to your domain (e.g., `https://yourdomain.com`)

## Going Live

When you're ready to accept real payments:

1. **Activate your Stripe account:**
   - Complete business verification in Stripe Dashboard
   - Add banking information for payouts

2. **Switch to live mode:**
   - In Stripe Dashboard, toggle from "Test mode" to "Live mode"
   - Get new API keys (they'll start with `pk_live_` and `sk_live_`)
   - Update your environment variables with live keys

3. **Set up production webhooks:**
   - Add webhook endpoint with your production URL
   - Update `STRIPE_WEBHOOK_SECRET` with the live webhook secret

4. **Update environment variables in production:**
   ```bash
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxx
   STRIPE_SECRET_KEY=sk_live_xxx
   STRIPE_WEBHOOK_SECRET=whsec_live_xxx
   NEXT_PUBLIC_APP_URL=https://yourdomain.com
   ```

## Security Notes

- **Never** commit `.env.local` to version control
- Keep your secret keys secure
- Use different keys for test and production
- Regularly rotate your API keys
- Monitor Stripe Dashboard for suspicious activity

## Support

- Stripe Documentation: https://stripe.com/docs
- Stripe Support: https://support.stripe.com
- Test your integration: https://stripe.com/docs/testing

## Features Implemented

✅ Stripe Checkout integration
✅ Payment success page
✅ Payment cancellation handling
✅ Webhook for automatic order status updates
✅ INR currency support
✅ Shipping charges included in payment
✅ Discount/coupon support
✅ Gift wrap option
✅ Order tracking with payment status
✅ Secure payment processing

---

**Note:** This integration uses Stripe Checkout (hosted payment page), which is PCI compliant and handles all payment details securely.


