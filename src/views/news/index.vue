<template>
    <div class="news">
        <z-title cn="新闻中心" en="NEWS"
                 :list="titlelist"
        @on-change="ochange"></z-title>

        <!-- <flexbox class="flexbox">
            <flexbox-item>
                <img :src="img">
            </flexbox-item>
            <flexbox-item>
                <div class="content">
                    <h1 class="title">省农发行xx处长一行来公司参观调研</h1>
                    <p class="text">
                        6月3日上午，省农发行xx处长在东营市农发行副行xxx、xx县农发行行长xx的陪同下来我公司，就公司国际业务贸易授信进行了实地考察调研，公司财务总监xxx参与接待。
                    </p>
                </div>
            </flexbox-item>
        </flexbox> -->
        <flexbox class="flexbox" v-for="(item,index) in contentlist" @click.native="go(item)" :key="index">
            <flexbox-item :span="1/2">
                <img :src="item.img">
            </flexbox-item>
            <flexbox-item :span="1/12">
                <div class="time">
                    <h2 class="day">{{item.day}}</h2>
                    <p class="date">{{item.mon}}</p>
                </div>
            </flexbox-item>
            <flexbox-item>
                <div class="content">
                    <h1 class="title">{{item.post_title}}</h1>
                    <p class="text">
                        {{item.post_excerpt}}
                    </p>
                </div>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script>
    import { ZTitle } from "@/components"
    import { Flexbox, FlexboxItem } from "vux"
    export default {
        name: "index",
        components: { Flexbox, FlexboxItem, ZTitle },
        data(){return{
            img:require("@/assets/img/news.png"),
            titlelist:[],
            contentlist:[],
        }},
        methods:{
            go(i){
                this.$router.push("/Newsdetails?rid="+i.object_id+"&fid="+i.term_id)
            },
            ochange(t,i){
                console.log(t)
                this.action({
                    moduleName:"relationships",
                    url:"/api/header/relationships",
                    method:"post",
                    data:{
                        term_id:t.term_id,
                    }
                }).then((res)=>{
                    if(res.code==200){
                        console.log(res.data.data)
                        this.contentlist=res.data.data;
                        for(let l=0;l<res.data.data.length;l++){
                            let timearr= res.data.data[l].post_date.split("-");
                            res.data.data[l].mon=timearr[0]+"-"+timearr[1];
                            res.data.data[l].day=timearr[2];
                        }
                    }else{
                        this.$vux.toast.text(res.message)
                    }
                }).catch((err)=>{})
            }
        },
        mounted(){
            this.action({
                moduleName:"term",
                url:"/api/header/term",
                method:"post",
                data:{
                    name:'新闻动态'
                }
            }).then((res)=>{
                if(res.code==200){
                    this.titlelist=res.data;
                }else{
                    this.$vux.toast.text(res.message)
                }
            }).catch((err)=>{})
        }
    }
</script>

<style scoped lang="less">
@import "../../assets/css/color";
.news{
    width: @public_width;
    margin: auto;
    .flexbox{
        margin-bottom: 50px;
        @h:250px;
        cursor: pointer;
        .content{
            width: 100%;
            height: @h;
            .title{
                font-size: 18px;
                font-family: "微软雅黑";
                line-height: 18px;
                margin-bottom: 20px;
            }
            .text{
                font-size: 14px;
            }
        }
        img{
           .content;
        }
        .time{
            float: right;
            text-align: center;
            height: @h;
            .day{
                background-color: #f0f1f2;
            }
            .date{
                background-color: #f0f1f2;
                margin-top: 2px;
                font-size: 12px;
            }
        }

    }
}
</style>