import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import DataExplorer from './pages/DataExplorer';
import Seasonality from './pages/Seasonality';
import Forecasting from './pages/Forecasting';
import Evaluation from './pages/Evaluation';
import Insights from './pages/Insights';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard': return <Dashboard />;
      case 'data': return <DataExplorer />;
      case 'seasonality': return <Seasonality />;
      case 'forecast': return <Forecasting />;
      case 'evaluation': return <Evaluation />;
      case 'insights': return <Insights />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar activePage={activePage} onNavigate={setActivePage} />
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {renderPage()}
        </div>
      </main>
    </div>
  );
};

export default App;