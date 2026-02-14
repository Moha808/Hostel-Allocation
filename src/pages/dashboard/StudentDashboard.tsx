import React, { useState } from "react";
import {
  LayoutDashboard,
  BedDouble,
  CreditCard,
  History,
  User,
  LogOut,
  Bell,
  Menu,
  X,
  Search,
} from "lucide-react";
import { Button } from "../../components/Button";
import { Modal } from "../../components/Modal";
import { HostelApplicationForm } from "../../components/HostelApplicationForm";
import { PaymentForm } from "../../components/PaymentForm";
import { ProfileView } from "../../components/ProfileView";
import { ReportFaultForm } from "../../components/ReportFaultForm";
import { RulesView } from "../../components/RulesView";
import { MyHostelView } from "../../components/student/MyHostelView";
import { PaymentsView } from "../../components/student/PaymentsView";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { LogoutModal } from "../../components/LogoutModal";
import { StatusTimeline } from "../../components/StatusTimeline";
import { NotificationDropdown } from "../../components/NotificationDropdown";

const SidebarItem = ({ icon: Icon, label, active, onClick }: any) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
      active
        ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
        : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
    }`}
  >
    <Icon className="w-5 h-5" />
    <span className="font-medium">{label}</span>
  </button>
);

export const StudentDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isApplicationModalOpen, setApplicationModalOpen] = useState(false);
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  const [isFaultModalOpen, setFaultModalOpen] = useState(false);
  const [isRulesModalOpen, setRulesModalOpen] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const [isStatusModalOpen, setStatusModalOpen] = useState(false);
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);

  const handleApplicationSuccess = () => {
    setApplicationModalOpen(false);
    // You would typically show a success toast here
    alert("Application Submitted Successfully!");
  };

  const handlePaymentSuccess = () => {
    setPaymentModalOpen(false);
    alert("Payment Successful! Receipt sent to your email.");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="bg-blue-600 p-2 rounded-lg">
              <BedDouble className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">HostelAlloc</span>
          </div>

          <div className="space-y-2 flex-1">
            <SidebarItem
              icon={LayoutDashboard}
              label="Overview"
              active={activeTab === "dashboard"}
              onClick={() => setActiveTab("dashboard")}
            />
            <SidebarItem
              icon={BedDouble}
              label="My Hostel"
              active={activeTab === "hostel"}
              onClick={() => setActiveTab("hostel")}
            />
            <SidebarItem
              icon={CreditCard}
              label="Payments"
              active={activeTab === "payments"}
              onClick={() => setActiveTab("payments")}
            />
            <SidebarItem
              icon={History}
              label="History"
              active={activeTab === "history"}
              onClick={() => setActiveTab("history")}
            />
            <SidebarItem
              icon={User}
              label="Profile"
              active={activeTab === "profile"}
              onClick={() => setActiveTab("profile")}
            />
          </div>

          <div className="border-t border-gray-100 pt-6">
            <button
              onClick={() => setLogoutModalOpen(true)}
              className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Log Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Topbar */}
        <header className="bg-white border-b border-gray-200 h-16 px-4 lg:px-8 flex items-center justify-between sticky top-0 z-30">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex-1 max-w-xl mx-4 hidden lg:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!isNotificationsOpen)}
                className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <NotificationDropdown
                isOpen={isNotificationsOpen}
                onClose={() => setNotificationsOpen(false)}
              />
            </div>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-gray-900">John Doe</p>
                <p className="text-xs text-gray-500">
                  Computer Science • Year 2
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold border-2 border-white shadow-sm">
                JD
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Welcome Section */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Hello, John! 👋
              </h1>
              <p className="text-gray-600">
                Here's what's happening with your accommodation.
              </p>
            </div>

            {activeTab === "profile" ? (
              <ProfileView />
            ) : activeTab === "hostel" ? (
              <MyHostelView />
            ) : activeTab === "payments" ? (
              <PaymentsView />
            ) : activeTab === "history" ? (
              <div className="bg-white p-12 rounded-3xl border border-dashed border-gray-200 text-center">
                <History className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900">
                  Allocation History
                </h3>
                <p className="text-gray-500 max-w-sm mx-auto">
                  A record of all your previous hostel allocations and room
                  changes across all academic sessions.
                </p>
              </div>
            ) : (
              <>
                {/* Status Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-lg shadow-blue-200">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                        <BedDouble className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium backdrop-blur-sm">
                        Approved
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold mb-1">Room 304</h3>
                    <p className="text-blue-100">Block A • Queen Amina Hall</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                        <CreditCard className="w-6 h-6" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-1 text-gray-900">
                      Paid
                    </h3>
                    <p className="text-gray-500">Session 2024/2025</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                        <History className="w-6 h-6" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold mb-1 text-gray-900">
                      12 Days
                    </h3>
                    <p className="text-gray-500">Remaining in Session</p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div>
                  <h2 className="text-lg font-bold text-gray-900 mb-4">
                    Quick Actions
                  </h2>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <button
                      onClick={() => setApplicationModalOpen(true)}
                      className="p-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-blue-300 transition-all text-left group"
                    >
                      <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <LayoutDashboard className="w-4 h-4" />
                      </div>
                      <span className="font-medium text-gray-700">
                        Apply for Hostel
                      </span>
                    </button>
                    {[
                      "Make Payment",
                      "Check Status",
                      "Report Fault",
                      "View Rules",
                    ].map((action, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          if (action === "Make Payment")
                            setPaymentModalOpen(true);
                          if (action === "Check Status")
                            setStatusModalOpen(true);
                          if (action === "Report Fault")
                            setFaultModalOpen(true);
                          if (action === "View Rules") setRulesModalOpen(true);
                        }}
                        className="p-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-blue-300 transition-all text-left group"
                      >
                        <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <LayoutDashboard className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-gray-700">
                          {action}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recent Activity */}
                <div>
                  <h2 className="text-lg font-bold text-gray-900 mb-4">
                    Recent Notifications
                  </h2>
                  <div className="bg-white rounded-2xl border border-gray-200 divide-y divide-gray-100">
                    {[
                      {
                        title: "Payment Successful",
                        desc: "Your payment for the 2024 Session was confirmed.",
                        time: "2 mins ago",
                        icon: CreditCard,
                      },
                      {
                        title: "Room Allocation",
                        desc: "You have been allocated to Room 304, Block A.",
                        time: "1 day ago",
                        icon: BedDouble,
                      },
                      {
                        title: "System Maintenance",
                        desc: "The portal will be down for maintenance on Sunday.",
                        time: "2 days ago",
                        icon: Bell,
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="p-4 flex gap-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 shrink-0">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-500">{item.desc}</p>
                          <span className="text-xs text-gray-400 mt-1 block">
                            {item.time}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </main>
      </div>

      <Modal
        isOpen={isApplicationModalOpen}
        onClose={() => setApplicationModalOpen(false)}
        title="Hostel Application"
      >
        <HostelApplicationForm
          onSuccess={handleApplicationSuccess}
          onCancel={() => setApplicationModalOpen(false)}
        />
      </Modal>

      <Modal
        isOpen={isPaymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        title="Secure Payment"
      >
        <PaymentForm
          onSuccess={handlePaymentSuccess}
          onCancel={() => setPaymentModalOpen(false)}
        />
      </Modal>

      <Modal
        isOpen={isFaultModalOpen}
        onClose={() => setFaultModalOpen(false)}
        title="Report a Fault"
      >
        <ReportFaultForm onClose={() => setFaultModalOpen(false)} />
      </Modal>

      <Modal
        isOpen={isRulesModalOpen}
        onClose={() => setRulesModalOpen(false)}
        title="Hostel Rules & Regulations"
      >
        <RulesView onClose={() => setRulesModalOpen(false)} />
      </Modal>
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setLogoutModalOpen(false)}
        onConfirm={() => navigate("/")}
      />

      <Modal
        isOpen={isStatusModalOpen}
        onClose={() => setStatusModalOpen(false)}
        title="Application Status Timeline"
      >
        <StatusTimeline />
      </Modal>
    </div>
  );
};
