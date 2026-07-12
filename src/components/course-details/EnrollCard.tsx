"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingCart } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";

type Props = {
  courseId: number;
  price: number;
};

export default function EnrollCard({
  courseId,
  price,
}: Props) {
  const {
    addToWishlist,
    removeFromWishlist,
    isFavorite,
  } = useWishlist();

  const favorite = isFavorite(courseId);

  function handleWishlist() {
    if (favorite) {
      removeFromWishlist(courseId);
    } else {
      addToWishlist(courseId);
    }
  }

  return (
    <motion.aside
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="sticky top-24 rounded-3xl border border-slate-800 bg-slate-900 p-8"
    >
      <h2 className="text-4xl font-bold text-blue-400">
        ${price}
      </h2>

      <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-bold transition hover:bg-blue-700">
        <ShoppingCart size={20} />
        Enroll Now
      </button>

      <button
        onClick={handleWishlist}
        className={`mt-4 flex w-full items-center justify-center gap-3 rounded-xl border px-6 py-4 transition ${
          favorite
            ? "border-red-500 bg-red-500 text-white"
            : "border-slate-700 hover:bg-slate-800"
        }`}
      >
        <Heart
          size={20}
          className={favorite ? "fill-white" : ""}
        />

        {favorite
          ? "Remove from Wishlist"
          : "Add to Wishlist"}
      </button>

      <div className="mt-8 space-y-3 text-slate-400">
        <p>✔ Full Lifetime Access</p>
        <p>✔ Certificate of Completion</p>
        <p>✔ Downloadable Resources</p>
        <p>✔ Access on Mobile & Desktop</p>
      </div>
    </motion.aside>
  );
}