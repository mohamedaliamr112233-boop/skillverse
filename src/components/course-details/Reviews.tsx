"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Ahmed Mohamed",
    rating: 5,
    comment:
      "Excellent course! The explanations are clear and the projects are very practical.",
  },
  {
    id: 2,
    name: "Sara Ali",
    rating: 5,
    comment:
      "One of the best programming courses I've taken. Highly recommended!",
  },
  {
    id: 3,
    name: "Omar Hassan",
    rating: 4,
    comment:
      "Very good content and organized lessons. Looking forward to more advanced topics.",
  },
];

export default function Reviews() {
  return (
    <section className="mx-auto mt-16 max-w-7xl px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .5 }}
        className="mb-10 text-4xl font-bold text-white"
      >
        Student Reviews
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: .5,
              delay: index * .15,
            }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <div className="mb-4 flex">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            <p className="text-slate-300">
              "{review.comment}"
            </p>

            <h3 className="mt-6 text-lg font-semibold text-white">
              {review.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}