<template>
    <object type="image/svg+xml" :data="logoFile" :height="height">Logo Fallback.</object>
</template>

<script>
export default {
    props: {
        height: {
            type: String,
            required: false
        },
        width: {
            type: String,
            required: false
        },
        dark: {
            type: Boolean,
            required: false
        },
        light: {
            type: Boolean,
            required: false
        }
    },
    computed: {
        logoFile: function() {
            return (this.dark === true) ? '/svg/ktross-logo-dark.svg' : '/svg/ktross-logo.svg'
        }
    }
}
</script>