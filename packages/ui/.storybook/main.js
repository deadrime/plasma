const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    addons: [
        '@storybook/preset-create-react-app',
        '@storybook/addon-backgrounds/register',
        '@storybook/addon-viewport/register',
        '@storybook/addon-knobs/register',
        '@storybook/addon-actions',
        '@storybook/addon-toolbars',
    ],
};
