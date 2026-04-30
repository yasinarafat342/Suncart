"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  stock: number;
  image: string;
  category: string;
  featured?: boolean;
}

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${
          i < Math.floor(rating)
            ? "fill-sun-400 text-sun-400"
            : i < rating
            ? "fill-sun-200 text-sun-400"
            : "fill-gray-200 text-gray-200"
        }`}
      />
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="card bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden group"
    >
      {/* Image */}
      <figure className="relative h-52 overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {discount > 0 && (
            <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
              -{discount}%
            </span>
          )}
          {product.stock <= 5 && (
            <span className="bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
              Low Stock
            </span>
          )}
        </div>
        {/* Category */}
        <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">
          {product.category}
        </span>
      </figure>

      {/* Body */}
      <div className="card-body p-4 gap-2">
        <div>
          <p className="text-xs text-sun-500 font-semibold uppercase tracking-wide mb-0.5">
            {product.brand}
          </p>
          <h3 className="font-display font-semibold text-gray-800 text-base leading-snug line-clamp-2">
            {product.name}
          </h3>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">{renderStars(product.rating)}</div>
          <span className="text-xs text-gray-500">
            {product.rating} ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">${product.price}</span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
          )}
        </div>

        {/* CTA */}
        <Link
          href={`/products/${product.id}`}
          className="btn-sun w-full text-center text-sm py-2.5 rounded-xl flex items-center justify-center gap-2 mt-1"
        >
          <ShoppingCart className="w-4 h-4" />
          View Details
        </Link>
      </div>
    </motion.div>
  );
}
