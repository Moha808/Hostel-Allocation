import { Button } from "../components/Button";
import { FileText } from "lucide-react";

export const RulesView = ({ onClose }: { onClose: () => void }) => {
  const rules = [
    "Quiet hours are from 10:00 PM to 6:00 AM daily.",
    "Squatting (hosting unauthorized persons) is strictly prohibited.",
    "Cooking is in designated kitchen areas only. No cooking in rooms.",
    "Electrical appliances like hot plates and heavy heaters are banned.",
    "Visitors are not allowed in the rooms after 8:00 PM.",
    "Defacing walls or school property will attract a fine.",
    "Fighting or physical assault leads to immediate expulsion from the hostel.",
  ];

  return (
    <div className="space-y-6">
      <ul className="space-y-4">
        {rules.map((rule, index) => (
          <li key={index} className="flex gap-3 text-gray-700">
            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 text-sm font-bold">
              {index + 1}
            </div>
            <span className="leading-relaxed">{rule}</span>
          </li>
        ))}
      </ul>

      <div className="bg-blue-50 p-4 rounded-xl flex items-center gap-3">
        <FileText className="w-5 h-5 text-blue-600" />
        <p className="text-sm text-blue-800 font-medium">
          By residing in the hostel, you agree to abide by these rules.
        </p>
      </div>

      <div className="flex justify-end">
        <Button onClick={onClose}>I Understand</Button>
      </div>
    </div>
  );
};
