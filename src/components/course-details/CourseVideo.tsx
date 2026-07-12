"use client";

import { motion } from "framer-motion";

type CourseVideoProps = {
  title: string;
};

export default function CourseVideo({
  title,
}: CourseVideoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-12 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
    >
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title={title}
          allowFullScreen
        />
      </div>
    </motion.div>
  );
}