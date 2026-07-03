"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-16 text-center shadow-2xl"
        >

          <h2 className="text-5xl font-bold text-white">
            Ready to Start Learning?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Join thousands of students who are building their future with
            SkillVerse.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link href="/courses">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-slate-100"
              >
                Browse Courses
              </Button>
            </Link>

            <Link href="/signup">
              <Button
                size="lg"
                variant="secondary"
              >
                Get Started Free
              </Button>
            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
}