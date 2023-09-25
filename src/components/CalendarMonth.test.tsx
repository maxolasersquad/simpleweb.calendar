import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import CalendarMonth from './CalendarMonth';

describe('CalendarMonth', () => {
  const fixedDate = new Date(Date.UTC(2023, 6, 17, 12, 30, 0)); // Set a fixed date of July 17, 2023, 12:30:00 UTC

  it('renders the correct weeks for the specified month', () => {
    const {container} = render(
      <CalendarMonth
        date={new Date(2023, 6, 1)} // July 2023
        onPrevMonth={() => {
        }} // Mock function
        onNextMonth={() => {
        }} // Mock function
      />
    );

    const weeks = container.querySelectorAll('.swa-calendar-week'); // Use querySelectorAll

    // Assert that there are 5 weeks rendered for July 2023
    expect(weeks).toHaveLength(6);
  });

  it('renders the correct month and year in the header', () => {
    const onPrevMonth = jest.fn();
    const onNextMonth = jest.fn();

    render(<CalendarMonth date={fixedDate} onPrevMonth={onPrevMonth} onNextMonth={onNextMonth}/>);

    // The header can be selected based on the presence of the month and year in the header title
    const headerElement = screen.getByText('July 2023');

    expect(headerElement).toBeInTheDocument();
  });

  it('calls onPrevMonth when the previous button is clicked in the header', () => {
    const onPrevMonth = jest.fn();
    const onNextMonth = jest.fn();

    render(<CalendarMonth date={fixedDate} onPrevMonth={onPrevMonth} onNextMonth={onNextMonth}/>);
    const prevButton = screen.getByText('<');

    fireEvent.click(prevButton);
    expect(onPrevMonth).toHaveBeenCalledTimes(1);
  });

  it('calls onNextMonth when the next button is clicked in the header', () => {
    const onPrevMonth = jest.fn();
    const onNextMonth = jest.fn();

    render(<CalendarMonth date={fixedDate} onPrevMonth={onPrevMonth} onNextMonth={onNextMonth}/>);
    const nextButton = screen.getByText('>');

    fireEvent.click(nextButton);
    expect(onNextMonth).toHaveBeenCalledTimes(1);
  });
});
