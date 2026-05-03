"use client";

import Link from "next/link";
import Image from "next/image";
import { authClient, useSession } from "@/lib/auth-client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import toast from "react-hot-toast";
import { Sun, Menu, X, User, LogOut, Settings } from "lucide-react";

export default function Navbar() {
  const { data: session, isPending, refresh } = useSession();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleSignOut = async () => {
    await authClient.signOut();
    refresh();
    toast.success("Signed out successfully!");
    router.refresh();
    router.push("/");
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/my-profile", label: "My Profile" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sun-400 to-sun-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Sun className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-xl">
              <span className="text-sun-500">Sun</span>
              <span className="text-gray-800">Cart</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "bg-sun-50 text-sun-600"
                    : "text-gray-600 hover:text-sun-500 hover:bg-sun-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {isPending ? (
              <div className="w-8 h-8 rounded-full bg-base-200 animate-pulse" />
            ) : session ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="flex items-center gap-2 cursor-pointer group">
                  <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-sun-300 group-hover:border-sun-500 transition-colors shadow-sm">
                    {session.user.image ? (
                      <Image
                        src={session.user.image}
                        alt={session.user.name || "User"}
                        width={36}
                        height={36}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-sun-400 to-sun-600 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">
                          {session.user.name?.charAt(0).toUpperCase() || "U"}
                        </span>
                      </div>
                    )}
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-sun-500 transition-colors max-w-[100px] truncate">
                    {session.user.name?.split(" ")[0]}
                  </span>
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-white rounded-2xl shadow-xl border border-gray-100 w-52 p-2 mt-2 z-50">
                  <li className="px-3 py-2 border-b border-gray-100 mb-1">
                    <div>
                      <p className="font-semibold text-gray-800 text-sm truncate">{session.user.name}</p>
                      <p className="text-xs text-gray-400 truncate">{session.user.email}</p>
                    </div>
                  </li>
                  <li>
                    <Link href="/my-profile" className="flex items-center gap-2 text-gray-600 hover:text-sun-500 hover:bg-sun-50 rounded-xl px-3 py-2">
                      <User className="w-4 h-4" />
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link href="/update-profile" className="flex items-center gap-2 text-gray-600 hover:text-sun-500 hover:bg-sun-50 rounded-xl px-3 py-2">
                      <Settings className="w-4 h-4" />
                      Update Info
                    </Link>
                  </li>
                  <li className="border-t border-gray-100 mt-1 pt-1">
                    <button
                      onClick={handleSignOut}
                      className="flex items-center gap-2 text-red-500 hover:bg-red-50 rounded-xl px-3 py-2 w-full text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/auth/login" className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-sun-500 transition-colors">
                  Login
                </Link>
                <Link href="/auth/register" className="btn-sun text-sm py-2 px-5">
                  Register
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-base-200 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-sun-50 text-sun-600"
                    : "text-gray-600 hover:text-sun-500 hover:bg-sun-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-100">
              {session ? (
                <div className="space-y-1">
                  <div className="flex items-center gap-3 px-4 py-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-sun-300">
                      {session.user.image ? (
                        <Image src={session.user.image} alt="User" width={32} height={32} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-sun-400 to-sun-600 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{session.user.name?.charAt(0).toUpperCase()}</span>
                        </div>
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{session.user.name}</span>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="flex gap-2 px-2">
                  <Link href="/auth/login" className="flex-1 btn btn-outline btn-sm rounded-full">Login</Link>
                  <Link href="/auth/register" className="flex-1 btn-sun text-sm py-2 text-center rounded-full">Register</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}