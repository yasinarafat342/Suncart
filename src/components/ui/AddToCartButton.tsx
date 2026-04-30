"use client";

import { useState } from "react";
import { ShoppingCart, Heart, Check } from "lucide-react";
import toast from "react-hot-toast";

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function AddToCartButton({ product }: { product: Product }) {
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    toast.success(`${product.name} added to cart! 🛒`);
    setTimeout(() => setAdded(false), 2500);
  };

  const handleWishlist = () => {
    setWishlisted(!wishlisted);
    toast(wishlisted ? "Removed from wishlist" : "Added to wishlist! ❤️", {
      icon: wishlisted ? "💔" : "❤️",
    });
  };

  return (
    <div className="flex gap-3">
      <button
        onClick={handleAddToCart}
        className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-bold text-base transition-all duration-300 ${
          added
            ? "bg-green-500 text-white scale-95"
            : "bg-gradient-to-r from-sun-500 to-sun-400 text-white hover:from-sun-600 hover:to-sun-500 hover:shadow-lg hover:scale-105 active:scale-95"
        }`}
      >
        {added ? (
          <>
            <Check className="w-5 h-5" />
            Added to Cart!
          </>
        ) : (
          <>
            <ShoppingCart className="w-5 h-5" />
            Add to Cart — ${product.price}
          </>
        )}
      </button>
      <button
        onClick={handleWishlist}
        className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center transition-all duration-300 ${
          wishlisted
            ? "border-red-400 bg-red-50 text-red-500"
            : "border-gray-200 bg-white text-gray-400 hover:border-red-300 hover:text-red-400"
        }`}
        aria-label="Add to wishlist"
      >
        <Heart className={`w-5 h-5 ${wishlisted ? "fill-red-500" : ""}`} />
      </button>
    </div>
  );
}
