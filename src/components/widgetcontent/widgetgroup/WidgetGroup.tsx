import { useEffect, useState } from 'react';
import WidgetGroupContent from './widgetgroupcontent/WidgetGroupContent';
import WidgetGroupHeader from './widgetgroupheader/WidgetGroupHeader';
import './WidgetGroup.css';

interface WidgetGroupProps {
  groupData: GroupItem;
}

function WidgetGroup({ groupData }: WidgetGroupProps) {
  const [checkedCount, setCheckedCount] = useState<number>(0);

  const handleChecked = (isChecked: boolean) => {
    setCheckedCount((checkedCount) =>
      isChecked ? checkedCount + 1 : checkedCount - 1
    );
  };

  useEffect(() => {
    setCheckedCount(
      groupData.tasks.reduce((count, task) => {
        return task.checked ? count + 1 : count;
      }, 0)
    );
  }, [groupData.name]);

  return (
    <div className='widgetGroup'>
      <WidgetGroupHeader
        title={groupData.name}
        allChecked={groupData.tasks.length === checkedCount}
      />
      <WidgetGroupContent
        data={groupData}
        onChecked={(isChecked) => handleChecked(isChecked)}
      />
    </div>
  );
}

export default WidgetGroup;
