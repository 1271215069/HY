<template>
  <div id="app" ref="appView">
    <loading v-model="isLoading" text="加载中..."></loading>
    <transition>
        <!-- :name="transitionName" -->
        <router-view v-if="isRouterAlive"/>
    </transition>
  </div>
</template>

<script>
import { Loading } from 'vux'
import { mapState, mapActions, mapGetters } from 'vuex'
import Hammer from 'hammerjs'
export default {
  name: 'App',
  components:{ Loading },
  data () {
      return {
          isRouterAlive: true,
          transitionName:"",
      }
  },
  methods: {
      reload () {
          this.isRouterAlive = false
          this.$nextTick(() => (this.isRouterAlive = true))
      },
      //路由返回处理
      notWhiteListBack(event){
          var  callback = new Function();
          if(typeof event == "function"){
              callback = event;
          };
          //白名单
          const whiteList = ["Home","HousingSearch","User","Login","HousingResource","HousingDetails","Wxgl","Yygl","HtDetails","Wdzj","Message","Wdsc","Qhq","Ht","JbDetails"];
          if(!whiteList.some(title=>{return title == this.airforce.layout.menuName; })){
              this.$router.back();
          }else {
              callback();
          };
      },
  },
  computed: {
      ...mapGetters(['airforce']),
      ...mapState({
          isLoading: state => state.vux.isLoading,
      })
  },
  created(){
      this.$vux._this = this;
      window.VUX = this.$vux
  },
  mounted(){
      //滑动返回上一页
      var h = new Hammer(this.$refs.appView);
      h.on('swiperight',(e) =>{
          this.notWhiteListBack(e);
      });
  },
  watch:{
    //   $route(to,from){
    //       if(to.meta.index>from.meta.index){
    //           this.transitionName = 'slide-left';
    //           console.log("前进")
    //           console.log(to.meta.index,"当前页面index")
    //       }else{
    //           this.transitionName = 'slide-right';
    //           console.log("后退")
    //           console.log(to.meta.index,"当前页面index")
    //       }
    //   }
  }
}
</script>
<style lang="less">
@import '~vux/src/styles/reset.less';
@import './assets/css/animate.min.less';
@import './assets/css/publicCeset.less';
@import './assets/fonts/iconfont.css';


@font-face {
    font-family: 'iconfont';
    src: url('./assets/fonts/iconfont.eot');
    src:url('./assets/fonts/iconfont.eot?#iefix') format('embedded-opentype'),
    url('./assets/fonts/iconfont.woff') format('woff'),
    url('./assets/fonts/iconfont.ttf') format('truetype'),
    url('./assets/fonts/iconfont.svg#iconfont') format('svg');
}

// @Nb:"font_644715_jyd0soeioyfogvi";
// @font-face {
//   font-family: 'iconfont';
//   src: url('//at.alicdn.com/t/@{N b}.eot');
//   src: url('//at.alicdn.com/t/@{Nb}.eot?#iefix') format('embedded-opentype'),
//   url('//at.alicdn.com/t/@{Nb}.woff') format('woff'),
//   url('//at.alicdn.com/t/@{Nb}.ttf') format('truetype'),
//   url('//at.alicdn.com/t/@{Nb}.svg#iconfont') format('svg');
// }

.iconfont{
  font-family: 'iconfont';
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
