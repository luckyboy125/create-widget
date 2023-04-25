import React from 'react';
import './Widget.css';
import WidgetProgress from './component/widgetprogress/WidgetProgress';
import WidgetContent from './component/widgetcontent/WidgetContent';

function Widget() {
  return (
    <div className='widget-root'>
      <div className='widget-container'>
        <div className='widget-header'>
          <div className='widget-title'>Lodgify Grouped Tasks</div>
          <WidgetProgress percent={80} />
        </div>
        <WidgetContent />
      </div>
    </div>
  );
}

export default Widget;
