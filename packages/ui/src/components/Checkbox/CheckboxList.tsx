import React from 'react';
import styled from 'styled-components';

import { Value, Item } from './Basebox';
import { Checkbox } from './Checkbox';

const StyledListCheckbox = styled(Checkbox)`
    & + & {
        margin-top: 0.75rem;
    }
`;

export type CheckboxListProps = {
    values: Value[];
    items: Item[];
    onChange?: (values: Value[]) => void;
};

// eslint-disable-next-line prefer-arrow-callback
export const CheckboxList = React.forwardRef<HTMLDivElement, CheckboxListProps>(function CheckboxList(
    { values, items, onChange },
    ref,
) {
    const handleChange = React.useCallback(
        (checked, i) => {
            onChange?.([...values, items[i].value].filter((val) => checked || val !== items[i].value));
        },
        [onChange],
    );

    return (
        <div ref={ref}>
            {items.map((item, i) => (
                <StyledListCheckbox
                    key={`item:${i}`}
                    checked={values.indexOf(item.value) !== -1}
                    onChange={(c) => handleChange(c, i)}
                    {...item}
                />
            ))}
        </div>
    );
});
