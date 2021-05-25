import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home=()=>import('@/views/index/index')
const profile=()=>import('@/views/profile/index')
const shopping=()=>import('@/views/shopping/index')
const fenlei=()=>import('@/views/fenlei/index')
const routes = [
 {
   path:'/',
   redirect:'/home'
 },
 {
   path:'/home',
   component:home

 },
 {
  path:'/profile',
  component:profile
 },
 {
  path:'/shopping',
  component:shopping

},
{
 path:'/fenlei',
 component:fenlei
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
