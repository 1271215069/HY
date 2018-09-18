<template>
    <div class="about">
        <z-title cn="关于我们" en="ABOUT US"
                 :list="titlelist"
         @on-change="schange"></z-title>
        <div class="about-content" ref="context">
            {{ocont}}
        </div>
        <div class="aboutimg">
            <img :src='require("@/assets/img/gsgk.png")' alt="">
        </div>
    </div>
</template>
<script>
import { ZTitle } from "@/components"
import {Toast } from "vux"
export default {
    name:"index",
    data(){
        return{
            titlelist:[],
            ocont:"",
        }
    },
    components:{
        ZTitle,
        Toast,
    },
    methods:{
        HTMLDecode(text) { 
            var temp = document.createElement("div"); 
            temp.innerHTML = text; 
            var output = temp.innerText || temp.textContent; 
            temp = null; 
            return output; 
        } ,
        schange(t,i){
            this.$refs.context.innerHTML = '';
            this.action({
                moduleName:"danye",
                url:"api/header/danye",
                method:"post",
                data:{
                    title:t.name,
                }
            }).then((res)=>{
                if(res.code==200){
                    let jg=this.HTMLDecode(res.data.post_content);
                    let setdiv = document.createElement('div');
                    setdiv.innerHTML=jg;
                    this.$refs.context.appendChild(setdiv);
                    // for(let i=0;i<setdiv.childNodes.length;i++){
                    //     this.$refs.context.appendChild(setdiv.childNodes[i]);
                    // }
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
                name:"公司概况"
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
<style lang="less" scoped>
@import "../../assets/css/color";
.about{
    width: @public_width;
    margin: auto;
    .about-content{
        p{
            font-size: 14px;
            line-height: 35px;
        }
    }
    .aboutimg{
        margin-top: 40px;
        img{
            width: 80%;
            display: block;
            margin: 0 auto;
        }
    }
}
</style>
