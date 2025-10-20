# 🚀 Quick Stripe Setup - 5 Minutes

## ⚡ Fast Track to Get Payment Working

### Step 1: Get Stripe Test Keys (2 minutes)

1. **Sign up/Login to Stripe:**
   - Go to: https://dashboard.stripe.com/register
   - Use your email (it's free, no credit card needed for testing)

2. **Skip the onboarding** (click "Skip for now" if prompted)

3. **Get your test keys:**
   - You'll be automatically in "Test mode" (look for the toggle at top)
   - Go to: https://dashboard.stripe.com/test/apikeys
   - You'll see two keys:
     - **Publishable key** (starts with `pk_test_`)
     - **Secret key** (click "Reveal test key" to see it, starts with `sk_test_`)

### Step 2: Update `.env.local` (1 minute)

Open `/Volumes/My Passport/GitHub/34stories/.env.local` and replace:

```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_ACTUAL_KEY_HERE
STRIPE_SECRET_KEY=sk_test_YOUR_ACTUAL_KEY_HERE
```

**Note:** Don't change `STRIPE_WEBHOOK_SECRET` yet - we'll handle that separately.

### Step 3: Restart Server (30 seconds)

```bash
# In your terminal, stop the server (Ctrl+C) and restart:
npm run dev
```

### Step 4: Test Payment! (1 minute)

1. Go to: http://localhost:3000/checkout
2. Fill in the address (or select your saved address)
3. Click **"Place Order"**
4. You'll be redirected to Stripe's payment page
5. Use test card: **4242 4242 4242 4242**
   - Expiry: Any future date (e.g., `12/34`)
   - CVC: Any 3 digits (e.g., `123`)
   - ZIP: Any 5 digits (e.g., `12345`)
6. Click "Pay"
7. You'll be redirected back to success page! 🎉

### ⚠️ Known Issue: Webhook Not Set Up Yet

**What works:**
- ✅ Payment processing
- ✅ Order creation
- ✅ Stripe checkout page
- ✅ Success/cancel pages

**What doesn't work yet:**
- ❌ Order status won't auto-update to "confirmed" after payment
- ❌ Payment status won't auto-update to "paid"

**Why:** The webhook (which tells your app when payment succeeds) isn't set up yet.

### Step 5: Setup Webhook (Optional - 3 minutes)

If you want the order status to automatically update:

```bash
# Install Stripe CLI (one-time)
brew install stripe/stripe-cli/stripe

# Login
stripe login

# Start webhook listener (keep this running in a separate terminal)
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

This will show you a webhook secret like `whsec_...`

Copy it and update `.env.local`:
```bash
STRIPE_WEBHOOK_SECRET=whsec_YOUR_SECRET_HERE
```

Restart your server again.

## 🧪 More Test Cards

| Card Number | Result |
|------------|--------|
| 4242 4242 4242 4242 | ✅ Success |
| 4000 0000 0000 0002 | ❌ Declined |
| 4000 0000 0000 9995 | ❌ Insufficient funds |

## 🎯 What You Just Built

✅ Full Stripe payment integration
✅ Secure checkout flow
✅ Order tracking
✅ Payment success/cancel pages
✅ Cart automatically cleared after payment
✅ INR currency support
✅ Dynamic shipping charges

## 🆘 Troubleshooting

**"Cannot find module '@stripe/stripe-js'"**
- Run: `npm install stripe @stripe/stripe-js`

**Still seeing "Payment integration coming soon"**
- Make sure you restarted the server after updating `.env.local`
- Check that the keys don't have extra spaces

**Payment page shows error**
- Check browser console for errors
- Verify your Stripe keys are correct
- Make sure keys start with `pk_test_` and `sk_test_`

## 📚 Full Documentation

For complete setup including webhooks, production deployment, etc:
- See: `STRIPE_SETUP_GUIDE.md`
- See: `ENVIRONMENT_VARIABLES.md`

---

**That's it! You now have a working payment system! 🎉**

