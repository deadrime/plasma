import styled, { css } from 'styled-components';
import { body2 } from '@sberdevices/plasma-tokens';

import { mediaQuery } from '../../utils/mediaQuery';
import { TextBoxBigTitle } from '../TextBox';

export const HeaderTitle = styled(TextBoxBigTitle)`
    margin: 0;

    ${(props) =>
        mediaQuery(
            'S',
            props.theme.deviceScale,
        )(css`
            ${body2};
        `)}
`;
