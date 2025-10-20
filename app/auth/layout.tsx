import '../globals.css';
import type { Metadata } from 'next';
import { AuthProvider } from '@/contexts/AuthContext';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: 'Hashtag34 Stories - Custom T-Shirts & Corporate Gifting',
  description: 'Wear Your Story. Gift a Moment. Customizable t-shirts, hoodies, and corporate gifting solutions.',
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-card">
      {children}
    </div>
  );
}
