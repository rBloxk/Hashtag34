# ✅ Quick Setup Checklist - Email Verification Fix

## What Changed
The verification emails were redirecting to `localhost`. This is now fixed to redirect to your production domain.

---

## 🚀 IMMEDIATE ACTION REQUIRED (3 Steps)

### Step 1: Set Environment Variable in Vercel ⚡ CRITICAL

1. Go to: https://vercel.com/dashboard
2. Click on **Hashtag34** project
3. Go to **Settings** → **Environment Variables**
4. Click **Add New**
5. Enter:
   - **Name**: `NEXT_PUBLIC_SITE_URL`
   - **Value**: `https://hashtag34.vercel.app`
   - **Environment**: Check ALL boxes (Production, Preview, Development)
6. Click **Save**
7. Go to **Deployments** tab
8. Click **...** on latest deployment → **Redeploy** → **Redeploy**

### Step 2: Configure Supabase Redirect URLs

1. Go to: https://supabase.com/dashboard
2. Select your project
3. Go to **Authentication** → **URL Configuration**
4. Set **Site URL**: `https://hashtag34.vercel.app`
5. Under **Redirect URLs**, add these (click "Add URL" for each):
   ```
   https://hashtag34.vercel.app/auth/callback
   https://www.hashtag34.com/auth/callback
   http://localhost:3000/auth/callback
   ```
6. Click **Save**

### Step 3: Enable Email Confirmation in Supabase

1. Still in Supabase Dashboard
2. Go to **Authentication** → **Settings**
3. Scroll to **Email Auth** section
4. Toggle ON: **Enable email confirmations**
5. Click **Save**

---

## ✅ Verification

After completing the steps above:

1. Wait 2-3 minutes for deployment to complete
2. Go to: https://hashtag34.vercel.app/auth/signup
3. Sign up with a NEW test email
4. Check your email inbox
5. Open the verification email
6. **Verify**: The link should say `https://hashtag34.vercel.app/auth/callback` (NOT localhost)
7. Click the link
8. Should redirect to your shop page with "Email verified!" message

---

## 📝 Summary of Code Changes

### Files Modified:
1. ✅ `contexts/AuthContext.tsx` - Uses `NEXT_PUBLIC_SITE_URL` or defaults to Vercel URL
2. ✅ `app/auth/login/page.tsx` - Updated resend verification to use production URL
3. ✅ `app/auth/signup/page.tsx` - Redirects to login after signup
4. ✅ `app/auth/callback/page.tsx` - Creates profile on email verification

### New Features:
- ✅ Duplicate email/phone checking
- ✅ Email verification required before login
- ✅ Automatic redirect to login after signup
- ✅ Resend verification email button
- ✅ Production URL redirects (no more localhost!)

---

## 🎯 If Using Custom Domain (www.hashtag34.com)

If you want to use `www.hashtag34.com` instead of `hashtag34.vercel.app`:

**Change Step 1 to:**
- **Value**: `https://www.hashtag34.com` (instead of vercel.app)

**Update Step 2:**
- Set **Site URL**: `https://www.hashtag34.com`

---

## ❓ Common Issues

**Q: Still getting localhost URLs?**
- Make sure you redeployed after setting environment variable
- Clear browser cache and cookies
- Try in incognito/private mode

**Q: Email links not working?**
- Verify redirect URLs are added in Supabase (Step 2)
- Check if email link expired (24 hour limit)

**Q: Can't login after verification?**
- Make sure "Enable email confirmations" is ON in Supabase
- Try resending verification email from login page

---

## 📚 Detailed Documentation

For more details, see:
- `EMAIL_REDIRECT_SETUP.md` - Complete email redirect configuration guide
- `SIGNUP_VERIFICATION_SETUP.md` - Full feature documentation
- `ENV_VARIABLES_REFERENCE.txt` - Environment variables reference

---

**After completing these 3 steps, commit and push your code changes to GitHub, and Vercel will automatically deploy!**

🎉 All verification emails will now redirect to `https://hashtag34.vercel.app` instead of localhost!

