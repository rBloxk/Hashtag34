# 🧪 Supabase Setup Verification Script
# Run this after completing the setup to verify everything works

echo "🧪 Verifying Supabase Setup..."
echo ""

# Check if .env.local exists
if [ -f ".env.local" ]; then
    echo "✅ .env.local file exists"
else
    echo "❌ .env.local file missing"
fi

# Check if dev server is running
if curl -s http://localhost:3000 > /dev/null 2>&1; then
    echo "✅ Development server is running"
else
    echo "❌ Development server not running. Start with: npm run dev"
fi

# Check if admin login page loads
if curl -s http://localhost:3000/admin/login | grep -q "Admin Login"; then
    echo "✅ Admin login page loads correctly"
else
    echo "❌ Admin login page not loading properly"
fi

# Check if main page loads
if curl -s http://localhost:3000 | grep -q "Hashtag34"; then
    echo "✅ Main application loads correctly"
else
    echo "❌ Main application not loading properly"
fi

echo ""
echo "📋 MANUAL VERIFICATION STEPS:"
echo ""
echo "1. 🌐 Go to: http://localhost:3000/admin/login"
echo "2. 🔑 Try logging in with:"
echo "   - Email: admin@hashtag34stories.com"
echo "   - Password: admin123"
echo ""
echo "3. ✅ EXPECTED RESULTS:"
echo "   - Should redirect to admin dashboard"
echo "   - Should see statistics cards"
echo "   - Should see tabs: Products, Orders, Inventory, Users, Analytics"
echo ""
echo "4. 🚨 IF LOGIN FAILS:"
echo "   - Check if admin user exists in Supabase"
echo "   - Verify User ID was replaced in SQL script"
echo "   - Check redirect URLs in Supabase Auth settings"
echo ""
echo "5. 🎯 SUCCESS INDICATORS:"
echo "   - Admin dashboard loads"
echo "   - Can see sample products"
echo "   - Can see sample orders"
echo "   - User management works"
echo ""
echo "📞 NEED HELP?"
echo "   - Check SUPABASE_SETUP_STEPS.md for detailed guide"
echo "   - Verify all steps were completed"
echo "   - Check Supabase logs for errors"

