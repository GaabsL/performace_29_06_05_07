import React from 'react';
import { useReportContext } from '../context/ReportContext';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-sm rounded text-[9px]">
        <p className="font-bold mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {entry.value.toLocaleString('pt-BR')}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const FollowerCharts = () => {
  const { reportData } = useReportContext();
  const data = reportData.followerTimeline;

  const latestNode = data && data.length > 0 ? data[data.length - 1] : { total: 0, facebook: 0, instagram: 0, tiktok: 0 };
  const formattedTotalGeral = latestNode.total ? (latestNode.total / 1000000).toFixed(2) + 'M' : '0.00M';
  const formattedTotalFacebook = latestNode.facebook ? (latestNode.facebook / 1000000).toFixed(2) + 'M' : '0.00M';
  const formattedTotalInstagram = latestNode.instagram ? (latestNode.instagram / 1000000).toFixed(2) + 'M' : '0.00M';
  const formattedTotalTikTok = latestNode.tiktok ? (latestNode.tiktok >= 1000 ? (latestNode.tiktok / 1000).toFixed(1) + 'k' : latestNode.tiktok.toString()) : '0k';

  const ChartConfig = ({ dataKey, color, title, total }: { dataKey: string, color: string, title: string, total: string }) => (
    <div className="bg-slate-50 p-3 rounded flex flex-col h-[140px]">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-[10px] font-bold uppercase text-slate-600">{title}</h4>
        <span className="text-[10px] font-semibold" style={{ color }}>{total}</span>
      </div>
      <div className="flex-1 w-full relative -ml-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <XAxis dataKey="date" hide />
            <YAxis domain={['auto', 'auto']} hide />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              type="monotone" 
              dataKey={dataKey} 
              stroke={color} 
              strokeWidth={2} 
              dot={{ r: 2, fill: color }} 
              activeDot={{ r: 4 }} 
              name="Seguidores"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  return (
    <div className="mt-2">
      <h3 className="text-xs font-bold uppercase mb-3 flex items-center gap-2">
        <span className="w-1 h-4 bg-emerald-500"></span> Crescimento de Seguidores
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <ChartConfig 
          title="Geral" 
          dataKey="total" 
          color="#10B981" 
          total={formattedTotalGeral} 
        />
        <ChartConfig 
          title="Facebook" 
          dataKey="facebook" 
          color="#0054A6" 
          total={formattedTotalFacebook} 
        />
        <ChartConfig 
          title="Instagram" 
          dataKey="instagram" 
          color="#DB2777" 
          total={formattedTotalInstagram} 
        />
        <ChartConfig 
          title="TikTok" 
          dataKey="tiktok" 
          color="#0F172A" 
          total={formattedTotalTikTok} 
        />
      </div>
    </div>
  );
};
