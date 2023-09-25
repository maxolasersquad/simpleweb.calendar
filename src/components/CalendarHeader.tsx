import React from 'react';
import PropTypes from 'prop-types';
import './CalendarHeader.scss';

interface CalendarHeaderProps {
  date: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({date, onPrevMonth, onNextMonth}) => {
  const header = date.toLocaleDateString(navigator.language, {month: 'long', year: 'numeric'});

  return (
    <div className="swa-calendar-header">
      <button onClick={onPrevMonth}>{'<'}</button>
      <div className="swa-calendar-header-title">{header}</div>
      <button onClick={onNextMonth}>{'>'}</button>
    </div>
  );
};

CalendarHeader.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onPrevMonth: PropTypes.func.isRequired,
  onNextMonth: PropTypes.func.isRequired,
};

export default CalendarHeader;
