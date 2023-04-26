import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { panelTitle } from '../../../../store/panel/panel';
import { checked, unChecked } from '../../../../store/progress/progress';
import './WidgetGroupContent.css';

interface WidgetGroupContentProps {
  data: GroupItem;
  onChecked: (isChecked: boolean) => void;
}

function WidgetGroupContent({ data, onChecked }: WidgetGroupContentProps) {
  const dispatch = useAppDispatch();
  const selectedPanelTitle = useAppSelector(panelTitle);

  const handleTaskChange = (e: any, val: number) => {
    onChecked(e.target.checked);
    e.target.checked ? dispatch(checked(val)) : dispatch(unChecked(val));
  };

  return (
    <div
      className={`widgetGroupContent ${
        selectedPanelTitle !== data.name ? 'hidden' : ''
      }`}
    >
      {data.tasks?.map((task: TaskItem, index: number) => {
        return (
          <label className='task' key={index}>
            <input
              type='checkbox'
              defaultChecked={task.checked}
              onChange={(e) => handleTaskChange(e, task.value)}
            />
            <span className='checkmark' />
            {task.description}
          </label>
        );
      })}
    </div>
  );
}

export default WidgetGroupContent;
