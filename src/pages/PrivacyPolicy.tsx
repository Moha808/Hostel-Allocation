import { motion } from "framer-motion";
import { Shield, FileText, Lock, Eye, Globe } from "lucide-react";
import { Navbar } from "../components/Navbar";

export const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information Collection",
      icon: Eye,
      content:
        "We collect personal information such as name, matriculation number, email, and contact details during the registration process to facilitate hostel allocation.",
    },
    {
      title: "Data Usage",
      icon: Globe,
      content:
        "Your data is used solely for the purpose of managing campus accommodation, processing payments, and communicating essential hall-related information.",
    },
    {
      title: "Data Security",
      icon: Lock,
      content:
        "We implement industry-standard 256-bit encryption and secure protocols to protect your sensitive information from unauthorized access.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Privacy Policy
              </h1>
              <p className="text-gray-500 font-medium">
                Last updated: December 2024
              </p>
            </div>
          </div>

          <div className="space-y-12">
            {sections.map((section, i) => (
              <div key={i} className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <section.icon className="w-5 h-5 text-blue-600" />
                  <h2 className="text-xl font-bold text-gray-900">
                    {section.title}
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed pl-8">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-500 italic">
              By using the HostelAlloc system, you agree to the collection and
              use of information in accordance with this policy.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
