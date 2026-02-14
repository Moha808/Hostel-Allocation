import { Bell, CreditCard, BedDouble, Info, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Notification {
  id: number;
  title: string;
  desc: string;
  time: string;
  icon: any;
  unread: boolean;
}

interface NotificationDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationDropdown = ({
  isOpen,
  onClose,
}: NotificationDropdownProps) => {
  const notifications: Notification[] = [
    {
      id: 1,
      title: "Payment Successful",
      desc: "Your payment for the 2024 Session was confirmed.",
      time: "2 mins ago",
      icon: CreditCard,
      unread: true,
    },
    {
      id: 2,
      title: "Room Allocation",
      desc: "You have been allocated to Room 304, Block A.",
      time: "1 day ago",
      icon: BedDouble,
      unread: false,
    },
    {
      id: 3,
      title: "Clearance Required",
      desc: "Please visit the warden office for final clearance.",
      time: "2 days ago",
      icon: Info,
      unread: false,
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden"
          >
            <div className="p-4 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
              <h3 className="font-bold text-gray-900">Notifications</h3>
              <span className="text-xs font-bold text-blue-600 px-2 py-1 bg-blue-50 rounded-full">
                3 New
              </span>
            </div>

            <div className="max-h-[400px] overflow-y-auto">
              {notifications.map((notif) => (
                <div
                  key={notif.id}
                  className={`p-4 flex gap-4 hover:bg-gray-50 transition-colors cursor-pointer relative ${
                    notif.unread ? "bg-blue-50/30" : ""
                  }`}
                >
                  {notif.unread && (
                    <div className="absolute top-4 right-4 w-2 h-2 bg-blue-600 rounded-full" />
                  )}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                      notif.unread
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <notif.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">
                      {notif.title}
                    </h4>
                    <p className="text-sm text-gray-500 line-clamp-2 mt-0.5">
                      {notif.desc}
                    </p>
                    <span className="text-xs text-gray-400 mt-1 block">
                      {notif.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full p-4 text-center text-sm font-bold text-blue-600 hover:bg-gray-50 border-t border-gray-50 transition-colors">
              View All Notifications
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
