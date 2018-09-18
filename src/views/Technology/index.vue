<template>
    <div class="technology">
        <div class="container">
            <z-title cn="技术力量" en="BRAND INTRODUCTION"></z-title>
            <div class="ppjs-content">
                   <div class="ppjs-left">
                       <img :src='require("@/assets/img/ppjs.jpg")' alt="">
                   </div>
                   <div class="ppjs-right">
                       <p>乐清市红远电力设备有限公司,拥有雄厚的技术力量、先进的生产检验设备、精湛的生产工艺、完善的质量保证体系与现代化的管理手段。依托公司强有力的品牌支持，及先进的理念为引导，以“为顾客创造价值，为股东创造利益、为员工创造前程，为社会创造繁荣”为使命，秉承“爱而知不足，唯客户永恒”的企业理念，凭借一支年轻而富有朝气的高素质团队，锐意开拓，不断创新，以卓越的产品，优质、高效的服务为基础，通过名牌战略，立志为中国电力金具行业打造一个诚信、务实、高效和不断超越的专家级的合作伙伴</p>
                        
                   </div>
               </div>
            <div class="sbimgilst">
                <ul>
                    <li v-for="(item,index) in sblist" :key="index">
                        <router-link to="">
                            <div class="sbimg">
                                <img :src='item.img' alt="">
                            </div>
                            <p>{{item.post_title}}</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { ZTitle } from "@/components"
export default {
    name:"index",
    data(){
        return{
            sblist:[{
                title:"某某设备",
                img:require("@/assets/img/Technology.jpg")
            },{
                title:"某某设备",
                img:require("@/assets/img/Technology.jpg")
            },{
                title:"某某设备",
                img:require("@/assets/img/Technology.jpg")
            },{
                title:"某某设备",
                img:require("@/assets/img/Technology.jpg")
            }]
        }
    },
    components:{
        ZTitle
    },
    methods:{

    },
    mounted(){
        this.action({
            moduleName:"relationships",
            url:"/api/header/relationships",
            method:"post",
            data:{
                term_id:"12",
            }
        }).then((res)=>{
            if(res.code==200){
                this.sblist=res.data.data;
            }else{
                this.$vux.toast.text(res.message)
            }
        }).catch((err)=>{})
    }
}
</script>
<style lang="less" scoped>
@import "../../assets/css/color";
.technology{
    .container{
        width: @public_width;
        margin: 0 auto;
        .ppjs-content{
            margin-top: 35px;
            overflow: hidden;
            .ppjs-left{
                width: 48%;
                padding-right: 2%;
                float: left;
                img{
                    width: 100%;
                    display: block;
                }
            }
            .ppjs-right{
                width: 48%;
                padding-left: 2%;
                float: left;
                
                p{
                    font-size: 14px;
                    text-indent: 28px;
                    line-height: 30px;
                    width: 90%;
                    margin: 0 auto;
                }
                span{
                    display: block;
                    text-align: right;
                    padding-top: 35px;
                    .ppjs-more{
                        color: #ff0000;
                    }
                }
            }
        }
        .sbimgilst{
            margin-top: 80px;
            ul{
                // display: flex;
                // justify-content: space-around;
                // flex-wrap: wrap;
                overflow: hidden;
                li{
                    width: 38%;
                    float: left;
                    margin: 0 6%;
                    margin-bottom: 45px;
                    .sbimg{
                        box-sizing: border-box;
                        border: 1px solid #aaaaaa;
                        padding: 9px;
                        img{
                            display: block;
                            width: 100%;
                            transition: all 0.6s;
                        }
                        img:hover{
                            transform: scale(1.1);
                        }
                    }
                    p{
                        text-align: center;
                        font-size: 16px;
                        line-height: 35px;
                    }
                }
            }
        }
    }
}
</style>
