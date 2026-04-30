import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import products from "@/data/products.json";
import { Metadata } from "next";
import { Star, ShoppingCart, ArrowLeft, Shield, Truck, RotateCcw, Package } from "lucide-react";
import AddToCartButton from "@/components/ui/AddToCartButton";
import RelatedProductCard from "@/components/ui/RelatedProductCard";

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;

  // Auth check
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    redirect(`/auth/login?callbackUrl=/products/${id}`);
  }

  const product = products.find((p) => p.id === Number(id));
  if (!product) notFound();

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating)
            ? "fill-sun-400 text-sun-400"
            : i < rating
            ? "fill-sun-200 text-sun-400"
            : "fill-gray-200 text-gray-200"
        }`}
      />
    ));

  const related = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-sun-500 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-sun-500 transition-colors">Products</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium truncate">{product.name}</span>
        </nav>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-80 sm:h-96 lg:h-full min-h-[420px] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {discount > 0 && (
                  <span className="bg-red-500 text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-md">
                    -{discount}% OFF
                  </span>
                )}
                {product.featured && (
                  <span className="bg-sun-500 text-white text-sm font-bold px-3 py-1.5 rounded-full shadow-md">
                    ⭐ Featured
                  </span>
                )}
              </div>
            </div>

            {/* Details */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-2">
                <span className="inline-block bg-sun-50 text-sun-600 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide mb-3">
                  {product.category}
                </span>
                <span className="ml-2 text-sm text-gray-500 font-medium">{product.brand}</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-0.5">{renderStars(product.rating)}</div>
                <span className="font-bold text-gray-800">{product.rating}</span>
                <span className="text-gray-400 text-sm">({product.reviewCount} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-black text-gray-900">${product.price}</span>
                {product.originalPrice > product.price && (
                  <div className="flex flex-col">
                    <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                    <span className="text-red-500 text-sm font-semibold">
                      Save ${(product.originalPrice - product.price).toFixed(2)}
                    </span>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-8 text-base">{product.description}</p>

              {/* Stock */}
              <div className="flex items-center gap-2 mb-6">
                <Package className={`w-4 h-4 ${product.stock <= 5 ? "text-orange-500" : "text-green-500"}`} />
                <span className={`text-sm font-medium ${product.stock <= 5 ? "text-orange-500" : "text-green-600"}`}>
                  {product.stock <= 5 ? `Only ${product.stock} left!` : `In Stock (${product.stock} available)`}
                </span>
              </div>

              {/* CTA */}
              <AddToCartButton product={product} />

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100">
                {[
                  { icon: Truck, label: "Free Shipping", sub: "Over $50" },
                  { icon: RotateCcw, label: "Easy Returns", sub: "30 Days" },
                  { icon: Shield, label: "Secure Payment", sub: "SSL Encrypted" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="text-center">
                    <Icon className="w-5 h-5 text-sun-500 mx-auto mb-1" />
                    <p className="text-xs font-semibold text-gray-700">{label}</p>
                    <p className="text-xs text-gray-400">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section>
            <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
              More from {product.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {related.map((p) => (
                <RelatedProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
