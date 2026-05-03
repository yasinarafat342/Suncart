"use client";

import { useState, useEffect } from "react";
import { useSession, authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { User, ImageIcon, Loader2, ArrowLeft, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function UpdateProfilePage() {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  const [form, setForm] = useState({ name: "", image: "" });
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/auth/login?callbackUrl=/update-profile");
    }
  }, [session, isPending, router]);

  useEffect(() => {
    if (session?.user) {
      setForm({
        name: session.user.name || "",
        image: session.user.image || "",
      });
      setPreview(session.user.image || "");
    }
  }, [session]);

  useEffect(() => {
    setPreview(form.image);
  }, [form.image]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      toast.error("Name cannot be empty.");
      return;
    }
    setLoading(true);
    try {
      await authClient.updateUser({ name: form.name, image: form.image || undefined });
      toast.success("Profile updated successfully! 🎉");
      router.push("/my-profile");
      router.refresh();
    } catch {
      toast.error("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-sun-500" />
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <Link
          href="/my-profile"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-sun-500 transition-colors text-sm font-medium mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Profile
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8"
        >
          <div className="text-center mb-8">
            <span className="text-4xl block mb-3">✏️</span>
            <h1 className="font-display text-2xl font-bold text-gray-900 mb-1">Update Information</h1>
            <p className="text-gray-500 text-sm">Keep your profile fresh and up to date.</p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-sun-200 shadow-lg bg-gray-100">
                {preview ? (
                  <Image
                    src={preview}
                    alt="Profile preview"
                    fill
                    className="object-cover"
                    onError={() => setPreview("")}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-sun-400 to-sun-600 flex items-center justify-center">
                    <span className="text-3xl font-black text-white">
                      {form.name?.charAt(0).toUpperCase() || session.user.name?.charAt(0).toUpperCase() || "U"}
                    </span>
                  </div>
                )}
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-sun-500 rounded-full flex items-center justify-center border-2 border-white shadow">
                <ImageIcon className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name <span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="input input-bordered w-full pl-11 rounded-2xl focus:input-primary focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Profile Photo URL
              </label>
              <div className="relative">
                <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <input
                  type="url"
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                  placeholder="https://example.com/photo.jpg"
                  className="input input-bordered w-full pl-11 rounded-2xl focus:input-primary focus:outline-none"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1.5 ml-1">Paste a direct link to your profile image.</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4">
              <p className="text-xs text-gray-400 font-medium mb-1">Email (cannot be changed)</p>
              <p className="text-gray-700 font-semibold text-sm">{session.user.email}</p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-sun w-full py-3.5 rounded-2xl text-base flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Updating...
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  Update Information
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}