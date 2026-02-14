import React from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />

      {/* Premium Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <div className="w-5 h-5 border-2 border-white rounded-sm" />
                </div>
                <span className="text-xl font-bold">HostelAlloc</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Modernizing campus accommodation with smart digital solutions
                for the next generation of students.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-blue-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Contact Support
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Student Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin-login"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Admin Portal
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Hostel Rules
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li>support@hostelalloc.edu</li>
                <li>+234 800 HOSTEL</li>
                <li>University Campus, Main Gate</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">
              © 2024 HostelAlloc System. All rights reserved.
            </p>
            <div className="flex gap-6">
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <div className="w-4 h-4 rounded-sm border border-white/50" />
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <div className="w-4 h-4 rounded-sm border border-white/50" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
