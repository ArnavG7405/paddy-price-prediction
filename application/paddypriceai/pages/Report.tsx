import React from 'react';

const Report: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-10 shadow-sm border border-gray-200 min-h-screen">
      <div className="border-b border-gray-200 pb-6 mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Paddy Price Forecasting</h1>
        <h2 className="text-xl text-gray-500">Technical Report & Implementation Summary</h2>
      </div>

      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-bold text-gray-800 mb-3">1. Executive Summary</h3>
          <p className="text-gray-700 leading-relaxed">
            This project implements a comprehensive forecasting system for paddy prices in India. 
            By utilizing ARIMA, SARIMA, and ARIMAX models on historical data (2018-2025), the system identifies critical seasonal trends 
            and price fluctuations. The application serves as a decision-support tool for agricultural stakeholders.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-800 mb-3">2. Methodology</h3>
          <p className="text-gray-700 leading-relaxed mb-2">
            A hybrid Agile-Waterfall approach was used. Data was sourced from government portals, cleaned for missing values, 
            and tested for stationarity using the Augmented Dickey-Fuller (ADF) test.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Models were tuned using ACF/PACF plots. The best parameters were selected based on minimized AIC/BIC and validation metrics (MAPE).
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-800 mb-3">3. State-wise Best Models</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border p-2 text-left">State</th>
                  <th className="border p-2 text-left">Best Model</th>
                  <th className="border p-2 text-left">Parameters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Punjab</td>
                  <td className="border p-2 font-medium text-green-700">SARIMAX</td>
                  <td className="border p-2 font-mono text-sm">(0, 0, 3, 1, 0, 0)</td>
                </tr>
                <tr>
                  <td className="border p-2">West Bengal</td>
                  <td className="border p-2 font-medium text-green-700">SARIMA</td>
                  <td className="border p-2 font-mono text-sm">(2, 1, 5, 2, 1, 1)</td>
                </tr>
                 <tr>
                  <td className="border p-2">Tamil Nadu</td>
                  <td className="border p-2 font-medium text-green-700">ARIMA</td>
                  <td className="border p-2 font-mono text-sm">(9, 2, 15)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-gray-800 mb-3">4. Conclusion & Future Scope</h3>
          <p className="text-gray-700 leading-relaxed">
            The system successfully demonstrates that statistical time-series models can predict agricultural prices with reasonable accuracy (MAPE &lt; 15%). 
            Future enhancements include integrating real-time API data, adding deep learning models (LSTM), and expanding to other crops like Wheat and Maize.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Report;
