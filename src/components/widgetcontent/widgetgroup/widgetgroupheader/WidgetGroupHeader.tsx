import { useState } from 'react';
import './WidgetGroupHeader.css';

interface WidgetGroupHeaderProps {
  title: string;
  onShow: (e: boolean) => void;
}

function WidgetGroupHeader({ title, onShow }: WidgetGroupHeaderProps) {
  const [show, setShow] = useState(false);

  const showClick = () => {
    setShow(!show);
    onShow(!show);
  };

  return (
    <div className='widgetGroupHeader' onClick={showClick}>
      <div className='groupName'>
        <i className='fal fa-clipboard-list'></i>
        {title}
      </div>
      <div className='visibility'>
        {show ? 'Hide' : 'Show'}
        <i className={`far fa-angle-${show ? 'up' : 'down'}`}></i>
      </div>
    </div>
  );
}

export default WidgetGroupHeader;
