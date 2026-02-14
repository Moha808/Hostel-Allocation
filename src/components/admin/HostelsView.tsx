import React from "react";
import { Button } from "../Button";
import { Building2, Users as UsersIcon, Home, Plus } from "lucide-react";

export const HostelsView = () => {
  const hostels = [
    {
      name: "Queen Amina Hall",
      type: "Female",
      blocks: 4,
      rooms: 120,
      occupancy: "85%",
    },
    {
      name: "Sultan Bello Hall",
      type: "Male",
      blocks: 3,
      rooms: 90,
      occupancy: "92%",
    },
    {
      name: "Moremi Hall",
      type: "Female",
      blocks: 2,
      rooms: 60,
      occupancy: "60%",
    },
    { name: "Zik Hall", type: "Male", blocks: 5, rooms: 150, occupancy: "45%" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Hostels & Rooms</h2>
        <Button className="gap-2">
          <Plus className="w-4 h-4" /> Add New Hostel
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {hostels.map((hostel, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div
                className={`p-3 rounded-xl ${
                  hostel.type === "Male"
                    ? "bg-blue-50 text-blue-600"
                    : "bg-pink-50 text-pink-600"
                }`}
              >
                <Home className="w-6 h-6" />
              </div>
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  hostel.type === "Male"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-pink-100 text-pink-700"
                }`}
              >
                {hostel.type}
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {hostel.name}
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-500">
                <span>Blocks</span>
                <span className="font-medium text-gray-900">
                  {hostel.blocks}
                </span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Total Rooms</span>
                <span className="font-medium text-gray-900">
                  {hostel.rooms}
                </span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Occupancy</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{ width: hostel.occupancy }}
                    />
                  </div>
                  <span className="font-medium text-gray-900">
                    {hostel.occupancy}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
