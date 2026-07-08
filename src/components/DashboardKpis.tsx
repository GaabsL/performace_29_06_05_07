import React from 'react';
import { useReportContext } from '../context/ReportContext';
import { TrendBadge } from './ui/shared';
import { Users, FileText, MousePointerClick, Eye, HeartHandshake } from 'lucide-react';

export const DashboardKpis = () => {
  const { reportData } = useReportContext();
  const { general } = reportData;

  const kpis = [
    { label: "Engajamento Médio", data: general.engagement, icon: HeartHandshake },
    { label: "Publicações", data: general.publications, icon: FileText },
    { label: "Total Seguidores", data: general.followers, icon: Users },
    { label: "Impressões Totais", data: general.impressions, icon: Eye },
    { label: "Interações Totais", data: general.interactions, icon: MousePointerClick },
  ];

  return (
    <section className="">
      <h2 className="sr-only">Dashboard Geral</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {kpis.map((kpi, idx) => {
          const borderColor = idx % 2 === 0 ? "border-[#0054A6]" : "border-[#F37021]";
          return (
            <div key={idx} className={`bg-white p-3 rounded shadow-sm border-l-4 ${borderColor} relative`}>
              <div className="absolute top-2 right-2 text-slate-200">
                  <kpi.icon className="w-4 h-4" />
              </div>
              <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">{kpi.label}</p>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-black">{kpi.data.value}</span>
                <span className={`text-[10px] font-bold ${kpi.data.isPositive ? 'text-emerald-600' : 'text-red-600'}`}>
                  {kpi.data.isPositive ? '▲ ' : '▼ '} {kpi.data.growth}
                </span>
              </div>
              {kpi.data.prev && (
                <p className="text-[9px] text-slate-400 mt-1">Anterior: {kpi.data.prev}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
