import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { panelTitle, setPanelTitle } from '../../../../store/panel/panel';
import './WidgetGroupHeader.css';

interface WidgetGroupHeaderProps {
  title: string;
  allChecked: boolean;
}

function WidgetGroupHeader({ title, allChecked }: WidgetGroupHeaderProps) {
  const dispatch = useAppDispatch();
  const selectedPanelTitle = useAppSelector(panelTitle);

  const showClick = (str: string) => {
    selectedPanelTitle === str
      ? dispatch(setPanelTitle(''))
      : dispatch(setPanelTitle(str));
  };

  return (
    <div className='widgetGroupHeader' onClick={() => showClick(title)}>
      <div className={`groupName ${allChecked ? 'allChecked' : ''}`}>
        <i className={`fal fa-clipboard-list${allChecked ? '-check' : ''}`}></i>
        {title}
      </div>
      <div className='visibility'>
        {title === selectedPanelTitle ? 'Hide' : 'Show'}
        <i
          className={`far fa-angle-${
            title === selectedPanelTitle ? 'up' : 'down'
          }`}
        ></i>
      </div>
    </div>
  );
}

export default WidgetGroupHeader;
