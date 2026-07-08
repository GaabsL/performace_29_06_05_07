import React from 'react';
import { useReportContext } from '../context/ReportContext';

export const BlogPerformance = () => {
  const { reportData } = useReportContext();
  const { blog } = reportData;

  if (!blog) return null;

  return (
    <div className="bg-slate-50 p-3 rounded h-fit">
      <h4 className="text-[10px] font-bold uppercase mb-2 text-center text-slate-700">Performance do Blog</h4>
      
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-3">
        <div className="bg-white border text-center border-slate-200 rounded p-2 shadow-sm border-t-2 border-t-[#F37021]">
          <div className="flex items-center justify-center mb-1">
            <h4 className="font-semibold text-[9px] text-slate-500 uppercase tracking-wide">Sessões</h4>
          </div>
          <p className="text-sm font-bold text-slate-800">{blog.sessions}</p>
        </div>
        
        <div className="bg-white border text-center border-slate-200 rounded p-2 shadow-sm border-t-2 border-t-[#0054A6]">
          <div className="flex items-center justify-center mb-1">
            <h4 className="font-semibold text-[9px] text-slate-500 uppercase tracking-wide">Tempo Médio</h4>
          </div>
          <p className="text-sm font-bold text-slate-800">{blog.avgTime}</p>
        </div>
        
        <div className="bg-white border text-center border-slate-200 rounded p-2 shadow-sm border-t-2 border-t-emerald-600">
          <div className="flex items-center justify-center mb-1">
            <h4 className="font-semibold text-[9px] text-slate-500 uppercase tracking-wide">Engajamento</h4>
          </div>
          <p className="text-sm font-bold text-slate-800">{blog.engagement}</p>
        </div>
      </div>

      {/* Lista de matérias */}
      <div className="bg-white rounded border border-slate-200 overflow-hidden">
        <h4 className="text-[9px] font-bold text-slate-800 bg-slate-100 p-2 uppercase border-b border-slate-200">Principais Matérias</h4>
        <div className="flex flex-col">
          <div className="flex justify-between items-center bg-slate-50 p-1.5 text-[8px] font-semibold text-slate-500 uppercase border-b border-slate-200">
            <span className="flex-1">Página</span>
            <span className="w-16 text-right">Sessões</span>
            <span className="w-16 text-right">Engaj.</span>
          </div>
          <div className="divide-y divide-slate-100">
            {blog.topArticles.map((article: any, idx: number) => (
              <div key={idx} className="flex justify-between items-center p-2 text-[10px] hover:bg-slate-50 transition-colors">
                <span className="flex-1 font-mono text-[#0054A6] font-medium truncate pr-2">{article.path}</span>
                <span className="w-16 text-right font-bold text-slate-700">{article.sessions}</span>
                <span className="w-16 text-right text-slate-600">{article.engagement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
