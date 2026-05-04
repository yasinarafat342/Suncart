import Link from "next/link";
import { Sun, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sun-400 to-sun-600 flex items-center justify-center">
                <Sun className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                <span className="text-sun-400">Sun</span>Cart
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Your ultimate destination for summer essentials. From beach days to poolside lounging — we have everything you need to make the most of the sunny season.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-sun-500 transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "All Products" },
                { href: "/my-profile", label: "My Profile" },
                { href: "/auth/login", label: "Login" },
                { href: "/auth/register", label: "Register" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-sun-400 transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-sun-500 opacity-60" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5">Categories</h3>
            <ul className="space-y-3">
              {["Accessories", "Clothing", "Skincare", "Swimwear", "Beach", "Footwear"].map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/products?category=${cat.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-sun-400 transition-colors duration-200 flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-sun-500 opacity-60" />
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sun-400 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">
                  Mirpur,Dhaka.Bangladesh-1216
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sun-400 shrink-0" />
                <a href="tel:+18001234567" className="text-sm text-gray-400 hover:text-sun-400 transition-colors">
                  01963704659
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sun-400 shrink-0" />
                <a href="mailto:hello@suncart.shop" className="text-sm text-gray-400 hover:text-sun-400 transition-colors">
                  ya915870@gmail.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm font-medium text-white mb-2">Get summer deals in your inbox</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-3 py-2 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-sun-500 transition-colors"
                />
                <button className="bg-sun-500 hover:bg-sun-600 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors">
                  Go
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear} SunCart. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-sun-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-sun-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/shipping" className="text-sm text-gray-500 hover:text-sun-400 transition-colors">
                Shipping Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
