import React from "react";
import {
  BedDouble,
  ShieldCheck,
  Zap,
  CreditCard,
  LayoutDashboard,
  Bell,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Zap,
    title: "Instant Allocation",
    description:
      "Get assigned a room immediately after confirmation using our smart value-based algorithm.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Transparent",
    description:
      "Eliminate favoritism with a fully automated, rule-based selection process.",
  },
  {
    icon: CreditCard,
    title: "Easy Payments",
    description:
      "Integrated with major gateways for quick, safe, and verifiable transactions.",
  },
  {
    icon: BedDouble,
    title: "Real-time Availability",
    description:
      "View live updates of bed spaces, room types, and hostel capacity.",
  },
  {
    icon: LayoutDashboard,
    title: "Student Dashboard",
    description:
      "Manage your profile, view allocation status, and history all in one place.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Receive instant SMS and email alerts about your application status.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Everything you need to{" "}
            <span className="text-blue-600">manage accommodation</span>
          </h2>
          <p className="text-lg text-gray-600">
            A complete simplified solution for students and administrators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
