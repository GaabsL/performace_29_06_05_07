import { AlertOctagon, ArrowDownRight, ArrowUpRight, CheckCircle, ChevronRight, Facebook, Instagram, Lightbulb, MessageCircle, MousePointerClick, Share2, Target, TrendingUp, Users, Video } from "lucide-react";
import React from 'react';

const icons = {
  Facebook: Facebook,
  Instagram: Instagram,
  Video: Video,
  TrendingUp: TrendingUp,
  Users: Users,
  AlertOctagon: AlertOctagon,
  Target: Target,
  Lightbulb: Lightbulb,
  CheckCircle: CheckCircle
};

export const TrendBadge = ({ isPositive, value, label }: { isPositive: boolean; value: string; label?: string }) => {
  return (
    <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${isPositive ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
      {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
      <span>{value}</span>
      {label && <span className="font-medium opacity-80">{label}</span>}
    </div>
  );
};

export const IconByName = ({ name, className }: { name: string; className?: string }) => {
  const Icon = icons[name as keyof typeof icons];
  return Icon ? <Icon className={className} /> : null;
};
