import Link from "next/link";
import { Sun } from "lucide-react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sun-50 via-white to-ocean-50 flex flex-col">
      {/* Simple Header */}
      <header className="py-5 px-6">
        <Link href="/" className="flex items-center gap-2 w-fit">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sun-400 to-sun-600 flex items-center justify-center shadow-md">
            <Sun className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl">
            <span className="text-sun-500">Sun</span>
            <span className="text-gray-800">Cart</span>
          </span>
        </Link>
      </header>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-10">
        {children}
      </div>

      {/* Footer note */}
      <div className="text-center py-4 text-xs text-gray-400">
        © {new Date().getFullYear()} SunCart. All rights reserved.
      </div>
    </div>
  );
}
