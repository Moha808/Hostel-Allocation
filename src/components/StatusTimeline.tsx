import { CheckCircle2, Circle } from "lucide-react";

export const StatusTimeline = () => {
  const steps = [
    {
      title: "Application Submitted",
      date: "Dec 10, 2024",
      status: "completed",
      desc: "Your registration was successfully received.",
    },
    {
      title: "Payment Verification",
      date: "Dec 12, 2024",
      status: "completed",
      desc: "Hostel fee payment has been confirmed.",
    },
    {
      title: "Room Allocation",
      date: "Dec 15, 2024",
      status: "completed",
      desc: "You have been assigned to Queen Amina Hall.",
    },
    {
      title: "Warden Clearance",
      date: "Pending",
      status: "current",
      desc: "Visit the hall warden for final clearance and keys.",
    },
    {
      title: "Move-in Ready",
      date: "Upcoming",
      status: "upcoming",
      desc: "Check-in details and luggage policy.",
    },
  ];

  return (
    <div className="space-y-8 py-4 px-2">
      {steps.map((step, i) => (
        <div key={i} className="relative flex gap-4">
          {i !== steps.length - 1 && (
            <div className="absolute left-[11px] top-6 w-[2px] h-full bg-gray-100" />
          )}

          <div className="relative z-10 pt-1">
            {step.status === "completed" ? (
              <CheckCircle2 className="w-6 h-6 text-green-500 bg-white" />
            ) : step.status === "current" ? (
              <div className="w-6 h-6 rounded-full border-2 border-blue-600 flex items-center justify-center bg-white">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              </div>
            ) : (
              <Circle className="w-6 h-6 text-gray-300 bg-white" />
            )}
          </div>

          <div className="flex-1 pb-6">
            <div className="flex justify-between items-start mb-1">
              <h4
                className={`font-bold ${
                  step.status === "upcoming" ? "text-gray-400" : "text-gray-900"
                }`}
              >
                {step.title}
              </h4>
              <span className="text-xs font-medium text-gray-400">
                {step.date}
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
