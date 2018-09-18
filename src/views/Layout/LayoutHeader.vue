<template>
    <div class="Layout-header">
        <div class="head">
            <div class="title">
                <div class="logo">
                    <img :src='require("@/assets/img/logo.png")' alt="">
                </div>
                <div class="titletext">
                    <h2>乐清市红远电力设备有限公司</h2>
                    <h3> Yueqing  Hongyuan  Electric  Co., Ltd.</h3>
                </div>
                <div class="tel">
                    <div class="lang"></div>
                    <p>全国咨询热线：15209885785</p>
                </div>
                
            </div>
            <div class="line"></div>
            <div class="navigation">
                <ul>
                    <li v-for='(item,index) in nav' :key='index'><span @click.prevent="goturn(item,index)" :class="{select:(airforce.layout.navName && item.navName && airforce.layout.navName === item.navName)}">{{item.name}}</span></li>
                </ul>
            </div>
        </div>
        <!-- <div class="banner" v-if="airforce.layout.navName == navName">
            <swiper :list="bannerlist" v-model="swiperIndex" height="600px" :auto="true" :loop="true" :threshold="50" :show-desc-mask="false"></swiper>
            <div class="prev" @click="clickPrev"></div>
            <div class="next" @click="clickNext"></div>
        </div> -->
        <div class="banner">
            <img class="bannerFind" :src="bannerlist.img" alt="">
        </div>
    </div>
</template>

<script>
    import { Flexbox, FlexboxItem, XInput, Group, Popover ,Swiper} from  "vux"
    export default {
        name: "layout-header",
        components:{ Flexbox, FlexboxItem, XInput, Group, Popover,Swiper },
        data(){
            return {
                nav:[
                    {name:"首页",router:"/",navName:"Home"},
                    {name:"公司概况",router:"/About",navName:"About"},
                    {name:"新闻动态",router:"/news",navName:'news'},
                    {name:"发展之路",router:"/Development",navName:'Development'},
                    {name:"技术力量",router:"/Technology",navName:'Technology'},
                    {name:"产品世界",navName:'product',router:"/product"},
                    {name:"销售服务",navName:'Sales',router:"/Sales"},
                    {name:"人力资源",navName:"Hr",router:"/Hr"},
                    {name:"联系我们",navName:"Contact",router:"/Contact"},
                ],
                swiperIndex:0,
                navName:null,
            }
        },
        computed:{
            bannerlist(){
                try {
                    const lunbo_all = JSON.parse(JSON.stringify(this.airforce.lunbo_all.data)).map(e=>{
                        e.img = e.slide_pic;
                        e.name = e.slide_name;
                        e.url = "javascript:;";
                        return e;
                    });
                    const findImg = _.find(lunbo_all,{name:this.airforce.layout.navName});
                    this.navName =  this.airforce.layout.navName;
                    if(this.airforce.layout.navName == "Home" ||  !findImg || !findImg.img){
                        return lunbo_all.filter(e=>e.cid == '1')
                    }else {
                        this.navName = null;
                        return findImg;
                    }
                }catch (e){
                    return [];
                }
            }
        },
        methods:{
            goturn(t,i){//点击导航跳转的方法
                if(t.router){
                    this.$router.push(t.router);
                }
            },
            clickPrev(){
                if(this.swiperIndex == 1){
                    this.swiperIndex = this.bannerlist.length;
                    return;
                }
                this.swiperIndex -= 1;
            },
            clickNext(){
                if(this.swiperIndex == this.bannerlist.length){
                    this.swiperIndex = 0;
                    return;
                }
                this.swiperIndex += 1;
            }
        },
        mounted(){
            this.action({//获取头部轮播
                moduleName:"lunbo_all",
                url:"/api/header/lunbo",
                method:"post",
                data:{}
            }).then((res)=>{
                if(res.code==200){
                }else {
                    this.$vux.toast.text(res.message)
                }
            }).catch((err)=>{})

        }
    }
</script>

<style scoped lang="less">
@import "../../assets/css/color.less";
@import "../../assets/css/fontstyle.css";
.Layout-header{
    font-size: 14px;
    font-family: 微软雅黑;
    color:#2c2c2c;
    .head{
        width: 1200px;
        margin: 0 auto;
        .title{
            
            padding-top: 30px;
            overflow: hidden;
            .logo{
                width: 16%;
                float: left;
                img{
                    display: block;
                    width: 100%; 
                    cursor: pointer;
                }
            }
            .titletext{
                float: left;
                
                h2{
                    font-size: 45px;
                    font-family: fz;
                    line-height: 43px;
                    color: #8ba1ad;
                    margin-top: 8px;
                    font-weight: 500;
                }
                h3{
                    font-size:32px;
                    line-height: 43px;
                    color: #8ba1ad;
                    font-weight: 500;
                }
            }
            .tel{
                float: right;
                color: #ff001e;
                .lang{
                    height: 60px;
                }
                p{
                    font-size: 18px;
                }
                p::before{
                    content:"";
                    display: block;
                    width: 28px;
                    height: 28px;
                    float: left;
                    background: url(../../assets/img/icon-tel.png) no-repeat;
                    background-size: 20px 20px;
                    background-position: center;
                }
            }
        }
        .line{
                border-bottom:2px solid #595959; 
                padding-top: 15px;
            }
        .navigation{
            ul{
                display: flex;
                width: 100%;
                box-sizing: border-box;
                padding: 0 10px;
                justify-content: space-around;
                margin: 20px 0;
                li{
                    display: inline-block;
                    list-style: none;
                    font-size: 18px;
                    width: 10%;
                    text-align: center;
                    span{
                        cursor: pointer;
                        &.select{
                            color: @theme1-color;
                        }
                    }
                    &:hover{
                        color: @theme1-color*0.9;
                    }
                }
            }
        }
    }
    .banner{
        width: 100%;
        position: relative;
        .prev{
            width: 50px;
            height: 50px;
            background-color: #ffffff;
            background-color: rgba(255,255,255,0.5);
            border-radius: 100%;
            position: absolute;
            left: 30px;
            top: 50%;
            transform: translateY(-25%);
            &:before{
                content: '';
                position: absolute;
                left: 13px;
                top: 16px;
                width: 20px;
                height: 2px;
                border-radius: 1px;
                transform: rotate(-45deg);
                background-color: #000;
            }
            &:after{
                content: '';
                position: absolute;
                left: 13px;
                top: 30px;
                width: 20px;
                height: 2px;
                border-radius: 1px;
                transform: rotate(45deg);
                background-color: #000;
            }
            &:hover{
                background-color: #ffffff;
            }
        }
        .next{
            .prev;
            left: inherit;
            right: 30px;
            &:before{
                transform: rotate(45deg);
                left: 19px;
            }
            &:after{
                transform: rotate(-45deg);
                left: 19px;
            }
        }
        .bannerFind{
            width: 100%;
            max-height: 600px;
        }
    }
}
.nav-select{
    color: #8ba1ad;
}
</style>