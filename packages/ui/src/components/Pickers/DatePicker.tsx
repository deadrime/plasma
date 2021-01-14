import React from 'react';
import styled from 'styled-components';

import { PickOptional } from '../../types';

import { SimpleDatePicker } from './SimpleDatePicker';
import type { PickerProps } from './Picker';

const maxDayInMonth = (month: number, year: number): number => new Date(year, month + 1, 0).getDate();
const getValues = (date: Date) => [date.getFullYear(), date.getMonth(), date.getDate()];

const StyledWrapper = styled.div`
    display: flex;
    width: max-content;
`;

export interface DatePickerProps
    extends PickOptional<PickerProps, 'disabled' | 'controls' | 'visibleItems'>,
        Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /**
     * Обработчик изменения
     */
    onChange?: (value: Date) => void;
    /**
     * Значение контрола
     */
    value: Date;
    /**
     * Максимальное значение даты
     */
    max: Date;
    /**
     * Минимальное значение даты
     */
    min: Date;
}

export const DatePicker: React.FC<DatePickerProps> = ({
    value,
    max,
    min,
    disabled,
    controls,
    visibleItems,
    onChange,
}) => {
    const [[year, month, day], setState] = React.useState(getValues(value));
    const years = React.useMemo(() => [min.getFullYear(), max.getFullYear()], [min, max]);

    const monthInterval = React.useMemo(() => {
        if (years[0] >= value.getFullYear()) {
            return [min.getMonth(), 11];
        }

        if (years[1] <= value.getFullYear()) {
            return [0, max.getMonth()];
        }

        return [0, 11];
    }, [max, min, value, years]);

    const dayInterval = React.useMemo(() => {
        const valueYear = value.getFullYear();
        const valueMonth = value.getMonth();

        if (valueYear >= years[1] && max.getMonth() === valueMonth) {
            return [1, max.getDate()];
        }

        const maxDay = maxDayInMonth(valueMonth, valueYear);

        if (valueYear <= years[0] && min.getMonth() === valueMonth) {
            return [min.getDate(), maxDay];
        }

        return [1, maxDay];
    }, [min, years, value, max]);

    const getNextMonth = React.useCallback(
        (nextMonth: number, nextYear: number): number => {
            if (nextYear >= years[1] && nextMonth >= max.getMonth()) {
                return max.getMonth();
            }

            if (nextYear <= years[0] && nextMonth <= max.getMonth()) {
                return min.getMonth();
            }

            return nextMonth;
        },
        [max, min, years],
    );

    const getNextDay = React.useCallback(
        (nextDay: number, nextMonth: number, nextYear: number): number => {
            if (nextYear >= years[1] && nextMonth >= max.getMonth() && nextDay >= max.getDate()) {
                return max.getDate();
            }

            if (nextYear <= years[0] && nextMonth <= max.getMonth() && nextDay <= min.getDate()) {
                return min.getDate();
            }

            const possibleMaxDayInMonth = maxDayInMonth(nextMonth, nextYear);

            if (possibleMaxDayInMonth < nextDay) {
                return possibleMaxDayInMonth;
            }

            return nextDay;
        },
        [years, max, min],
    );

    /* eslint-disable @typescript-eslint/no-unused-vars */
    const onYearChange = React.useCallback(
        ({ value: y }) => {
            setState(([_, m, d]) => {
                const nextMonth = getNextMonth(m, y);
                const nextDay = getNextDay(d, nextMonth, y);

                return [y, nextMonth, nextDay];
            });
        },
        [getNextDay, getNextMonth],
    );
    const onMonthChange = React.useCallback(
        ({ value: m }) => {
            setState(([y, _, d]) => {
                const nextDay = getNextDay(d, m, y);

                return [y, m, nextDay];
            });
        },
        [getNextDay],
    );
    const onDayChange = React.useCallback(({ value: d }) => setState(([y, m]) => [y, m, d]), []);
    /* eslint-enable @typescript-eslint/no-unused-vars */

    React.useLayoutEffect(() => {
        const [y, m, d] = getValues(value);
        if (y !== year || m !== month || d !== day) {
            const newValue = new Date(value);
            newValue.setFullYear(year);
            newValue.setMonth(month);
            newValue.setDate(day);

            onChange?.(newValue);
        }
    }, [year, month, day]);

    return (
        <StyledWrapper>
            <SimpleDatePicker
                type="day"
                value={day}
                from={dayInterval[0]}
                to={dayInterval[1]}
                disabled={disabled}
                controls={controls}
                visibleItems={visibleItems}
                onChange={onDayChange}
            />
            <SimpleDatePicker
                type="month"
                value={month}
                from={monthInterval[0]}
                to={monthInterval[1]}
                disabled={disabled}
                controls={controls}
                visibleItems={visibleItems}
                onChange={onMonthChange}
            />
            <SimpleDatePicker
                type="year"
                value={year}
                from={years[0]}
                to={years[1]}
                disabled={disabled}
                controls={controls}
                visibleItems={visibleItems}
                onChange={onYearChange}
            />
        </StyledWrapper>
    );
};
