<template>
    <div class="product">
        <z-title cn="产品世界" en="PRODUCTS WORLD" :list="titlelist" @on-change="ochange" :showall="true" @on-showall="showallpro"></z-title>
        <div class="allpro" v-if="needall">
            <div class="goback" @click.prevent="goback">
                    <
            </div>
            <div class="forward" @click.prevent="forward">
                >
            </div>
            
            <ul id="allproul">
                <li v-for="(item,index) in allprolist" :key="index" @click="go(item)">
                    <img :src="item.smeta" alt="">
                    <p>{{item.post_title}}</p>
                </li>
            </ul>
        </div>
        <ul class="list" v-if="!needall">
            <li v-for="(item,index) in contentlist" :key="index" @click="go(item)">
                <img :src="item.smeta" alt="">
                <p>{{item.post_title}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import { ZTitle } from "@/components"
import { setInterval, clearInterval } from 'timers';
    export default {
        name: "index",
        components: { ZTitle },
        data(){
            return {
                titlelist:[],
                contentlist:[],
                needall:false,
                allprolist:[],
                proimgindex:0,
                sum:0
            }
        },
        methods:{
            go(i){
                this.$router.push("/Predetail?id="+i.id)
            },
            ochange(t,i,list){
                if(this.airforce.layout.timmernew){
                    clearInterval(this.airforce.layout.timmernew);
                }
                if(t.type=="all"){
                    this.showallpro();
                }else{
                    this.needall=false;
                    this.action({
                        moduleName:"productList",
                        url:"/api/header/productList",
                        method:"post",
                        data:{
                            cate_id:t.cid,
                            recommended:"0"
                        }
                    }).then((res)=>{
                        if(res.code==200){
                            this.contentlist=res.data.data;
                        }else{
                            this.$vux.toast.text(res.message)
                        }
                    }).catch((err)=>{})
                }
            },
            showallpro(){
                this.needall=true;
                this.action({
                    moduleName:"productList",
                    url:"/api/header/productList",
                    method:"post",
                    data:{
                        recommended:"0"
                    }
                }).then((res)=>{
                    if(res.code==200){
                        this.allprolist=res.data.data;
                        this.sum=parseInt(res.data.count);
                        this.action({
                            moduleName:"layout",
                            goods:{
                                timeIndex:0,
                            }
                        })
                        this.action({
                            moduleName:"layout",
                            goods:{
                                timestart:true,
                            }
                        });
                        let timmernew = setInterval(()=>{
                                    this.forward();
                                },3000);
                                console.log(timmernew)
                        this.action({
                            moduleName:"layout",
                            goods:{
                                timmernew:timmernew
                            }
                        })
                        
                    }else{
                        this.$vux.toast.text(res.message)
                    }
                }).catch((err)=>{})
                
            },
            forward(){
                var that=this;
                if(this.airforce.layout.timeIndex>(this.sum-5)){
                    this.action({
                            moduleName:"layout",
                            goods:{
                                timeIndex:0,
                            }
                        })
                    let oul=document.getElementById("allproul");
                    if(oul){
                        oul.style.left="0px";
                    }
                    
                }else{
                    this.action({
                            moduleName:"layout",
                            goods:{
                                timeIndex:that.airforce.layout.timeIndex+1,
                            }
                        })
                    let oul=document.getElementById("allproul");
                    if(oul){
                        oul.style.left=-300*this.airforce.layout.timeIndex+"px";
                    }
                    
                }
            },
            goback(){
                var that=this;
                if(this.airforce.layout.timeIndex<=0){
                    this.action({
                            moduleName:"layout",
                            goods:{
                                timeIndex:0,
                            }
                        })
                    let oul=document.getElementById("allproul");
                    if(oul){
                        oul.style.left="0px";
                    }
                    
                }else{
                    this.action({
                            moduleName:"layout",
                            goods:{
                                timeIndex:that.airforce.layout.timeIndex-1,
                            }
                        })
                    let oul=document.getElementById("allproul");
                    if(oul){
                        oul.style.left=-300*this.airforce.layout.timeIndex+"px";
                    }
                    
                }
            }
        },
        mounted(){
            this.action({
                moduleName:"category",
                url:"/api/header/category",
                method:"post",
                data:{
                    name:'产品世界'
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
.product{
    width: @public_width;
    margin: auto;
    @colIndex:4;
    @maTop:14px;
    @width:(@public_width - @colIndex * @maTop)/@colIndex;
    .list{
        overflow: hidden;
        margin-left: -@maTop/2;
        li{
            width: @width;
            margin-left: @maTop;
            margin-bottom: @maTop;
            float: left;
            cursor: pointer;
            img{
                width: @width;
                height: @width;
                transition: all 0.6s;
            }
            img:hover{
                 transform: scale(1.03);
            }
            p{
                text-align: center;
                line-height: 40px;
            }
        }
    }
    .allpro{
        overflow: hidden;
        height: 340px;
        position: relative;
        .forward{
            width: 50px;
            height:  286px;
            position: absolute;
            right: 0;
            top: 0;
            background: rgba(0, 0, 0, 0.3);
            z-index: 20;
            color: #fff;
            text-align: center;
            line-height: 286px;
            font-size: 46px;
        }
        .goback{
            width: 50px;
            height:  286px;
            position: absolute;
            left: 0;
            top: 0;
            background: rgba(0, 0, 0, 0.3);
            z-index: 20;
            color: #fff;
            text-align: center;
            line-height: 286px;
            font-size: 46px;
        }
        ul{
            overflow: hidden;
            margin-left: -@maTop/2;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 10;
            transition:left 1s linear;
            li{
                width: @width;
                margin-left: @maTop;
                margin-bottom: @maTop;
                float: left;
                cursor: pointer;
                img{
                    width: @width;
                    height: @width;
                    transition: all 0.6s;
                }
                img:hover{
                    transform: scale(1.03);
                }
                p{
                    text-align: center;
                    line-height: 40px;
                }
            }
        }
    }
}
</style>