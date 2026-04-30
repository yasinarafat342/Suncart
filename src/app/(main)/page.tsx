import { Suspense } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroSlider from "@/components/ui/HeroSlider";
import ProductCard from "@/components/ui/ProductCard";
import SummerTips from "@/components/ui/SummerTips";
import TopBrands from "@/components/ui/TopBrands";
import products from "@/data/products.json";
import { Sparkles, ArrowRight } from "lucide-react";

export default function HomePage() {
  const featured = products.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Stats Bar */}
      <div className="bg-gradient-to-r from-sun-500 to-sun-400 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-sm font-medium">
            {[
              { label: "Free Shipping over $50", icon: "🚚" },
              { label: "30-Day Easy Returns", icon: "↩️" },
              { label: "Secure Payments", icon: "🔒" },
              { label: "24/7 Customer Support", icon: "💬" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-sun-500" />
                <span className="text-sun-500 font-semibold text-sm uppercase tracking-wider">
                  Best Sellers
                </span>
              </div>
              <h2 className="section-title text-gray-900">
                Popular Products
              </h2>
              <p className="text-gray-500 mt-2 max-w-md">
                Handpicked summer favorites loved by thousands of happy customers.
              </p>
            </div>
            <Link
              href="/products"
              className="flex items-center gap-2 text-sun-500 hover:text-sun-600 font-semibold transition-colors group shrink-0"
            >
              View All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Summer Care Tips */}
      <SummerTips />

      {/* Top Brands */}
      <TopBrands />

      {/* CTA Banner */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-4xl mb-4 block">☀️</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Make This Summer Unforgettable?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of summer lovers who trust SunCart for their seasonal essentials.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/products" className="btn-sun text-base px-8 py-3.5">
              Shop All Products
            </Link>
            <Link
              href="/auth/register"
              className="px-8 py-3.5 rounded-full border border-gray-600 text-gray-300 hover:border-sun-400 hover:text-sun-400 font-semibold transition-colors text-base"
            >
              Create Free Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
