import React from 'react';
import {render} from '@testing-library/react';
import CalendarWeek from './CalendarWeek';

describe('CalendarWeek', () => {
  it('renders the correct number of days', () => {
    const {container} = render(
      <CalendarWeek date={new Date(2023, 6, 17)}/>
    );

    const dayElements = container.querySelectorAll('.swa-calendar-day');
    expect(dayElements).toHaveLength(7);
  });

  it('renders the current day with the correct class', () => {
    const currentDate = new Date(2023, 6, 17); // July 18, 2023
    const {container} = render(
      <CalendarWeek date={currentDate}/>
    );

    const currentDayElement = container.querySelector('.swa-calendar-day-current');
    expect(currentDayElement).toBeInTheDocument();
    expect(currentDayElement).toHaveTextContent('18');
  });

  it('renders days from the previous month with the correct class', () => {
    const {container} = render(
      <CalendarWeek date={new Date(2023, 7, 1)}/> // August 2023 starts on a Tuesday
    );

    const outsideMonthDayElements = container.querySelectorAll('.swa-calendar-day-outside');
    expect(outsideMonthDayElements).toHaveLength(2); // July 30, and 31 are from the previous month
  });

  it('renders days from the next month with the correct class', () => {
    const {container} = render(
      <CalendarWeek date={new Date(2023, 7, 31)}/> // August 31, 2023 is a Thursday
    );

    const outsideMonthDayElements = container.querySelectorAll('.swa-calendar-day-outside');
    expect(outsideMonthDayElements).toHaveLength(2); // September 1, and 2 are from the next month
  });
});
