<template>
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <h1>Latest <span>blog</span> posts</h1>
                <article v-for="post in posts" :key="post.id">
                    <h2><router-link :to="'/posts/' + post.slug">{{ post.title }}</router-link></h2>
                    <div class="meta">{{ post.created_at }}</div>
                    <div class="content">{{ post.content }}</div>
                </article>
                <div class="pagination"></div>
            </div>
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
