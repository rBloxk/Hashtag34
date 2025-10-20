# Hashtag34 Stories - Complete Setup Guide

## 🚀 Quick Start for Deployment

### Prerequisites Checklist
- [ ] Supabase project created
- [ ] Stripe account created
- [ ] Vercel account connected to GitHub

---

## 📋 Environment Variables Required

Add these to your Vercel project (Settings → Environment Variables):

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Site URL (for email redirects)
NEXT_PUBLIC_SITE_URL=https://hashtag34.vercel.app

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_... (or pk_live_)
STRIPE_SECRET_KEY=sk_test_... (or sk_live_)
STRIPE_WEBHOOK_SECRET=whsec_...
```

---

## 🔧 Supabase Configuration

### 1. Enable Email Confirmation
1. Go to Supabase Dashboard → **Authentication** → **Settings**
2. Under **Email Auth**, enable **"Confirm email"**
3. Save changes

### 2. Configure Redirect URLs
1. Go to **Authentication** → **URL Configuration**
2. Set **Site URL**: `https://hashtag34.vercel.app`
3. Add **Redirect URLs**:
   - `https://hashtag34.vercel.app/auth/callback`
   - `https://www.hashtag34.com/auth/callback` (if using custom domain)
   - `http://localhost:3000/auth/callback` (for development)

---

## 💳 Stripe Configuration

### 1. Get API Keys
1. Go to https://dashboard.stripe.com/
2. Navigate to **Developers** → **API keys**
3. Copy **Publishable key** (pk_test_...)
4. Copy **Secret key** (sk_test_...)

### 2. Setup Webhook
1. Go to **Developers** → **Webhooks** → **Add endpoint**
2. Endpoint URL: `https://hashtag34.vercel.app/api/webhooks/stripe`
3. Select events:
   - `checkout.session.completed`
   - `payment_intent.payment_failed`
4. Copy **Signing secret** (whsec_...)

---

## 🧪 Testing

### Test Signup & Email Verification
1. Sign up at `/auth/signup`
2. Check email for verification link
3. Click link → should redirect to production URL (not localhost)
4. Try to login before verifying → should see error with "Resend" button

### Test Payment Gateway
1. Add items to cart → Checkout
2. Use Stripe test card: `4242 4242 4242 4242`
3. Expiry: `12/25`, CVC: `123`
4. Should redirect to Stripe checkout
5. Complete payment → should return to success page

---

## 📚 Detailed Documentation

For detailed setup instructions, see:

1. **QUICK_SETUP_CHECKLIST.md** - Step-by-step email verification setup
2. **SIGNUP_VERIFICATION_SETUP.md** - Complete authentication features
3. **EMAIL_REDIRECT_SETUP.md** - Email redirect configuration
4. **STRIPE_CHECKOUT_FIX.md** - Complete Stripe payment setup

---

## 🚀 Deployment Steps

1. ✅ Set all environment variables in Vercel
2. ✅ Configure Supabase (email confirmation + redirect URLs)
3. ✅ Setup Stripe webhook
4. ✅ Push code to GitHub
5. ✅ Vercel auto-deploys
6. ✅ Test signup flow
7. ✅ Test checkout flow

---

## 🔒 Security Notes

- Never commit `.env` or `.env.local` to Git
- Use test keys for development
- Use live keys only in production
- Keep webhook secrets secure
- All environment variables should be in Vercel dashboard only

---

## ✨ Features Implemented

- ✅ Email verification required for signup
- ✅ Duplicate email/phone checking
- ✅ Resend verification email
- ✅ Redirect to login after signup
- ✅ Stripe payment gateway integration
- ✅ Form validation for phone/pincode
- ✅ Success/cancel pages after payment
- ✅ Webhook for order status updates

---

**Need Help?** Check the detailed documentation files listed above!

