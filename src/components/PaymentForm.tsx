import { useState } from "react";
import { Button } from "../components/Button";
import { CreditCard, Lock, CheckCircle, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

interface PaymentProps {
  onSuccess: () => void;
  onCancel: () => void;
}

export const PaymentForm = ({ onSuccess, onCancel }: PaymentProps) => {
  const [method, setMethod] = useState("");
  const [processing, setProcessing] = useState(false);

  const handlePayment = () => {
    setProcessing(true);
    // Simulate gateway delay
    setTimeout(() => {
      setProcessing(false);
      onSuccess();
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-xl flex items-start gap-3">
        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
          <CreditCard className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Hostel Fee: ₦30,000</h4>
          <p className="text-sm text-gray-600">
            Session 2024/2025 • Block A, Room 304
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <h5 className="font-medium text-gray-900">Select Payment Method</h5>
        <div className="grid grid-cols-1 gap-3">
          {[
            {
              id: "card",
              label: "Debit Card",
              icon: CreditCard,
              sub: "Visa, Mastercard, Verve",
            },
            {
              id: "transfer",
              label: "Bank Transfer",
              icon: Smartphone,
              sub: "Instant transfer",
            },
          ].map((opt) => (
            <div
              key={opt.id}
              className={`p-4 border rounded-xl cursor-pointer transition-all flex items-center gap-3 ${
                method === opt.id
                  ? "border-blue-600 bg-blue-50 ring-1 ring-blue-600"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => setMethod(opt.id)}
            >
              <div
                className={`p-2 rounded-lg ${
                  method === opt.id
                    ? "bg-blue-200 text-blue-700"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                <opt.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p
                  className={`font-medium ${
                    method === opt.id ? "text-blue-900" : "text-gray-900"
                  }`}
                >
                  {opt.label}
                </p>
                <p className="text-xs text-gray-500">{opt.sub}</p>
              </div>
              {method === opt.id && (
                <CheckCircle className="w-5 h-5 text-blue-600" />
              )}
            </div>
          ))}
        </div>
      </div>

      {method && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-4"
        >
          {method === "card" && (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Card Number"
                className="w-full p-3 border rounded-lg bg-white"
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full p-3 border rounded-lg bg-white"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="w-full p-3 border rounded-lg bg-white"
                />
              </div>
            </div>
          )}
          {method === "transfer" && (
            <div className="text-center py-4">
              <p className="text-sm font-medium text-gray-600 mb-2">
                Transfer ₦30,000 to:
              </p>
              <h3 className="text-xl font-bold font-mono">1234567890</h3>
              <p className="text-sm text-gray-500">GTBank • HostelAlloc Ltd</p>
            </div>
          )}
        </motion.div>
      )}

      <div className="pt-4 flex items-center justify-between gap-4">
        <Button variant="ghost" className="flex-1" onClick={onCancel}>
          Cancel
        </Button>
        <Button
          className="flex-1"
          disabled={!method || processing}
          onClick={handlePayment}
        >
          {processing ? "Processing..." : "Pay Now ₦30,000"}
        </Button>
      </div>

      <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
        <Lock className="w-3 h-3" />
        <span>Secured by Flutterwave</span>
      </div>
    </div>
  );
};
