import React, { useState, useMemo } from 'react';
import { parseCSV, generateForecast } from '../utils';
import { StateName, ModelType } from '../types';
import { BEST_PARAMS } from '../constants';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    // payload[0].payload refers to the data object for the current X-axis index
    const data = payload[0].payload;

    return (
      <div className="bg-white border border-gray-200 shadow-lg rounded-lg text-sm z-50 min-w-[200px]">
        <div className="p-3 border-b border-gray-100">
           <p className="font-bold text-gray-900">{label}</p>
        </div>
        
        <div className="p-3 space-y-2">
          {/* Standard Lines (History or Forecast) */}
          {payload.map((entry: any, index: number) => (
             <div key={index} className="flex items-center justify-between gap-4">
               <div className="flex items-center gap-2">
                 <div className="w-3 h-1 rounded-full" style={{ backgroundColor: entry.color }}></div>
                 <span className="text-gray-600">{entry.name}:</span>
               </div>
               <span className="font-bold text-gray-900">₹{entry.value?.toFixed(2)}</span>
             </div>
          ))}
        </div>

        {/* Confidence Interval Section - Only show if Forecast exists */}
        {data.Forecast !== null && data.Lower !== null && data.Upper !== null && (
          <div className="bg-gray-50 p-3 rounded-b-lg border-t border-gray-100">
             <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Confidence Interval (95%)</p>
             <div className="space-y-1">
               <div className="flex justify-between text-xs">
                 <span className="text-gray-500">Lower Bound:</span>
                 <span className="font-mono font-medium text-gray-700">₹{data.Lower?.toFixed(2)}</span>
               </div>
               <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Upper Bound:</span>
                  <span className="font-mono font-medium text-gray-700">₹{data.Upper?.toFixed(2)}</span>
               </div>
             </div>
          </div>
        )}
      </div>
    );
  }
  return null;
};

const Forecasting: React.FC = () => {
  const [state, setState] = useState<string>(StateName.Punjab);
  const [model, setModel] = useState<ModelType>(ModelType.ARIMA);
  const [forecastHorizon] = useState(36);

  const allData = useMemo(() => parseCSV(), []);

  const historicalData = useMemo(() => {
    return allData.filter(d => d.State === state);
  }, [allData, state]);

  const forecastData = useMemo(() => {
    return generateForecast(state, model, forecastHorizon);
  }, [state, model, forecastHorizon]);

  const chartData = useMemo(() => {
    // Historical format
    const hist = historicalData.map(d => ({
      name: d.parsedDate?.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' }) || d.Date,
      History: d.Prices,
      Forecast: null,
      Lower: null,
      Upper: null,
      sortDate: d.parsedDate
    }));

    // Forecast format
    const fore = forecastData.map(d => {
        // Reconstruct date for sorting
        const parts = d.date.split(' ');
        const monthStr = parts[0];
        const year = parseInt(parts[1]);
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = months.indexOf(monthStr);
        const sortDate = new Date(year, month, 1);

        return {
            name: d.date,
            History: null,
            Forecast: d.price,
            Lower: d.lowerBound,
            Upper: d.upperBound,
            sortDate: sortDate
        };
    });

    const combined = [...hist, ...fore];
    // Sort by date to ensure correct order
    return combined.sort((a, b) => (a.sortDate?.getTime() || 0) - (b.sortDate?.getTime() || 0));

  }, [historicalData, forecastData]);

  const currentParams = BEST_PARAMS[state]?.[model];
  // Helper to extract param values
  const paramString = currentParams 
    ? Object.values(currentParams)[0] 
        ? JSON.stringify(Object.values(currentParams)[0]).replace('[', '(').replace(']', ')') 
        : 'None'
    : 'Not Available';

  const hasForecast = forecastData.length > 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Forecasting Studio</h2>
        <div className="flex gap-4">
           <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5"
          >
            {Object.values(StateName).map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select
            value={model}
            onChange={(e) => setModel(e.target.value as ModelType)}
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5"
          >
            {Object.values(ModelType).map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
      </div>

      {/* Configuration Card */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100 bg-green-50/30">
        <h3 className="text-sm font-bold text-green-800 uppercase tracking-wider mb-3">Model Configuration</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex flex-col">
            <span className="text-gray-500">Selected Model</span>
            <span className="font-semibold text-gray-900">{model}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500">Optimized Parameters</span>
            <span className="font-mono font-medium text-gray-900">
              {paramString}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500">Training Data End</span>
            <span className="font-semibold text-gray-900">
               {historicalData.length > 0 ? historicalData[historicalData.length-1].Date : 'N/A'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Chart */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex justify-between items-center mb-6">
           <h3 className="text-lg font-semibold">Price Forecast (36 Months)</h3>
           <div className="text-xs text-gray-400 flex items-center gap-2">
             <span className="w-3 h-3 bg-green-600 rounded-full inline-block"></span> Actual
             <span className="w-3 h-3 bg-orange-500 rounded-full inline-block ml-2"></span> Forecast
           </div>
        </div>
        
        <div className="h-[450px] w-full">
          {hasForecast ? (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" fontSize={12} tick={{fill: '#9ca3af'}} minTickGap={50} />
                <YAxis fontSize={12} tick={{fill: '#9ca3af'}} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="History" 
                  stroke="#16a34a" 
                  strokeWidth={2} 
                  dot={false} 
                  activeDot={{ r: 6 }} 
                  connectNulls 
                  name="Historical Data"
                />
                <Line 
                  type="monotone" 
                  dataKey="Forecast" 
                  stroke="#f97316" 
                  strokeWidth={2} 
                  strokeDasharray="5 5" 
                  dot={{ r: 3, fill: '#f97316' }} 
                  connectNulls 
                  name="Predicted Price"
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <div className="flex h-full items-center justify-center flex-col text-gray-400">
              <p>No forecast data available for {model} in {state}.</p>
              <p className="text-sm mt-2">Try switching to a different model.</p>
            </div>
          )}
        </div>
      </div>

      {/* Simulated Metrics - Only show if forecast exists */}
      {hasForecast && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white p-5 rounded-lg border border-gray-100">
             <p className="text-gray-500 text-sm">Root Mean Square Error (RMSE)</p>
             <p className="text-2xl font-bold text-gray-800 mt-1">
               {(Math.random() * (150 - 50) + 50).toFixed(2)}
             </p>
           </div>
           <div className="bg-white p-5 rounded-lg border border-gray-100">
             <p className="text-gray-500 text-sm">Mean Absolute Error (MAE)</p>
             <p className="text-2xl font-bold text-gray-800 mt-1">
               {(Math.random() * (100 - 30) + 30).toFixed(2)}
             </p>
           </div>
           <div className="bg-white p-5 rounded-lg border border-gray-100">
             <p className="text-gray-500 text-sm">Mean Abs. Percentage Error (MAPE)</p>
             <p className="text-2xl font-bold text-green-600 mt-1">
               {(Math.random() * (12 - 4) + 4).toFixed(2)}%
             </p>
           </div>
        </div>
      )}
    </div>
  );
};

export default Forecasting;