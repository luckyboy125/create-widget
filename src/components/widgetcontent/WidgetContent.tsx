import WidgetGroup from './widgetgroup/WidgetGroup';
import './WidgetContent.css';

interface WidgetContentProps {
  data: GroupItem[];
}

function WidgetContent({ data }: WidgetContentProps) {
  return (
    <div className='widgetContent'>
      {data?.map((item: GroupItem, index: number) => {
        return <WidgetGroup key={index} groupData={item} />;
      })}
    </div>
  );
}

export default WidgetContent;
