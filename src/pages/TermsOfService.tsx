import { motion } from "framer-motion";
import { Scale, FileCheck, AlertTriangle, UserCheck } from "lucide-react";
import { Navbar } from "../components/Navbar";

export const TermsOfService = () => {
  const terms = [
    {
      title: "Eligibility",
      icon: UserCheck,
      content:
        "Only currently registered students of the University with valid matriculation numbers are eligible to apply for hostel accommodation through this portal.",
    },
    {
      title: "Allocation Policy",
      icon: FileCheck,
      content:
        "Hostel allocation is based on availability and is conducted on a first-come, first-served basis. Management reserves the right to reassign rooms for administrative reasons.",
    },
    {
      title: "Code of Conduct",
      icon: Scale,
      content:
        "Students must adhere to all university hostel rules and regulations. Any violation may lead to summary eviction and disciplinary action.",
    },
    {
      title: "Refunds & Payments",
      icon: AlertTriangle,
      content:
        "All payments made through the portal are final. Refund requests are subject to the University's official financial policies and deadlines.",
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
            <div className="p-3 bg-indigo-100 text-indigo-600 rounded-2xl">
              <Scale className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Terms of Service
              </h1>
              <p className="text-gray-500 font-medium">
                Agreement for Hostel Usage
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {terms.map((term, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-gray-50/50 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <term.icon className="w-5 h-5 text-indigo-600" />
                  <h2 className="text-lg font-bold text-gray-900">
                    {term.title}
                  </h2>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {term.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-amber-50 rounded-2xl border border-amber-100 flex gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />
            <p className="text-sm text-amber-800">
              Please read these terms carefully. Proceeding with an application
              implies full acceptance of these terms and conditions.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
