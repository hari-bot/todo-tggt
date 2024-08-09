import React from 'react';

interface IndicatorProps {
  type: 'expired' | 'upcoming' | 'today';
}

function Indicator({ type }: IndicatorProps) {
  const getBackgroundColor = (type: IndicatorProps['type']): string => {
    switch (type) {
      case 'expired':
        return '#FD99AF';
      case 'upcoming':
        return '#3FD4F4';
      case 'today':
        return '#FAC608';
      default:
        return '#ffffff';
    }
  };

  const bgColor = getBackgroundColor(type);

  return <div className="w-4 h-4 rounded-full" style={{ backgroundColor: bgColor }} />;
}

export default Indicator;
