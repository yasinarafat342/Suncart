import ProductCard from "@/components/ui/ProductCard";
import ProductsFilters from "@/components/ui/ProductsFilters";
import products from "@/data/products.json";
import { Metadata } from "next";
import { Suspense } from "react";
 
export const metadata: Metadata = {
  title: "All Products",
  description: "Browse all summer essentials at SunCart – sunglasses, clothing, skincare, beach gear and more.",
};
 
const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];
 
interface ProductsPageProps {
  searchParams: Promise<{ category?: string; sort?: string; q?: string }>;
}
 
export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const { category, sort, q } = params;
 
  let filtered = [...products];
 
  if (category && category !== "all" && category !== "All") {
    filtered = filtered.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }
 
  if (q) {
    const query = q.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );
  }
 
  if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
  else if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);
  else if (sort === "rating") filtered.sort((a, b) => b.rating - a.rating);
 
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-sun-500 to-sun-400 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-bold mb-2">All Products</h1>
          <p className="text-sun-100 text-lg">
            {filtered.length} summer essential{filtered.length !== 1 ? "s" : ""} for you
          </p>
        </div>
      </div>
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters — client component wrapped in Suspense (required for useSearchParams) */}
        <Suspense fallback={
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-8 h-16 animate-pulse" />
        }>
          <ProductsFilters
            categories={categories}
            currentCategory={category}
            currentSort={sort}
            currentQ={q}
          />
        </Suspense>
 
        {/* Products Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <span className="text-6xl block mb-4">🔍</span>
            <h3 className="font-display text-2xl font-bold text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500 mb-6">Try a different search term or category.</p>
            <a href="/products" className="btn-sun inline-block px-8 py-3 rounded-full">
              View All Products
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
 