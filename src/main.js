// 入口
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 引入plus封装
import '@/assets/js/plus.js'

// 注册过滤器
import * as filters from './filters/index'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
// 页面切换loading加载动画
store.registerModule('vux', {
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    }
  }
});

router.beforeEach(function (to, from, next) {
  // 初始化Layou布局参数
  store.commit('AIRFORCE_DO', {
    data: {
      moduleName: 'layout',
      goods: _.merge({
          //是否显示头部
          headerShow:true,
          //是否显示尾部
          footerShow:true,
          //当前导航状态及颜色控制
          navName:null,
      }, to.meta)
    }
  });
  try {
      //重置位置
      if (window.scrollTo) {
          window.scrollTo({
              y: 0
          });
          if(document.querySelector){
              var html = document.querySelector("html");
              html.scrollTop = 0;
          }
      }

  }catch (e){}
  document.title = to.name;
  //设置body背景颜色
  document.body.style.backgroundColor = store.state.airforce.layout.bodyColor;
  try {
    // 写入登入数据
    if (!store.state.airforce.login_post && localStorage.login_post) {
      store.commit('AIRFORCE_DO', {
        data: {
          moduleName: 'login_post',
          goods: JSON.parse(localStorage.login_post)
        }
      })
    }
  } catch (e) {}
  // XInput数据双向绑定兼容
  store.commit('AIRFORCE_DO', {
    data: {
      moduleName: 'change',
      goods: {
        set: (e, a, moduleName) => {
            if(moduleName){
                store.commit('AIRFORCE_DO', {
                    data: {
                        moduleName: moduleName,
                        goods: _.set({}, a, e)
                    }
                })
            }else {
                store.commit('AIRFORCE_DO', {
                    data: {
                        moduleName: a,
                        goods:e
                    }
                })
            }
        }
      }
    }
  })
  // 显示加载动画
  store.commit('updateLoadingStatus', {isLoading: true})
  // vueobj.action({
  //   moduleName:"layout",
  //   goods:{
  //       timestart:false,
  //   }
  // })
  if(store.state.airforce.layout.timmernew){
      clearInterval(store.state.airforce.layout.timmernew);
      clearInterval(store.state.airforce.layout.timmernew._id);
      
  }
  if(store.state.airforce.layout.hometimmernew){
    clearInterval(store.state.airforce.layout.hometimmernew);
      clearInterval(store.state.airforce.layout.hometimmernew._id);
  }
    next();
  // 白名单路由
  // const whiteList = ['/Login', '/Register', '/ForgetPwd','/AccountAppeal']
  // // 判断是否登陆及相关跳转
  // if (store.state.airforce.login_post && store.state.airforce.login_post.code == 200) {
  //   if (to.path === '/Login') { // 已登陆时自动跳转首页
  //       next('/')
  //   } else {
  //       next() // 直接进入
  //   }
  // } else {
  //   if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
  //     next()
  //   } else {
  //   //重定向页面配置重写
  //     store.commit('AIRFORCE_DO', {
  //         data: {
  //             moduleName: 'layout',
  //             goods:from.meta
  //         }
  //     });
  //     //关闭加载
  //     store.commit('updateLoadingStatus', {isLoading: false})
  //     next('/Login'); // 否则全部重定向到登录页
  //   }
  // }
})

router.afterEach(function (to) {
  // 隐藏加载动画
    store.commit('updateLoadingStatus', {isLoading: false})
})

Vue.config.productionTip = false
// 弹出层引入
import { AlertPlugin, ToastPlugin, ConfirmPlugin, DatetimePlugin, LoadingPlugin  } from 'vux'
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
Vue.use(DatetimePlugin)
Vue.use(LoadingPlugin)


//utilts工具引入
import UtilsPlugin from "./utils/index"
Vue.use(UtilsPlugin)

//状态管理器工具引入
import useStore from "./store/useStore"
Vue.use(useStore)

//国际化
import zi18nz from "zi18nz"
Vue.use(zi18nz)

Vue.use(router)



/* 实例化 */
new Vue({
  el: '#app',
  router,
  store,
    data(){return {a:2}},
  components: { App },
  template: '<App/>',

})





