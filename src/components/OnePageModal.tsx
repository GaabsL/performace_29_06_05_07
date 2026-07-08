import React, { useRef, useState } from 'react';
import { X, Download, Instagram, Facebook, Youtube, Share2, TrendingUp, Monitor, Smartphone, Video, Loader2 } from 'lucide-react';
import { useReportContext } from '../context/ReportContext';
import { toJpeg } from 'html-to-image';
import { jsPDF } from 'jspdf';

interface OnePageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OnePageModal: React.FC<OnePageModalProps> = ({ isOpen, onClose }) => {
  const { reportData } = useReportContext();
  const reportRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  let d = reportData.onePage;
  
  if (!isOpen) return null;
  if (!d) return null;

  // Polyfill `d.channels` because the UI expects it but data provides `instagramDetails`, etc.
  d = {
    ...d,
    channels: {
      ig: {
        title: "Instagram (Feed + Stories)",
        best: d.instagramDetails.performance,
        insights: d.instagramDetails.insights,
        opportunities: d.instagramDetails.opportunities,
        kpi1: { label: "Impressões", value: d.instagramDetails.stats.reach },
        kpi2: { label: "Engajamento", value: d.instagramDetails.stats.eng },
        kpi3: { label: "Novos Seg.", value: d.instagramDetails.stats.newFollowers },
        kpi4: { label: "Reposts", value: d.instagramDetails.stats.reposts || "822" },
        mockup1: { label: d.instagramDetails.mockups[0]?.label || "ENG: 7,51%", imgUrl: d.instagramDetails.mockups[0]?.imageUrl || "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400&h=600" },
        mockup2: { label: d.instagramDetails.mockups[1]?.label || "ENG: 6,24%", imgUrl: d.instagramDetails.mockups[1]?.imageUrl || "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=400&h=600" },
      },
      fb: {
        title: "Facebook",
        best: d.facebookDetails.performance,
        insights: d.facebookDetails.insights,
        opportunities: d.facebookDetails.opportunities,
        kpi1: { label: "Impressões", value: d.facebookDetails.stats.reach },
        kpi2: { label: "Engajamento", value: d.facebookDetails.stats.eng },
        kpi3: { label: "Novos Seg.", value: d.facebookDetails.stats.newFollowers },
        kpi4: { label: "Shares", value: d.facebookDetails.stats.shares },
        mockup1: { label: d.facebookDetails.mockups[0]?.label || "ENG: 5,42%", imgUrl: d.facebookDetails.mockups[0]?.imageUrl || "https://images.unsplash.com/photo-1591085686360-6e421cd7a115?auto=format&fit=crop&q=80&w=400&h=600" },
      },
      tk: {
        title: "TikTok",
        best: d.tiktokDetails.performance,
        insights: d.tiktokDetails.insights,
        opportunities: d.tiktokDetails.opportunities,
        kpi1: { label: "Views", value: d.tiktokDetails.stats.reach },
        kpi2: { label: "Engajamento", value: d.tiktokDetails.stats.eng },
        kpi3: { label: "Novos Seg.", value: d.tiktokDetails.stats.newFollowers },
        kpi4: { label: "Shares", value: d.tiktokDetails.stats.shares },
        mockup1: { label: d.tiktokDetails.mockups[0]?.label || "ENG: 8,11%", imgUrl: d.tiktokDetails.mockups[0]?.imageUrl || "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=400&h=600" },
      }
    }
  } as any;

  const handlePrint = async () => {
    if (!reportRef.current) {
      window.print();
      return;
    }
    
    try {
      setIsDownloading(true);
      // Wait a moment for layout stability
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const element = reportRef.current;
      
      // Filter out elements that should not be printed
      const filter = (node: HTMLElement) => {
        if (node?.classList?.contains?.('print:hidden')) return false;
        if (node?.hasAttribute?.('data-html2canvas-ignore')) return false;
        return true;
      };

      const width = element.scrollWidth;
      const height = element.scrollHeight;

      const dataUrl = await toJpeg(element, { 
        quality: 0.95,
        backgroundColor: '#002D62',
        pixelRatio: 1.5,
        width: width,
        height: height,
        style: {
          width: `${width}px`,
          height: `${height}px`,
          overflow: 'visible',
        },
        filter: filter as any,
      });

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [width, height],
      });
      
      pdf.addImage(dataUrl, 'JPEG', 0, 0, width, height);
      pdf.save(`Report_Assai_${d.header.period.replace(/\s+/g, '_')}.pdf`);
    } catch (err) {
      console.error("Failed to generate PDF", err);
      // Fallback in case of another error
      window.print();
    } finally {
      setIsDownloading(false);
    }
  };

  // SVG Sparkline Component
  const Sparkline = ({ color }: { color: string }) => (
    <svg className="w-full h-12 mt-2" viewBox="0 0 100 30" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`grad-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,25 C15,15 30,28 50,15 C70,2 85,20 100,5 L100,30 L0,30 Z"
        fill={`url(#grad-${color.replace('#', '')})`}
      />
      <path
        d="M0,25 C15,15 30,28 50,15 C70,2 85,20 100,5"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="100" cy="5" r="2" fill={color} />
    </svg>
  );

  // Phone Mockup Component
  const PhoneMockup = ({ label, themeColor, imgUrl, title }: { label: string, themeColor: string, imgUrl?: string, title?: string }) => (
    <div className="flex flex-col items-center">
      {title && <span className="text-white text-xs font-bold mb-2 uppercase tracking-wide">{title}</span>}
      <div className="w-24 md:w-28 h-48 md:h-52 bg-slate-900 rounded-2xl border-[3px] border-slate-800 relative overflow-hidden shadow-2xl shrink-0 flex flex-col">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-3 bg-slate-800 rounded-b-md z-10"></div>
         <div className="flex-1 bg-slate-100 flex flex-col items-center justify-center relative overflow-hidden">
            {imgUrl ? (
              <img src={imgUrl} alt={label} className="w-full h-full object-cover" />
            ) : (
              <div className="text-slate-300 font-bold text-xs uppercase tracking-widest opacity-50">Post</div>
            )}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-[7px] md:text-[9px] font-extrabold whitespace-nowrap text-slate-800 border-l-2" style={{ borderColor: themeColor }}>
              {label}
            </div>
         </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-sm print:bg-[#002D62] print:absolute print:inset-0 print:block print:z-auto print:h-auto print:w-auto p-0 md:p-6">
      
      <div ref={reportRef} className="bg-[#002D62] w-full h-full md:rounded-xl shadow-2xl overflow-y-auto overflow-x-hidden print:overflow-visible print:h-auto print:rounded-none print:shadow-none font-sans text-slate-800 relative">
        
        {/* Sutil background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        {/* Floating Action Buttons */}
        <div className="fixed top-4 right-4 flex gap-2 z-50 print:hidden" data-html2canvas-ignore>
          <button onClick={handlePrint} disabled={isDownloading} className="bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full backdrop-blur transition-all shadow-lg disabled:opacity-50" title="Download as PDF">
            {isDownloading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Download className="w-5 h-5" />}
          </button>
          <button onClick={onClose} className="bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full backdrop-blur transition-all shadow-lg text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative z-10 p-4 sm:p-8 md:p-10 max-w-[1440px] mx-auto print:min-w-0 print:w-full print:p-6 space-y-8 md:space-y-12">
          
          {/* HEADER DA PÁGINA */}
          <header className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-white/20 pb-6 gap-4">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight uppercase leading-none">{d.header.title}</h1>
              <p className="text-lg md:text-xl font-bold text-[#FFCB05] mt-2 tracking-wide uppercase">{d.header.period}</p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <div className="w-32 h-12 bg-white rounded flex items-center justify-center shadow-sm">
                <img src="https://i.imgur.com/ihchsJt.png" alt="Assaí" className="h-10 p-1 object-contain" />
              </div>
              <div className="w-28 h-12 bg-white rounded flex items-center justify-center shadow-sm">
                <img src="https://i.imgur.com/lAyMWKF.png" alt="Agência" className="h-8 p-1 object-contain" />
              </div>
            </div>
          </header>

          {/* SEÇÃO 1: VISÃO GERAL DESTAQUES */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-5 shadow-lg flex items-center justify-between border-b-4 border-[#E1306C]">
              <div className="flex items-center gap-4">
                <div className="bg-pink-50 p-2.5 rounded-full text-[#E1306C]"><Instagram className="w-7 h-7"/></div>
                <div>
                  <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-0.5">Engajamento IG</p>
                  <p className="text-2xl font-black text-slate-800 leading-none">{d.overview.ig.engagement}</p>
                </div>
              </div>
              <div className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-[10px] font-black flex items-center gap-0.5 shadow-sm">
                <TrendingUp className="w-3 h-3"/> {d.overview.ig.tag} {d.overview.ig.isUp ? '⬆️' : '⬇️'}
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-xl p-5 shadow-lg flex items-center justify-between border-b-4 border-[#1877F2]">
              <div className="flex items-center gap-4">
                <div className="bg-blue-50 p-2.5 rounded-full text-[#1877F2]"><Facebook className="w-7 h-7"/></div>
                <div>
                  <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-0.5">Engajamento FB</p>
                  <p className="text-2xl font-black text-slate-800 leading-none">{d.overview.fb.engagement}</p>
                </div>
              </div>
              <div className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-[10px] font-black flex items-center gap-0.5 shadow-sm">
                <TrendingUp className="w-3 h-3"/> {d.overview.fb.tag} {d.overview.fb.isUp ? '⬆️' : '⬇️'}
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-xl p-5 shadow-lg flex items-center justify-between border-b-4 border-slate-900">
              <div className="flex items-center gap-4">
                <div className="bg-slate-100 p-2.5 rounded-full text-slate-800">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-0.5">Engajamento TK</p>
                  <p className="text-2xl font-black text-slate-800 leading-none">{d.overview.tk.engagement}</p>
                </div>
              </div>
              <div className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-[10px] font-black flex items-center gap-0.5 shadow-sm">
                <TrendingUp className="w-3 h-3"/> {d.overview.tk.tag} {d.overview.tk.isUp ? '⬆️' : '⬇️'}
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-white rounded-xl p-5 shadow-lg flex items-center justify-between border-b-4 border-[#F37021]">
              <div className="flex items-center gap-4">
                <div className="bg-orange-50 p-2.5 rounded-full text-[#F37021]"><Share2 className="w-7 h-7"/></div>
                <div>
                  <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest mb-0.5">Repost no Instagram</p>
                  <p className="text-2xl font-black text-[#F37021] leading-none">{d.overview.repost.total}</p>
                </div>
              </div>
              <div className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-[10px] font-black flex items-center gap-0.5 shadow-sm">
                <TrendingUp className="w-3 h-3"/> {d.overview.repost.tag} {d.overview.repost.isUp ? '⬆️' : '⬇️'}
              </div>
            </div>
          </section>

          {/* Grid Layout: Metas & Seguidores */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 md:gap-8">
            
            {/* SEÇÃO 2: METAS (TABELA MATRICIAL) */}
            <section className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 relative overflow-hidden flex flex-col">
               <h3 className="text-white font-black text-sm uppercase tracking-widest mb-6 opacity-90">Metas (Acumulado)</h3>
               
               <div className="grid grid-cols-5 gap-2 mb-4 text-center">
                  <div></div>
                  <div className="flex flex-col items-center justify-center text-white/70">
                     <Facebook className="w-5 h-5"/>
                     <span className="text-[7px] uppercase mt-1 font-bold">Facebook</span>
                  </div>
                  <div className="flex flex-col items-center justify-center text-white/70">
                     <Instagram className="w-5 h-5"/>
                     <span className="text-[7px] uppercase mt-1 font-bold">IG Feed</span>
                  </div>
                  <div className="flex flex-col items-center justify-center text-white/70">
                     <Instagram className="w-5 h-5"/>
                     <span className="text-[7px] uppercase mt-1 font-bold">IG Stories</span>
                  </div>
                  <div className="flex flex-col items-center justify-center text-white/70">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                    <span className="text-[7px] uppercase mt-1 font-bold">TikTok</span>
                  </div>
               </div>
               
               <div className="grid grid-cols-5 gap-2 items-center bg-white/5 rounded-xl p-3 mb-3 border border-white/10 shadow-inner">
                 <div className="text-white font-extrabold text-[10px] uppercase tracking-widest pl-2">Mensal</div>
                 <div className="flex flex-col items-center">
                   <span className="text-white font-black text-lg">{d.metas.mensal.fb.value}</span>
                   <span className={`${d.metas.mensal.fb.isPositive ? 'bg-emerald-500' : 'bg-rose-500'} text-white text-[8px] font-black px-1.5 py-0.5 rounded shadow-sm mt-1`}>{d.metas.mensal.fb.diff}</span>
                 </div>
                 <div className="flex flex-col items-center">
                   <span className="text-white font-black text-lg">{d.metas.mensal.ig_feed.value}</span>
                   <span className={`${d.metas.mensal.ig_feed.isPositive ? 'bg-emerald-500' : 'bg-rose-500'} text-white text-[8px] font-black px-1.5 py-0.5 rounded shadow-sm mt-1`}>{d.metas.mensal.ig_feed.diff}</span>
                 </div>
                 <div className="flex flex-col items-center">
                   <span className="text-white font-black text-lg">{d.metas.mensal.ig_stories.value}</span>
                   <span className={`${d.metas.mensal.ig_stories.isPositive ? 'bg-emerald-500' : 'bg-rose-500'} text-white text-[8px] font-black px-1.5 py-0.5 rounded shadow-sm mt-1`}>{d.metas.mensal.ig_stories.diff}</span>
                 </div>
                 <div className="flex flex-col items-center">
                   <span className="text-white font-black text-lg">{d.metas.mensal.tk.value}</span>
                   <span className={`${d.metas.mensal.tk.isPositive ? 'bg-emerald-500' : 'bg-rose-500'} text-white text-[8px] font-black px-1.5 py-0.5 rounded shadow-sm mt-1`}>{d.metas.mensal.tk.diff}</span>
                 </div>
               </div>

               <div className="grid grid-cols-5 gap-2 items-center bg-white/5 rounded-xl p-3 border border-white/10 shadow-inner mt-auto">
                 <div className="text-white font-extrabold text-[10px] uppercase tracking-widest pl-2">Anual</div>
                 <div className="flex flex-col items-center">
                   <span className="text-white font-black text-lg">{d.metas.anual.fb.value}</span>
                   <span className={`${d.metas.anual.fb.isPositive ? 'bg-emerald-500' : 'bg-rose-500'} text-white text-[8px] font-black px-1.5 py-0.5 rounded shadow-sm mt-1`}>{d.metas.anual.fb.diff}</span>
                 </div>
                 <div className="flex flex-col items-center">
                   <span className="text-white font-black text-lg">{d.metas.anual.ig_feed.value}</span>
                   <span className={`${d.metas.anual.ig_feed.isPositive ? 'bg-emerald-500' : 'bg-rose-500'} text-white text-[8px] font-black px-1.5 py-0.5 rounded shadow-sm mt-1`}>{d.metas.anual.ig_feed.diff}</span>
                 </div>
                 <div className="flex flex-col items-center">
                   <span className="text-white font-black text-lg">{d.metas.anual.ig_stories.value}</span>
                   <span className={`${d.metas.anual.ig_stories.isPositive ? 'bg-emerald-500' : 'bg-rose-500'} text-white text-[8px] font-black px-1.5 py-0.5 rounded shadow-sm mt-1`}>{d.metas.anual.ig_stories.diff}</span>
                 </div>
                 <div className="flex flex-col items-center">
                   <span className="text-white font-black text-lg">{d.metas.anual.tk.value}</span>
                   <span className={`${d.metas.anual.tk.isPositive ? 'bg-emerald-500' : 'bg-rose-500'} text-white text-[8px] font-black px-1.5 py-0.5 rounded shadow-sm mt-1`}>{d.metas.anual.tk.diff}</span>
                 </div>
               </div>
            </section>

            {/* SEÇÃO 3: CRESCIMENTO DE SEGUIDORES */}
            <section className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 h-full flex flex-col">
               <h3 className="text-white font-black text-sm uppercase tracking-widest mb-6 opacity-90">Crescimento de Seguidores</h3>
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
                 
                 <div className="bg-white rounded-xl p-4 flex flex-col shadow-lg">
                   <div className="flex items-center gap-1.5 mb-2 text-[#E1306C]">
                     <Instagram className="w-4 h-4"/><span className="font-extrabold text-[9px] uppercase tracking-widest text-slate-500">Instagram</span>
                   </div>
                   <div className="mt-1">
                     <p className="text-2xl font-black text-slate-800 leading-none">{d.followers.ig.total}</p>
                     <p className="text-emerald-500 font-extrabold text-[10px] uppercase mt-1">{d.followers.ig.new}</p>
                   </div>
                   <div className="mt-auto pt-2"><Sparkline color="#E1306C" /></div>
                 </div>

                 <div className="bg-white rounded-xl p-4 flex flex-col shadow-lg">
                   <div className="flex items-center gap-1.5 mb-2 text-[#1877F2]">
                     <Facebook className="w-4 h-4"/><span className="font-extrabold text-[9px] uppercase tracking-widest text-slate-500">Facebook</span>
                   </div>
                   <div className="mt-1">
                     <p className="text-2xl font-black text-slate-800 leading-none">{d.followers.fb.total}</p>
                     <p className="text-emerald-500 font-extrabold text-[10px] uppercase mt-1">{d.followers.fb.new}</p>
                   </div>
                   <div className="mt-auto pt-2"><Sparkline color="#1877F2" /></div>
                 </div>

                 <div className="bg-white rounded-xl p-4 flex flex-col shadow-lg">
                   <div className="flex items-center gap-1.5 mb-2 text-slate-900">
                     <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                     <span className="font-extrabold text-[9px] uppercase tracking-widest text-slate-500">TikTok</span>
                   </div>
                   <div className="mt-1">
                     <p className="text-2xl font-black text-slate-800 leading-none">{d.followers.tk.total}</p>
                     <p className="text-emerald-500 font-extrabold text-[10px] uppercase mt-1">{d.followers.tk.new}</p>
                   </div>
                   <div className="mt-auto pt-2"><Sparkline color="#0f172a" /></div>
                 </div>

               </div>
            </section>
          </div>

          {/* SEÇÃO 4: DETALHAMENTO DE PERFORMANCE POR CANAL */}
          <div className="space-y-6">
            
            {/* Bloco Instagram */}
            <section className="bg-white rounded-[24px] p-6 md:p-8 flex flex-col xl:flex-row gap-8 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#E1306C]/5 rounded-bl-[100px] pointer-events-none"></div>
               
               {/* Coluna 1: Texto */}
               <div className="flex-[1.2] flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                     <div className="bg-[#E1306C]/10 p-3 rounded-lg"><Instagram className="w-6 h-6 text-[#E1306C]" /></div>
                     <h3 className="text-2xl font-black uppercase text-slate-800 tracking-tight">{d.channels.ig.title}</h3>
                  </div>
                  
                  <div className="space-y-5">
                    <div>
                      <p className="font-extrabold text-sm text-slate-800 flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Melhor Performance
                      </p>
                      <p className="text-xs font-semibold text-slate-500 leading-relaxed pl-4">{d.channels.ig.best}</p>
                    </div>
                    <div className="w-full h-px bg-slate-100"></div>
                    <div>
                      <p className="font-extrabold text-sm text-slate-800 flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-[#FFCB05]"></span> Insights
                      </p>
                      <p className="text-xs font-semibold text-slate-500 leading-relaxed pl-4">{d.channels.ig.insights}</p>
                    </div>
                    <div className="w-full h-px bg-slate-100"></div>
                    <div>
                      <p className="font-extrabold text-sm text-slate-800 flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-[#F37021]"></span> Oportunidades
                      </p>
                      <p className="text-xs font-semibold text-slate-500 leading-relaxed pl-4">{d.channels.ig.opportunities}</p>
                    </div>
                  </div>
               </div>
               
               {/* Coluna 2: Big Numbers */}
               <div className="flex-1 grid grid-cols-2 gap-3 place-content-center">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100/50 flex flex-col justify-center items-center text-center shadow-sm">
                    <p className="text-[9px] font-extrabold uppercase text-slate-400 tracking-widest mb-1">{d.channels.ig.kpi1.label}</p>
                    <p className="text-3xl font-black text-[#FFCB05] leading-none">{d.channels.ig.kpi1.value}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100/50 flex flex-col justify-center items-center text-center shadow-sm">
                    <p className="text-[9px] font-extrabold uppercase text-slate-400 tracking-widest mb-1">{d.channels.ig.kpi2.label}</p>
                    <p className="text-3xl font-black text-[#F37021] leading-none">{d.channels.ig.kpi2.value}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100/50 flex flex-col justify-center items-center text-center shadow-sm">
                    <p className="text-[9px] font-extrabold uppercase text-slate-400 tracking-widest mb-1">{d.channels.ig.kpi3.label}</p>
                    <p className="text-3xl font-black text-[#F37021] leading-none">{d.channels.ig.kpi3.value}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100/50 flex flex-col justify-center items-center text-center shadow-sm">
                    <p className="text-[9px] font-extrabold uppercase text-slate-400 tracking-widest mb-1">{d.channels.ig.kpi4.label}</p>
                    <p className="text-3xl font-black text-[#FFCB05] leading-none">{d.channels.ig.kpi4.value}</p>
                  </div>
               </div>

               {/* Coluna 3: Mockups */}
               <div className="flex-1 flex justify-center items-center gap-4 py-4">
                  <PhoneMockup label={d.channels.ig.mockup1.label} imgUrl={d.channels.ig.mockup1.imgUrl} themeColor="#E1306C" title="Feed" />
                  <div className="mt-8"><PhoneMockup label={d.channels.ig.mockup2.label} imgUrl={d.channels.ig.mockup2.imgUrl} themeColor="#E1306C" title="Stories" /></div>
               </div>
            </section>

            {/* Bloco Facebook */}
            <section className="bg-white rounded-[24px] p-6 md:p-8 flex flex-col xl:flex-row gap-8 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#1877F2]/5 rounded-bl-[100px] pointer-events-none"></div>
               
               <div className="flex-[1.2] flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                     <div className="bg-[#1877F2]/10 p-3 rounded-lg"><Facebook className="w-6 h-6 text-[#1877F2]" /></div>
                     <h3 className="text-2xl font-black uppercase text-slate-800 tracking-tight">{d.channels.fb.title}</h3>
                  </div>
                  
                  <div className="space-y-5">
                    <div>
                      <p className="font-extrabold text-sm text-slate-800 flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Melhor Performance
                      </p>
                      <p className="text-xs font-semibold text-slate-500 leading-relaxed pl-4">{d.channels.fb.best}</p>
                    </div>
                    <div className="w-full h-px bg-slate-100"></div>
                    <div>
                      <p className="font-extrabold text-sm text-slate-800 flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-[#FFCB05]"></span> Insights
                      </p>
                      <p className="text-xs font-semibold text-slate-500 leading-relaxed pl-4">{d.channels.fb.insights}</p>
                    </div>
                    <div className="w-full h-px bg-slate-100"></div>
                    <div>
                      <p className="font-extrabold text-sm text-slate-800 flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-[#F37021]"></span> Oportunidades
                      </p>
                      <p className="text-xs font-semibold text-slate-500 leading-relaxed pl-4">{d.channels.fb.opportunities}</p>
                    </div>
                  </div>
               </div>
               
               <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3 place-content-center">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100/50 flex flex-col justify-center items-center text-center shadow-sm">
                    <p className="text-[9px] font-extrabold uppercase text-slate-400 tracking-widest mb-1">{d.channels.fb.kpi1.label}</p>
                    <p className="text-3xl font-black text-[#FFCB05] leading-none">{d.channels.fb.kpi1.value}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100/50 flex flex-col justify-center items-center text-center shadow-sm">
                    <p className="text-[9px] font-extrabold uppercase text-slate-400 tracking-widest mb-1">{d.channels.fb.kpi2.label}</p>
                    <p className="text-3xl font-black text-[#F37021] leading-none">{d.channels.fb.kpi2.value}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100/50 flex flex-col justify-center items-center text-center shadow-sm">
                    <p className="text-[9px] font-extrabold uppercase text-slate-400 tracking-widest mb-1">{d.channels.fb.kpi3.label}</p>
                    <p className="text-3xl font-black text-[#F37021] leading-none">{d.channels.fb.kpi3.value}</p>
                  </div>
               </div>

               <div className="flex-1 flex justify-center items-center gap-4 py-4">
                  <PhoneMockup label={d.channels.fb.mockup1.label} imgUrl={d.channels.fb.mockup1.imgUrl} themeColor="#1877F2" title="Melhor Post" />
               </div>
            </section>

            {/* Bloco TikTok */}
            <section className="bg-white rounded-[24px] p-6 md:p-8 flex flex-col xl:flex-row gap-8 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-slate-900/5 rounded-bl-[100px] pointer-events-none"></div>
               
               <div className="flex-[1.2] flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                     <div className="bg-slate-100 p-3 rounded-lg">
                       <svg className="w-6 h-6 text-slate-900" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                     </div>
                     <h3 className="text-2xl font-black uppercase text-slate-800 tracking-tight">{d.channels.tk.title}</h3>
                  </div>
                  
                  <div className="space-y-5">
                    <div>
                      <p className="font-extrabold text-sm text-slate-800 flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Melhor Performance
                      </p>
                      <p className="text-xs font-semibold text-slate-500 leading-relaxed pl-4">{d.channels.tk.best}</p>
                    </div>
                    <div className="w-full h-px bg-slate-100"></div>
                    <div>
                      <p className="font-extrabold text-sm text-slate-800 flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-[#FFCB05]"></span> Insights
                      </p>
                      <p className="text-xs font-semibold text-slate-500 leading-relaxed pl-4">{d.channels.tk.insights}</p>
                    </div>
                    <div className="w-full h-px bg-slate-100"></div>
                    <div>
                      <p className="font-extrabold text-sm text-slate-800 flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-[#F37021]"></span> Oportunidades
                      </p>
                      <p className="text-xs font-semibold text-slate-500 leading-relaxed pl-4">{d.channels.tk.opportunities}</p>
                    </div>
                  </div>
               </div>
               
               <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-3 place-content-center">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100/50 flex flex-col justify-center items-center text-center shadow-sm">
                    <p className="text-[9px] font-extrabold uppercase text-slate-400 tracking-widest mb-1">{d.channels.tk.kpi1.label}</p>
                    <p className="text-3xl font-black text-[#FFCB05] leading-none">{d.channels.tk.kpi1.value}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100/50 flex flex-col justify-center items-center text-center shadow-sm">
                    <p className="text-[9px] font-extrabold uppercase text-slate-400 tracking-widest mb-1">{d.channels.tk.kpi2.label}</p>
                    <p className="text-3xl font-black text-[#F37021] leading-none">{d.channels.tk.kpi2.value}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100/50 flex flex-col justify-center items-center text-center shadow-sm">
                    <p className="text-[9px] font-extrabold uppercase text-slate-400 tracking-widest mb-1">{d.channels.tk.kpi3.label}</p>
                    <p className="text-3xl font-black text-[#F37021] leading-none">{d.channels.tk.kpi3.value}</p>
                  </div>
               </div>

               <div className="flex-1 flex justify-center items-center gap-4 py-4">
                  <PhoneMockup label={d.channels.tk.mockup1.label} imgUrl={d.channels.tk.mockup1.imgUrl} themeColor="#0f172a" title="Melhor TikTok" />
               </div>
            </section>
          </div>

          {/* SEÇÃO 5: PILARES ESTRATÉGICOS */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-white/20 rounded-2xl p-6 bg-white/5 backdrop-blur shadow-xl flex flex-col items-center text-center">
              <div className="bg-white/10 p-3 rounded-full mb-4">
                <Video className="w-6 h-6 text-white"/>
              </div>
              <h4 className="font-black text-sm text-white mb-2 uppercase tracking-widest">{d.pillars[0].title}</h4>
              <p className="text-slate-300 text-xs font-semibold leading-relaxed">{d.pillars[0].desc}</p>
            </div>
            <div className="border border-white/20 rounded-2xl p-6 bg-white/5 backdrop-blur shadow-xl flex flex-col items-center text-center">
              <div className="bg-white/10 p-3 rounded-full mb-4">
                <Smartphone className="w-6 h-6 text-[#FFCB05]"/>
              </div>
              <h4 className="font-black text-sm text-[#FFCB05] mb-2 uppercase tracking-widest">{d.pillars[1].title}</h4>
              <p className="text-slate-300 text-xs font-semibold leading-relaxed">{d.pillars[1].desc}</p>
            </div>
            <div className="border border-white/20 rounded-2xl p-6 bg-white/5 backdrop-blur shadow-xl flex flex-col items-center text-center">
              <div className="bg-white/10 p-3 rounded-full mb-4">
                <TrendingUp className="w-6 h-6 text-[#F37021]"/>
              </div>
              <h4 className="font-black text-sm text-[#F37021] mb-2 uppercase tracking-widest">{d.pillars[2].title}</h4>
              <p className="text-slate-300 text-xs font-semibold leading-relaxed">{d.pillars[2].desc}</p>
            </div>
          </section>

          {/* SEÇÃO 6: PROJETOS ESPECIAIS & PARCERIAS */}
          <section className="bg-gradient-to-br from-white/10 to-transparent border border-white/20 rounded-3xl p-8 backdrop-blur-md flex flex-col lg:flex-row gap-10 items-center overflow-hidden relative shadow-2xl">
             <div className="flex-1 z-10 w-full">
                <h3 className="text-xs font-extrabold text-slate-400 uppercase mb-4 tracking-widest">Projetos Especiais & Parcerias</h3>
                <h4 className="text-3xl lg:text-4xl font-black text-white mb-4 uppercase tracking-tight">{d.projects.title} <span className="text-[#FFCB05]">{d.projects.highlight}</span></h4>
                <p className="text-slate-300 font-semibold leading-relaxed text-sm md:text-base">
                  {d.projects.desc}
                </p>
             </div>
             
              {/* Componentes UI Desktop/Mobile CSS Only */}
             <div className="flex-1 w-full h-[250px] relative z-10 flex justify-center items-center mt-8 lg:mt-0">
                {/* Desktop Screen */}
                <div className="absolute left-[5%] top-10 w-48 md:w-64 h-36 border-[8px] border-slate-800 bg-slate-900 rounded-lg shadow-2xl flex flex-col shrink-0 overflow-hidden">
                   {/* Top browser bar */}
                   <div className="h-3 bg-slate-800 w-full flex items-center px-1.5 gap-1 border-b border-white/5 opacity-80 shrink-0">
                      <div className="w-1.5 h-1.5 bg-rose-500 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                   </div>
                   <div className="flex-1 bg-slate-900 overflow-hidden relative">
                      {d.projects?.mockups?.[0] ? (
                        <img src={d.projects.mockups[0]} alt="Desktop Mockup" className="absolute top-0 left-0 w-full h-auto object-cover" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <Monitor className="w-8 h-8 text-slate-600 mx-auto mb-2 opacity-50" />
                            <span className="text-slate-500 font-black text-[8px] tracking-[0.2em] uppercase">Monitor Digital</span>
                          </div>
                        </div>
                      )}
                   </div>
                </div>
                {/* Desktop Stand */}
                <div className="absolute left-[5%] top-[184px] ml-[80px] md:ml-[112px] w-8 h-8 bg-slate-700"></div>
                <div className="absolute left-[5%] top-[216px] ml-[60px] md:ml-[92px] w-16 h-2 bg-slate-600 rounded"></div>

                {/* Smartphone 1 */}
                <div className="absolute right-[25%] top-4 w-20 md:w-24 h-40 bg-slate-800 rounded-xl border-[4px] border-slate-900 shadow-2xl z-20 overflow-hidden relative">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-slate-900 rounded-b-md z-10"></div>
                   <div className="absolute inset-0 bg-slate-900">
                      {d.projects?.mockups?.[1] ? (
                        <img src={d.projects.mockups[1]} alt="Mobile Mockup 1" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-[#F37021] flex flex-col items-center justify-end pb-4">
                           <span className="text-white/90 font-black text-[6px] tracking-widest text-center px-2">ASSAÍ NO IFOOD</span>
                        </div>
                      )}
                   </div>
                </div>

                {/* Smartphone 2 */}
                <div className="absolute right-[5%] md:right-[10%] top-12 w-20 md:w-24 h-40 bg-slate-800 rounded-xl border-[4px] border-slate-900 shadow-2xl z-30 overflow-hidden relative">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-slate-900 rounded-b-md z-10"></div>
                   <div className="absolute inset-0 bg-slate-900">
                      {d.projects?.mockups?.[2] ? (
                        <img src={d.projects.mockups[2]} alt="Mobile Mockup 2" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-white flex flex-col items-center justify-center">
                           <span className="bg-[#FFCB05] text-slate-900 px-2 py-0.5 rounded-sm font-black text-[6px] tracking-widest text-center mt-2">OFERTA APP</span>
                        </div>
                      )}
                   </div>
                </div>
             </div>
          </section>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body * { visibility: hidden; }
          #root, #root * { visibility: visible; }
          .fixed.inset-0.z-50 {
            position: absolute; left: 0; top: 0; margin: 0; padding: 0; min-height: 100vh; width: 100%;
          }
          @page { size: A4 landscape; margin: 0cm; }
          /* Ensure backgrounds print correctly */
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
      `}} />
    </div>
  );
};

