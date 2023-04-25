import React from 'react';
import './Widget.css';
import WidgetProgress from './widgetprogress/WidgetProgress';
import WidgetContent from './widgetcontent/WidgetContent';
import { useAppSelector } from '../store/hooks';
import { widgetData } from '../store/progress/progress';

function Widget() {
  const data = useAppSelector(widgetData);

  console.log('widget Data: ', data);

  return (
    <div className='widget-root'>
      <div className='widget-container'>
        <div className='widget-header'>
          <div className='widget-title'>Lodgify Grouped Tasks</div>
          <WidgetProgress />
        </div>
        <WidgetContent data={data} />
      </div>
    </div>
  );
}

export default Widget;
