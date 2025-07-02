import React, { useState } from "react";
import {
  Home,
  Users,
  Settings,
  PieChart,
  Calendar,
  Mail,
  Bell,
  ChevronLeft,
  ChevronRight,
  Search,
  ChevronUp,
  ChevronDown,
  LogOut,
} from "lucide-react";

const Dashboard = ({ onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`bg-white shadow-md transition-all duration-300 ease-in-out ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 h-16">
          {sidebarOpen ? (
            <h2 className="text-xl font-semibold text-gray-800">Admin Panel</h2>
          ) : (
            <h2 className="text-xl font-semibold text-gray-800">AP</h2>
          )}
          <button
            className="p-1 rounded-md text-gray-500 hover:bg-gray-100"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? (
              <ChevronLeft size={20} />
            ) : (
              <ChevronRight size={20} />
            )}
          </button>
        </div>

        <nav className="p-2">
          <ul className="space-y-1">
            <NavItem
              icon={<Home size={20} />}
              label="Dashboard"
              active={activeTab === "dashboard"}
              onClick={() => setActiveTab("dashboard")}
              sidebarOpen={sidebarOpen}
            />
            <NavItem
              icon={<Users size={20} />}
              label="Users"
              active={activeTab === "users"}
              onClick={() => setActiveTab("users")}
              sidebarOpen={sidebarOpen}
            />
            <NavItem
              icon={<PieChart size={20} />}
              label="Analytics"
              active={activeTab === "analytics"}
              onClick={() => setActiveTab("analytics")}
              sidebarOpen={sidebarOpen}
            />
            <NavItem
              icon={<Calendar size={20} />}
              label="Calendar"
              active={activeTab === "calendar"}
              onClick={() => setActiveTab("calendar")}
              sidebarOpen={sidebarOpen}
            />
            <NavItem
              icon={<Settings size={20} />}
              label="Settings"
              active={activeTab === "settings"}
              onClick={() => setActiveTab("settings")}
              sidebarOpen={sidebarOpen}
            />
          </ul>
        </nav>

        {/* Logout Button in Sidebar */}
        <div className="p-2 absolute bottom-0 w-full">
          <button
            onClick={onLogout}
            className="w-full flex items-center space-x-3 px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <LogOut size={20} className="text-gray-500" />
            {sidebarOpen && <span>Log Out</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm h-16 flex items-center justify-between px-6">
          <div className="relative max-w-md w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search..."
            />
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-1 rounded-full text-gray-500 hover:bg-gray-100 relative">
              <Mail size={20} />
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="p-1 rounded-full text-gray-500 hover:bg-gray-100 relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                5
              </span>
            </button>
            <div className="flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="h-8 w-8 rounded-full"
              />
              <span className="text-sm font-medium text-gray-700">
                John Doe
              </span>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {activeTab === "dashboard" ? (
            <div className="bg-white p-8 shadow-lg rounded-lg max-w-md mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">
                Welcome to the Dashboard!
              </h2>
              <button
                onClick={onLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 flex items-center justify-center mx-auto space-x-2"
              >
                <LogOut size={18} />
                <span>Log Out</span>
              </button>
            </div>
          ) : activeTab === "users" ? (
            <UsersComponent />
          ) : activeTab === "analytics" ? (
            <AnalyticsComponent />
          ) : activeTab === "calendar" ? (
            <CalendarComponent />
          ) : (
            <SettingsComponent />
          )}
        </main>
      </div>
    </div>
  );
};

// NavItem component remains the same as before
const NavItem = ({ icon, label, active, onClick, sidebarOpen }) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
          active
            ? "bg-blue-50 text-blue-600 font-medium"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        <span className={`${active ? "text-blue-600" : "text-gray-500"}`}>
          {icon}
        </span>
        {sidebarOpen && <span>{label}</span>}
      </button>
    </li>
  );
};

// Placeholder components remain the same as before
const UsersComponent = () => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">
      Users Management
    </h2>
    <p className="text-gray-600">Users content will appear here</p>
  </div>
);

const AnalyticsComponent = () => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Analytics</h2>
    <p className="text-gray-600">Analytics content will appear here</p>
  </div>
);

const CalendarComponent = () => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Calendar</h2>
    <p className="text-gray-600">Calendar content will appear here</p>
  </div>
);

const SettingsComponent = () => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Settings</h2>
    <p className="text-gray-600">Settings content will appear here</p>
  </div>
);

export default Dashboard;
