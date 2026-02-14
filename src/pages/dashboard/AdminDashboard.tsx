import { useState } from "react";
import {
  LayoutDashboard,
  Building2,
  Users,
  FileText,
  Settings,
  LogOut,
  Bell,
  Menu,
  Search,
  MoreVertical,
} from "lucide-react";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { HostelsView } from "../../components/admin/HostelsView";
import { StudentsListView } from "../../components/admin/StudentsListView";
import { LogoutModal } from "../../components/LogoutModal";
import { NotificationDropdown } from "../../components/NotificationDropdown";
import { AnalyticsChart } from "../../components/admin/AnalyticsChart";

const SidebarItem = ({ icon: Icon, label, active, onClick }: any) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
      active
        ? "bg-gray-900 text-white shadow-lg"
        : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
    }`}
  >
    <Icon className="w-5 h-5" />
    <span className="font-medium">{label}</span>
  </button>
);

export const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);

  const handleLogout = () => {
    setLogoutModalOpen(true);
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
            <div className="bg-gray-900 p-2 rounded-lg">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">HostelAdmin</span>
          </div>

          <div className="space-y-2 flex-1">
            <SidebarItem
              icon={LayoutDashboard}
              label="Overview"
              active={activeTab === "dashboard"}
              onClick={() => setActiveTab("dashboard")}
            />
            <SidebarItem
              icon={Building2}
              label="Hostels & Rooms"
              active={activeTab === "hostels"}
              onClick={() => setActiveTab("hostels")}
            />
            <SidebarItem
              icon={Users}
              label="Students"
              active={activeTab === "students"}
              onClick={() => setActiveTab("students")}
            />
            <SidebarItem
              icon={FileText}
              label="Applications"
              active={activeTab === "applications"}
              onClick={() => setActiveTab("applications")}
            />
            <SidebarItem
              icon={Settings}
              label="Settings"
              active={activeTab === "settings"}
              onClick={() => setActiveTab("settings")}
            />
          </div>

          <div className="border-t border-gray-100 pt-6">
            <button
              onClick={handleLogout}
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
                placeholder="Search students, rooms..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-gray-400"
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
                <p className="text-sm font-semibold text-gray-900">
                  Administrator
                </p>
                <p className="text-xs text-gray-500">Super Admin</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold border-2 border-white shadow-sm">
                AD
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-8">
            {activeTab === "dashboard" && (
              <>
                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    {
                      label: "Total Students",
                      value: "2,450",
                      change: "+12%",
                      color: "blue",
                    },
                    {
                      label: "Available Beds",
                      value: "340",
                      change: "-5%",
                      color: "green",
                    },
                    {
                      label: "Pending Requests",
                      value: "18",
                      change: "+2",
                      color: "orange",
                    },
                    {
                      label: "Total Revenue",
                      value: "₦45.2M",
                      change: "+8%",
                      color: "purple",
                    },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm"
                    >
                      <p className="text-sm font-medium text-gray-500 mb-1">
                        {stat.label}
                      </p>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {stat.value}
                      </h3>
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-${stat.color}-50 text-${stat.color}-700`}
                      >
                        {stat.change} from last month
                      </span>
                    </div>
                  ))}
                </div>

                {/* Analytics and Insights */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <AnalyticsChart />
                  </div>
                  <div className="bg-gradient-to-br from-blue-900 to-indigo-950 rounded-2xl p-8 text-white relative overflow-hidden shadow-xl shadow-blue-100">
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-2">Smart Insights</h3>
                      <p className="text-blue-200 text-sm mb-6">
                        Our predictive model suggests allocating 4th-year
                        students to Block C for proximity to labs.
                      </p>
                      <button className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-sm font-bold transition-colors w-full">
                        View Recommendations
                      </button>
                    </div>
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
                  </div>
                </div>

                {/* Recent Applications Table */}
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                    <h2 className="text-lg font-bold text-gray-900">
                      Recent Applications
                    </h2>
                    <Button variant="outline" size="sm">
                      View All
                    </Button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                      <thead className="bg-gray-50 text-gray-500 font-medium">
                        <tr>
                          <th className="px-6 py-4">Student</th>
                          <th className="px-6 py-4">Matric No</th>
                          <th className="px-6 py-4">Requested Hostel</th>
                          <th className="px-6 py-4">Status</th>
                          <th className="px-6 py-4">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {[
                          {
                            name: "Alice Johnson",
                            mat: "SCI/21/0042",
                            hostel: "Queen Amina (Female)",
                            status: "Pending",
                          },
                          {
                            name: "Michael Smith",
                            mat: "ENG/20/1182",
                            hostel: "Sultan Bello (Male)",
                            status: "Approved",
                          },
                          {
                            name: "David Brown",
                            mat: "SOC/22/0921",
                            hostel: "Sultan Bello (Male)",
                            status: "Rejected",
                          },
                          {
                            name: "Sarah Wilson",
                            mat: "ART/21/0445",
                            hostel: "Queen Amina (Female)",
                            status: "Pending",
                          },
                        ].map((row, i) => (
                          <tr
                            key={i}
                            className="hover:bg-gray-50 transition-colors"
                          >
                            <td className="px-6 py-4 font-medium text-gray-900">
                              {row.name}
                            </td>
                            <td className="px-6 py-4 text-gray-500">
                              {row.mat}
                            </td>
                            <td className="px-6 py-4 text-gray-500">
                              {row.hostel}
                            </td>
                            <td className="px-6 py-4">
                              <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                            ${
                              row.status === "Approved"
                                ? "bg-green-100 text-green-700"
                                : row.status === "Pending"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-red-100 text-red-700"
                            }`}
                              >
                                {row.status}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <button className="text-gray-400 hover:text-gray-600">
                                <MoreVertical className="w-5 h-5" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            {activeTab === "hostels" && <HostelsView />}
            {activeTab === "students" && <StudentsListView />}
            {activeTab === "applications" && (
              <div className="bg-white p-12 rounded-3xl border border-dashed border-gray-200 text-center">
                <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900">
                  Application Management
                </h3>
                <p className="text-gray-500 max-w-sm mx-auto">
                  Full application management system with bulk
                  approval/rejection and criteria filtering.
                </p>
              </div>
            )}
            {activeTab === "settings" && (
              <div className="bg-white p-12 rounded-3xl border border-dashed border-gray-200 text-center">
                <Settings className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900">
                  Portal Settings
                </h3>
                <p className="text-gray-500 max-w-sm mx-auto">
                  Configure allocation rules, session dates, payment gateways
                  and admin roles.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setLogoutModalOpen(false)}
        onConfirm={() => navigate("/")}
        title="Admin Logout"
      />
    </div>
  );
};
