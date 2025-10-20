# 🚀 Supabase Setup Automation Helper
# This script will open the necessary pages and guide you through setup

echo "🚀 Opening Supabase Setup Pages..."

# Open Supabase login page
echo "🌐 Opening Supabase login page..."
open "https://supabase.com/login" 2>/dev/null || echo "Please manually go to: https://supabase.com/login"

# Open local admin login page
echo "🔧 Opening local admin login page..."
open "http://localhost:3000/admin/login" 2>/dev/null || echo "Please manually go to: http://localhost:3000/admin/login"

echo ""
echo "📋 FOLLOW THESE STEPS:"
echo ""
echo "1. 🌐 SUPABASE LOGIN (opened above):"
echo "   - Sign in with your credentials"
echo "   - Open your 'Hashtag34' project"
echo ""
echo "2. 👤 CREATE ADMIN USER:"
echo "   - Go to Authentication → Users"
echo "   - Click 'Add user'"
echo "   - Email: admin@hashtag34stories.com"
echo "   - Password: admin123"
echo "   - Check 'Email Confirm'"
echo "   - Click 'Create user'"
echo "   - 🔥 COPY THE USER ID"
echo ""
echo "3. 🗄️ RUN DATABASE SETUP:"
echo "   - Go to SQL Editor"
echo "   - Copy contents from 'supabase_setup_complete.sql'"
echo "   - Replace 'YOUR_ADMIN_USER_ID_HERE' with your User ID"
echo "   - Click 'Run'"
echo ""
echo "4. ⚙️ CONFIGURE AUTH:"
echo "   - Go to Authentication → Settings"
echo "   - Site URL: http://localhost:3000"
echo "   - Add redirect URLs:"
echo "     http://localhost:3000/auth/callback"
echo "     http://localhost:3000/auth/error"
echo "     http://localhost:3000/admin"
echo ""
echo "5. 🧪 TEST (admin login page opened above):"
echo "   - Login with: admin@hashtag34stories.com / admin123"
echo "   - Should see admin dashboard!"
echo ""
echo "🎯 Setup should take less than 5 minutes!"

