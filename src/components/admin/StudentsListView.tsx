import React from "react";
import {
  Search,
  Filter,
  MoreVertical,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "../Button";

export const StudentsListView = () => {
  const students = [
    {
      name: "Alice Johnson",
      matric: "SCI/21/0042",
      email: "alice.j@uni.edu",
      level: "300L",
      hostel: "Queen Amina",
      room: "A204",
    },
    {
      name: "Michael Smith",
      matric: "ENG/20/1182",
      email: "m.smith@uni.edu",
      level: "400L",
      hostel: "Sultan Bello",
      room: "C102",
    },
    {
      name: "Sarah Wilson",
      matric: "ART/21/0445",
      email: "sarah.w@uni.edu",
      level: "300L",
      hostel: "Queen Amina",
      room: "B301",
    },
    {
      name: "John Doe",
      matric: "ENG/20/1234",
      email: "john.d@uni.edu",
      level: "200L",
      hostel: "Sultan Bello",
      room: "A304",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Student Directory</h2>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search students..."
              className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-100"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="w-4 h-4" /> Filter
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-100">
              <tr>
                <th className="px-6 py-4">Student Info</th>
                <th className="px-6 py-4">Level</th>
                <th className="px-6 py-4">Current Allocation</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {students.map((student, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-bold text-gray-900">{student.name}</p>
                      <p className="text-xs text-gray-500">{student.matric}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{student.level}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900">
                        {student.hostel}
                      </span>
                      <span className="text-xs text-gray-500">
                        Room {student.room}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                        <Mail className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                        <Phone className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
