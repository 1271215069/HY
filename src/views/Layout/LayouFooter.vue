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
                        <tt v-for="(listitem,listindex) in item.list" :key="listindex">{{listitem.subtitle}}</tt>
                    </div>
                    <div class="right-list">
                        <span>联系我们</span>
                        <tt>电 话：86(123)1234567</tt>
                        <tt>传 真：86(123)1234567</tt>
                        <tt>E-mail：www.xxx@xxx.com</tt>
                        <tt>网 址：http://www.xxxxxx.com</tt>
                        <tt>地 址：乐清市</tt>
                        <tt>邮 编：******</tt>
                    </div>
                </div>
                
            </div>
            <p>Copynight © 2015 纺织新材 All Rights Reserved</p>
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
                        rou:"/Qyjj"
                    },
                    {
                        subtitle:"企业文化",
                        rou:"/Qyjj"
                    },
                    {
                        subtitle:"生产实景",
                        rou:"/Qyjj"
                    }]
                },
                {
                    title:"产品中心",
                    list:[{
                        subtitle:"铜鼻子系列",
                        rou:"/Cpzx"
                    },
                    {
                        subtitle:"铜接线端子",
                        rou:"/Cpzx"
                    },
                    {
                        subtitle:"铝过渡端子",
                        rou:"/Cpzx"
                    },
                    {
                        subtitle:"开口铜鼻子",
                        rou:"/Cpzx"
                    },
                    {
                        subtitle:"冷端压子系列",
                        rou:"/Cpzx"
                    }]
                },
                {
                    title:"招商加盟",
                    list:[{
                        subtitle:"加盟优势",
                        rou:"/Jmys"
                    },{
                        subtitle:"加盟政策",
                        rou:"/Jmys"
                    },{
                        subtitle:"加盟条件",
                        rou:"/Jmys"
                    },{
                        subtitle:"加盟流程",
                        rou:"/Jmys"
                    }]
                }]
            }
        },
        methods:{
            
           
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
        width: 1200px;
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