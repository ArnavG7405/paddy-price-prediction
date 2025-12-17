import React, { useState } from 'react';
import { StateName } from '../types';
import { STAKEHOLDER_INSIGHTS } from '../constants';
import { TrendingUp, TrendingDown, Minus, Sprout, Briefcase, Landmark } from 'lucide-react';

const Insights: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>(StateName.Punjab);
  const data = STAKEHOLDER_INSIGHTS[selectedState as keyof typeof STAKEHOLDER_INSIGHTS];

  const getTrendIcon = (trend: string) => {
    if (trend.startsWith('+')) return <TrendingUp className="w-5 h-5 text-green-600" />;
    if (trend.startsWith('-')) return <TrendingDown className="w-5 h-5 text-red-600" />;
    return <Minus className="w-5 h-5 text-gray-600" />;
  };

  const getOutlookColor = (outlook: string) => {
    switch (outlook) {
      case 'POSITIVE': return 'bg-green-100 text-green-800 border-green-200';
      case 'NEGATIVE': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Stakeholder Insights</h2>
          <p className="text-gray-600">Actionable intelligence for Farmers, Traders, and Policymakers.</p>
        </div>
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5 min-w-[200px]"
        >
          {Object.values(StateName).map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Key Metrics Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs font-medium text-gray-500 uppercase">Current Price</p>
          <p className="text-xl font-bold text-gray-900 mt-1">{data.currentPrice}</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs font-medium text-gray-500 uppercase">Avg Forecast (36m)</p>
          <p className="text-xl font-bold text-blue-600 mt-1">{data.avgForecast}</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs font-medium text-gray-500 uppercase">36-Month Trend</p>
          <div className="flex items-center gap-2 mt-1">
            {getTrendIcon(data.trend)}
            <p className="text-xl font-bold text-gray-900">{data.trend}</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs font-medium text-gray-500 uppercase">Peak Month</p>
          <p className="text-lg font-bold text-orange-600 mt-1 truncate" title={data.peakMonth}>{data.peakMonth}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Farmers Section */}
        <div className="bg-white rounded-xl border border-green-200 shadow-sm overflow-hidden flex flex-col">
          <div className="bg-green-50 p-4 border-b border-green-100 flex items-center gap-2">
            <Sprout className="w-5 h-5 text-green-700" />
            <h3 className="font-bold text-green-800">For Farmers</h3>
          </div>
          <div className="p-6 space-y-6 flex-1">
            <div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getOutlookColor(data.farmers.outlook)}`}>
                OUTLOOK: {data.farmers.outlook}
              </span>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-1">Best Selling Period</p>
                <p className="text-sm text-gray-600 bg-green-50 p-2 rounded border border-green-100">
                  {data.farmers.bestSelling}
                </p>
              </div>
              
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-1">Avoid Selling Period</p>
                <p className="text-sm text-gray-600 bg-red-50 p-2 rounded border border-red-100">
                  {data.farmers.avoidSelling}
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-700 mb-2">Seasonal Advice</p>
                <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                  {data.farmers.seasonalAdvice.map((advice, idx) => (
                    <li key={idx} className="leading-relaxed">{advice}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Traders Section */}
        <div className="bg-white rounded-xl border border-blue-200 shadow-sm overflow-hidden flex flex-col">
          <div className="bg-blue-50 p-4 border-b border-blue-100 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-blue-700" />
            <h3 className="font-bold text-blue-800">For Traders</h3>
          </div>
          <div className="p-6 space-y-6 flex-1">
            <div>
               <p className="text-xs font-bold text-gray-400 uppercase mb-1">Price Volatility</p>
               <p className="font-semibold text-gray-900">{data.traders.volatility}</p>
            </div>

            <div>
               <p className="text-xs font-bold text-gray-400 uppercase mb-1">Arbitrage Opportunity</p>
               <p className="font-semibold text-gray-900">{data.traders.arbitrage}</p>
            </div>

            <div>
               <p className="text-xs font-bold text-gray-400 uppercase mb-1">Inventory Strategy</p>
               <div className="bg-blue-50 p-3 rounded border border-blue-100 text-sm text-blue-800">
                 {data.traders.inventory}
               </div>
            </div>
          </div>
        </div>

        {/* Policymakers Section */}
        <div className="bg-white rounded-xl border border-orange-200 shadow-sm overflow-hidden flex flex-col">
          <div className="bg-orange-50 p-4 border-b border-orange-100 flex items-center gap-2">
            <Landmark className="w-5 h-5 text-orange-700" />
            <h3 className="font-bold text-orange-800">For Policymakers</h3>
          </div>
          <div className="p-6 space-y-6 flex-1">
             <div>
               <p className="text-xs font-bold text-gray-400 uppercase mb-1">Food Security Status</p>
               <p className="text-sm font-medium text-gray-900">{data.policy.security}</p>
            </div>

            <div>
               <p className="text-xs font-bold text-gray-400 uppercase mb-1">Regulation Priority</p>
               <div className="bg-orange-50 p-3 rounded border border-orange-100 text-sm text-orange-800 leading-relaxed">
                 {data.policy.regulation}
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;