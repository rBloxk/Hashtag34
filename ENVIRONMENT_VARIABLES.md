# Environment Variables Setup

This document lists all required environment variables for the Hashtag34 Stories e-commerce platform.

## Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# ============================================
# Supabase Configuration
# ============================================
# Your Supabase project URL
NEXT_PUBLIC_SUPABASE_URL=https://amgkkhncuarkkmwtfrct.supabase.co

# Your Supabase anonymous key (safe to expose in client-side code)
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtZ2traG5jdWFya2ttd3RmcmN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA4MDI4NDksImV4cCI6MjA3NjM3ODg0OX0.MuFFuddby6h9pc1Lwh7p1enmWRkES6r5dUFQhJNjG4I

# Your Supabase service role key (keep this secret! Server-side only)
# Get this from: Supabase Dashboard > Settings > API > service_role key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# ============================================
# Stripe Payment Gateway Configuration
# ============================================
# Your Stripe publishable key (safe to expose in client-side code)
# Test mode: starts with pk_test_
# Live mode: starts with pk_live_
# Get from: https://dashboard.stripe.com/apikeys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here

# Your Stripe secret key (keep this secret! Server-side only)
# Test mode: starts with sk_test_
# Live mode: starts with sk_live_
# Get from: https://dashboard.stripe.com/apikeys
STRIPE_SECRET_KEY=sk_test_your_secret_key_here

# Your Stripe webhook secret (for verifying webhook signatures)
# For local development: Get from Stripe CLI (stripe listen)
# For production: Get from Stripe Dashboard > Webhooks > Add endpoint
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# ============================================
# Application Configuration
# ============================================
# Your application's base URL
# Development: http://localhost:3000
# Production: https://yourdomain.com
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## How to Get Each Key

### Supabase Keys

1. **NEXT_PUBLIC_SUPABASE_URL** & **NEXT_PUBLIC_SUPABASE_ANON_KEY:**
   - Already provided above (from your existing setup)
   
2. **SUPABASE_SERVICE_ROLE_KEY:**
   - Go to: https://supabase.com/dashboard/project/amgkkhncuarkkmwtfrct/settings/api
   - Scroll to "Project API keys"
   - Find "service_role" key (click "Reveal" to see it)
   - ⚠️ **Warning:** This key has full access to your database. Never expose it to clients!

### Stripe Keys

1. **NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY** & **STRIPE_SECRET_KEY:**
   - Go to: https://dashboard.stripe.com/test/apikeys
   - For test mode (development), copy keys that start with `pk_test_` and `sk_test_`
   - For live mode (production), toggle to "View live data" and copy keys starting with `pk_live_` and `sk_live_`

2. **STRIPE_WEBHOOK_SECRET:**
   
   **For Local Development:**
   ```bash
   # Install Stripe CLI
   brew install stripe/stripe-cli/stripe  # macOS
   
   # Login
   stripe login
   
   # Start webhook forwarding
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   
   # Copy the webhook signing secret (whsec_...) that appears
   ```
   
   **For Production:**
   - Go to: https://dashboard.stripe.com/webhooks
   - Click "Add endpoint"
   - Add URL: `https://yourdomain.com/api/webhooks/stripe`
   - Select events: `checkout.session.completed`, `payment_intent.payment_failed`
   - Click "Add endpoint"
   - Copy the "Signing secret"

## Testing Your Setup

After setting up the environment variables:

1. **Restart your development server:**
   ```bash
   npm run dev
   ```

2. **Test Stripe integration:**
   - Go to http://localhost:3000
   - Add items to cart
   - Proceed to checkout
   - Click "Place Order"
   - You should be redirected to Stripe Checkout

3. **Use test cards:**
   - Card: `4242 4242 4242 4242`
   - Expiry: Any future date (e.g., 12/34)
   - CVC: Any 3 digits (e.g., 123)
   - ZIP: Any 5 digits (e.g., 12345)

## Security Best Practices

✅ **DO:**
- Keep `.env.local` in your `.gitignore` (already configured)
- Use different keys for development and production
- Rotate keys regularly
- Use service role key only in server-side code

❌ **DON'T:**
- Never commit `.env.local` to version control
- Never expose secret keys in client-side code
- Never share secret keys in screenshots or documentation
- Never use production keys in development

## Troubleshooting

### "Missing environment variables" error:
- Make sure `.env.local` exists in the project root
- Restart your development server after adding variables
- Check for typos in variable names

### Webhook not receiving events:
- For local dev: Make sure `stripe listen` is running
- Check that `STRIPE_WEBHOOK_SECRET` matches the CLI output
- Verify webhook endpoint URL is correct

### Payment not updating order status:
- Verify `SUPABASE_SERVICE_ROLE_KEY` is set correctly
- Check webhook logs in Stripe Dashboard
- Look for errors in your server console

## Need Help?

- Refer to `STRIPE_SETUP_GUIDE.md` for detailed setup instructions
- Check Stripe documentation: https://stripe.com/docs
- Check Supabase documentation: https://supabase.com/docs


