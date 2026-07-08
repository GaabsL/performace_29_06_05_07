import React from 'react';
import { useReportContext } from '../context/ReportContext';
import { BlogPerformance } from './BlogPerformance';

export const BehaviorAnalysis = () => {
  const { reportData } = useReportContext();
  const { categories, formats } = reportData.behavior;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        
        {/* Coluna Esquerda: Categorias + Blog */}
        <div className="flex flex-col gap-4">
          {/* Gráfico Barras Bidirecional (Butterfly Chart) */}
          <div className="bg-slate-50 p-3 rounded h-fit">
            <h4 className="text-[10px] font-bold uppercase mb-2 text-center text-slate-700">Categorias das Publicações: Volume x Interação</h4>
          
          <div className="flex justify-between text-[9px] font-semibold text-slate-500 uppercase mb-2 px-2">
            <span className="w-1/2 text-left">% Volume de Posts</span>
            <span className="w-1/2 text-right">% Interações</span>
          </div>

          <div className="space-y-3">
            {categories.map((cat, idx) => (
              <div key={idx} className="flex items-center text-[10px]">
                {/* Lado Esquerdo: Volume de Posts */}
                <div className="w-[40%] flex justify-end items-center pr-2">
                  <span className="mr-2 font-mono text-slate-600">{cat.percentage}%</span>
                  <div className="bg-slate-200 h-1.5 rounded-full overflow-hidden flex justify-end w-full max-w-[100px]">
                    <div 
                      className={`h-full ${cat.color}`} 
                      style={{ width: `${cat.percentage}%` }}
                    ></div>
                  </div>
                </div>

                {/* Centro: Nome da Categoria */}
                <div className="w-[20%] text-center font-bold text-[9px] text-slate-700 tracking-tighter truncate">
                  {cat.name}
                </div>

                {/* Lado Direito: Interação */}
                <div className="w-[40%] flex justify-start items-center pl-2">
                  <div className="bg-slate-200 h-1.5 rounded-full overflow-hidden flex justify-start w-full max-w-[100px]">
                    <div 
                      className={`h-full ${cat.color} opacity-80`} 
                      style={{ width: `${cat.interactionPercentage || 0}%` }}
                    ></div>
                  </div>
                  <span className="ml-2 font-mono text-slate-600">{cat.interactionPercentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <BlogPerformance />
      </div>

      {/* Formatos e Descritivos */}
      <div className="bg-slate-50 p-4 rounded text-xs leading-relaxed flex flex-col h-full text-slate-700">
          <h4 className="text-[10px] font-bold text-slate-800 uppercase mb-3 border-b border-slate-200 pb-2">Picos & Insights por Canal</h4>
          
          <div className="space-y-4">
            {formats.map((fmt, idx) => (
              <div key={idx} className="flex flex-col border-b border-slate-200/50 pb-3 last:border-0 last:pb-0">
                  <strong className="text-[#0054A6] mb-1.5 uppercase tracking-wider text-[10px]">{fmt.channel}</strong>
                  <div className="space-y-2">
                    {fmt.desc.split('\n\n').map((paragraph, pIdx) => (
                      <p key={pIdx} className="text-slate-600 font-medium pl-2.5 border-l-2 border-slate-300 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
              </div>
            ))}
          </div>
        </div>
        
    </div>
  );
};
