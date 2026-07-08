import React from 'react';
import { useReportContext } from '../context/ReportContext';
import { TrendingUp, Zap, Users, ShoppingBag } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Zap, ShoppingBag, Users
};

export const MarketTrends = () => {
  const { reportData } = useReportContext();
  const trends = reportData.marketTrends || [];
  return (
    <div className="bg-white p-4 rounded shadow-sm border-t-2 border-[#0054A6]">
      <h2 className="text-sm font-extrabold text-slate-800 uppercase tracking-tight flex items-center mb-4 pb-2 border-b border-slate-100">
        <TrendingUp className="w-4 h-4 mr-2 text-[#0054A6]" />
        Tendências de Mercado (Food Service e Atacarejo)
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {trends.map((trend: any, idx: number) => {
           const Icon = iconMap[trend.icon] || Zap;
           return (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded p-4 shadow-sm relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className={`w-16 h-16 ${trend.colorClass}`} />
               </div>
               <h3 className={`text-xs font-bold uppercase mb-2 ${trend.colorClass}`}>{trend.title}</h3>
               <p className="text-xs text-slate-600 leading-relaxed font-medium">
                 {trend.desc}
               </p>
            </div>
           );
        })}
      </div>
    </div>
  );
};
