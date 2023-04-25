import { useState } from 'react';
import WidgetGroupContent from './widgetgroupcontent/WidgetGroupContent';
import WidgetGroupHeader from './widgetgroupheader/WidgetGroupHeader';
import './WidgetGroup.css';

interface WidgetGroupProps {
  groupData: GroupItem;
}

function WidgetGroup({ groupData }: WidgetGroupProps) {
  const [showContent, setShowContent] = useState(false);

  const showClick = (status: boolean) => {
    setShowContent(status);
  };

  return (
    <div className='widgetGroup'>
      <WidgetGroupHeader
        title={groupData.name}
        onShow={(status) => showClick(status)}
      />
      {showContent ? <WidgetGroupContent data={groupData.tasks} /> : <></>}
    </div>
  );
}

export default WidgetGroup;
