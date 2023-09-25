import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import CalendarDay from './CalendarDay';

describe('CalendarDay', () => {
    const fixedDate = new Date(Date.UTC(2023, 6, 17, 12, 30, 0)); // Set a fixed date of July 17, 2023, 12:30:00 UTC

    it('renders the day in different locales', () => {
        const originalLocale = window.navigator.language;
        const languageGetter = jest.spyOn(window.navigator, 'language', 'get');
        const expectedDaysByLocale = {
            'en-us': '17',
            'ar-EG': '١٧',
            zh: '17日',
        };

        Object.entries(expectedDaysByLocale).forEach(([locale, expectedDay]) => {
            languageGetter.mockReturnValue(locale);

            render(<CalendarDay date={fixedDate} />);
            const dayElement = screen.getByText(expectedDay);

            expect(dayElement).toBeInTheDocument();
            cleanup();
        });
        languageGetter.mockReturnValue(originalLocale);
    });

    it('renders with additional class when currentDay is true', () => {
        render(<CalendarDay date={fixedDate} currentDay={true} />);
        const dayElement = screen.getByText('17');

        expect(dayElement).toBeInTheDocument();
        expect(dayElement).toHaveClass('swa-calendar-day-current');
    });

    it('renders without additional class when currentDay is false', () => {
        render(<CalendarDay date={fixedDate} currentDay={false} />);
        const dayElement = screen.getByText('17');

        expect(dayElement).toBeInTheDocument();
        expect(dayElement).not.toHaveClass('swa-calendar-day-current');
    });
});
