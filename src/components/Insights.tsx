import React from 'react';
import { useReportContext } from '../context/ReportContext';
import { IconByName } from './ui/shared';

export const Insights = () => {
  const { reportData } = useReportContext();
  return (
    <section className="bg-slate-900 text-white p-5 rounded shadow-sm flex flex-col gap-5 h-full">
      <div className="mb-2 border-b border-slate-700 pb-3">
        <h3 className="text-white font-bold uppercase tracking-tight text-sm">Resumo da Análise</h3>
      </div>
      {reportData.insights.map((insight, idx) => {
        
        let titleColor = "text-[#0054A6]";
        let dotColor = "bg-[#0054A6]";
        let iconColor = "text-[#0054A6]";
        
        if (insight.type === 'positive') {
          titleColor = "text-[#FFCB05]";
          dotColor = "bg-[#FFCB05]";
          iconColor = "text-[#FFCB05]";
        } else if (insight.type === 'negative') {
          titleColor = "text-[#F37021]";
          dotColor = "bg-[#F37021]";
          iconColor = "text-[#F37021]";
        } else if (insight.type === 'focus') {
          titleColor = "text-white";
          dotColor = "bg-white hidden";
          iconColor = "text-white";
        }

        if (insight.type === 'focus') {
          return (
             <div key={idx} className="bg-white/10 p-4 rounded border border-white/20 mt-2">
                <h4 className={`${titleColor} text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2`}>
                  <IconByName name={insight.icon} className="w-4 h-4" />
                  {insight.title}
                </h4>
                <p className="text-xs space-y-1 text-slate-300 font-medium">
                  {insight.desc}
                </p>
             </div>
          );
        }

        return (
          <div key={idx} className="space-y-2">
            <h4 className={`${titleColor} text-xs font-bold uppercase tracking-wider flex items-center gap-2`}>
              <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`}></span> 
              <span className="flex items-center gap-1.5">
                  <IconByName name={insight.icon} className="w-4 h-4" />
                  {insight.title}
              </span>
            </h4>
            <p className="text-xs leading-relaxed text-slate-300 font-medium">
              {insight.desc}
            </p>
          </div>
        );
      })}
    </section>
  );
};
