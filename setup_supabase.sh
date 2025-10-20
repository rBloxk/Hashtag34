#!/bin/bash

# Supabase Setup Script for Hashtag34 Stories
# Run this script to set up your environment

echo "🚀 Setting up Supabase for Hashtag34 Stories..."

# Create .env.local file
echo "📝 Creating .env.local file..."
cat > .env.local << 'EOF'
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://amgkkhncuarkkmwtfrct.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtZ2traG5jdWFya2ttd3RmcmN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA4MDI4NDksImV4cCI6MjA3NjM3ODg0OX0.MuFFuddby6h9pc1Lwh7p1enmWRkES6r5dUFQhJNjG4I

# Optional: Service Role Key (for admin operations)
# SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
EOF

echo "✅ .env.local file created successfully!"

echo ""
echo "📋 Next Steps:"
echo "1. Go to https://supabase.com/login"
echo "2. Sign in and open your Hashtag34 project"
echo "3. Follow the steps in SUPABASE_SETUP_STEPS.md"
echo "4. Run the SQL script from supabase_setup_complete.sql"
echo ""
echo "🎯 Your Supabase backend will be fully configured!"

