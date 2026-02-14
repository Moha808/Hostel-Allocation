import React, { useState } from "react";
import { Button } from "../components/Button";
import { User, Mail, Hash, BookOpen } from "lucide-react";

export const ProfileView = () => {
  // Mock user data
  const [user, setUser] = useState({
    name: "John Doe",
    matric: "ENG/20/1234",
    email: "john.doe@university.edu",
    department: "Computer Science",
    level: "200 Level",
    phone: "08123456789",
  });

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Personal Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Full Name
            </label>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <User className="w-5 h-5 text-gray-400" />
              <span className="text-gray-900 font-medium">{user.name}</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Matric Number
            </label>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Hash className="w-5 h-5 text-gray-400" />
              <span className="text-gray-900 font-medium">{user.matric}</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Email Address
            </label>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Mail className="w-5 h-5 text-gray-400" />
              <span className="text-gray-900 font-medium">{user.email}</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Department
            </label>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <BookOpen className="w-5 h-5 text-gray-400" />
              <span className="text-gray-900 font-medium">
                {user.department}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Button variant="outline">Edit Profile</Button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          Accommodation History
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500 font-medium">
              <tr>
                <th className="px-4 py-3">Session</th>
                <th className="px-4 py-3">Hostel</th>
                <th className="px-4 py-3">Room</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3">2023/2024</td>
                <td className="px-4 py-3">Queen Amina Hall</td>
                <td className="px-4 py-3">Block A, 304</td>
                <td className="px-4 py-3">
                  <span className="text-green-600 font-medium">Completed</span>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3">2022/2023</td>
                <td className="px-4 py-3">Sultan Bello Hall</td>
                <td className="px-4 py-3">Block C, 102</td>
                <td className="px-4 py-3">
                  <span className="text-green-600 font-medium">Completed</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
