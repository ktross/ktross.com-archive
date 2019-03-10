<template>
    <div class="browser">
        <div class="toolbar">
            <div class="buttons">
                <div class="os">
                    <i class="fas fa-circle close"></i><i class="fas fa-circle minimize"></i><i class="fas fa-circle maximize"></i>
                </div>
                <div class="navigation">
                    <i class="fas fa-arrow-left"></i><i class="fas fa-arrow-right"></i><i class="fas fa-redo"></i>
                </div>
            </div>
            <div class="tabs">
                <div class="search">{{ title }}</div>
            </div>
            <div class="menu">
                <i class="fas fa-bars"></i>
            </div>
        </div>
        <div class="main" style="background-color:#eee;"><img :src="image" :alt="title"></div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            }
        },
        data: function() {
            return {}
        }
    }
</script>
