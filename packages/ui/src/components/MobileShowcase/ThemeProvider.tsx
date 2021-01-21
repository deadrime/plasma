import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { darkEva, lightEva } from '@sberdevices/plasma-tokens/themes';

import { DeviceThemeProvider } from '../Device';

const themes = {
    dark: createGlobalStyle(darkEva),
    light: createGlobalStyle(lightEva),
};

type Props = {
    theme: 'dark' | 'light';
};

export const ThemeProvider: React.FC<Props> = ({ children, theme }) => {
    const Theme = themes[theme];
    return (
        <DeviceThemeProvider detectDeviceCallback={() => 'touch'}>
            <Theme />
            {children}
        </DeviceThemeProvider>
    );
};
