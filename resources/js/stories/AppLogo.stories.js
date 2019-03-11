import { storiesOf } from '@storybook/vue'

storiesOf('Branding|Logo', module)
    .add('Light', () => ({
        template: '<AppLogo></AppLogo>',
    }))
    .add('Dark', () => ({
        template: '<AppLogo dark></AppLogo>'
    }))
    .add('Sizes', () => ({
        template: '<AppLogo></AppLogo>'
    }))