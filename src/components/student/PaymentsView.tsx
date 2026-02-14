import { Download } from "lucide-react";
import { Button } from "../Button";

export const PaymentsView = () => {
  const transactions = [
    {
      id: "TRX-9821",
      type: "Hostel Fee",
      amount: "₦30,000",
      status: "Success",
      date: "Dec 12, 2024",
    },
    {
      id: "TRX-1123",
      type: "Maintenance Fund",
      amount: "₦2,500",
      status: "Success",
      date: "Oct 05, 2024",
    },
    {
      id: "TRX-0045",
      type: "Application Fee",
      amount: "₦1,000",
      status: "Success",
      date: "Sep 29, 2024",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Current Balance</h3>
          <p className="text-gray-500">You have no outstanding payments.</p>
        </div>
        <div className="text-3xl font-bold text-green-600">₦0.00</div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h4 className="font-bold text-gray-900">Transaction History</h4>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="w-4 h-4" /> Export
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500">
              <tr>
                <th className="px-6 py-4">Transaction ID</th>
                <th className="px-6 py-4">Type</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {transactions.map((tx, i) => (
                <tr
                  key={i}
                  className="hover:bg-gray-50 transition-colors text-gray-700"
                >
                  <td className="px-6 py-4 font-mono text-sm">{tx.id}</td>
                  <td className="px-6 py-4 font-medium">{tx.type}</td>
                  <td className="px-6 py-4 text-gray-500">{tx.date}</td>
                  <td className="px-6 py-4 font-bold">{tx.amount}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700">
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      View
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
