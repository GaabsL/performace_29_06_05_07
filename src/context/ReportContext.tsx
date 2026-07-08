import React, { createContext, useContext, useState, ReactNode } from 'react';
import { initialReportData } from '../data/initialReportData';

export type ReportData = typeof initialReportData;

interface ReportContextProps {
  reportData: ReportData;
  setReportData: (data: ReportData) => void;
}

const ReportContext = createContext<ReportContextProps | undefined>(undefined);

export const ReportProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [reportData, setReportData] = useState<ReportData>(initialReportData);

  return (
    <ReportContext.Provider value={{ reportData, setReportData }}>
      {children}
    </ReportContext.Provider>
  );
};

export const useReportContext = () => {
  const context = useContext(ReportContext);
  if (!context) {
    throw new Error('useReportContext must be used within a ReportProvider');
  }
  return context;
};
