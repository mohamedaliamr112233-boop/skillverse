import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import Features from "@/components/home/Features";
import Categories from "@/components/home/Categories";
import PopularCourses from "@/components/home/PopularCourses";
import Testimonials from "@/components/home/Testimonials";
import Pricing from "@/components/home/Pricing";
import FAQ from "@/components/home/FAQ";

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

      <Pricing />

      <FAQ />
    </>
  );
}