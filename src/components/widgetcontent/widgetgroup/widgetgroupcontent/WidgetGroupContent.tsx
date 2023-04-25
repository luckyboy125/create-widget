import { useAppDispatch } from '../../../../store/hooks';
import { checked, unChecked } from '../../../../store/progress/progress';
import './WidgetGroupContent.css';

interface WidgetGroupContentProps {
  data: TaskItem[];
}

function WidgetGroupContent({ data }: WidgetGroupContentProps) {
  const dispatch = useAppDispatch();

  const handleTaskChange = (e: any, val: number) => {
    e.target.checked ? dispatch(checked(val)) : dispatch(unChecked(val));
  };

  return (
    <div className='widgetGroupContent'>
      {data?.map((task: TaskItem, index: number) => {
        return (
          <label className='task' key={index}>
            <input
              type='checkbox'
              defaultChecked={task.checked}
              onChange={(e) => handleTaskChange(e, task.value)}
            />
            <span className='checkmark'></span>
            {task.description}
          </label>
        );
      })}
    </div>
  );
}

export default WidgetGroupContent;
