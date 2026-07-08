/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { DashboardKpis } from './components/DashboardKpis';
import { ChannelPerformance } from './components/ChannelPerformance';
import { BehaviorAnalysis } from './components/BehaviorAnalysis';
import { Insights } from './components/Insights';
import { FollowerCharts } from './components/FollowerCharts';
import { NetworkView } from './components/NetworkView';
import { CampanhasView } from './components/CampanhasView';
import { OnePageModal } from './components/OnePageModal';
import { MarketTrends } from './components/MarketTrends';
import { ReportProvider } from './context/ReportContext';

type TabView = 'Geral' | 'Facebook' | 'Instagram Feed' | 'Instagram Stories' | 'TikTok' | 'Campanhas';

function AppContent() {
  const [activeTab, setActiveTab] = useState<TabView>('Geral');
  const [isOnePageOpen, setIsOnePageOpen] = useState(false);
  
  const tabs: TabView[] = ['Geral', 'Facebook', 'Instagram Feed', 'Instagram Stories', 'TikTok', 'Campanhas'];

  return (
    <div className="h-screen bg-slate-50 flex flex-col font-sans text-slate-900 overflow-hidden">
      <Hero />
      
      {/* Navigation Tabs */}
      <div className="bg-white border-b-2 border-slate-200 shrink-0 flex overflow-x-auto shadow-sm items-center justify-between pr-4">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-semibold text-sm uppercase tracking-wide border-b-4 whitespace-nowrap transition-colors duration-200 ${
                activeTab === tab
                  ? 'border-[#0054A6] text-[#0054A6] bg-slate-50'
                  : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 ml-4 shrink-0">
          <button 
            onClick={() => setIsOnePageOpen(true)}
            className="bg-[#0054A6] hover:bg-[#004080] text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
          >
            Visualizar Onepage
          </button>
        </div>
      </div>

      <main className="flex-1 overflow-auto flex flex-col">
        {activeTab === 'Geral' ? (
          <div className="p-4 grid grid-cols-1 lg:grid-cols-12 grid-rows-[auto] gap-3">
            <div className="lg:col-span-12">
              <DashboardKpis />
            </div>
            
            <div className="lg:col-span-8 bg-white p-4 rounded shadow-sm flex flex-col gap-3">
              <ChannelPerformance />
              <FollowerCharts />
              <BehaviorAnalysis />
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Insights />
            </div>

            <div className="lg:col-span-12">
              <MarketTrends />
            </div>
          </div>
        ) : activeTab === 'Campanhas' ? (
          <CampanhasView />
        ) : (
          <NetworkView networkName={activeTab} />
        )}
      </main>
      
      <footer className="bg-slate-200 p-2 text-[9px] text-slate-500 flex justify-between items-center shrink-0 mt-auto shadow-inner">
        <span>Report Gerado por IA Estratégica & Digital Marketing Ops | Assaí Atacadista</span>
        <span className="font-mono">v2.0-2024-CONFIDENCIAL</span>
      </footer>

      <OnePageModal isOpen={isOnePageOpen} onClose={() => setIsOnePageOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <ReportProvider>
      <AppContent />
    </ReportProvider>
  );
}
