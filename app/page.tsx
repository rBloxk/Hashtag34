'use client';

import Link from 'next/link';
import { ArrowRight, Palette, Truck, Award, Users, Zap, Heart, Calculator, Package, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div>
      <section className="relative bg-gradient-to-br from-background to-card py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Wear Your Story.<br />
              <span className="text-primary">Gift a Moment.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Create custom t-shirts, hoodies, and corporate gifts that tell your unique story. Design, preview, and order in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                  Start Shopping
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/customise">
                <Button size="lg" variant="outline" className="px-8 border-border text-foreground hover:bg-secondary">
                  Design Your Own
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Custom Design</h3>
              <p className="text-sm text-muted-foreground">Upload your logo or create unique designs with our easy-to-use editor</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">High-quality fabrics and printing technology for lasting impressions</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">Quick turnaround times with reliable shipping to your doorstep</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Bulk Orders</h3>
              <p className="text-sm text-muted-foreground">Special pricing for corporate gifting and bulk orders</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Shop by Category
            </h2>
            <p className="text-muted-foreground">Find the perfect product for your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/shop?category=men">
              <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary">
                <CardContent className="p-6">
                  <div className="aspect-square bg-secondary rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-4xl">👕</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors text-foreground">
                    Men's Collection
                  </h3>
                  <p className="text-sm text-muted-foreground">T-shirts, hoodies & more</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/shop?category=women">
              <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary">
                <CardContent className="p-6">
                  <div className="aspect-square bg-secondary rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-4xl">👚</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors text-foreground">
                    Women's Collection
                  </h3>
                  <p className="text-sm text-muted-foreground">Stylish & comfortable</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/shop?category=gifting">
              <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary">
                <CardContent className="p-6">
                  <div className="aspect-square bg-secondary rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-4xl">🎁</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors text-foreground">
                    Gifting Items
                  </h3>
                  <p className="text-sm text-muted-foreground">Mugs, bags & accessories</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/shop?category=corporate">
              <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary">
                <CardContent className="p-6">
                  <div className="aspect-square bg-secondary rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-4xl">💼</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors text-foreground">
                    Corporate
                  </h3>
                  <p className="text-sm text-muted-foreground">Bulk orders & branding</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Corporate Gifting Solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Elevate your brand with custom corporate merchandise. Perfect for events, employee gifts, and client appreciation.
            </p>
            <Link href="/corporate">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Choose & Customize</h3>
                <p className="text-sm text-muted-foreground">Select a product and use our design tool to create your perfect look</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Preview & Order</h3>
                <p className="text-sm text-muted-foreground">See your design in real-time, adjust as needed, and place your order</p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Receive & Enjoy</h3>
                <p className="text-sm text-muted-foreground">We print and ship your order directly to you with care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Features Section */}
      <section className="py-20 bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Powerful Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need for seamless customization and ordering experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Live Customization</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Real-time design tool with drag-and-drop interface, text editing, and image upload
                </p>
                <Link href="/customise">
                  <Button variant="outline" size="sm" className="w-full">
                    Try Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Wishlist & Favorites</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Save your favorite designs and products for later. Never lose inspiration again.
                </p>
                <Link href="/wishlist">
                  <Button variant="outline" size="sm" className="w-full">
                    View Wishlist
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Calculator className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Bulk Calculator</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Instant pricing for bulk orders with volume discounts up to 30% off
                </p>
                <Link href="/bulk-calculator">
                  <Button variant="outline" size="sm" className="w-full">
                    Calculate Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Order Tracking</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Real-time order status updates from production to delivery
                </p>
                <Link href="/orders">
                  <Button variant="outline" size="sm" className="w-full">
                    Track Orders
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">3D Preview</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  See your designs on products with realistic 3D preview technology
                </p>
                <Link href="/customise">
                  <Button variant="outline" size="sm" className="w-full">
                    Preview Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Corporate Solutions</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Dedicated support, bulk pricing, and custom branding for businesses
                </p>
                <Link href="/corporate">
                  <Button variant="outline" size="sm" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
