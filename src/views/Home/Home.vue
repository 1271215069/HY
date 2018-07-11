<template>
    <div class="Home">
       <div class="ppjs">
           <div class="container">
               <div class="module-title">
                   <p></p>
                   <div>
                       <img src="" alt="">
                   </div>
                   <p></p>
               </div>
           </div>
       </div>
    </div>
</template>

<script>
    import Public from "@/store/public.js"
    
    import { XAddress, ChinaAddressV4Data, Countup, Flexbox, FlexboxItem, XImg, Divider,Swiper,SwiperItem  } from 'vux'
    import { mapActions, mapGetters } from "vuex"
    export default {
        name: "home",
        components:{ XAddress, Countup, Flexbox, FlexboxItem, XImg, Divider,Swiper ,SwiperItem },
        data(){
            return {
                
            }
        },
        methods:{
            ...mapActions(['action']),
           
        },
        computed:{
            ...mapGetters(['airforce'])
        },
        mounted(){

        }
    }
</script>

<style scoped lang="less">
@import "../../assets/css/color.less";
.container{
    width: 1200px;
    margin: 0 auto;
}
.module-title{

}
.Home{
    .ppjs{
        background: #f5fbfc;

    }
}
</style>