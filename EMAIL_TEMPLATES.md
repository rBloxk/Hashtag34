# 📧 Custom Email Templates for Hashtag34 Stories

This guide provides custom-branded email templates for Supabase authentication emails.

## 🎨 Brand Colors
- Primary: #000000 (Black)
- Secondary: #FFFFFF (White)
- Accent: #4F46E5 (Indigo)
- Background: #F9FAFB (Light Gray)

---

## 📝 How to Apply These Templates

### Step 1: Access Supabase Dashboard
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your **Hashtag34** project
3. Navigate to **Authentication** → **Email Templates** (in the left sidebar)

### Step 2: Apply Each Template
For each email type below:
1. Click on the template name (e.g., "Confirm signup")
2. Replace the default content with the custom template provided below
3. Click **Save**

---

## 1️⃣ Confirm Signup Email

**Template Name:** `Confirm signup`

**Subject Line:**
```
Welcome to Hashtag34 Stories - Confirm Your Email
```

**HTML Template:**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Hashtag34 Stories</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #F9FAFB;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #F9FAFB; padding: 40px 20px;">
    <tr>
      <td align="center">
        <!-- Main Container -->
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="background-color: #FFFFFF; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
          
          <!-- Header with Brand -->
          <tr>
            <td style="background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #FFFFFF; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                #34 Stories
              </h1>
              <p style="margin: 8px 0 0; color: #E5E7EB; font-size: 14px; font-weight: 400;">
                Wear Your Story. Gift a Moment.
              </p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="margin: 0 0 20px; color: #111827; font-size: 24px; font-weight: 600;">
                Welcome to Hashtag34 Stories! 🎉
              </h2>
              <p style="margin: 0 0 20px; color: #4B5563; font-size: 16px; line-height: 1.6;">
                Thank you for joining our community! We're excited to help you create personalized apparel that tells your unique story.
              </p>
              <p style="margin: 0 0 30px; color: #4B5563; font-size: 16px; line-height: 1.6;">
                To get started, please confirm your email address by clicking the button below:
              </p>
              
              <!-- CTA Button -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center" style="padding: 10px 0 30px;">
                    <a href="{{ .ConfirmationURL }}" 
                       style="display: inline-block; background: linear-gradient(135deg, #4F46E5 0%, #6366F1 100%); color: #FFFFFF; text-decoration: none; padding: 14px 40px; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 6px rgba(79, 70, 229, 0.3); transition: all 0.3s;">
                      Confirm Email Address
                    </a>
                  </td>
                </tr>
              </table>
              
              <!-- Alternative Link -->
              <div style="background-color: #F9FAFB; border-radius: 8px; padding: 20px; margin: 20px 0;">
                <p style="margin: 0 0 10px; color: #6B7280; font-size: 14px; font-weight: 500;">
                  Button not working? Copy and paste this link:
                </p>
                <p style="margin: 0; color: #4F46E5; font-size: 13px; word-break: break-all; font-family: 'Courier New', monospace;">
                  {{ .ConfirmationURL }}
                </p>
              </div>
              
              <!-- Features -->
              <div style="border-top: 1px solid #E5E7EB; margin: 30px 0; padding-top: 30px;">
                <h3 style="margin: 0 0 20px; color: #111827; font-size: 18px; font-weight: 600;">
                  What You Can Do:
                </h3>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td style="padding: 10px 0;">
                      <span style="color: #4F46E5; font-size: 20px; margin-right: 10px;">✨</span>
                      <span style="color: #4B5563; font-size: 15px;">Design custom apparel with our easy-to-use tools</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0;">
                      <span style="color: #4F46E5; font-size: 20px; margin-right: 10px;">🎨</span>
                      <span style="color: #4B5563; font-size: 15px;">Upload your own images and add personalized text</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0;">
                      <span style="color: #4F46E5; font-size: 20px; margin-right: 10px;">🎁</span>
                      <span style="color: #4B5563; font-size: 15px;">Create meaningful gifts for loved ones</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0;">
                      <span style="color: #4F46E5; font-size: 20px; margin-right: 10px;">🚚</span>
                      <span style="color: #4B5563; font-size: 15px;">Fast and reliable delivery to your doorstep</span>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #F9FAFB; padding: 30px; text-align: center; border-top: 1px solid #E5E7EB;">
              <p style="margin: 0 0 10px; color: #6B7280; font-size: 14px;">
                Need help? Contact us at 
                <a href="mailto:support@hashtag34stories.com" style="color: #4F46E5; text-decoration: none;">support@hashtag34stories.com</a>
              </p>
              <p style="margin: 10px 0 0; color: #9CA3AF; font-size: 12px;">
                © 2025 Hashtag34 Stories. All rights reserved.
              </p>
              <p style="margin: 10px 0 0; color: #9CA3AF; font-size: 12px;">
                This email was sent to {{ .Email }}
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

---

## 2️⃣ Magic Link Email

**Template Name:** `Magic Link`

**Subject Line:**
```
Your Login Link for Hashtag34 Stories
```

**HTML Template:**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login to Hashtag34 Stories</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #F9FAFB;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #F9FAFB; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="background-color: #FFFFFF; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
          
          <tr>
            <td style="background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #FFFFFF; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                #34 Stories
              </h1>
              <p style="margin: 8px 0 0; color: #E5E7EB; font-size: 14px; font-weight: 400;">
                Wear Your Story. Gift a Moment.
              </p>
            </td>
          </tr>
          
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="margin: 0 0 20px; color: #111827; font-size: 24px; font-weight: 600;">
                Your Login Link 🔐
              </h2>
              <p style="margin: 0 0 20px; color: #4B5563; font-size: 16px; line-height: 1.6;">
                Click the button below to securely log in to your Hashtag34 Stories account:
              </p>
              
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center" style="padding: 10px 0 30px;">
                    <a href="{{ .ConfirmationURL }}" 
                       style="display: inline-block; background: linear-gradient(135deg, #4F46E5 0%, #6366F1 100%); color: #FFFFFF; text-decoration: none; padding: 14px 40px; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 6px rgba(79, 70, 229, 0.3);">
                      Log In to Account
                    </a>
                  </td>
                </tr>
              </table>
              
              <div style="background-color: #FEF3C7; border-left: 4px solid #F59E0B; padding: 15px; margin: 20px 0; border-radius: 4px;">
                <p style="margin: 0; color: #92400E; font-size: 14px;">
                  ⚠️ <strong>Security Notice:</strong> This link expires in 1 hour. If you didn't request this, please ignore this email.
                </p>
              </div>
              
              <div style="background-color: #F9FAFB; border-radius: 8px; padding: 20px; margin: 20px 0;">
                <p style="margin: 0 0 10px; color: #6B7280; font-size: 14px; font-weight: 500;">
                  Alternative link:
                </p>
                <p style="margin: 0; color: #4F46E5; font-size: 13px; word-break: break-all; font-family: 'Courier New', monospace;">
                  {{ .ConfirmationURL }}
                </p>
              </div>
            </td>
          </tr>
          
          <tr>
            <td style="background-color: #F9FAFB; padding: 30px; text-align: center; border-top: 1px solid #E5E7EB;">
              <p style="margin: 0 0 10px; color: #6B7280; font-size: 14px;">
                Need help? Contact us at 
                <a href="mailto:support@hashtag34stories.com" style="color: #4F46E5; text-decoration: none;">support@hashtag34stories.com</a>
              </p>
              <p style="margin: 10px 0 0; color: #9CA3AF; font-size: 12px;">
                © 2025 Hashtag34 Stories. All rights reserved.
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

---

## 3️⃣ Reset Password Email

**Template Name:** `Reset Password`

**Subject Line:**
```
Reset Your Password - Hashtag34 Stories
```

**HTML Template:**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #F9FAFB;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #F9FAFB; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="background-color: #FFFFFF; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
          
          <tr>
            <td style="background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #FFFFFF; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                #34 Stories
              </h1>
              <p style="margin: 8px 0 0; color: #E5E7EB; font-size: 14px; font-weight: 400;">
                Wear Your Story. Gift a Moment.
              </p>
            </td>
          </tr>
          
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="margin: 0 0 20px; color: #111827; font-size: 24px; font-weight: 600;">
                Reset Your Password 🔒
              </h2>
              <p style="margin: 0 0 20px; color: #4B5563; font-size: 16px; line-height: 1.6;">
                We received a request to reset your password for your Hashtag34 Stories account. Click the button below to create a new password:
              </p>
              
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center" style="padding: 10px 0 30px;">
                    <a href="{{ .ConfirmationURL }}" 
                       style="display: inline-block; background: linear-gradient(135deg, #4F46E5 0%, #6366F1 100%); color: #FFFFFF; text-decoration: none; padding: 14px 40px; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 6px rgba(79, 70, 229, 0.3);">
                      Reset Password
                    </a>
                  </td>
                </tr>
              </table>
              
              <div style="background-color: #FEF2F2; border-left: 4px solid #EF4444; padding: 15px; margin: 20px 0; border-radius: 4px;">
                <p style="margin: 0 0 10px; color: #991B1B; font-size: 14px; font-weight: 600;">
                  ⚠️ Important Security Information:
                </p>
                <ul style="margin: 0; padding-left: 20px; color: #7F1D1D; font-size: 14px; line-height: 1.6;">
                  <li>This link expires in 1 hour</li>
                  <li>If you didn't request this, please ignore this email</li>
                  <li>Your password won't change unless you click the link above</li>
                </ul>
              </div>
              
              <div style="background-color: #F9FAFB; border-radius: 8px; padding: 20px; margin: 20px 0;">
                <p style="margin: 0 0 10px; color: #6B7280; font-size: 14px; font-weight: 500;">
                  Button not working? Copy and paste this link:
                </p>
                <p style="margin: 0; color: #4F46E5; font-size: 13px; word-break: break-all; font-family: 'Courier New', monospace;">
                  {{ .ConfirmationURL }}
                </p>
              </div>
              
              <div style="border-top: 1px solid #E5E7EB; margin: 30px 0; padding-top: 20px;">
                <p style="margin: 0; color: #6B7280; font-size: 14px; line-height: 1.6;">
                  <strong>Tips for creating a strong password:</strong>
                </p>
                <ul style="margin: 10px 0 0; padding-left: 20px; color: #6B7280; font-size: 14px; line-height: 1.8;">
                  <li>Use at least 8 characters</li>
                  <li>Mix uppercase and lowercase letters</li>
                  <li>Include numbers and special characters</li>
                  <li>Avoid common words or personal information</li>
                </ul>
              </div>
            </td>
          </tr>
          
          <tr>
            <td style="background-color: #F9FAFB; padding: 30px; text-align: center; border-top: 1px solid #E5E7EB;">
              <p style="margin: 0 0 10px; color: #6B7280; font-size: 14px;">
                Need help? Contact us at 
                <a href="mailto:support@hashtag34stories.com" style="color: #4F46E5; text-decoration: none;">support@hashtag34stories.com</a>
              </p>
              <p style="margin: 10px 0 0; color: #9CA3AF; font-size: 12px;">
                © 2025 Hashtag34 Stories. All rights reserved.
              </p>
              <p style="margin: 10px 0 0; color: #9CA3AF; font-size: 12px;">
                This email was sent to {{ .Email }}
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

---

## 4️⃣ Change Email Address

**Template Name:** `Change Email Address`

**Subject Line:**
```
Confirm Your New Email - Hashtag34 Stories
```

**HTML Template:**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirm Email Change</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #F9FAFB;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #F9FAFB; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="background-color: #FFFFFF; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
          
          <tr>
            <td style="background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #FFFFFF; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                #34 Stories
              </h1>
              <p style="margin: 8px 0 0; color: #E5E7EB; font-size: 14px; font-weight: 400;">
                Wear Your Story. Gift a Moment.
              </p>
            </td>
          </tr>
          
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="margin: 0 0 20px; color: #111827; font-size: 24px; font-weight: 600;">
                Confirm Email Change 📧
              </h2>
              <p style="margin: 0 0 20px; color: #4B5563; font-size: 16px; line-height: 1.6;">
                You recently requested to change the email address for your Hashtag34 Stories account. Click the button below to confirm this change:
              </p>
              
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center" style="padding: 10px 0 30px;">
                    <a href="{{ .ConfirmationURL }}" 
                       style="display: inline-block; background: linear-gradient(135deg, #4F46E5 0%, #6366F1 100%); color: #FFFFFF; text-decoration: none; padding: 14px 40px; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 6px rgba(79, 70, 229, 0.3);">
                      Confirm Email Change
                    </a>
                  </td>
                </tr>
              </table>
              
              <div style="background-color: #DBEAFE; border-left: 4px solid #3B82F6; padding: 15px; margin: 20px 0; border-radius: 4px;">
                <p style="margin: 0; color: #1E3A8A; font-size: 14px;">
                  ℹ️ <strong>Note:</strong> After confirming, you'll use this new email address to log in to your account.
                </p>
              </div>
              
              <div style="background-color: #F9FAFB; border-radius: 8px; padding: 20px; margin: 20px 0;">
                <p style="margin: 0 0 10px; color: #6B7280; font-size: 14px; font-weight: 500;">
                  Alternative link:
                </p>
                <p style="margin: 0; color: #4F46E5; font-size: 13px; word-break: break-all; font-family: 'Courier New', monospace;">
                  {{ .ConfirmationURL }}
                </p>
              </div>
              
              <p style="margin: 20px 0 0; color: #6B7280; font-size: 14px; line-height: 1.6;">
                If you didn't make this request, please contact our support team immediately at 
                <a href="mailto:support@hashtag34stories.com" style="color: #4F46E5; text-decoration: none;">support@hashtag34stories.com</a>
              </p>
            </td>
          </tr>
          
          <tr>
            <td style="background-color: #F9FAFB; padding: 30px; text-align: center; border-top: 1px solid #E5E7EB;">
              <p style="margin: 0 0 10px; color: #6B7280; font-size: 14px;">
                Need help? Contact us at 
                <a href="mailto:support@hashtag34stories.com" style="color: #4F46E5; text-decoration: none;">support@hashtag34stories.com</a>
              </p>
              <p style="margin: 10px 0 0; color: #9CA3AF; font-size: 12px;">
                © 2025 Hashtag34 Stories. All rights reserved.
              </p>
              <p style="margin: 10px 0 0; color: #9CA3AF; font-size: 12px;">
                This email was sent to {{ .Email }}
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

---

## 5️⃣ Invite User Email

**Template Name:** `Invite User`

**Subject Line:**
```
You're Invited to Hashtag34 Stories!
```

**HTML Template:**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>You're Invited!</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #F9FAFB;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #F9FAFB; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="background-color: #FFFFFF; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
          
          <tr>
            <td style="background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #FFFFFF; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                #34 Stories
              </h1>
              <p style="margin: 8px 0 0; color: #E5E7EB; font-size: 14px; font-weight: 400;">
                Wear Your Story. Gift a Moment.
              </p>
            </td>
          </tr>
          
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="margin: 0 0 20px; color: #111827; font-size: 24px; font-weight: 600;">
                You're Invited! 🎉
              </h2>
              <p style="margin: 0 0 20px; color: #4B5563; font-size: 16px; line-height: 1.6;">
                You've been invited to join Hashtag34 Stories! Create personalized apparel and gifts that tell your unique story.
              </p>
              
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center" style="padding: 10px 0 30px;">
                    <a href="{{ .ConfirmationURL }}" 
                       style="display: inline-block; background: linear-gradient(135deg, #4F46E5 0%, #6366F1 100%); color: #FFFFFF; text-decoration: none; padding: 14px 40px; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 6px rgba(79, 70, 229, 0.3);">
                      Accept Invitation
                    </a>
                  </td>
                </tr>
              </table>
              
              <div style="background-color: #F9FAFB; border-radius: 8px; padding: 20px; margin: 20px 0;">
                <p style="margin: 0 0 10px; color: #6B7280; font-size: 14px; font-weight: 500;">
                  Alternative link:
                </p>
                <p style="margin: 0; color: #4F46E5; font-size: 13px; word-break: break-all; font-family: 'Courier New', monospace;">
                  {{ .ConfirmationURL }}
                </p>
              </div>
            </td>
          </tr>
          
          <tr>
            <td style="background-color: #F9FAFB; padding: 30px; text-align: center; border-top: 1px solid #E5E7EB;">
              <p style="margin: 0 0 10px; color: #6B7280; font-size: 14px;">
                Need help? Contact us at 
                <a href="mailto:support@hashtag34stories.com" style="color: #4F46E5; text-decoration: none;">support@hashtag34stories.com</a>
              </p>
              <p style="margin: 10px 0 0; color: #9CA3AF; font-size: 12px;">
                © 2025 Hashtag34 Stories. All rights reserved.
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

---

## 🎯 Testing Your Email Templates

After applying the templates:

1. **Test Signup Email:**
   - Register a new user account
   - Check your email inbox

2. **Test Password Reset:**
   - Go to `/auth/forgot-password`
   - Enter your email
   - Check your inbox

3. **Check Spam Folder:**
   - Sometimes emails land in spam
   - Mark as "Not Spam" if this happens

---

## 📱 Mobile Responsive

All templates are fully mobile-responsive and will look great on:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Desktops
- 🖥️ Large screens

---

## 🎨 Customization Tips

You can customize these further by:
1. Adding your logo image URL (replace the text logo)
2. Changing colors to match your brand
3. Adding social media links in the footer
4. Including promotional content

---

## 🔗 Useful Links

- [Supabase Email Templates Documentation](https://supabase.com/docs/guides/auth/auth-email-templates)
- [Email Template Variables](https://supabase.com/docs/guides/auth/auth-email-templates#template-variables)

---

## 📝 Available Template Variables

Supabase provides these variables for use in templates:

- `{{ .ConfirmationURL }}` - The confirmation/action URL
- `{{ .Token }}` - The confirmation token
- `{{ .TokenHash }}` - Hashed token
- `{{ .SiteURL }}` - Your site URL
- `{{ .Email }}` - The user's email address

---

## ✅ Next Steps

1. Apply all templates in Supabase Dashboard
2. Test each email flow
3. Verify emails look good on mobile and desktop
4. Configure custom SMTP (optional, for production)

---

Need help applying these templates? Feel free to reach out!

