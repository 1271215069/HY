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
                        navName:'Home'
                    }
                }),
                utils.importVueInit('Hr/index','/Hr','人力资源',{
                    meta:{
                        navName:"Hr"
                    }
                }),
                utils.importVueInit('About/index','/About','公司概况',{
                    meta:{
                        navName:"About"
                    }
                }),
                utils.importVueInit('news/index','/news','新闻动态',{
                    meta:{
                        navName:"news"
                    }
                }),
                utils.importVueInit('Ndetail/index','/Newsdetails','新闻详情',{
                    meta:{
                    }
                }),
                utils.importVueInit('Predetail/index','/Predetail','产品详情',{
                    meta:{
                    }
                }),
                utils.importVueInit('Contact/index','/Contact','联系我们',{
                    meta:{
                        navName:"Contact"
                    }
                }),
                utils.importVueInit('Development/index','/Development','发展之路',{
                    meta:{
                        navName:"Development"
                    }
                }),
                utils.importVueInit('Technology/index','/Technology','技术力量',{
                    meta:{
                        navName:"Technology"
                    }
                }),
                utils.importVueInit('Sales/index','/Sales','销售服务',{
                    meta:{
                        navName:"Sales"
                    }
                }),
                utils.importVueInit('product/index','/product','产品世界',{
                    meta:{
                        navName:"product"
                    }
                }),
            ]
        }),
    ]
})

