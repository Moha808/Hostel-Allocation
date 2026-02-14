import { motion } from "framer-motion";

export const AnalyticsChart = () => {
  const data = [
    { label: "Jan", value: 45 },
    { label: "Feb", value: 52 },
    { label: "Mar", value: 48 },
    { label: "Apr", value: 61 },
    { label: "May", value: 55 },
    { label: "Jun", value: 67 },
    { label: "Jul", value: 72 },
  ];

  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Occupancy Trends</h3>
          <p className="text-sm text-gray-500">Monthly bed allocation growth</p>
        </div>
        <select className="text-sm border-none bg-gray-50 rounded-lg p-2 outline-none font-medium">
          <option>Last 7 Months</option>
          <option>Yearly</option>
        </select>
      </div>

      <div className="flex items-end justify-between h-48 gap-2">
        {data.map((item, i) => (
          <div
            key={item.label}
            className="flex-1 flex flex-col items-center gap-2 group"
          >
            <div className="w-full relative flex items-end justify-center h-full">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${(item.value / maxValue) * 100}%` }}
                transition={{ duration: 1, delay: i * 0.1 }}
                className="w-full max-w-[32px] bg-blue-600 rounded-t-lg group-hover:bg-blue-700 transition-colors relative"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {item.value}% Occupied
                </div>
              </motion.div>
            </div>
            <span className="text-xs font-medium text-gray-400">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
