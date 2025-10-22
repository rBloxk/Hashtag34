'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { supabase, Product } from '@/lib/supabase';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Palette } from 'lucide-react';

export default function ShopPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);

  const fetchProducts = async () => {
    setLoading(true);
    let query = supabase
      .from('products')
      .select('*')
      .eq('is_active', true);

    if (selectedCategory !== 'all') {
      query = query.eq('category', selectedCategory);
    }

    const { data, error } = await query;

    if (data) {
      setProducts(data);
    }
    setLoading(false);
  };

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'Apparel & Fashion', label: '🧢 Apparel & Fashion' },
    { id: 'Men\'s Apparel', label: '👔 Men\'s Apparel' },
    { id: 'Women\'s Apparel', label: '👚 Women\'s Apparel' },
    { id: 'Unisex & Custom Wear', label: '👕 Unisex & Custom Wear' },
    { id: 'Gifting & Hampers', label: '🎁 Gifting & Hampers' },
    { id: 'Chocolates & Sweets', label: '🍫 Chocolates & Sweets' },
    { id: 'Mugs, Bottles & Drinkware', label: '☕ Mugs, Bottles & Drinkware' },
    { id: 'Snack & Gourmet Hampers', label: '🍪 Snack & Gourmet Hampers' },
    { id: 'Luxury Gift Sets', label: '🌸 Luxury Gift Sets' },
    { id: 'Corporate Kits & Sets', label: '💼 Corporate Kits & Sets' },
    { id: 'Employee Onboarding Kits', label: '👋 Employee Onboarding Kits' },
    { id: 'Recognition & Reward Kits', label: '🏆 Recognition & Reward Kits' },
    { id: 'Event & Conference Kits', label: '🎊 Event & Conference Kits' },
    { id: 'Work-From-Home Kits', label: '🖥️ Work-From-Home Kits' },
    { id: 'Custom Branding Solutions', label: '🖋️ Custom Branding Solutions' },
    { id: 'Seasonal & Festive Collections', label: '🪄 Seasonal & Festive Collections' },
    { id: 'Eco-Friendly & Sustainable Gifts', label: '♻️ Eco-Friendly & Sustainable Gifts' },
    { id: 'Accessories & Essentials', label: '🏷️ Accessories & Essentials' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Shop Our Collection
          </h1>
          <p className="text-muted-foreground text-lg">Find the perfect products to customize and make your own</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(cat.id)}
              className={selectedCategory === cat.id ? 'bg-primary hover:bg-primary/90 text-primary-foreground' : 'border-border text-foreground hover:bg-secondary'}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-card rounded-2xl p-12 border border-border max-w-md mx-auto">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👕</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
              <p className="text-muted-foreground mb-4">No products found in this category.</p>
              <p className="text-sm text-muted-foreground">Check back soon for new items!</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link key={product.id} href={`/product/${product.slug}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary bg-card h-full">
                  <CardContent className="p-4">
                    <div className="aspect-square bg-secondary rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                      {((product as any).image_urls && (product as any).image_urls.length > 0) ? (
                        <>
                          <img
                            src={(product as any).image_urls[0]}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {(product as any).image_urls.length > 1 && (
                            <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                              +{(product as any).image_urls.length - 1}
                            </div>
                          )}
                        </>
                      ) : product.base_image_url ? (
                        <img
                          src={product.base_image_url}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <span className="text-6xl">👕</span>
                      )}
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors text-foreground">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {product.description || 'Customizable product'}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-foreground">₹{product.base_price}</span>
                      {product.is_customizable && (
                        <div className="flex items-center text-xs text-primary">
                          <Palette className="h-3 w-3 mr-1" />
                          Customizable
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
