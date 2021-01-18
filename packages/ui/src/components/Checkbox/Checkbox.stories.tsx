import React from 'react';
import { boolean, number, text } from '@storybook/addon-knobs';

import { Checkbox, CheckboxList } from '.';

export default {
    title: 'Checkbox',
    component: Checkbox,
};

export const Default = () => {
    const [checked, setChecked] = React.useState(true);

    return (
        <Checkbox
            value={0}
            label={text('label', 'Checkbox')}
            checked={checked}
            disabled={boolean('disabled', false)}
            onChange={(ch) => setChecked(ch)}
        />
    );
};

export const List = () => {
    const items = Array(number('Items count', 5))
        .fill(0)
        .map((_, i) => ({ value: i, label: `Item ${i}` }));
    const [values, setValues] = React.useState([0]);

    return <CheckboxList values={values} items={items} onChange={(v) => setValues(v as number[])} />;
};
