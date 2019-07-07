<template>
    <div class="lightbox-container">
        <a :href="full" @click="open"><img :src="src" /></a>
        <div class="lightbox-mask" @click="close" v-if="visible">
            <div class="cell">
                <img :src="full" @click="close" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.lightbox-container {
    display: table;

    .lightbox-mask {
        display: table;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9998;
        background-color: rgba(0, 0, 0, .66);
        transition: opacity .3s ease;
        vertical-align: middle;

        .cell {
            width: 100%;
            height: 100%;
            display: table-cell;
            vertical-align:middle;
        }
    }
}
</style>


<script>
export default {
    data: function() {
        return {
            visible: false
        }
    },
    props: {
        src: {
            type: String,
            required: true
        },
        full: {
            type: String,
            required: true
        }
    },
    methods: {
        open: function(e) {
            e.preventDefault()
            this.visible = true
        },
        close: function(e) {
            e.preventDefault()
            this.visible = false
        },
        toggle: function(e) {
            e.preventDefault()
            this.visible = !this.visible
        }
    }
}
</script>