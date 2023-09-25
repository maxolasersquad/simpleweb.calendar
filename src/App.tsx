import React, {useEffect, useState} from 'react';
import CalendarMonth from './components/CalendarMonth';
import './App.scss';

interface AppProps {
  initialDate?: Date;
}

const App: React.FC<AppProps> = ({initialDate = new Date()}) => {
  const urlParams = new URLSearchParams(window.location.search);
  const dateString = urlParams.get('date');
  let startingDate;
  if (dateString !== null) {
    const [year, month] = dateString.split('-');
    startingDate = new Date(parseInt(year), parseInt(month) - 1);
  } else {
    startingDate = initialDate;
  }
  const [currentDate, setCurrentDate] = useState(startingDate);

  const getCurrentDateString = (date: Date): string => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    return `${year}-${month}`;
  };

  useEffect(() => {
    const currentDateString = getCurrentDateString(currentDate);
    window.history.pushState({}, '', `/?date=${currentDateString}`);
  }, [currentDate]);

  const handleBack = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const handleForward = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  return (
    <div className="swa-calendar-page">
      <CalendarMonth date={currentDate} onPrevMonth={handleBack} onNextMonth={handleForward}/>
    </div>
  );
};

export default App;
