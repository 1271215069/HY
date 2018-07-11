import Vue from 'vue'
import Router from 'vue-router'

import utils from '@/utils/utils.js'

Vue.use(Router);

export default new Router({
    routes: [
        // { path: '/', redirect: 'Register'},
        // todo Dome
        utils.importVueInit('Dome/Dome','/Dome','Dome'),

        utils.importVueInit({
            name: 'Layout/Layout',
            path: '/',
            component: require("@/views/Layout/Layout.vue").default,
            redirect: '/Home',
            children: [
                utils.importVueInit('Home/Home','/Home','首页',{
                    meta:{
                        menuName:'Home'
                    }
                }),
                utils.importVueInit('Allvue/About','/About','关于我们',{
                    meta:{
                        right:'',
                    }
                }),
            ]
        }),
    ]
})

