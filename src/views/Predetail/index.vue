<template>
    <div class="pro">
        <z-title cn="产品详情" en="PRODUCTS DETAILS"></z-title>
        <div class="pro-content">
            <div class="con-top">
                <div class="left">
                    <img :src="alldata.smeta" alt="">
                </div>
                <div class="right">
                    <p>产品名称：{{alldata.post_title}}</p>
                    <p>品牌：{{alldata.brand}}</p>
                    <p>型号：{{alldata.version}}</p>
                    <p>产地：{{alldata.area}}</p>
                    <p>有效物含量：{{alldata.effective}}</p>
                    <p>主要用途：{{alldata.purpose}}</p>
                </div>
            </div>
            <p class="con-bot" ref="context"></p>
        </div>
    </div>
</template>
<script>
import { ZTitle } from "@/components"
export default {
    name:"index",
    components:{
        ZTitle
    },
    data(){
        return{
            alldata:{}
        }
    },
    methods:{
         HTMLDecode(text) { 
            var temp = document.createElement("div"); 
            temp.innerHTML = text; 
            var output = temp.innerText || temp.textContent; 
            temp = null; 
            return output; 
        } ,
    },
    mounted(){
        this.action({
            moduleName:"productDetail",
            url:"/api/header/productDetail",
            method:"post",
            data:{
                id:this.$route.query.id
            }
        }).then((res)=>{
            if(res.code==200){
                console.log(res)
                this.alldata=res.data;
                let jg=this.HTMLDecode(res.data.post_content);
                let setdiv = document.createElement('div');
                setdiv.innerHTML=jg;
                for(let i=0;i<setdiv.childNodes.length;i++){
                    this.$refs.context.appendChild(setdiv.childNodes[i]);
                }
            }else{
                this.$vux.toast.text(res.message)
            }
        }).catch((err)=>{})
    }
}
</script>
<style lang="less" scoped>
@import "../../assets/css/color";
.pro{
    width: @public_width;
    margin: auto;
    .pro-content{
        margin-top: 50px;
        .con-top{
            overflow: hidden;
            .left{
                width: 48%;
                float: left;
                img{
                    width: 60%;
                    display: block;
                    margin: 0 auto;
                }
            }
            .right{
                width: 48%;
                float: right;
                p{
                    line-height: 55px;
                    font-size: 18px;
                }
            }
        }
        .con-bot{
            margin-top: 35px;
            font-size: 16px;
            text-indent:32px; 
        }
    }
}
</style>
