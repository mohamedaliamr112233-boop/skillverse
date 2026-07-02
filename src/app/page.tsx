import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import Features from "@/components/home/Features";
import Categories from "@/components/home/Categories";
import PopularCourses from "@/components/home/PopularCourses";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <TrustedBy />

      <Features />

      <Categories />

      <PopularCourses />

      <Testimonials />
    </>
  );
}