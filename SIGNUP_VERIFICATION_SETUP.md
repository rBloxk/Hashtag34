# Signup & Email Verification Setup Guide

## ✅ What Has Been Implemented

### 1. **Duplicate Account Prevention**
- **Email Validation**: Before signup, the system checks if an email already exists in the database
- **Phone Number Validation**: If a phone number is provided, it checks if it's already registered
- **User-Friendly Errors**: Clear error messages when duplicates are detected

### 2. **Email Verification Requirement**
- **Mandatory Email Verification**: Users must verify their email before they can login
- **Verification Email Sent**: Automatically sends verification email upon signup
- **Login Block**: Users cannot login until their email is verified

### 3. **Redirect to Login After Signup**
- After successful signup, users are redirected to the login page after 2 seconds
- A success message is displayed informing them to check their email

### 4. **Resend Verification Email**
- If a user tries to login without verifying, they get an error with a "Resend" button
- They can resend the verification email directly from the login page

### 5. **Profile Creation on Verification**
- When users click the verification link, their profile is automatically created
- Full name and phone number from signup are saved to their profile

## 📝 Files Modified

1. **`contexts/AuthContext.tsx`**
   - Added duplicate email/phone checking in `signUp` function
   - Enabled email verification in signup options
   - Added email verification check in `signIn` function
   - Enhanced error messages for better user experience

2. **`app/auth/signup/page.tsx`**
   - Updated to redirect to login page after successful signup
   - Changed success message to inform users about email verification
   - Loading state persists during redirect

3. **`app/auth/login/page.tsx`**
   - Added email verification check with actionable error message
   - Implemented "Resend Verification Email" feature
   - Enhanced error handling with user-friendly messages

4. **`app/auth/callback/page.tsx`**
   - Updated to create user profile when email is verified
   - Improved success messages
   - Better error handling

## 🔧 Configuration Required

### **1. Set Environment Variable in Vercel (CRITICAL)**

The verification emails need to redirect to your production domain, not localhost.

**In Vercel Dashboard:**
1. Go to https://vercel.com/dashboard
2. Select your project **Hashtag34**
3. Go to **Settings** → **Environment Variables**
4. Add new variable:
   - **Key**: `NEXT_PUBLIC_SITE_URL`
   - **Value**: `https://hashtag34.vercel.app` (or `https://www.hashtag34.com`)
   - **Environments**: Select all (Production, Preview, Development)
5. Click **Save**
6. **Redeploy** your application

### **2. Enable Email Confirmation in Supabase**

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Select your project
3. Navigate to **Authentication** → **Settings**
4. Scroll to **Email Auth**
5. **Enable "Confirm email"** option
6. Save changes

### Email Templates (Optional but Recommended)

Customize your email verification template:
1. Go to **Authentication** → **Email Templates**
2. Select **Confirm signup**
3. Customize the template with your branding
4. Make sure the confirmation link is included: `{{ .ConfirmationURL }}`

### **3. Configure Redirect URLs in Supabase**

Make sure your redirect URLs are configured:
1. Go to **Authentication** → **URL Configuration**
2. Set **Site URL** to: `https://hashtag34.vercel.app` (or your custom domain)
3. Add **Redirect URLs** (add ALL of these):
   - `https://hashtag34.vercel.app/auth/callback`
   - `https://www.hashtag34.com/auth/callback` (if using custom domain)
   - `http://localhost:3000/auth/callback` (for local development)
4. Save changes

## 🔄 User Flow

### Signup Flow
1. User fills out signup form (name, email, phone, password)
2. System checks if email/phone already exists
3. If duplicate found → Show error, prevent signup
4. If unique → Create account and send verification email
5. Show success message: "Please check your email to verify your account"
6. Redirect to login page after 2 seconds

### Login Flow
1. User enters email and password
2. System validates credentials
3. If credentials are wrong → Show error
4. If email not verified → Show error with "Resend" button
5. If verified → Login successful, redirect to shop

### Verification Flow
1. User receives verification email
2. User clicks verification link
3. System verifies email and creates profile
4. User is redirected to shop (logged in automatically)
5. Toast message: "Email verified! You can now login."

## 🧪 Testing

### Test Case 1: New Signup
```
1. Go to /auth/signup
2. Enter new email (e.g., test@example.com)
3. Fill out all fields
4. Click "Sign Up"
5. Expected: Success message + redirect to login
6. Check email inbox for verification link
```

### Test Case 2: Duplicate Email
```
1. Try to signup with same email again
2. Expected: Error "An account with this email already exists"
```

### Test Case 3: Duplicate Phone
```
1. Try to signup with same phone number
2. Expected: Error "An account with this phone number already exists"
```

### Test Case 4: Login Before Verification
```
1. Try to login with unverified account
2. Expected: Error message with "Resend" button
3. Click "Resend"
4. Expected: "Verification email sent!"
```

### Test Case 5: Email Verification
```
1. Click verification link in email
2. Expected: Redirect to shop + "Email verified!" message
3. User should be logged in automatically
```

### Test Case 6: Login After Verification
```
1. Logout
2. Login with verified account
3. Expected: Successful login + redirect to shop
```

## 🚀 Deployment

After deploying to Vercel:

1. Make sure Supabase environment variables are set in Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

2. Verify Supabase email confirmation is enabled

3. Test the entire flow on production

## 🔒 Security Features

- **Password Requirements**: Minimum 6 characters (enforced in frontend and Supabase)
- **Email Verification**: Prevents fake account creation
- **Duplicate Prevention**: Stops multiple accounts with same email/phone
- **Secure Tokens**: Email verification uses secure, time-limited tokens
- **Automatic Logout**: Users are logged out if they try to access without verification

## 📧 Email Provider

Supabase uses its built-in email service for authentication emails. For production:

1. Consider using a custom SMTP provider (SendGrid, Mailgun, etc.)
2. Configure in Supabase Dashboard → **Project Settings** → **Auth** → **SMTP Settings**
3. This improves deliverability and reduces spam flags

## 💡 Tips

- The verification link expires after a set time (default: 24 hours in Supabase)
- Users can request multiple verification emails (rate-limited by Supabase)
- Failed logins are logged by Supabase for security monitoring
- Consider adding a "Verify Email" reminder banner for logged-in but unverified users

## ❓ Troubleshooting

**Issue**: Verification emails not arriving
- Check spam/junk folder
- Verify Supabase email settings
- Check Supabase Auth logs for errors
- Consider setting up custom SMTP

**Issue**: User can login without verification
- Ensure "Confirm email" is enabled in Supabase Auth settings
- Redeploy your application after enabling

**Issue**: Redirect not working after verification
- Check redirect URLs in Supabase Auth settings
- Verify `emailRedirectTo` matches allowed URLs

**Issue**: Profile not created after verification
- Check Supabase logs for database errors
- Verify profiles table has correct schema
- Check RLS policies on profiles table

---

**All features are now fully implemented and ready for testing!**

