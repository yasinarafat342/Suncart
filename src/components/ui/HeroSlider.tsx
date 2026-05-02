"use client";
 
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
 
const slides = [
  {
    id: 1,
    tag: "Summer Sale 2025 🔥",
    title: "Up to 50% OFF",
    subtitle: "Summer Essentials",
    description: "Shop the hottest deals on sunglasses, beach gear, skincare, and more. Limited time offer!",
    cta: "Shop Now",
    ctaLink: "/products",
    bg: "from-orange-500 via-sun-400 to-yellow-300",
    accent: "text-yellow-100",
    image: "🕶️",
    pattern: "☀️ 🌊 🏖️ 🌴",
  },
  {
    id: 2,
    tag: "Limited Time Only ⏰",
    title: "Hot Deals 🔥",
    subtitle: "Up to 70% OFF Today",
    description: "Grab the hottest summer deals before they're gone! Sunglasses, skincare, beach gear and more — all at unbeatable prices.",
    cta: "Grab Deals Now",
    ctaLink: "/products",
    bg: "from-red-600 via-rose-500 to-orange-400",
    accent: "text-rose-100",
    image: "🔥",
    pattern: "💥 🏷️ ⚡ 🎯",
  },
  {
    id: 3,
    tag: "Skincare Special 🌿",
    title: "Glow All Summer",
    subtitle: "Skincare & Sun Protection",
    description: "Keep your skin protected and glowing with our dermatologist-approved sunscreens and after-sun care.",
    cta: "Shop Skincare",
    ctaLink: "/products?category=skincare",
    bg: "from-emerald-500 via-teal-400 to-cyan-300",
    accent: "text-emerald-100",
    image: "🧴",
    pattern: "🌿 💧 🌸 ✨",
  },
];
 
export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
 
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
 
  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };
 
  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };
 
  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };
 
  const slide = slides[current];
 
  return (
    <div className="relative overflow-hidden rounded-none" style={{ minHeight: "520px" }}>
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slide.id}
          custom={direction}
          initial={
            slide.id === 2
              ? { scale: 1.08, opacity: 0 }
              : { x: direction * 100 + "%", opacity: 0 }
          }
          animate={
            slide.id === 2
              ? { scale: 1, opacity: 1 }
              : { x: 0, opacity: 1 }
          }
          exit={
            slide.id === 2
              ? { scale: 0.95, opacity: 0 }
              : { x: direction * -100 + "%", opacity: 0 }
          }
          transition={
            slide.id === 2
              ? { duration: 0.6, ease: "easeOut" }
              : { type: "spring", stiffness: 300, damping: 30 }
          }
          className={`absolute inset-0 bg-gradient-to-br ${slide.bg} flex items-center`}
        >
          {/* Floating pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            {slide.pattern.split(" ").map((emoji, i) => (
              <motion.span
                key={i}
                className="absolute text-4xl opacity-10"
                style={{
                  top: `${15 + i * 20}%`,
                  right: `${5 + i * 8}%`,
                }}
                animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
 
          {/* Large emoji decoration */}
          <motion.div
            className="absolute right-16 top-1/2 -translate-y-1/2 hidden lg:block"
            animate={
              slide.id === 2
                ? { scale: [1, 1.15, 1], rotate: [0, -8, 8, 0] }
                : { y: [0, -20, 0], rotate: [0, 5, 0] }
            }
            transition={
              slide.id === 2
                ? { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
                : { duration: 4, repeat: Infinity }
            }
          >
            <span className="text-9xl opacity-30 select-none">{slide.image}</span>
          </motion.div>
 
          {/* Content */}
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-20">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="max-w-lg"
            >
              <span className={`inline-block text-sm font-bold ${slide.accent} bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4`}>
                {slide.tag}
              </span>
 
              <h1 className={`font-display text-5xl sm:text-6xl font-black text-white leading-tight mb-1 ${slide.id === 2 ? "animate-pulse" : ""}`}>
                {slide.title}
              </h1>
 
              <h2 className={`font-display text-2xl sm:text-3xl font-semibold ${slide.accent} mb-4`}>
                {slide.subtitle}
              </h2>
              <p className="text-white/85 text-base sm:text-lg mb-8 leading-relaxed">
                {slide.description}
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href={slide.ctaLink}
                  className="bg-white text-gray-900 font-bold px-8 py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                >
                  {slide.cta} →
                </Link>
                <Link
                  href="/products"
                  className="text-white/90 hover:text-white font-medium text-sm underline underline-offset-4 transition-colors"
                >
                  View all products
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
 
      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
 
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? "w-8 h-2.5 bg-white" : "w-2.5 h-2.5 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}