import React from 'react';
import styled from 'styled-components';

import { SectionName } from '../SectionName';
import { DashedBorder } from '../DashedBorder';
import { Cell, CellDisclosure, CellIcon } from '../../Cell';
import { TextBox, TextBoxBiggerTitle, TextBoxSubTitle } from '../../TextBox';

export default {
    title: 'MobileShowcase/Cells',
    parameters: {
        chromatic: {
            disable: true,
        },
    },
};

const Container = styled.div`
    padding: 0 80px;
`;

const ContentWrapper = styled.div`
    display: flex;
    padding: 40px 80px;
`;

const variants = [
    <Cell content={<TextBox size="l" title="Название раздела" />} />,
    <Cell content={<TextBox size="l" title="Название раздела" subTitle="Описание раздела" />} />,
    <Cell
        content={<TextBox size="l" title="Название раздела" />}
        right={<CellDisclosure onClick={() => undefined} />}
    />,
    <Cell
        content={<TextBox size="l" title="Название раздела" subTitle="Описание раздела" />}
        right={<CellDisclosure onClick={() => undefined} />}
        alignRight="top"
    />,
    <Cell content={<TextBox size="l" title="Название раздела" />} right={<TextBox title="Detail" />} />,
    <Cell
        content={<TextBox size="l" title="Название раздела" subTitle="Описание раздела" />}
        right={<TextBox title="Detail" />}
        alignRight="top"
    />,
    <Cell
        content={<TextBoxBiggerTitle>Headline 1</TextBoxBiggerTitle>}
        left={<CellIcon as="img" src="./images/avocado.png" alt="avocado" />}
    />,
    <Cell
        content={
            <TextBox>
                <TextBoxBiggerTitle>Headline 1</TextBoxBiggerTitle>
                <TextBoxSubTitle>SubTitle</TextBoxSubTitle>
            </TextBox>
        }
        left={<CellIcon as="img" src="./images/avocado.png" alt="avocado" />}
        alignLeft="top"
    />,
];

export const SectionHeader = () => (
    <Container>
        <SectionName title="Section Header" description="Заглавные ячейки для списков и других смысловых групп" />
        <ContentWrapper>
            <DashedBorder style={{ padding: 20, width: 360 }}>
                {variants.map((variant, i) => (
                    <div key={i} style={{ marginBottom: 30 }}>
                        {variant}
                    </div>
                ))}
            </DashedBorder>
        </ContentWrapper>
    </Container>
);
