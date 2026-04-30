"use client";

import { motion } from "framer-motion";

const brands = [
  {
    name: "SunShade",
    tagline: "Premium Eyewear",
    emoji: "🕶️",
    color: "from-amber-500 to-orange-500",
    products: 12,
  },
  {
    name: "GlowGuard",
    tagline: "Skin Protection Experts",
    emoji: "🧴",
    color: "from-emerald-500 to-teal-500",
    products: 18,
  },
  {
    name: "WaveRider",
    tagline: "Beach Gear Specialists",
    emoji: "🏄",
    color: "from-ocean-500 to-cyan-500",
    products: 24,
  },
  {
    name: "SummerLux",
    tagline: "Luxury Summer Fashion",
    emoji: "👗",
    color: "from-rose-500 to-pink-500",
    products: 31,
  },
];

export default function TopBrands() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sun-500 font-semibold text-sm uppercase tracking-wider mb-2 block">
            Trusted Names
          </span>
          <h2 className="section-title text-gray-900 mb-3">Top Brands 🏆</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We partner with the best summer brands to bring you quality products you can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${brand.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{brand.emoji}</span>
              </div>
              <h3 className="font-display font-bold text-gray-900 text-xl mb-1">{brand.name}</h3>
              <p className="text-gray-500 text-sm mb-3">{brand.tagline}</p>
              <span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                {brand.products} Products
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
