import React from 'react';
import PropTypes from 'prop-types';
import CalendarDay from './CalendarDay';
import './CalendarWeek.scss';

interface CalendarWeekProps {
  date: Date;
}

const CalendarWeek: React.FC<CalendarWeekProps> = ({date}) => {
  const startOfWeek = new Date(date);
  const currentDate = new Date();
  startOfWeek.setDate(date.getDate() - date.getDay());

  const weekDays = [];
  for (let i = 0; i < 7; i++) {
    const currentDateObj = new Date(startOfWeek);
    currentDateObj.setDate(startOfWeek.getDate() + i);

    const isCurrentDay = currentDateObj.getDate() === currentDate.getDate()
      && currentDateObj.getMonth() === currentDate.getMonth()
      && currentDateObj.getFullYear() === currentDate.getFullYear();
    const isCurrentMonth = currentDateObj.getMonth() === date.getMonth()
      && currentDateObj.getFullYear() === date.getFullYear();

    weekDays.push(
      <CalendarDay key={currentDateObj.toISOString()} date={currentDateObj} currentDay={isCurrentDay}
                   outsideMonth={!isCurrentMonth}/>
    );
  }

  return <div className="swa-calendar-week">{weekDays}</div>;
};

CalendarWeek.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default CalendarWeek;
