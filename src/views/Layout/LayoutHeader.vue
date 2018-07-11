<template>
    <div class="Layout-header">
        <div class="head">
            <div class="title">
                <div class="logo">
                    <img :src='require("@/assets/img/logo.png")' alt="">
                </div>
                <div class="titletext">
                    <h2>乐清市红远电力设备有限公司</h2>
                    <h3> Yeqing  Hongyuan  Electric  Co., Ltd.</h3>
                </div>
                <div class="tel">
                    <div class="lang"></div>
                    <p>全国咨询热线：400-8899-321</p>
                </div>
                
            </div>
            <div class="line"></div>
            <div class="navigation">
                <ul>
                    <li v-for='(item,index) in nav' :key='index'><span @click.prevent="goturn(item,index)">{{item}}</span></li>
                </ul>
            </div>
        </div>
        <div class="banner">
            <swiper :list="bannerlist" height="600px" :loop='true' :auto='true' :show-dots='false'></swiper>
        </div>
    </div>
</template>

<script>
    import { Flexbox, FlexboxItem, XInput, Group, Popover ,Swiper} from  "vux"
    import { mapGetters, mapActions } from  "vuex"
    export default {
        name: "layout-header",
        components:{ Flexbox, FlexboxItem, XInput, Group, Popover,Swiper },
        data(){
            return {
                nav:['首页','公司概况','新闻动态','发展之路','技术力量','产品世界','销售服务','人力资源','联系我们'],
                bannerlist:[{url: 'javascript:',img:'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg'},{url: 'javascript:',img:'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg'},{url: 'javascript:',img:'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'}]
            }
        },
        computed:{
            ...mapGetters(['airforce']),
        },
        methods:{
            ...mapActions(['action']),
            goturn(t,i){//点击导航跳转的方法

            }
            
        },
        mounted(){
            
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
                    }
                }
            }
        }
    }
    .banner{
        width: 100%;
    }
}
.nav-select{
    color: #8ba1ad;
}
</style>