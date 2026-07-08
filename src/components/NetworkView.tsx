import React from 'react';
import { useReportContext } from '../context/ReportContext';

interface NetworkViewProps {
  networkName: string;
}

const ComparisonText = ({ text }: { text: string }) => {
  if (!text) return null;
  const isPositive = text.trim().startsWith('+');
  const isNegative = text.trim().startsWith('-');
  
  if (isPositive || isNegative) {
    const match = text.match(/^([+-]?\s*[\d.,]+%)(.*)/);
    if (match) {
      const color = isPositive ? 'text-emerald-600' : 'text-rose-600';
      return (
        <div className="flex items-center gap-1 mt-1">
          <span className={`font-bold flex items-center ${color} text-xs whitespace-nowrap`}>
            {isPositive ? (
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
            ) : (
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            )}
            {match[1].trim()}
          </span>
          <span className="text-xs text-slate-400">{match[2]}</span>
        </div>
      );
    }
  }
  return <p className="text-xs text-slate-400 mt-1">{text}</p>;
};

export const NetworkView: React.FC<NetworkViewProps> = ({ networkName }) => {
  const { reportData } = useReportContext();
  const getNetworkData = () => {
    switch (networkName) {
      case 'TikTok': return (reportData as any).tiktokView;
      case 'Facebook': return (reportData as any).facebookView;
      case 'Instagram Feed': return (reportData as any).instagramFeedView;
      case 'Instagram Stories': return (reportData as any).instagramStoriesView;
      default: return reportData.networkView;
    }
  };
  const d = getNetworkData();

  if (!d) return null;

  return (
    <div className="flex flex-col gap-6 p-4 md:p-8 bg-slate-50 font-sans text-slate-800 h-full overflow-y-auto">
      {/* SEÇÃO 1: PAINEL EXECUTIVO */}
      <section className="bg-white border border-slate-200 rounded p-6 shadow-sm">
        <h3 className="text-lg font-bold text-[#0054A6] mb-4 uppercase tracking-tight">Painel Executivo</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          {d.panel.reach && (
            <div className="border-l-2 border-[#F37021] pl-3 py-1">
              <p className="text-xs text-slate-500 font-semibold uppercase">Alcance</p>
              <p className="text-2xl font-bold text-slate-900">{d.panel.reach}</p>
              <ComparisonText text={d.panel.reachComp || "Comparado sem. ant."} />
            </div>
          )}
          <div className="border-l-2 border-[#0054A6] pl-3 py-1 lg:col-span-1">
            <p className="text-xs text-slate-500 font-semibold uppercase">Engajamento Médio</p>
            <p className="text-2xl font-bold text-slate-900">{d.panel.engagement}</p>
            <ComparisonText text={d.panel.engagementComp || 'Interações totais'} />
          </div>
          {d.panel.impressions && (
            <div className="border-l-2 border-slate-300 pl-3 py-1">
              <p className="text-xs text-slate-500 font-semibold uppercase">Impressões</p>
              <p className="text-2xl font-bold text-slate-900">{d.panel.impressions}</p>
              <ComparisonText text={d.panel.impressionsComp || "Volume exibido"} />
            </div>
          )}
          {d.panel.posts && (
            <div className="border-l-2 border-slate-300 pl-3 py-1">
              <p className="text-xs text-slate-500 font-semibold uppercase">Quantidade de Posts</p>
              <p className="text-2xl font-bold text-slate-900">{d.panel.posts}</p>
              <ComparisonText text={d.panel.postsComp} />
            </div>
          )}
          {d.panel.views && (
            <div className="border-l-2 border-slate-300 pl-3 py-1">
              <p className="text-xs text-slate-500 font-semibold uppercase">Visualizações</p>
              <p className="text-2xl font-bold text-slate-900">{d.panel.views}</p>
              <ComparisonText text={d.panel.viewsComp || 'Visualizações vídeos'} />
            </div>
          )}
          {d.panel.interactions && (
             <div className="border-l-2 border-slate-300 pl-3 py-1">
               <p className="text-xs text-slate-500 font-semibold uppercase">Interações</p>
               <p className="text-2xl font-bold text-slate-900">{d.panel.interactions}</p>
               <ComparisonText text={d.panel.interactionsComp} />
             </div>
          )}
          {d.panel.clicks && (
            <div className="border-l-2 border-slate-300 pl-3 py-1">
              <p className="text-xs text-slate-500 font-semibold uppercase">Cliques</p>
              <p className="text-2xl font-bold text-slate-900">{d.panel.clicks}</p>
              <ComparisonText text="Cliques no link" />
            </div>
          )}
          {d.panel.reposts && (
             <div className="border-l-2 border-slate-300 pl-3 py-1">
               <p className="text-xs text-slate-500 font-semibold uppercase">Reposts</p>
               <p className="text-2xl font-bold text-slate-900">{d.panel.reposts}</p>
               <ComparisonText text={d.panel.repostsComp || 'Compartilhamentos/Reposts'} />
             </div>
          )}
          {d.panel.videoViews && (
            <div className="border-l-2 border-slate-300 pl-3 py-1">
              <p className="text-xs text-slate-500 font-semibold uppercase">Vídeo Views / Retenção</p>
              <p className="text-2xl font-bold text-slate-900">{d.panel.videoViews}</p>
              <ComparisonText text={d.panel.videoViewsComp || 'Comparado sem. ant.'} />
            </div>
          )}
        </div>
        <div className="bg-slate-50 border border-slate-200 p-4 rounded flex items-start gap-3">
          <div className="text-[#0054A6] font-bold text-xl leading-none mt-1">ℹ️</div>
          <div>
            <h4 className="text-sm font-bold text-slate-700 uppercase mb-1">Insight Principal</h4>
            <p className="text-slate-800 font-medium leading-relaxed">{d.panel.insight}</p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2: MAPA COMPORTAMENTAL */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded p-6 shadow-sm border-t-4 border-t-emerald-500">
          <h3 className="text-lg font-bold text-emerald-700 mb-4 tracking-tight flex items-center gap-2">
            <span>🔥</span> O que gera ação
          </h3>
          <ul className="space-y-3">
            {d.behavior.good.map((item: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-1.5"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block"></span></div>
                <span className="font-medium text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white border border-slate-200 rounded p-6 shadow-sm border-t-4 border-t-rose-500">
          <h3 className="text-lg font-bold text-rose-700 mb-4 tracking-tight flex items-center gap-2">
            <span>⚠️</span> O que gera menos interesse
          </h3>
          <ul className="space-y-3">
            {d.behavior.bad.map((item: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3">
                 <div className="mt-1.5"><span className="w-1.5 h-1.5 bg-rose-500 rounded-full inline-block"></span></div>
                 <span className="font-medium text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* NOVA SEÇÃO: VARIAÇÃO DIÁRIA | ENGAJAMENTO */}
      <section className="bg-white border border-slate-200 rounded p-6 shadow-sm mt-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-[#0054A6] uppercase tracking-tight">Variação Diária | Engajamento</h3>
          <div className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wide hidden sm:block">Desempenho Semanal</div>
        </div>
        
        <p className="text-slate-600 mb-6 font-medium">{d.dailyVariation.desc}</p>

        <div className="w-full overflow-x-auto pb-4">
          <div className="relative min-w-[900px] h-[520px] bg-slate-50 border border-slate-200 rounded overflow-hidden">
            
            {/* SVG Background Layer */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              
              {/* Reference Grid lines */}
              <line x1="0" y1="20" x2="100" y2="20" stroke="#f1f5f9" strokeWidth="0.2" />
              <line x1="0" y1="40" x2="100" y2="40" stroke="#f1f5f9" strokeWidth="0.2" />
              <line x1="0" y1="60" x2="100" y2="60" stroke="#f1f5f9" strokeWidth="0.2" />
              <line x1="0" y1="80" x2="100" y2="80" stroke="#f1f5f9" strokeWidth="0.2" />

              {/* Dynamic Connecting Line */}
              <polyline 
                points={d.dailyVariation.nodes.map((node: any, i: number) => {
                  const x = ((i + 0.5) / d.dailyVariation.nodes.length) * 100;
                  const y = node.isPeak ? 35 : 70;
                  return `${x},${y}`;
                }).join(' ')}
                fill="none" stroke="#F37021" strokeWidth="0.3" 
              />
              
              {/* Dynamic Dots & Context Lines */}
              {d.dailyVariation.nodes.map((node: any, i: number) => {
                const x = ((i + 0.5) / d.dailyVariation.nodes.length) * 100;
                const y = node.isPeak ? 35 : 70;
                return (
                  <React.Fragment key={i}>
                    {node.isPeak ? (
                      <line x1={x} y1="0" x2={x} y2={y} stroke="#0054A6" strokeWidth="0.2" strokeDasharray="1 1" opacity="0.3" />
                    ) : (
                      <line x1={x} y1={y} x2={x} y2="100" stroke="#CBD5E1" strokeWidth="0.2" strokeDasharray="1 1" />
                    )}
                    <circle cx={x} cy={y} r="0.8" fill="#F37021" stroke="white" strokeWidth="0.2" />
                  </React.Fragment>
                );
              })}
            </svg>

            {/* Content Layer (Cards) */}
            <div 
              className="absolute inset-0 w-full h-full grid pointer-events-auto"
              style={{ gridTemplateColumns: `repeat(${d.dailyVariation.nodes.length}, minmax(0, 1fr))` }}
            >
              {d.dailyVariation.nodes.map((node: any, idx: number) => {
                const isPeak = node.isPeak;
                return (
                  <div key={idx} className={`flex flex-col ${isPeak ? 'justify-start pt-6' : 'justify-end pb-6'} items-center z-10 px-2 h-full`}>
                    <div className={`bg-white border text-center ${isPeak && node.highlight ? 'border-[#0054A6]/20 shadow-md border-t-4 border-t-[#0054A6]' : 'border-slate-200 shadow-sm'} p-3 rounded flex flex-col items-center w-full relative ${isPeak ? 'transition-transform hover:-translate-y-1 hover:shadow-md' : ''}`}>
                      {node.highlight && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0054A6] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide whitespace-nowrap shadow-sm">{node.highlight}</div>
                      )}
                      <span className={`text-xl ${isPeak && node.highlight ? 'text-2xl mt-1' : ''} font-bold ${isPeak ? 'text-[#0054A6]' : 'text-rose-600'}`}>{node.percentage}</span>
                      <span className="text-[10px] text-slate-500 font-mono mb-2">{node.meta}</span>
                      <div className="w-full aspect-video bg-slate-50 border border-slate-200 rounded mb-2 flex items-center justify-center text-xs text-slate-400 overflow-hidden relative">
                        {node.image ? (
                          <img src={node.image} alt="Conteúdo" className="w-full h-full object-cover" />
                        ) : (
                          "IMG"
                        )}
                      </div>
                      <p className="text-[11px] text-slate-700 font-medium leading-tight">{node.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3: SATURAÇÃO DE CONTEÚDO */}
      {d.saturation && (
        <section className="bg-white border border-slate-200 rounded p-6 shadow-sm">
          <h3 className="text-lg font-bold text-[#0054A6] mb-4 uppercase tracking-tight">Saturação de Conteúdo</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Período</th>
                  <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Volume (Posts)</th>
                  <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Eficiência Relativa (Engajamento)</th>
                </tr>
              </thead>
              <tbody>
                {d.saturation.weeks.map((week: any, idx: number) => (
                  <tr key={idx} className={idx === 0 ? "border-b border-slate-100" : ""}>
                    <td className="py-4 px-4 font-medium text-slate-800">{week.period}</td>
                    <td className="py-4 px-4 text-slate-600 font-mono">{week.volume}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className={`h-4 ${week.color} rounded`} style={{ width: week.width }}></div>
                        <span className="text-sm font-medium text-slate-700">{week.efficiency}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[#0054A6]/5 border-l-4 border-[#0054A6] p-4 rounded-r">
            <p className="text-[#0054A6] font-semibold">
              Nota de Insight: <span className="font-normal text-slate-700">{d.saturation.insight}</span>
            </p>
          </div>
        </section>
      )}

      {/* SEÇÃO 4: CONTEÚDOS CAMPEÕES */}
      <section className="bg-white border border-slate-200 rounded p-6 shadow-sm">
        <h3 className="text-lg font-bold text-[#0054A6] mb-4 uppercase tracking-tight">Conteúdo Campeão da Semana</h3>
        <div className="flex flex-col gap-8">
          {(d.champions || (d.champion ? [d.champion] : [])).map((champ: any, champIdx: number) => (
            <div key={champIdx} className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start border-b border-slate-100 pb-8 last:border-0 last:pb-0">
              <div className="lg:col-span-1 bg-slate-100 aspect-square rounded flex items-center justify-center text-center border border-slate-200 overflow-hidden relative">
                 {champ.image ? (
                   <img src={champ.image} alt="Capa do Conteúdo" className="w-full h-full object-cover" />
                 ) : (
                   <span className="text-slate-400 font-medium p-6">Placeholder Imagem<br/>"Dia do Sol"</span>
                 )}
              </div>
              <div className="lg:col-span-2">
                <h4 className="text-xl font-bold text-slate-800 mb-2">{champ.title}</h4>
                <p className="text-slate-600 mb-6 font-medium leading-relaxed">
                  {champ.desc}
                </p>
                {champ.link && (
                  <a href={champ.link} target="_blank" rel="noreferrer" className="inline-block text-sm font-bold text-[#0054A6] underline mb-6">Ver Publicação</a>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {champ.factors.map((factor: any, idx: number) => (
                    <div key={idx} className="bg-slate-50 p-4 border border-slate-100 rounded">
                       <h5 className="font-bold text-[#0054A6] mb-1 flex items-center gap-2"><span>{factor.num}.</span> {factor.title}</h5>
                       <p className="text-sm text-slate-600 leading-relaxed">{factor.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAPA MENTAL DE CATEGORIAS */}
      <section className="bg-white border border-slate-200 rounded p-6 shadow-sm mb-6 mt-6">
        <h3 className="text-lg font-bold text-[#0054A6] mb-4 uppercase tracking-tight">Ecossistema de Categorias</h3>
        <p className="text-slate-600 mb-6 font-medium">Distribuição temática de conteúdo estruturada em mapa mental de conexões.</p>
        
        <div className="relative w-full h-[400px] bg-slate-50 border border-slate-200 rounded flex items-center justify-center overflow-hidden overflow-x-auto">
          <div className="relative min-w-[700px] w-full h-full">
            {/* SVG Lines connecting nodes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
               {/* Lines from center (50%, 50%) to nodes */}
               {d.categories.nodes.map((node: any, idx: number) => {
                 const positions = [
                   { top: '25%', left: '20%' },
                   { top: '25%', left: '80%' },
                   { top: '50%', left: '15%' },
                   { top: '50%', left: '85%' },
                   { top: '75%', left: '30%' },
                   { top: '75%', left: '70%' },
                 ];
                 const pos = positions[idx] || positions[0];
                 return (
                   <line key={idx} x1="50%" y1="50%" x2={pos.left} y2={pos.top} stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                 );
               })}
            </svg>

            {/* Center Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0054A6] text-white px-6 py-3 rounded-full font-bold shadow-lg z-10 whitespace-nowrap">
              Conteúdo {networkName}
            </div>

            {d.categories.nodes.map((node: any, idx: number) => {
              const positions = [
                { top: '25%', left: '20%' },
                { top: '25%', left: '80%' },
                { top: '50%', left: '15%' },
                { top: '50%', left: '85%' },
                { top: '75%', left: '30%' },
                { top: '75%', left: '70%' },
              ];
              const pos = positions[idx] || positions[0];
              return (
                <div key={idx} style={{top: pos.top, left: pos.left}} className={`absolute -translate-x-1/2 -translate-y-1/2 bg-white border ${node.borderClass} shadow-sm p-3 rounded-lg z-10 w-36 sm:w-40 text-center border-t-4 transition-transform hover:-translate-y-1`}>
                  <h4 className="font-bold text-slate-700 text-sm">{node.title}</h4>
                  <p className="text-xs text-slate-500 font-mono mt-1">{node.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* APRENDIZADOS DA PÁGINA */}
      <header className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[#0054A6] mb-6 tracking-tight">
          O que aprendemos sobre o comportamento do consumidor esta semana em {networkName}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {d.learnings.map((learning: any, idx: number) => (
            <div key={idx} className="bg-white border text-center border-slate-200 rounded p-5 shadow-sm border-t-4 border-t-[#0054A6]">
              <h3 className="font-semibold text-sm text-slate-500 mb-2 uppercase tracking-wide">{learning.title}</h3>
              <p className="text-slate-800 md:text-base font-medium">{learning.desc}</p>
            </div>
          ))}
        </div>
      </header>

      {/* SEÇÕES 5 e 6 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* SEÇÃO 5: OPORTUNIDADES */}
        <section className="bg-white border border-slate-200 rounded p-6 shadow-sm">
          <h3 className="text-lg font-bold text-[#0054A6] mb-4 uppercase tracking-tight">Gaps identificados</h3>
          <p className="text-sm text-slate-500 mb-4 font-medium uppercase tracking-wide"></p>
          <ul className="space-y-4">
            {d.opportunities.map((opp: any, idx: number) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full border-2 border-[#F37021] shrink-0"></div>
                <div>
                  <p className="text-sm text-slate-600 font-medium">{opp.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* SEÇÃO 6: RECOMENDAÇÕES */}
        <section className="bg-slate-900 border border-slate-900 rounded p-6 shadow-sm text-white">
          <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">O Plano de Ação Executivo</h3>
          <p className="text-sm text-slate-400 mb-6 font-medium"></p>
          
          <div className="space-y-4">
            {d.actionPlan.map((plan: any, idx: number) => (
              <div key={idx} className={`bg-white/10 p-4 rounded border-l-4 ${plan.colorClass}`}>
                <div className="flex gap-4">
                  <div className="text-3xl font-light text-slate-400">{plan.num}</div>
                  <div className="flex items-center">
                    <p className="text-sm text-slate-300 font-medium">{plan.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
