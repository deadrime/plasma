import React from 'react';
import { boolean, number, text } from '@storybook/addon-knobs';

import { Radiobox, RadioboxList } from '.';

export default {
    title: 'Radiobox',
    component: Radiobox,
};

export const Default = () => {
    const [checked, setChecked] = React.useState(true);

    return (
        <Radiobox
            value={0}
            label={text('label', 'Radiobox')}
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

    return <RadioboxList values={values} items={items} onChange={(v) => setValues(v as number[])} />;
};
