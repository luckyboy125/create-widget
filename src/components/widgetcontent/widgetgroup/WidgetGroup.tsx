import { useEffect, useState } from 'react';
import WidgetGroupContent from './widgetgroupcontent/WidgetGroupContent';
import WidgetGroupHeader from './widgetgroupheader/WidgetGroupHeader';
import './WidgetGroup.css';

interface WidgetGroupProps {
  groupData: GroupItem;
}

function WidgetGroup({ groupData }: WidgetGroupProps) {
  const [checkedTasksCount, setCheckedTasksCount] = useState<number>(0);

  const handleChecked = (status: boolean) => {
    let currentCheckedTasks = checkedTasksCount;
    status ? currentCheckedTasks++ : currentCheckedTasks--;
    setCheckedTasksCount(currentCheckedTasks);
  };

  useEffect(() => {
    let count = 0;
    groupData.tasks.map((task: TaskItem) => {
      task.checked ? count++ : (count += 0);
    });
    setCheckedTasksCount(count);
  }, [groupData.name]);

  return (
    <div className='widgetGroup'>
      <WidgetGroupHeader
        title={groupData.name}
        allChecked={groupData.tasks.length === checkedTasksCount}
      />
      <WidgetGroupContent
        data={groupData}
        onChecked={(check) => handleChecked(check)}
      />
    </div>
  );
}

export default WidgetGroup;
