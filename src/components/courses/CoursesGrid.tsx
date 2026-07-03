"use client";

import CourseCard from "./CourseCard";

const courses = [
  {
    title: "React Masterclass",
    category: "React",
  },
  {
    title: "Next.js Bootcamp",
    category: "Next.js",
  },
  {
    title: "Python Complete",
    category: "Python",
  },
  {
    title: "Cyber Security",
    category: "Security",
  },
  {
    title: "AI Fundamentals",
    category: "AI",
  },
  {
    title: "Flutter Mobile",
    category: "Mobile",
  },
];

export default function CoursesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard
            key={course.title}
            title={course.title}
            category={course.category}
          />
        ))}
      </div>
    </section>
  );
}