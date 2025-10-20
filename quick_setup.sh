# 🚀 Automated Supabase Setup Script
# This script will help you set up everything quickly

echo "🚀 Starting Supabase Setup for Hashtag34 Stories..."
echo ""

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "❌ .env.local not found. Creating it now..."
    cat > .env.local << 'EOF'
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://amgkkhncuarkkmwtfrct.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtZ2traG5jdWFya2ttd3RmcmN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA4MDI4NDksImV4cCI6MjA3NjM3ODg0OX0.MuFFuddby6h9pc1Lwh7p1enmWRkES6r5dUFQhJNjG4I
EOF
    echo "✅ .env.local created!"
else
    echo "✅ .env.local already exists"
fi

echo ""
echo "📋 SUPABASE SETUP CHECKLIST:"
echo ""
echo "1. 🌐 Go to: https://supabase.com/login"
echo "2. 🔑 Sign in with your credentials"
echo "3. 📁 Open your 'Hashtag34' project"
echo ""
echo "4. 👤 CREATE ADMIN USER:"
echo "   - Go to Authentication → Users"
echo "   - Click 'Add user'"
echo "   - Email: admin@hashtag34stories.com"
echo "   - Password: admin123"
echo "   - Check 'Email Confirm'"
echo "   - Click 'Create user'"
echo "   - 🔥 COPY THE USER ID (looks like: 12345678-1234-1234-1234-123456789abc)"
echo ""
echo "5. 🗄️ RUN DATABASE SETUP:"
echo "   - Go to SQL Editor"
echo "   - Copy the contents of 'supabase_setup_complete.sql'"
echo "   - Replace 'YOUR_ADMIN_USER_ID_HERE' with your actual User ID"
echo "   - Click 'Run'"
echo ""
echo "6. ⚙️ CONFIGURE AUTHENTICATION:"
echo "   - Go to Authentication → Settings"
echo "   - Site URL: http://localhost:3000"
echo "   - Redirect URLs (add these one per line):"
echo "     http://localhost:3000/auth/callback"
echo "     http://localhost:3000/auth/error"
echo "     http://localhost:3000/admin"
echo "   - Click 'Save'"
echo ""
echo "7. 🧪 TEST YOUR SETUP:"
echo "   - Go to: http://localhost:3000/admin/login"
echo "   - Login with: admin@hashtag34stories.com / admin123"
echo "   - You should see the admin dashboard!"
echo ""

# Check if dev server is running
if curl -s http://localhost:3000 > /dev/null 2>&1; then
    echo "✅ Development server is running at http://localhost:3000"
else
    echo "⚠️  Development server not running. Start it with: npm run dev"
fi

echo ""
echo "🎯 QUICK SETUP SUMMARY:"
echo "1. Login to Supabase → Create admin user → Copy User ID"
echo "2. SQL Editor → Run setup script → Replace User ID"
echo "3. Auth Settings → Add redirect URLs"
echo "4. Test admin login at http://localhost:3000/admin/login"
echo ""
echo "📁 Files ready for you:"
echo "   - supabase_setup_complete.sql (database setup)"
echo "   - SUPABASE_SETUP_STEPS.md (detailed guide)"
echo "   - README_SUPABASE_SETUP.md (quick reference)"
echo ""
echo "🚀 Ready to go! Follow the checklist above."

