# Email Verification Redirect Configuration

## ✅ Code Changes Made

The verification email redirect URLs have been updated to use your production domains instead of localhost.

### Files Modified:
1. **`contexts/AuthContext.tsx`** - Updated signup email redirect
2. **`app/auth/login/page.tsx`** - Updated resend verification email redirect

## 🔧 Environment Variable Setup

### Option 1: Using Environment Variable (Recommended)

Add this to your environment variables in Vercel:

```
NEXT_PUBLIC_SITE_URL=https://hashtag34.vercel.app
```

Or if you want to use your custom domain:

```
NEXT_PUBLIC_SITE_URL=https://www.hashtag34.com
```

### Option 2: Default Fallback

If you don't set the environment variable, it will automatically use:
- **Default**: `https://hashtag34.vercel.app/auth/callback`

## 📝 Vercel Environment Variable Setup

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your project **Hashtag34**
3. Go to **Settings** → **Environment Variables**
4. Add new variable:
   - **Key**: `NEXT_PUBLIC_SITE_URL`
   - **Value**: `https://hashtag34.vercel.app` (or your custom domain)
   - **Environments**: Select all (Production, Preview, Development)
5. Click **Save**
6. **Redeploy** your application for changes to take effect

## 🔒 Supabase Configuration Required

### Step 1: Configure Redirect URLs in Supabase

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Select your project
3. Navigate to **Authentication** → **URL Configuration**
4. Under **Redirect URLs**, add both:
   ```
   https://hashtag34.vercel.app/auth/callback
   https://www.hashtag34.com/auth/callback
   ```
5. Also set **Site URL** to: `https://hashtag34.vercel.app` (or your primary domain)
6. Click **Save**

### Step 2: Verify Email Auth Settings

1. In Supabase, go to **Authentication** → **Settings**
2. Under **Email Auth**, ensure:
   - ✅ **Confirm email** is enabled
   - ✅ **Secure email change** is enabled (recommended)
3. Save changes

## 🌐 Custom Domain Setup (www.hashtag34.com)

If you want to use `www.hashtag34.com` as your primary domain:

### Update Environment Variable:
```
NEXT_PUBLIC_SITE_URL=https://www.hashtag34.com
```

### Update Supabase:
1. Set Site URL to: `https://www.hashtag34.com`
2. Add redirect URL: `https://www.hashtag34.com/auth/callback`
3. Keep Vercel URL as backup: `https://hashtag34.vercel.app/auth/callback`

### Configure DNS (if not already done):
1. In your domain provider (e.g., GoDaddy, Namecheap)
2. Add CNAME record:
   - **Host**: `www`
   - **Value**: `cname.vercel-dns.com`
3. In Vercel dashboard:
   - Go to **Settings** → **Domains**
   - Add domain: `www.hashtag34.com`
   - Verify DNS configuration

## 🧪 Testing the Email Redirects

### Test 1: New Signup
1. Go to production site: https://hashtag34.vercel.app/auth/signup
2. Sign up with a new email
3. Check the verification email
4. Click the verification link
5. **Expected**: Should redirect to `https://hashtag34.vercel.app/auth/callback` (NOT localhost)

### Test 2: Resend Verification
1. Try to login without verifying
2. Click "Resend" button
3. Check the new verification email
4. Click the link
5. **Expected**: Should redirect to production URL

### Test 3: Email Link Format
Check the email source/HTML to verify the link format:
```
https://hashtag34.vercel.app/auth/callback?token=...
```

## 🚨 Troubleshooting

### Issue: Still Getting Localhost URLs

**Solution 1**: Clear Supabase Auth Cache
- Old auth sessions might have cached localhost URLs
- Sign out completely
- Clear browser cookies for your domain
- Try signup again

**Solution 2**: Verify Environment Variables
```bash
# In your Vercel deployment logs, check if env var is set
console.log(process.env.NEXT_PUBLIC_SITE_URL)
```

**Solution 3**: Redeploy
- After setting environment variables in Vercel
- Go to **Deployments** tab
- Click ⋯ on latest deployment
- Select **Redeploy**

### Issue: Email Links Not Working

**Possible Causes**:
1. Redirect URL not added to Supabase allowed list
2. Email link expired (24-hour default expiry)
3. CORS issues (check Supabase CORS settings)

**Solution**:
- Verify all redirect URLs are in Supabase
- Request a new verification email
- Check browser console for CORS errors

### Issue: Multiple Domain Confusion

If you're using both `hashtag34.vercel.app` AND `www.hashtag34.com`:

**Best Practice**:
1. Choose ONE primary domain (e.g., `www.hashtag34.com`)
2. Set that as `NEXT_PUBLIC_SITE_URL`
3. Set that as Supabase Site URL
4. Redirect other domain to primary using Vercel redirect rules

## 📋 Verification Checklist

- [ ] Environment variable `NEXT_PUBLIC_SITE_URL` set in Vercel
- [ ] Vercel redeployed after setting env variable
- [ ] Redirect URLs added to Supabase Auth settings
- [ ] Site URL set in Supabase
- [ ] Email confirmation enabled in Supabase
- [ ] Tested signup with new email
- [ ] Verified email link points to production URL
- [ ] Tested resend verification feature
- [ ] Custom domain DNS configured (if using custom domain)

## 🔄 Next Steps

1. ✅ Set `NEXT_PUBLIC_SITE_URL` in Vercel environment variables
2. ✅ Add redirect URLs in Supabase
3. ✅ Redeploy your Vercel application
4. ✅ Test signup flow with a new email
5. ✅ Verify the email link points to correct domain

---

**After completing these steps, all verification emails will redirect to your production domain!**

