import { Star, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "Complete React Course",
    level: "Beginner",
    rating: "4.9",
    students: "12K",
    duration: "18h",
    price: "$49",
  },
  {
    title: "Ethical Hacking Bootcamp",
    level: "Intermediate",
    rating: "4.8",
    students: "9K",
    duration: "24h",
    price: "$79",
  },
  {
    title: "AI with Python",
    level: "Advanced",
    rating: "5.0",
    students: "15K",
    duration: "30h",
    price: "$99",
  },
];

export default function PopularCourses() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold text-white">
          Popular Courses
        </h2>

        <p className="mt-4 text-center text-slate-400">
          Learn from the most popular courses on SkillVerse.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
            >
              <div className="h-48 bg-gradient-to-r from-blue-600 to-purple-600" />

              <div className="p-6">

                <span className="rounded bg-blue-600 px-3 py-1 text-sm">
                  {course.level}
                </span>

                <h3 className="mt-4 text-2xl font-bold text-white">
                  {course.title}
                </h3>

                <div className="mt-5 flex justify-between text-sm text-slate-400">

                  <span className="flex items-center gap-1">
                    <Star size={16} />
                    {course.rating}
                  </span>

                  <span className="flex items-center gap-1">
                    <Users size={16} />
                    {course.students}
                  </span>

                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    {course.duration}
                  </span>

                </div>

                <div className="mt-6 flex items-center justify-between">

                  <span className="text-2xl font-bold text-white">
                    {course.price}
                  </span>

                  <Button>
                    Enroll
                  </Button>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}