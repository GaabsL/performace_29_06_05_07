import React from 'react';
import { useReportContext } from '../context/ReportContext';

export const Hero = () => {
  const { reportData } = useReportContext();
  return (
    <header 
      className="text-white p-4 flex items-center justify-between shrink-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("https://i.imgur.com/Wa2EYmF.png")' }}
    >
      <div className="flex items-center gap-4 shrink-0">
        <div className="bg-white p-1.5 rounded hidden sm:block shrink-0">
          <img src="https://i.imgur.com/ihchsJt.png" alt="Assaí Atacadista" className="h-6 object-contain" />
        </div>
        <div>
          <h1 className="text-lg font-bold uppercase tracking-tight">{reportData.header.title}</h1>
          <p className="text-[10px] opacity-90">{reportData.header.subtitle}</p>
        </div>
      </div>
      
      <div className="flex-1 flex justify-center sm:justify-end sm:pr-8 lg:pr-32 xl:pr-48">
        <div className="text-center bg-white text-[#0054A6] px-3 py-1.5 rounded shadow-sm">
          <div className="text-xs font-bold hidden sm:block uppercase">Performance Digital Semanal</div>
          <div className="text-[10px] font-semibold mt-1 sm:mt-0">Período: {reportData.header.period}</div>
        </div>
      </div>

      <div className="bg-white p-1.5 rounded hidden sm:block shrink-0">
        <img src="https://i.imgur.com/lAyMWKF.png" alt="Mega Midia" className="h-6 object-contain" />
      </div>
    </header>
  );
};
