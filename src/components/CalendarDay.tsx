import React from 'react';
import PropTypes from 'prop-types';
import './CalendarDay.scss'

interface CalendarDayProps {
    date: Date;
    currentDay?: boolean;
    outsideMonth?: boolean;
}

const CalendarDay: React.FC<CalendarDayProps> = ({ date, currentDay = false, outsideMonth = false }) => {
    const formattedDay = date.toLocaleDateString(navigator.language, { day: 'numeric' });

    return (
        <div className={`swa-calendar-day ${currentDay ? 'swa-calendar-day-current' : ''} ${outsideMonth ? 'swa-calendar-day-outside' : ''}`}>
            {formattedDay}
        </div>
    );
};

CalendarDay.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    currentDay: PropTypes.bool,
    outsideMonth: PropTypes.bool,
};

export default CalendarDay;
