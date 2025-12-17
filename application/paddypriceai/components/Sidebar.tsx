import React from 'react';
import { LayoutDashboard, Database, TrendingUp, PieChart, Calendar, Lightbulb } from 'lucide-react';
import { APP_NAME } from '../constants';

interface SidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, onNavigate }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
    { id: 'data', label: 'Data Explorer', icon: Database },
    { id: 'seasonality', label: 'Seasonality', icon: Calendar },
    { id: 'forecast', label: 'Forecasting', icon: TrendingUp },
    { id: 'evaluation', label: 'Evaluation', icon: PieChart },
    { id: 'insights', label: 'Insights', icon: Lightbulb },
  ];

  return (
    <div className="w-64 bg-white h-screen border-r border-gray-200 flex flex-col fixed left-0 top-0 z-10">
      <div className="p-6 border-b border-gray-100">
        <h1 className="text-2xl font-bold text-green-700 flex items-center gap-2">
          <TrendingUp className="w-8 h-8" />
          {APP_NAME}
        </h1>
        <p className="text-xs text-gray-500 mt-1">Paddy Price Intelligence</p>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-green-50 text-green-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-green-600' : 'text-gray-400'}`} />
              {item.label}
            </button>
          );
        })}
      </nav>
      <div className="p-4 border-t border-gray-100">
        <div className="bg-green-50 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-green-800 mb-1">Status</h4>
          <p className="text-xs text-green-600">Model Engine: Offline</p>
          <p className="text-xs text-green-600">Data: Static (Jan 2025)</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;