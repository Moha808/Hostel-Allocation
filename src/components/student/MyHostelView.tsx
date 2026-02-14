import { useState } from "react";
import { Modal } from "../Modal";
import { HostelSlip } from "./HostelSlip";
import {
  BedDouble,
  Building2,
  User,
  Phone,
  MapPin,
  Info,
  Download,
  Wrench,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { Button } from "../Button";

export const MyHostelView = () => {
  const [isSlipModalOpen, setSlipModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider">
                Currently Occupied
              </span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-blue-600 rounded-2xl text-white">
                <BedDouble className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Room 304, Block A
                </h3>
                <p className="text-gray-500 font-medium">
                  Queen Amina Hall (Female)
                </p>
              </div>
            </div>

            <div className="absolute top-16 right-0 p-4">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 bg-white"
                onClick={() => setSlipModalOpen(true)}
              >
                <Download className="w-4 h-4" /> Download Slip
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-6 border-y border-gray-100">
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold mb-1">
                  Floor
                </p>
                <p className="font-bold text-gray-900">3rd Floor</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold mb-1">
                  Room Type
                </p>
                <p className="font-bold text-gray-900">2-Man (Double)</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold mb-1">
                  Bed Number
                </p>
                <p className="font-bold text-gray-900">Bed 01 (Lower)</p>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Info className="w-4 h-4 text-gray-400" /> Room Amenities
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Reading Table",
                  "Ceiling Fan",
                  "Double Wardrobe",
                  "Mirror",
                  "2x Sockets",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-50 text-gray-600 rounded-lg text-sm border border-gray-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Roommates</h3>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold border-2 border-white">
                AW
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900">Alice Wilson</p>
                <p className="text-sm text-gray-500">
                  Computer Science • Final Year
                </p>
              </div>
              <button className="p-2 text-gray-400 hover:text-blue-600">
                <Phone className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-gray-400" /> Maintenance Tracker
            </h3>
            <div className="space-y-3">
              {[
                { issue: "Broken Fan", date: "Dec 14", status: "Fixed" },
                { issue: "Leaking Tap", date: "Dec 02", status: "Pending" },
              ].map((fault, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        fault.status === "Fixed"
                          ? "bg-green-100 text-green-600"
                          : "bg-orange-100 text-orange-600"
                      }`}
                    >
                      {fault.status === "Fixed" ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : (
                        <Clock className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">
                        {fault.issue}
                      </p>
                      <p className="text-xs text-gray-500">
                        Reported on {fault.date}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${
                      fault.status === "Fixed"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {fault.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-900 p-6 rounded-2xl text-white shadow-xl">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-gray-400" /> Hall Warden
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold">Mrs. Ogunleye</p>
                  <p className="text-xs text-gray-400">Hall Warden</p>
                </div>
              </div>
              <div className="pt-4 space-y-3 border-t border-gray-800">
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <Phone className="w-4 h-4" /> 0801 234 5678
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <MapPin className="w-4 h-4" /> Warden's Lodge, Ground Floor
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isSlipModalOpen}
        onClose={() => setSlipModalOpen(false)}
        title="Allocation & Clearance Slip"
      >
        <HostelSlip />
      </Modal>
    </div>
  );
};
