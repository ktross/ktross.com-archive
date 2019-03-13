<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-sm">
                    <h1>Projects Page</h1>
                </div>
            </div>
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
