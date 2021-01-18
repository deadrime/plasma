import React from 'react';
import styled, { css } from 'styled-components';
import { colors, accent, whiteSecondary, white } from '@sberdevices/plasma-tokens';
import { IconDone } from '@sberdevices/plasma-icons';

import { applyDisabled, DisabledProps, FocusProps } from '../../mixins';
import { Body1 } from '../Typography';

console.log(colors);
export type Value = string | number;
export type Item = {
    value: Value;
    label?: string | number;
};

interface InputTypeProps {
    type: 'checkbox' | 'radio';
}

export interface BaseboxProps
    extends Item,
        InputTypeProps,
        FocusProps,
        DisabledProps,
        Omit<React.InputHTMLAttributes<HTMLDivElement>, 'type' | 'value' | 'disabled' | 'onChange'> {
    onChange?: (checked: boolean) => void;
}

const StyledRoot = styled.div<DisabledProps>`
    position: relative;
    display: flex;
    width: max-content;
    max-width: 100%;
    cursor: pointer;

    ${applyDisabled};
`;

const StyledInput = styled.input`
    position: absolute;
    opacity: 0;
`;

interface StyledTriggerProps {
    $type: InputTypeProps['type'];
    $focused?: FocusProps['focused'];
}

const StyledTrigger = styled.div<StyledTriggerProps>`
    box-sizing: border-box;
    position: relative;
    width: 1.25rem;
    height: 1.25rem;
    border: 0.125rem solid ${whiteSecondary};
    transition: all 0.1s ease-in-out;

    ${({ $type, $focused }) => {
        const borderRadius = $type === 'checkbox' ? '0.25rem' : '1.25rem';

        return css`
            border-radius: ${borderRadius};

            ${StyledInput}:focus ~ & {
                border-color: ${accent};
            }

            ${StyledInput}:checked:focus ~ & {
                border-color: ${white};
            }

            ${$focused &&
            css`
                border-color: ${accent};

                ${StyledInput}:checked ~ & {
                    border-color: ${white};
                }
            `}
        `;
    }}

    /* stylelint-disable-next-line selector-nested-pattern, selector-type-no-unknown */
    ${StyledInput}:checked ~ & {
        background: ${accent};
        border-color: ${accent};
    }
`;

const StyledMark = styled(IconDone)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 1rem;
    height: 1rem;
    transition: transform 0.1s ease-in-out;
    transform: scale(0);

    /* stylelint-disable-next-line selector-nested-pattern, selector-type-no-unknown */
    ${StyledInput}:checked ~ ${StyledTrigger} & {
        transform: scale(1);
    }
`;

const StyledEllipse = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 0.625rem;
    transition: transform 0.1s ease-in-out;
    transform: scale(0);
    background-color: ${white};

    /* stylelint-disable-next-line selector-nested-pattern, selector-type-no-unknown */
    ${StyledInput}:checked ~ ${StyledTrigger} & {
        transform: scale(1);
    }
`;

const StyledLabel = styled(Body1)`
    margin-left: 0.375rem;
    user-select: none;
`;

// eslint-disable-next-line prefer-arrow-callback
export const Basebox = React.forwardRef<HTMLDivElement, BaseboxProps>(function Basebox(
    { type, name, value, label, checked, focused, disabled, onChange, ...rest },
    ref,
) {
    return (
        <StyledRoot ref={ref} disabled={disabled} onClick={() => !disabled && onChange?.(!checked)} {...rest}>
            <StyledInput
                type={type}
                name={name}
                value={value}
                checked={checked}
                disabled={disabled}
                onChange={() => undefined}
            />
            <StyledTrigger $type={type} $focused={focused}>
                {type === 'checkbox' ? <StyledMark size="xs" /> : <StyledEllipse />}
            </StyledTrigger>
            {label && <StyledLabel>{label}</StyledLabel>}
        </StyledRoot>
    );
});
