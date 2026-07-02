"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Ahmed Ali",
    role: "Frontend Developer",
    text: "SkillVerse completely changed the way I learn programming. The courses are practical and easy to follow.",
  },
  {
    name: "Sara Mohamed",
    role: "UI/UX Designer",
    text: "The platform is beautiful, fast, and packed with high-quality content. I highly recommend it.",
  },
  {
    name: "Omar Hassan",
    role: "Cyber Security Student",
    text: "The best online learning platform I've ever used. The instructors explain everything clearly.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            What Our Students Say
          </h2>

          <p className="mt-4 text-slate-400">
            Thousands of students are already learning with SkillVerse.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{
                scale: 1.03,
                y: -8,
              }}
              className="rounded-3xl border border-slate-700 bg-slate-950 p-8 shadow-xl"
            >
              <div className="mb-6 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="leading-7 text-slate-300">
                "{item.text}"
              </p>

              <div className="mt-8 flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback>
                    {item.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <h4 className="font-semibold text-white">
                    {item.name}
                  </h4>

                  <p className="text-sm text-slate-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}