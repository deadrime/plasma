import React from 'react';
import styled from 'styled-components';

import { Divider } from '../Divider';
import { SectionName } from '../SectionName';

import { ButtonsSizeGroup } from './ButtonsSizeGroup';

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
`;

export const Buttons = () => {
    return (
        <Container>
            <SectionName title="Button S 40" description="Кнопки размера 40" />
            <ButtonsSizeGroup size="s" />
            <Divider />
            <SectionName title="Button M 48" description="Кнопки размера 48" />
            <ButtonsSizeGroup size="m" />
        </Container>
    );
};
