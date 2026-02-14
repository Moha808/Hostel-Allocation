import React, { useState } from "react";
import { Button } from "../components/Button";
import { BedDouble, Building2, CheckCircle, AlertCircle } from "lucide-react";

interface ApplicationProps {
  onSuccess: () => void;
  onCancel: () => void;
}

export const HostelApplicationForm = ({
  onSuccess,
  onCancel,
}: ApplicationProps) => {
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState({
    hostelType: "",
    block: "",
    roomType: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate processing
    setTimeout(() => {
      onSuccess();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center gap-4 mb-2">
        <div
          className={`flex-1 h-2 rounded-full ${
            step >= 1 ? "bg-blue-600" : "bg-gray-200"
          }`}
        />
        <div
          className={`flex-1 h-2 rounded-full ${
            step >= 2 ? "bg-blue-600" : "bg-gray-200"
          }`}
        />
        <div
          className={`flex-1 h-2 rounded-full ${
            step >= 3 ? "bg-blue-600" : "bg-gray-200"
          }`}
        />
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <h4 className="text-lg font-medium text-gray-900">
            Choose Hostel Category
          </h4>
          <div className="grid grid-cols-1 gap-3">
            {["Undergraduate Male", "Undergraduate Female", "Postgraduate"].map(
              (type) => (
                <div
                  key={type}
                  className={`p-4 border rounded-xl cursor-pointer transition-all flex items-center justify-between ${
                    selection.hostelType === type
                      ? "border-blue-600 bg-blue-50 text-blue-700"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                  onClick={() =>
                    setSelection({ ...selection, hostelType: type })
                  }
                >
                  <span className="font-medium">{type}</span>
                  {selection.hostelType === type && (
                    <CheckCircle className="w-5 h-5" />
                  )}
                </div>
              )
            )}
          </div>
          <div className="pt-4 flex justify-end">
            <Button
              type="button"
              onClick={() => setStep(2)}
              disabled={!selection.hostelType}
            >
              Next Step
            </Button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h4 className="text-lg font-medium text-gray-900">
            Select Block & Room Type
          </h4>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Block
            </label>
            <select
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              value={selection.block}
              onChange={(e) =>
                setSelection({ ...selection, block: e.target.value })
              }
            >
              <option value="">Select a block</option>
              <option value="Block A">Block A (New Building)</option>
              <option value="Block B">Block B (Main Hall)</option>
              <option value="Block C">Block C (Extension)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Room Type
            </label>
            <select
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              value={selection.roomType}
              onChange={(e) =>
                setSelection({ ...selection, roomType: e.target.value })
              }
            >
              <option value="">Select room type</option>
              <option value="2-man">2-Man Room (₦50,000)</option>
              <option value="4-man">4-Man Room (₦30,000)</option>
              <option value="8-man">8-Man Room (₦15,000)</option>
            </select>
          </div>

          <div className="bg-yellow-50 p-3 rounded-lg flex gap-2 text-sm text-yellow-700">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <p>
              Allocation is subject to availability. Spaces are assigned on a
              first-come, first-served basis.
            </p>
          </div>

          <div className="pt-4 flex justify-between">
            <Button variant="ghost" type="button" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button
              type="button"
              onClick={() => setStep(3)}
              disabled={!selection.block || !selection.roomType}
            >
              Review
            </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <h4 className="text-lg font-medium text-gray-900">
            Confirm Application
          </h4>

          <div className="bg-gray-50 p-4 rounded-xl space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-500">Category</span>
              <span className="font-medium text-gray-900">
                {selection.hostelType}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Block</span>
              <span className="font-medium text-gray-900">
                {selection.block}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Room Type</span>
              <span className="font-medium text-gray-900">
                {selection.roomType}
              </span>
            </div>
          </div>

          <div className="pt-2 flex justify-between">
            <Button variant="ghost" type="button" onClick={() => setStep(2)}>
              Back
            </Button>
            <Button type="submit">Submit Application</Button>
          </div>
        </div>
      )}
    </form>
  );
};
