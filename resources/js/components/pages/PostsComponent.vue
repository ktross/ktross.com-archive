<template>
    <div class="row">
        <div class="col-100">
            <h1>Blog Page</h1>
            <article v-for="post in posts">
                <h2><router-link :to="'/posts/' + post.slug">{{ post.title }}</router-link></h2>
                <div class="meta">{{ post.created_at }}</div>
                <div class="content">{{ post.content }}</div>
            </article>
            <div class="pagination"></div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted: function() {
            this.axios.get('posts').then((response) => {
                this.$store.dispatch('posts/updatePosts', response.data)
            });
        },
        computed: {
            posts: function() {
                return this.$store.state.posts.data
            }
        }
    }
</script>
