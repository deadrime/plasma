import React from 'react';
import styled from 'styled-components';
import { IconMic } from '@sberdevices/plasma-icons';
import { buttonAccent, buttonSecondary, buttonWarning, buttonChecked } from '@sberdevices/plasma-tokens';

import { Button, ActionButton } from '../../Button';
import { Body1 } from '../../Typography';
import { DashedBorder } from '../DashedBorder';

const buttonViews = ['primary', 'secondary', 'warning', 'checked'] as Array<
    'primary' | 'secondary' | 'warning' | 'checked'
>;
const colSizes = [
    { width: 220, margin: 40 },
    { width: 220, margin: 80 },
    { width: 108, margin: 40 },
    { width: 108, margin: 0 },
];
const colTypes = ['Normal', 'Disabled', 'Normal', 'Disabled'];

const rowColors = [buttonAccent, buttonSecondary, buttonWarning, buttonChecked];

const Row = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

const ColTypes = styled.div`
    display: flex;
    padding-left: 32px;
    margin-bottom: 16px;
`;

const RowTypes = styled.div`
    display: flex;
    flex-direction: column;
    width: 100px;
    margin-top: 36px;
    padding-top: 32px;
    padding-right: 32px;
`;

const RowType = styled.div<{ bgColor?: string }>`
    display: flex;
    justify-content: flex-end;
    flex: 1;

    &::after {
        content: '';
        width: 2px;
        height: calc(100% - 40px);
        background-color: ${({ bgColor }) => bgColor};
        margin-left: 18px;
    }
`;

export const ButtonsSizeGroup: React.FC<{ size: 's' | 'm' }> = ({ size }) => {
    return (
        <>
            <div style={{ display: 'flex' }}>
                <RowTypes>
                    {buttonViews.map((view, i) => (
                        <RowType key={view} bgColor={rowColors[i]}>
                            <Body1 style={{ marginTop: 10 }}>{view[0].toUpperCase() + view.slice(1)}</Body1>
                        </RowType>
                    ))}
                </RowTypes>
                <div>
                    <ColTypes>
                        {colTypes.map((type, i) => {
                            const { width, margin } = colSizes[i];
                            return (
                                <Body1 style={{ width: width + margin }} key={i}>
                                    {type}
                                </Body1>
                            );
                        })}
                    </ColTypes>
                    <DashedBorder style={{ padding: '32px 32px 0 32px' }}>
                        {buttonViews.map((view) => (
                            <React.Fragment key={view}>
                                <Row>
                                    {colSizes.map(({ width, margin }, i) => {
                                        const buttonProps = {
                                            text: 'Label',
                                            view,
                                            size,
                                            fullWidth: i < 2,
                                            disabled: i === 1 || i === 3,
                                        };
                                        return (
                                            <div key={i} style={{ width, marginBottom: 20, marginRight: margin }}>
                                                <Button {...buttonProps} style={{ marginBottom: 20 }} />
                                                <Button {...buttonProps} contentLeft={<IconMic />} />
                                            </div>
                                        );
                                    })}
                                </Row>
                            </React.Fragment>
                        ))}
                    </DashedBorder>
                </div>
            </div>
            <div style={{ display: 'flex', marginBottom: 60 }}>
                <DashedBorder style={{ padding: '32px 32px 0 32px', margin: '20px 20px 0 10px' }}>
                    {buttonViews.map((view, i) => (
                        <div key={i}>
                            <Button
                                style={{ margin: '0 40px 40px 0' }}
                                view={view}
                                size={size}
                                contentLeft={<IconMic />}
                            />
                            <Button view={view} size={size} contentLeft={<IconMic />} disabled />
                        </div>
                    ))}
                </DashedBorder>
                <DashedBorder style={{ padding: '32px 32px 0 32px', marginTop: 20 }}>
                    {buttonViews.map((view, i) => (
                        <div key={i}>
                            <ActionButton style={{ margin: '0 40px 40px 0' }} view={view} size={size}>
                                <IconMic />
                            </ActionButton>
                            <ActionButton view={view} size={size} disabled>
                                <IconMic />
                            </ActionButton>
                        </div>
                    ))}
                </DashedBorder>
            </div>
        </>
    );
};
