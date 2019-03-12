import { storiesOf } from '@storybook/vue'

storiesOf('Branding|Logo', module)
    .add('Light', () => ({
        template: '<AppLogo></AppLogo>',
    }))
    .add('Dark', () => ({
        template: '<AppLogo dark></AppLogo>'
    }))
    .add('Sizes', () => ({
        template: '<div><AppLogo height="300"></AppLogo><br><AppLogo height="150"></AppLogo><br><AppLogo height="40"></AppLogo></div>'
    }))