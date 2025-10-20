# 🚀 Quick Guide: Apply Custom Email Templates

This is a step-by-step walkthrough to apply your custom branded email templates in Supabase.

---

## 📋 Prerequisites

- ✅ Supabase account with access to your project
- ✅ `EMAIL_TEMPLATES.md` file (contains all templates)
- ⏱️ Estimated time: 10 minutes

---

## 🎯 Step-by-Step Instructions

### Step 1: Access Supabase Dashboard

1. Go to **https://supabase.com/dashboard**
2. Sign in to your account
3. Select your **"Hashtag34"** or **"34stories"** project

### Step 2: Navigate to Email Templates

```
Dashboard Home
  └─ Authentication (left sidebar)
      └─ Email Templates
```

Or use direct navigation:
- Click **"Authentication"** in the left sidebar
- Click **"Email Templates"** in the submenu

---

### Step 3: Configure Each Template

You'll see a list of email templates. Click on each one and apply the custom template:

#### 📧 Template 1: Confirm Signup

1. **Click** on **"Confirm signup"** in the list
2. **Subject line:** Replace with:
   ```
   Welcome to Hashtag34 Stories - Confirm Your Email
   ```
3. **Message body:** 
   - Click the **"HTML"** tab (not plain text)
   - Delete all existing content
   - Copy the **"Confirm Signup Email"** HTML from `EMAIL_TEMPLATES.md`
   - Paste it in
4. **Click "Save"** at the bottom

---

#### 🔐 Template 2: Magic Link

1. **Click** on **"Magic Link"**
2. **Subject line:**
   ```
   Your Login Link for Hashtag34 Stories
   ```
3. **Message body (HTML):**
   - Copy the **"Magic Link Email"** HTML from `EMAIL_TEMPLATES.md`
   - Paste it
4. **Click "Save"**

---

#### 🔒 Template 3: Reset Password

1. **Click** on **"Reset Password"** (or "Change Password")
2. **Subject line:**
   ```
   Reset Your Password - Hashtag34 Stories
   ```
3. **Message body (HTML):**
   - Copy the **"Reset Password Email"** HTML from `EMAIL_TEMPLATES.md`
   - Paste it
4. **Click "Save"**

---

#### 📧 Template 4: Change Email Address

1. **Click** on **"Change Email Address"**
2. **Subject line:**
   ```
   Confirm Your New Email - Hashtag34 Stories
   ```
3. **Message body (HTML):**
   - Copy the **"Change Email Address"** HTML from `EMAIL_TEMPLATES.md`
   - Paste it
4. **Click "Save"**

---

#### 🎉 Template 5: Invite User (Optional)

1. **Click** on **"Invite User"**
2. **Subject line:**
   ```
   You're Invited to Hashtag34 Stories!
   ```
3. **Message body (HTML):**
   - Copy the **"Invite User Email"** HTML from `EMAIL_TEMPLATES.md`
   - Paste it
4. **Click "Save"**

---

## ✅ Verify Your Setup

After applying all templates, verify they're working:

### Test 1: Password Reset Email
```bash
1. Go to: http://localhost:3002/auth/forgot-password
2. Enter your email
3. Check your inbox for the new branded email
```

### Test 2: Signup Confirmation Email
```bash
1. Create a new test account at: http://localhost:3002/auth/signup
2. Check your inbox for the welcome email
```

---

## 🎨 What Changed?

### Before (Default Supabase Email)
- ❌ Plain, generic design
- ❌ No branding
- ❌ Basic styling
- ❌ Confusing layout

### After (Custom Branded Email)
- ✅ Beautiful gradient header with your brand
- ✅ "Wear Your Story. Gift a Moment." tagline
- ✅ Professional button styling
- ✅ Security notices
- ✅ Mobile responsive
- ✅ Matches your website design
- ✅ Clear call-to-action buttons

---

## 🔧 Troubleshooting

### Issue: Email Not Arriving

**Solution:**
1. Check spam/junk folder
2. Verify email in Supabase: Authentication → Users
3. Check Supabase logs: Logs → Auth Logs

### Issue: Template Variables Not Working

**Common variables:**
- `{{ .ConfirmationURL }}` - Action link
- `{{ .Email }}` - User's email
- `{{ .Token }}` - Confirmation token

**Note:** Variables must be wrapped in `{{ }}` with proper spacing

### Issue: Styling Looks Wrong

**Solution:**
1. Make sure you're using the **HTML** tab (not plain text)
2. Copy the entire template including `<!DOCTYPE html>`
3. Don't modify the HTML structure

---

## 📱 Email Preview

Your emails will look like this:

```
┌─────────────────────────────┐
│   Black Gradient Header     │
│      #34 Stories            │
│ Wear Your Story. Gift...    │
├─────────────────────────────┤
│                             │
│  Welcome to Hashtag34! 🎉  │
│                             │
│  Thank you for joining...   │
│                             │
│  [Confirm Email Address]    │  ← Nice gradient button
│                             │
│  What You Can Do:           │
│  ✨ Design custom apparel   │
│  🎨 Upload images          │
│  🎁 Create gifts           │
│                             │
├─────────────────────────────┤
│  Need help? Contact us...   │
│  © 2025 Hashtag34 Stories   │
└─────────────────────────────┘
```

---

## 🎯 Production Checklist

Before going live, ensure:

- [ ] All 5 email templates are updated
- [ ] Test each email flow (signup, reset, etc.)
- [ ] Check emails on mobile devices
- [ ] Verify all links work correctly
- [ ] Update support email if needed
- [ ] Configure custom SMTP (optional)

---

## 🔗 Custom SMTP Setup (Optional)

For better email deliverability in production:

### Navigate to:
```
Authentication → Settings → SMTP Settings
```

### Configure:
- **Enable Custom SMTP:** Toggle ON
- **Sender email:** noreply@hashtag34stories.com
- **Sender name:** Hashtag34 Stories
- **Host:** Your SMTP host (e.g., SendGrid, AWS SES)
- **Port:** 587 (TLS) or 465 (SSL)
- **Username:** Your SMTP username
- **Password:** Your SMTP password

### Recommended SMTP Providers:
1. **SendGrid** (Free tier: 100 emails/day)
2. **AWS SES** (Very cheap, $0.10 per 1,000 emails)
3. **Mailgun** (Free tier: 5,000 emails/month)
4. **Postmark** (Great deliverability)

---

## 📊 Monitor Email Delivery

### Check Email Logs:
```
Dashboard → Logs → Auth Logs
```

Filter by:
- Email sent
- Email delivered
- Email bounced
- Email failed

---

## 🎨 Future Customizations

Want to customize further? You can:

1. **Add Logo Image:**
   ```html
   <img src="https://yourdomain.com/logo.png" 
        alt="Hashtag34 Stories" 
        width="200" />
   ```

2. **Change Colors:**
   - Primary: `#4F46E5` (Indigo)
   - Header: `#000000` (Black)
   - Background: `#F9FAFB` (Light Gray)

3. **Add Social Links:**
   ```html
   <a href="https://instagram.com/hashtag34">Instagram</a>
   <a href="https://facebook.com/hashtag34">Facebook</a>
   ```

4. **Include Promotional Content:**
   - Discount codes
   - New product announcements
   - Seasonal offers

---

## ✨ Benefits of Custom Email Templates

✅ **Professional Brand Image**
- Consistent with your website design
- Builds trust with customers

✅ **Better User Experience**
- Clear instructions
- Easy-to-find buttons
- Mobile-friendly

✅ **Improved Engagement**
- Higher click-through rates
- Better email open rates
- Reduced confusion

✅ **Enhanced Security**
- Clear security notices
- Expiration time warnings
- Action confirmation

---

## 📞 Need Help?

If you encounter issues:

1. **Check Template Variables:**
   - Ensure `{{ .ConfirmationURL }}` is present
   - Don't remove or modify variable syntax

2. **Verify HTML:**
   - Use HTML validator: https://validator.w3.org/
   - Check for unclosed tags

3. **Test on Multiple Clients:**
   - Gmail
   - Outlook
   - Apple Mail
   - Mobile devices

4. **Contact Supabase Support:**
   - Dashboard → Help & Support
   - Community: https://github.com/supabase/supabase/discussions

---

## 🎉 You're Done!

Your custom branded emails are now live! Every user who:
- Signs up
- Resets their password
- Changes their email
- Receives an invite

...will see your beautiful, professional branded emails! 🚀

---

**Pro Tip:** Save screenshots of your configured templates for documentation purposes.

