import Vue from 'vue'
import  Router from 'vue-router'

Vue.use(Router)
export default new Router({
    routes:[
        {
            path:"/vuex",
            component:resolve=>{require(['../components/vuex.vue'],resolve)}
        }
    ]
})