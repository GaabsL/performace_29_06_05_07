import React from 'react';
import { useReportContext } from '../context/ReportContext';
import { IconByName, TrendBadge } from './ui/shared';

export const ChannelPerformance = () => {
  const { reportData } = useReportContext();
  return (
    <section className="">
      <h3 className="text-xs font-bold uppercase mb-3 flex items-center gap-2">
        <span className="w-1 h-4 bg-[#0054A6]"></span> Desempenho por Canal
      </h3>
      
      <div className="bg-slate-50 rounded overflow-hidden">
        {/* Table Header simulation using Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 p-2 bg-slate-100 text-slate-500 uppercase text-[9px] font-black border-b border-slate-200">
          <div className="hidden sm:block">Canal</div>
          <div>Engajamento</div>
          <div className="hidden sm:block">Seguidores</div>
          <div className="text-center hidden sm:block">Posts</div>
          <div className="hidden sm:block">Impressões</div>
          <div>Interações</div>
        </div>

        {reportData.channels.map((channel) => (
          <div key={channel.id} className="grid grid-cols-2 sm:grid-cols-6 gap-2 p-2 border-b border-slate-200/60 hover:bg-white text-[11px] items-center">
            
            <div className={`font-bold flex items-center gap-1 ${channel.color.replace('bg-', 'text-')}`}>
              <IconByName name={channel.icon} className="w-3 h-3" />
              <span>{channel.name}</span>
            </div>
            
            <div>
              <span className="font-semibold">{channel.metrics.engagement.value}</span>
              <span className={`ml-1 text-[9px] ${channel.metrics.engagement.isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
                {channel.metrics.engagement.desc || channel.metrics.engagement.growth}
              </span>
            </div>

            <div className="hidden sm:block">
               <span className="font-semibold">{channel.metrics.followers.value}</span>
               <span className="ml-1 text-[9px] text-slate-400">{channel.metrics.followers.growth}</span>
            </div>

            <div className="text-center hidden sm:block font-medium">
               {channel.metrics.pubs.value}
            </div>

            <div className="hidden sm:block font-medium">
               {channel.metrics.impressions.value}
            </div>

            <div className="font-semibold">
               {channel.metrics.interactions.value}
               <span className="ml-1 text-[9px] text-slate-400 sm:hidden">int.</span>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};
