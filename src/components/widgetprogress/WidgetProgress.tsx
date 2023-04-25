import { useAppSelector } from '../../store/hooks';
import { progressTotal, progressValue } from '../../store/progress/progress';
import './WidgetProgress.css';

function WidgetProgress() {
  const progress = useAppSelector(progressValue);
  const total = useAppSelector(progressTotal);

  return (
    <div className='widgetProgress-root'>
      <div
        className='widgetProgress-mainline'
        style={{
          width: `${(progress / total) * 100}%`,
          opacity: progress / total === 0 ? 0 : 1,
        }}
      >
        {Math.floor((progress / total) * 100)}%
      </div>
    </div>
  );
}

export default WidgetProgress;
