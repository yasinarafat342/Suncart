import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
}

export default function RelatedProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group"
    >
      <div className="relative h-44 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <p className="text-xs text-sun-500 font-semibold mb-0.5">{product.brand}</p>
        <h3 className="font-semibold text-gray-800 text-sm line-clamp-1">{product.name}</h3>
        <p className="text-lg font-bold text-gray-900 mt-1">${product.price}</p>
      </div>
    </Link>
  );
}
