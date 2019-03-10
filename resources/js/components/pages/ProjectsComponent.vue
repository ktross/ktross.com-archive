<template>
    <div>
        <div class="row">
            <h1>Projects Page</h1>
        </div>
    </div>
</template>

<script>
    export default {
        mounted: function() {
            // this.axios.get('projects').then((response) => {
            //     this.$store.dispatch('projects/updateProjects', response.data)
            // });
        },
        computed: {
            projects: function() {
                return this.$store.state.projects.data
            }
        }
    }
</script>
