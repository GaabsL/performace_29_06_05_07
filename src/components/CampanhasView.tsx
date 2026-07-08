import React from 'react';
import { useReportContext } from '../context/ReportContext';

export const CampanhasView = () => {
  const { reportData } = useReportContext();
  const campaigns = reportData.campaigns || [];
  
  return (
    <div className="flex flex-col gap-6 p-4 md:p-8 bg-slate-50 font-sans text-slate-800 h-full overflow-y-auto">
      <header className="mb-2">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0054A6] mb-2 tracking-tight">
          Performance de Campanhas
        </h2>
        <p className="text-slate-600 font-medium">Visão executiva do desempenho individual de cada campanha ativa na semana.</p>
      </header>

      <div className="grid grid-cols-1 gap-6">
        {campaigns.map((campanha: any, idx: number) => (
          <section key={idx} className="bg-white border border-slate-200 rounded p-6 shadow-sm">
            <h3 className="text-lg font-bold text-[#0054A6] mb-4 uppercase tracking-tight">{campanha.name}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="border-l-2 border-[#F37021] pl-3 py-1">
                <p className="text-xs text-slate-500 font-semibold uppercase">Alcance</p>
                <p className="text-2xl font-bold text-slate-900">{campanha.reach}</p>
                <p className="text-xs text-slate-400 mt-1">Comparado sem. ant.</p>
              </div>
              <div className="border-l-2 border-[#0054A6] pl-3 py-1">
                <p className="text-xs text-slate-500 font-semibold uppercase">Engajamento</p>
                <p className="text-2xl font-bold text-slate-900">{campanha.eng}</p>
                <p className="text-xs text-slate-400 mt-1">Taxa média</p>
              </div>
              <div className="border-l-2 border-slate-300 pl-3 py-1">
                <p className="text-xs text-slate-500 font-semibold uppercase">Impressões</p>
                <p className="text-2xl font-bold text-slate-900">{campanha.imp}</p>
                <p className="text-xs text-slate-400 mt-1">Volume exibido</p>
              </div>
              <div className="border-l-2 border-slate-300 pl-3 py-1">
                <p className="text-xs text-slate-500 font-semibold uppercase">Interações</p>
                <p className="text-2xl font-bold text-slate-900">{campanha.clicks}</p>
                <p className="text-xs text-slate-400 mt-1">Interações totais</p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
