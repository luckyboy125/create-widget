import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { panelTitle, setPanelTitle } from '../../../../store/panel/panel';
import groupIcon from '../../../../assets/icons/group_icon.svg';
import groupIconChecked from '../../../../assets/icons/group_icon_checked.svg';
import './WidgetGroupHeader.css';

interface WidgetGroupHeaderProps {
  title: string;
  allChecked: boolean;
}

function WidgetGroupHeader({ title, allChecked }: WidgetGroupHeaderProps) {
  const dispatch = useAppDispatch();
  const selectedPanelTitle = useAppSelector(panelTitle);

  const handleShow = (title: string) => {
    selectedPanelTitle === title
      ? dispatch(setPanelTitle(''))
      : dispatch(setPanelTitle(title));
  };

  return (
    <div className='widgetGroupHeader' onClick={() => handleShow(title)}>
      <div className={`groupName ${allChecked ? 'allChecked' : ''}`}>
        <img src={allChecked ? groupIconChecked : groupIcon} alt='group-icon' />
        {title}
      </div>
      <div className='visibility'>
        {title === selectedPanelTitle ? 'Hide' : 'Show'}
        <i
          className={`fal fa-chevron-${
            title === selectedPanelTitle ? 'up' : 'down'
          }`}
        />
      </div>
    </div>
  );
}

export default WidgetGroupHeader;
