"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface ProductsFiltersProps {
  categories: string[];
  currentCategory?: string;
  currentSort?: string;
  currentQ?: string;
}

export default function ProductsFilters({
  categories,
  currentCategory,
  currentSort,
  currentQ,
}: ProductsFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      router.push(`/products?${params.toString()}`);
    },
    [router, searchParams]
  );

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const q = formData.get("q") as string;
    updateParam("q", q);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-8 flex flex-col sm:flex-row gap-4 items-center">
      {/* Search */}
      <form onSubmit={handleSearch} className="flex-1 w-full flex gap-2">
        <input
          type="text"
          name="q"
          defaultValue={currentQ || ""}
          placeholder="Search products..."
          className="w-full input input-bordered rounded-xl text-sm focus:input-primary focus:outline-none"
        />
        <button type="submit" className="btn btn-primary rounded-xl text-sm px-4 shrink-0">
          Search
        </button>
      </form>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => {
          const isActive =
            (!currentCategory && cat === "All") ||
            currentCategory?.toLowerCase() === cat.toLowerCase();
          return (
            <button
              key={cat}
              onClick={() => updateParam("category", cat === "All" ? "" : cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-sun-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-sun-50 hover:text-sun-500"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Sort */}
      <select
        value={currentSort || ""}
        onChange={(e) => updateParam("sort", e.target.value)}
        className="select select-bordered rounded-xl text-sm w-full sm:w-auto focus:select-primary focus:outline-none"
      >
        <option value="">Sort: Default</option>
        <option value="price-asc">Price: Low → High</option>
        <option value="price-desc">Price: High → Low</option>
        <option value="rating">Highest Rated</option>
      </select>
    </div>
  );
}