import React from 'react';
import './WidgetProgress.css';

interface WidgetProgressProps {
  className?: string;
  percent: number;
}

function WidgetProgress({ className, percent }: WidgetProgressProps) {
  return (
    <div className={`widgetProgress-root ${className}`}>
      <div className='widgetProgress-mainline' style={{ width: `${percent}%` }}>
        {percent}%
      </div>
    </div>
  );
}

export default WidgetProgress;
