import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

describe('App', () => {
  const initialDate = new Date(2023, 6, 17); // July 17, 2023

  it('renders the CalendarMonth component', () => {
    render(<App/>);
    const calendarMonthElement = screen.getByTestId('calendar-month');
    expect(calendarMonthElement).toBeInTheDocument();
  });

  it('updates the month when the "Back" button is clicked', () => {
    render(<App initialDate={initialDate}/>);
    const backButton = screen.getByText('<');
    const currentMonth = screen.getByText('July 2023');

    fireEvent.click(backButton);

    // Assert that the current month is now June 2023
    const updatedMonth = screen.getByText('June 2023');
    expect(currentMonth).not.toBeInTheDocument();
    expect(updatedMonth).toBeInTheDocument();
  });

  it('updates the month when the "Forward" button is clicked', () => {
    render(<App initialDate={initialDate}/>);
    const forwardButton = screen.getByText('>');
    const currentMonth = screen.getByText('July 2023');

    fireEvent.click(forwardButton);

    // Assert that the current month is now August 2023
    const updatedMonth = screen.getByText('August 2023');
    // expect(currentMonth).not.toBeInTheDocument();
    console.log('currentMonth: ', currentMonth);
    expect(updatedMonth).toBeInTheDocument();
  });
});
