import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sun-50 to-ocean-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <span className="text-8xl block mb-6">🏖️</span>
        <h1 className="font-display text-6xl font-black text-gray-900 mb-3">404</h1>
        <h2 className="font-display text-2xl font-bold text-gray-700 mb-4">
          Lost at Sea?
        </h2>
        <p className="text-gray-500 text-base mb-8 leading-relaxed">
          Looks like this page drifted away with the tide. Let's get you back to shore!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="btn-sun px-8 py-3.5 rounded-full">
            Go Home 🏠
          </Link>
          <Link
            href="/products"
            className="px-8 py-3.5 rounded-full border-2 border-gray-300 text-gray-700 hover:border-sun-400 hover:text-sun-500 font-semibold transition-colors"
          >
            Shop Products
          </Link>
        </div>
      </div>
    </div>
  );
}
