"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Star,
  Users,
  BookOpen,
  Clock3,
  Heart,
} from "lucide-react";

type CourseCardProps = {
  course: {
    id: number;
    title: string;
    instructor: string;
    category: string;
    image: string;
    price: number;
    rating: number;
    students: number;
    lessons: number;
    duration: string;
    level: string;
  };
};

export default function CourseCard({
  course,
}: CourseCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg"
    >
      {/* Image */}

      <div className="relative h-56 overflow-hidden">

        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover duration-300 hover:scale-110"
        />

        <button
          className="absolute right-4 top-4 rounded-full bg-black/60 p-2 backdrop-blur"
        >
          <Heart
            className="text-white"
            size={20}
          />
        </button>

      </div>

      {/* Content */}

      <div className="space-y-4 p-6">

        <span className="rounded-full bg-blue-600 px-3 py-1 text-sm">
          {course.category}
        </span>

        <h2 className="text-2xl font-bold text-white">
          {course.title}
        </h2>

        <p className="text-slate-400">
          By {course.instructor}
        </p>

        {/* Rating */}

        <div className="flex items-center gap-2">

          <Star
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="font-semibold text-yellow-400">
            {course.rating}
          </span>

        </div>

        {/* Info */}

        <div className="grid grid-cols-2 gap-4 text-sm text-slate-400">

          <div className="flex items-center gap-2">
            <Users size={18} />
            {course.students}
          </div>

          <div className="flex items-center gap-2">
            <BookOpen size={18} />
            {course.lessons}
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={18} />
            {course.duration}
          </div>

          <div>
            {course.level}
          </div>

        </div>

        {/* Price */}

        <div className="flex items-center justify-between">

          <span className="text-3xl font-bold text-blue-400">
            ${course.price}
          </span>

          <Link
            href={`/courses/${course.id}`}
            className="rounded-xl bg-blue-600 px-5 py-2 font-semibold transition hover:bg-blue-700"
          >
            View Details
          </Link>

        </div>

      </div>

    </motion.div>
  );
}