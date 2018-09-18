<template>
    <div class="Layout-footer">
        <div class="footer">
            <div class="footer-content">
                <div class="left">
                    <div class="ewm">
                        <img :src='require("@/assets/img/footer-ewm.png")' alt="">
                    </div>
                    <p>扫一扫，关注官方微信</p>
                </div>
                <div class="right">
                    <div v-for="(item,index) in footlist" :key="index" class='right-list'>
                        <span>{{item.title}}</span>
                        <tt v-for="(listitem,listindex) in item.list" @click.prevent="go(listitem)" :key="listindex">{{listitem.subtitle}}</tt>
                    </div>
                    <div class="right-list">
                        <span>联系我们</span>
                        <tt>电 话：15209885785</tt>
                        <tt>传 真：0577-61713365</tt>
                        <tt>E-mail：jiaxuehong.com.cn@163.com</tt>
                        <tt>地 址：浙江温州柳市新民村</tt>
                        <tt>邮 编：325604</tt>
                    </div>
                </div>
                
            </div>
            <p>copyright @ 2018版权所有：乐清市红远电力设备有限公司 浙ICP备18036018</p>
        </div>
    </div>
</template>

<script>
    import { Flexbox, FlexboxItem, } from "vux"
    import { mapGetters } from "vuex"
    export default {
        name: "layou-footer",
        components:{  },
        data(){
            return {
                footlist:[{
                    title:"关于我们",
                    list:[{
                        subtitle:"企业简介",
                        rou:"/About"
                    },
                    {
                        subtitle:"企业文化",
                        rou:"/About"
                    },
                    {
                        subtitle:"生产实景",
                        rou:"/About"
                    }]
                },
                {
                    title:"产品中心",
                    list:[{
                        subtitle:"欧式铜铝接线端子",
                        rou:"/product"
                    },
                    {
                        subtitle:"美式铜铝端子",
                        rou:"/product"
                    },
                    {
                        subtitle:"分支电缆接头",
                        rou:"/product"
                    },
                    {
                        subtitle:"堵油管",
                        rou:"/product"
                    },
                    {
                        subtitle:"设备线夹",
                        rou:"/product"
                    }]
                }]
            }
        },
        methods:{
            go(i){
                this.$router.push(i.rou)
            }
           
        },
        computed:{
            ...mapGetters(['airforce']),
        },
    }
</script>

<style scoped lang="less">
@import "../../assets/css/color.less";
.Layout-footer{
    width: 100%;
    height: auto;
    padding-top:120px ;
    background: url(../../assets/img/footer-bj.jpg) no-repeat;
    background-size: cover;
    background-position: center;
    .footer{
        width: @public_width;
        margin: 0 auto;
        background: #fff;
        box-sizing: border-box;
        padding: 20px 40px 10px;
        .footer-content{
            overflow: hidden;
            .left{
                width: 20%;
                float: left;
                .ewm{
                    width: 146px;
                    margin: 0 auto;
                    img{
                        display: block;
                        width: 100%;
                    }
                }
                p{
                    text-align: center;
                }
            }
            .right{
                width: 80%;
                float: left;
                overflow: hidden;
                display: flex;
                justify-content: space-around;
                .right-list{
                    float: left;
                    span{
                        display: block;
                        text-align: center;
                        font-size: 22px;
                        font-weight: 500;
                        margin-bottom: 15px;
                    }
                    tt{
                        display: block;
                        text-align: center;
                        font-size: 15px;
                        margin-bottom: 10px;
                        cursor: pointer;
                    }
                }
                .right-list:nth-child(4){
                    tt{
                        text-align: left;
                    }
                }
            }
        }
        p{
                text-align: center;
                padding-top: 30px;
            }
    }
}

</style>