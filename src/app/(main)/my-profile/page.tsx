import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { User, Mail, Calendar, Settings, ShoppingBag, Heart, Star } from "lucide-react";

export const metadata: Metadata = { title: "My Profile" };

export default async function MyProfilePage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/auth/login?callbackUrl=/my-profile");

  const { user } = session;
  const joinDate = new Date(user.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const stats = [
    { label: "Orders", value: "0", icon: ShoppingBag, color: "text-sun-500 bg-sun-50" },
    { label: "Wishlist", value: "0", icon: Heart, color: "text-rose-500 bg-rose-50" },
    { label: "Reviews", value: "0", icon: Star, color: "text-yellow-500 bg-yellow-50" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-gray-900 mb-1">My Profile</h1>
          <p className="text-gray-500">Manage your account details and preferences.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 text-center">
              {/* Avatar */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name || "User"}
                    fill
                    className="rounded-full object-cover border-4 border-sun-200 shadow-lg"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-sun-400 to-sun-600 flex items-center justify-center border-4 border-sun-200 shadow-lg">
                    <span className="text-4xl font-black text-white">
                      {user.name?.charAt(0).toUpperCase() || "U"}
                    </span>
                  </div>
                )}
                {/* Online dot */}
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow" />
              </div>

              <h2 className="font-display text-xl font-bold text-gray-900 mb-1">{user.name}</h2>
              <p className="text-gray-500 text-sm mb-4">{user.email}</p>

              <div className="inline-flex items-center gap-1.5 bg-sun-50 text-sun-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-sun-500" />
                Summer Member
              </div>

              <Link
                href="/update-profile"
                className="btn-sun w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-sm"
              >
                <Settings className="w-4 h-4" />
                Update Information
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ label, value, icon: Icon, color }) => (
                <div key={label} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 text-center">
                  <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center mx-auto mb-3`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-2xl font-black text-gray-900">{value}</p>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            {/* Account Details */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-display font-bold text-gray-900 text-lg mb-5">Account Details</h3>
              <div className="space-y-4">
                {[
                  {
                    icon: User,
                    label: "Full Name",
                    value: user.name || "Not set",
                    color: "text-sun-500 bg-sun-50",
                  },
                  {
                    icon: Mail,
                    label: "Email Address",
                    value: user.email,
                    color: "text-ocean-500 bg-ocean-50",
                  },
                  {
                    icon: Calendar,
                    label: "Member Since",
                    value: joinDate,
                    color: "text-purple-500 bg-purple-50",
                  },
                ].map(({ icon: Icon, label, value, color }) => (
                  <div key={label} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                    <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center shrink-0`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-gray-400 font-medium mb-0.5">{label}</p>
                      <p className="text-gray-800 font-semibold text-sm truncate">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-display font-bold text-gray-900 text-lg mb-5">Quick Actions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: "/products", label: "Browse Products", emoji: "🛍️", desc: "Discover summer essentials" },
                  { href: "/update-profile", label: "Edit Profile", emoji: "✏️", desc: "Update your info" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-sun-50 rounded-2xl transition-colors group"
                  >
                    <span className="text-2xl">{item.emoji}</span>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm group-hover:text-sun-600 transition-colors">
                        {item.label}
                      </p>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
