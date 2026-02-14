import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import {
  ShieldCheck,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Loader2,
  ChevronLeft,
} from "lucide-react";
import { motion } from "framer-motion";

export const AdminLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate("/admin-dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Panel - Hero/Branding (Darker/Pro theme for Admin) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 opacity-90 z-10" />
        <img
          src="/hostel-bg.png"
          alt="Hostel Administration"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-30"
        />
        <div className="relative z-20 flex flex-col justify-between h-full p-12 text-white">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-white/10 p-2 rounded-lg backdrop-blur-md border border-white/10">
                <ShieldCheck className="w-6 h-6 text-blue-400" />
              </div>
              <span className="text-2xl font-bold">HostelAdmin</span>
            </div>
            <p className="text-gray-400">Management & Allocation Portal</p>
          </div>

          <div className="max-w-md">
            <h2 className="text-4xl font-bold mb-6 text-blue-400">
              Control Center
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              "Efficiency in management leads to excellence in service. Securely
              manage students, rooms, and payments from one central location."
            </p>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-200">
                  System Secure & Online
                </span>
              </div>
              <p className="text-xs text-gray-500">
                Authorized personnel only. All login attempts are logged for
                security purposes.
              </p>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            © 2024 HostelAlloc Admin Terminal.
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white lg:bg-gray-50/30">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md space-y-8"
        >
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-4 mb-6">
              <Link
                to="/"
                className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 transition-colors group"
              >
                <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
              <div className="w-px h-4 bg-gray-300" />
              <button
                onClick={() => navigate("/login")}
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
              >
                Student Login
              </button>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Admin Terminal</h2>
            <p className="mt-2 text-gray-600">
              Please enter your administrative credentials to continue.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Admin Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <input
                    type="email"
                    required
                    className="block w-full pl-10 pr-3 py-2.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all outline-none"
                    placeholder="admin@university.edu"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-sm font-medium text-blue-600 hover:text-blue-500"
                  >
                    Reset Security Keys?
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Lock className="h-5 w-5" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    className="block w-full pl-10 pr-10 py-2.5 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all outline-none"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full py-3 text-lg font-semibold bg-gray-900 hover:bg-black border-none shadow-xl shadow-gray-200"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Authenticating...
                </>
              ) : (
                <>
                  Access Terminal <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>

            <div className="pt-4 text-center">
              <p className="text-xs text-gray-400 flex items-center justify-center gap-2">
                <ShieldCheck className="w-3 h-3" />
                Secure 256-bit encrypted connection
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
