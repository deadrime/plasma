import React from 'react';
import styled from 'styled-components';
import { IconSleep, IconEye } from '@sberdevices/plasma-icons';

import { SectionName } from '../SectionName';
import { DashedBorder } from '../DashedBorder';
import { TextField } from '../../TextField/TextField';
import { Body1 } from '../../Typography';

export default {
    title: 'MobileShowcase',
    parameters: {
        chromatic: {
            disable: true,
        },
    },
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 80px;
`;

const Row = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

const StatesCol = styled.div`
    padding-top: 38px;
    padding-right: 24px;
`;

const variants = [
    {
        value: '',
        title: 'Label',
        helperText: 'helperText',
    },
    {
        value: 'Title',
        title: 'Label',
        helperText: 'helperText',
    },
    {
        value: 'Title',
        title: 'Label',
        helperText: 'helperText',
    },
    {
        value: 'Title',
        title: 'Label',
        helperText: 'helperText',
        hasSuccess: true,
    },
    {
        value: 'Title',
        title: 'Label',
        helperText: 'helperText',
        hasError: true,
    },
    {
        value: 'Title',
        title: 'Label',
        helperText: 'helperText',
        disabled: true,
    },
];

const states = ['Empty', 'Focus', 'Filled', 'Success', 'Error', 'Disabled'];

export const Fields = () => {
    return (
        <Container>
            <SectionName title="Field" description="Стандартное поле текстового ввода" />
            <Row>
                <StatesCol>
                    {states.map((state) => (
                        <Body1 key={state} style={{ marginBottom: 76 }}>
                            {state}
                        </Body1>
                    ))}
                    <div style={{ height: 40 }} />
                    {states.map((state) => (
                        <Body1 key={state} style={{ marginBottom: 76 }}>
                            {state}
                        </Body1>
                    ))}
                </StatesCol>
                <DashedBorder style={{ width: 720, padding: 20 }}>
                    {variants.map((variant, i) => (
                        <Row key={i}>
                            <TextField {...variant} style={{ marginRight: 40, flex: 1 }} />
                            <TextField {...variant} contentLeft={<IconSleep />} style={{ flex: 1 }} />
                        </Row>
                    ))}
                    <div style={{ height: 40 }} />
                    {variants.map((variant, i) => (
                        <Row key={i}>
                            <TextField {...variant} contentRight={<IconEye />} style={{ marginRight: 40, flex: 1 }} />
                            <TextField
                                {...variant}
                                contentLeft={<IconSleep />}
                                contentRight={<IconEye />}
                                style={{ flex: 1 }}
                            />
                        </Row>
                    ))}
                </DashedBorder>
            </Row>
        </Container>
    );
};
