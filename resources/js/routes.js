import HomeComponent from './components/pages/HomeComponent.vue'
import PostsComponent from './components/pages/PostsComponent.vue'
import PostComponent from './components/pages/PostComponent.vue'
import ProjectsComponent from './components/pages/ProjectsComponent.vue'
import ProjectComponent from './components/pages/ProjectComponent.vue'
import ContactComponent from './components/pages/ContactComponent.vue'

export default [
    { path: '/', component: HomeComponent },
    { path: '/blog', component: PostsComponent },
    { path: '/blog/:slug', component: PostComponent },
    { path: '/projects', component: ProjectsComponent },
    { path: '/projects/:slug', component: ProjectComponent },
    { path: '/contact', component: ContactComponent }
]
