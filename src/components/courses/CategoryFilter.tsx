"use client";

import { motion } from "framer-motion";

const categories = [
  "All",
  "Web Development",
  "Python",
  "Cyber Security",
  "AI",
  "Mobile",
];

export default function CategoryFilter() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-6">
      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={category}
            className="rounded-full border border-slate-700 bg-slate-900 px-5 py-2 text-white hover:bg-blue-600"
          >
            {category}
          </motion.button>
        ))}
      </div>
    </section>
  );
}