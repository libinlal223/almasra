import React from 'react';

interface BlueprintCardProps {
  title: string;
  subtitle?: string;
  accentColor?: 'steel' | 'amber' | 'navy';
  className?: string;
  children: React.ReactNode;
}

export const BlueprintCard: React.FC<BlueprintCardProps> = ({
  title,
  subtitle,
  accentColor = 'steel',
  className = '',
  children,
}) => {
  const accentBgMap = {
    steel: 'bg-[#505f76]',
    amber: 'bg-[#d97706]',
    navy: 'bg-[#0f172a]',
  };

  return (
    <div className={`relative bg-white border border-[#c6c6cd] rounded-none p-6 shadow-none hover:border-[#0f172a] transition-all group ${className}`}>
      
      {/* 4px Top-Left Accent Tab */}
      <div className={`absolute top-0 left-0 w-12 h-1 ${accentBgMap[accentColor]}`} />

      {/* Header Info */}
      <div className="mb-4">
        {subtitle && (
          <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-[#505f76] block mb-1">
            {subtitle}
          </span>
        )}
        <h3 className="font-archivo font-bold text-xl text-[#0f172a] tracking-tight group-hover:text-[#505f76] transition-colors">
          {title}
        </h3>
      </div>

      {/* Content */}
      <div className="text-[#45464d] text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
};
