<template>
    <div class="embed-container">
        <iframe :src='url' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
    </div>
</template>

<style lang="scss">
.embed-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    max-width: 100%;
    iframe, object, embed {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
}
</style>


<script>
export default {
    props: {
        url: {
            type: String,
            required: true
        }
    }
}
</script>