"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "$0",
    popular: false,
    features: [
      "5 Courses",
      "Community Access",
      "Basic Support",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    popular: true,
    features: [
      "Unlimited Courses",
      "Certificates",
      "Priority Support",
      "Projects",
      "Downloads",
    ],
  },
  {
    name: "Premium",
    price: "$49",
    popular: false,
    features: [
      "Everything in Pro",
      "AI Assistant",
      "1-on-1 Mentoring",
      "Career Roadmap",
      "Lifetime Updates",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            Choose Your Plan
          </h2>

          <p className="mt-4 text-slate-400">
            Flexible pricing for every learner.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {plans.map((plan, index) => (

            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{
                scale: 1.04,
              }}
              className={`rounded-3xl border p-8 ${
                plan.popular
                  ? "border-blue-500 bg-slate-900"
                  : "border-slate-800 bg-slate-900"
              }`}
            >

              {plan.popular && (
                <div className="mb-6 inline-block rounded-full bg-blue-600 px-4 py-1 text-sm text-white">
                  Most Popular
                </div>
              )}

              <h3 className="text-3xl font-bold text-white">
                {plan.name}
              </h3>

              <p className="mt-3 text-5xl font-bold text-blue-400">
                {plan.price}
                <span className="text-lg text-slate-400">/month</span>
              </p>

              <div className="mt-8 space-y-4">

                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <Check
                      className="text-green-400"
                      size={18}
                    />

                    {feature}
                  </div>
                ))}

              </div>

              <Button
                className="mt-10 w-full"
              >
                Get Started
              </Button>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}