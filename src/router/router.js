import VueRouter from 'vue-router'
import home from '@/components/home'
import index from '@/components/index'
import me from '@/components/me'
import article from '@/components/article'


const routes=[
    {
        path:'/',
        name:'index',
        component:index
    },
    {
        path:'/home',
        name:'home',
        component:home
    },
    {
        path:'/me',
        name:'me',
        component:me
    },
    {
        path:'/article',
        name:'article',
        component:article
    }
]

const router =new VueRouter({
    routes:routes,
    mode:'hash'
})

export default router
