"use client";

import { motion } from "framer-motion";

const tips = [
  {
    icon: "☀️",
    title: "Apply Sunscreen Daily",
    desc: "Use SPF 30+ broad-spectrum sunscreen every morning, even on cloudy days. Reapply every 2 hours when outdoors.",
    color: "from-orange-50 to-sun-50",
    border: "border-sun-200",
  },
  {
    icon: "💧",
    title: "Stay Hydrated",
    desc: "Drink at least 8–10 glasses of water daily in summer. Add electrolytes after sweating heavily.",
    color: "from-sky-50 to-blue-50",
    border: "border-sky-200",
  },
  {
    icon: "🧴",
    title: "Moisturize After Swimming",
    desc: "Chlorine and salt water dry out your skin. Always apply a light moisturizer within 3 minutes of getting out.",
    color: "from-emerald-50 to-teal-50",
    border: "border-emerald-200",
  },
  {
    icon: "🧢",
    title: "Protect Your Head & Eyes",
    desc: "Wear a wide-brim hat and UV-blocking sunglasses to prevent heatstroke and protect your eyes from UV damage.",
    color: "from-purple-50 to-violet-50",
    border: "border-purple-200",
  },
  {
    icon: "🌿",
    title: "Use Aloe After Sun",
    desc: "After a long day outside, apply pure aloe vera gel to soothe and cool any sun-exposed skin areas.",
    color: "from-green-50 to-lime-50",
    border: "border-green-200",
  },
  {
    icon: "🕐",
    title: "Avoid Peak Sun Hours",
    desc: "Try to stay in the shade between 10 AM and 4 PM when UV rays are the strongest and most harmful.",
    color: "from-rose-50 to-pink-50",
    border: "border-rose-200",
  },
];

export default function SummerTips() {
  return (
    <section className="py-20 bg-gradient-to-b from-sun-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sun-500 font-semibold text-sm uppercase tracking-wider mb-2 block">
            Stay Safe & Look Great
          </span>
          <h2 className="section-title text-gray-900 mb-3">Summer Care Tips 🌞</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Expert-backed tips to help you enjoy the sun safely while keeping your skin healthy and glowing all season.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`bg-gradient-to-br ${tip.color} border ${tip.border} rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300`}
            >
              <span className="text-4xl mb-4 block">{tip.icon}</span>
              <h3 className="font-display font-bold text-gray-800 text-lg mb-2">{tip.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{tip.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
