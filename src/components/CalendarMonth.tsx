import React from 'react';
import PropTypes from 'prop-types';
import CalendarHeader from './CalendarHeader';
import CalendarWeek from './CalendarWeek';
import './CalendarMonth.scss';

interface CalendarMonthProps {
  date: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const CalendarMonth: React.FC<CalendarMonthProps> = ({date, onPrevMonth, onNextMonth}) => {
  const startOfMonth = new Date(date);
  startOfMonth.setDate(1); // Set to the first day of the month

  const endOfMonth = new Date(date);
  endOfMonth.setMonth(endOfMonth.getMonth() + 1, 0); // Set to the last day of the month

  const weeks = [];
  let currentWeek = [];
  let currentDate = new Date(startOfMonth);

  while (currentDate <= endOfMonth) {
    currentWeek.push(currentDate);

    if (currentDate.getDay() === 6) {
      weeks.push(currentWeek);
      currentWeek = [];
    }

    currentDate = new Date(currentDate);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  return (
    <div className="swa-calendar-month">
      <CalendarHeader date={date} onPrevMonth={onPrevMonth} onNextMonth={onNextMonth}/>
      {weeks.map((week, index) => (
        <CalendarWeek key={index} date={week[0]}/>
      ))}
    </div>
  );
};

CalendarMonth.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onPrevMonth: PropTypes.func.isRequired,
  onNextMonth: PropTypes.func.isRequired,
};

export default CalendarMonth;
