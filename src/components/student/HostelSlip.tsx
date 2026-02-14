import {
  Printer,
  Shield,
  User,
  Building2,
  MapPin,
  Calendar,
  CheckCircle2,
  Download,
} from "lucide-react";
import { Button } from "../Button";

export const HostelSlip = () => {
  const studentData = {
    name: "John Doe",
    matric: "SCI/22/0045",
    hall: "Queen Amina Hall",
    room: "304",
    block: "Block A",
    session: "2024/2025",
    date: "Dec 30, 2024",
    ref: "HAL-8829-X",
  };

  return (
    <div className="space-y-6">
      <div className="p-8 bg-white border-2 border-dashed border-gray-200 rounded-3xl relative overflow-hidden print:border-solid print:p-0">
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none rotate-12">
          <Shield className="w-96 h-96" />
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col items-center text-center pb-8 border-b border-gray-100 mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-100">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight">
              University Hostel Management
            </h2>
            <p className="text-gray-500 font-bold text-sm tracking-widest uppercase mt-1">
              Allocation & Clearance Slip
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-y-8 gap-x-12">
            <div className="space-y-1">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                Student Name
              </p>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-blue-600" />
                <p className="font-bold text-gray-900">{studentData.name}</p>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                Matric Number
              </p>
              <p className="font-mono font-bold text-gray-900">
                {studentData.matric}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                Allocated Hall
              </p>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-600" />
                <p className="font-bold text-gray-900">{studentData.hall}</p>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                Room & Block
              </p>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <p className="font-bold text-gray-900">
                  Room {studentData.room}, {studentData.block}
                </p>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                Academic Session
              </p>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                <p className="font-bold text-gray-900">{studentData.session}</p>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                Reference ID
              </p>
              <p className="text-sm font-bold text-blue-600">
                {studentData.ref}
              </p>
            </div>
          </div>

          <div className="mt-12 p-4 bg-green-50 rounded-2xl border border-green-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 text-green-600 rounded-full">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-black text-green-800 uppercase tracking-widest">
                  Status
                </p>
                <p className="font-bold text-green-700">
                  Fully Allocated & Verified
                </p>
              </div>
            </div>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=HAL-8829-X"
              alt="Verification QR"
              className="w-12 h-12 grayscale"
            />
          </div>

          <div className="mt-8 pt-8 border-t border-gray-100 flex justify-between items-end">
            <div>
              <div className="w-32 h-12 border-b-2 border-gray-300 mb-2" />
              <p className="text-[10px] font-bold text-gray-400 uppercase">
                Warden's Signature
              </p>
            </div>
            <div className="text-right text-[10px] text-gray-400 font-medium italic">
              Issued on {studentData.date}
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Button
          variant="outline"
          className="flex-1 gap-2"
          onClick={() => window.print()}
        >
          <Printer className="w-4 h-4" /> Print Document
        </Button>
        <Button className="flex-1 gap-2">
          <Download className="w-4 h-4" /> Save as PDF
        </Button>
      </div>
    </div>
  );
};
