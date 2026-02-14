import React, { useState } from "react";
import { Button } from "../components/Button";
import { AlertTriangle, Send } from "lucide-react";

export const ReportFaultForm = ({ onClose }: { onClose: () => void }) => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onClose();
      alert("Fault Reported Successfully. Maintenance will be notified.");
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="bg-yellow-50 p-4 rounded-xl flex gap-3 text-yellow-800">
        <AlertTriangle className="w-5 h-5 shrink-0" />
        <p className="text-sm">
          Please provide detailed information about the issue to help our
          maintenance team fix it quickly.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Issue Type
        </label>
        <select className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 outline-none">
          <option>Electrical</option>
          <option>Plumbing</option>
          <option>Furniture</option>
          <option>Structural</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <textarea
          rows={4}
          className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 outline-none"
          placeholder="e.g., The fan in my room is making a loud noise..."
          required
        />
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <Button type="button" variant="ghost" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" disabled={submitting}>
          {submitting ? "Submitting..." : "Report Issue"}
        </Button>
      </div>
    </form>
  );
};
