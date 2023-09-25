import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import CalendarHeader from './CalendarHeader';

describe('CalendarHeader', () => {
  const fixedDate = new Date(Date.UTC(2023, 6, 17, 12, 30, 0)); // Set a fixed date of July 17, 2023, 12:30:00 UTC

  it('renders the header with correct month and year', () => {
    const onPrevMonth = jest.fn();
    const onNextMonth = jest.fn();

    const originalLocale = window.navigator.language;
    const languageGetter = jest.spyOn(window.navigator, 'language', 'get');
    const expectedHeadersByLocale = {
      'en-us': 'July 2023',
      'ar-EG': 'يوليو ٢٠٢٣',
      zh: '2023年7月',
    };

    Object.entries(expectedHeadersByLocale).forEach(([locale, expectedHeader]) => {
      languageGetter.mockReturnValue(locale);

      render(<CalendarHeader date={fixedDate} onPrevMonth={onPrevMonth} onNextMonth={onNextMonth}/>);
      const headerElement = screen.getByText(expectedHeader);

      expect(headerElement).toBeInTheDocument();
      cleanup();
    });

    languageGetter.mockReturnValue(originalLocale);
  });

  it('calls onPrevMonth when the previous button is clicked', () => {
    const onPrevMonth = jest.fn();
    const onNextMonth = jest.fn();

    render(<CalendarHeader date={fixedDate} onPrevMonth={onPrevMonth} onNextMonth={onNextMonth}/>);
    const prevButton = screen.getByText('<');

    fireEvent.click(prevButton);
    expect(onPrevMonth).toHaveBeenCalledTimes(1);
  });

  it('calls onNextMonth when the next button is clicked', () => {
    const onPrevMonth = jest.fn();
    const onNextMonth = jest.fn();

    render(<CalendarHeader date={fixedDate} onPrevMonth={onPrevMonth} onNextMonth={onNextMonth}/>);
    const nextButton = screen.getByText('>');

    fireEvent.click(nextButton);
    expect(onNextMonth).toHaveBeenCalledTimes(1);
  });
});
