import { notFound } from "next/navigation";

import { getCourseById } from "@/data/courses";

import EnrollCard from "@/components/course-details/EnrollCard";
import CourseHero from "@/components/course-details/CourseHero";
import CourseVideo from "@/components/course-details/CourseVideo";
import Curriculum from "@/components/course-details/Curriculum";
import InstructorCard from "@/components/course-details/InstructorCard";
import Reviews from "@/components/course-details/Reviews";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CourseDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  const course = getCourseById(Number(id));

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">

  <CourseHero course={course} />

  <div className="mx-auto max-w-7xl px-6 py-12">

    <div className="grid gap-10 lg:grid-cols-3">

      <div className="lg:col-span-2">

        <CourseVideo title={course.title} />

        <Curriculum />

        <InstructorCard />

        <Reviews />

      </div>

      <div>

        <EnrollCard
  courseId={course.id}
  price={course.price}
/>
      </div>

    </div>

  </div>

</main>
  );
}