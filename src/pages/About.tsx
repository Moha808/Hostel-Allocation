import { Navbar } from "../components/Navbar";
import { CheckCircle, Target, Shield } from "lucide-react";

export const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <div className="bg-blue-600 py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-900 opacity-90" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About HostelAlloc
          </h1>
          <p className="text-xl text-blue-100">
            Revolutionizing campus accommodation with technology, transparency,
            and ease.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              To provide a fair, transparent, and efficient hostel allocation
              system that eliminates the stress of accommodation hunting for
              students while providing administrators with powerful tools for
              facility management.
            </p>
          </div>
          <div>
            <div className="bg-indigo-50 w-12 h-12 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
              <Shield className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why We Exist
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Manual allocation processes are plagued by overcrowding,
              favoritism, and data loss. We exist to digitize this process,
              ensuring every student has equal access to safe and comfortable
              accommodation.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gray-50 rounded-3xl p-12 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10k+", label: "Students Served" },
              { number: "5", label: "Partner Institutions" },
              { number: "99%", label: "Allocation Accuracy" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, i) => (
              <div key={i}>
                <h3 className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparency",
                desc: "Open and rule-based allocation with no hidden processes.",
              },
              {
                title: "Efficiency",
                desc: "Saving thousands of hours for both students and staff.",
              },
              {
                title: "Innovation",
                desc: "Constantly improving with feedback from our user community.",
              },
            ].map((val, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {val.title}
                </h3>
                <p className="text-gray-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400">
            © 2024 HostelAlloc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
