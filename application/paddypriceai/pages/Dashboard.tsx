import React from 'react';
import { TrendingUp, Sprout, FileCheck } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Agricultural Price Forecasting System</h2>
        <p className="text-lg text-gray-600 max-w-3xl">
          A robust, data-driven framework for predicting paddy (rice) prices across major Indian states using ARIMA and its variants.
          This system leverages historical data to provide actionable insights for farmers, traders, and policymakers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'States Covered', value: '5', icon: Sprout, color: 'text-green-600', bg: 'bg-green-50' },
          { label: 'Data Points', value: '350+', icon: DatabaseIcon, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Forecast Horizon', value: '36 Months', icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-50' },
          { label: 'Accuracy (MAPE)', value: '< 15%', icon: FileCheck, color: 'text-orange-600', bg: 'bg-orange-50' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className={`p-3 rounded-lg ${stat.bg}`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function DatabaseIcon(props: any) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
    )
}

export default Dashboard;