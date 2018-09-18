<template>
    <div class="development">
        <z-title cn="发展之路" en="DEVELOPMENT" :list="titlelist" @on-change="ochange"></z-title>
        <div class="devtext" ref="context"></div>
    </div>
</template>
<script>
import { ZTitle } from "@/components"
export default {
    name:"index",
    data(){
        return{
            titlelist:[],
        }
    },
    components:{ZTitle},
    methods:{
        HTMLDecode(text) { 
            var temp = document.createElement("div"); 
            temp.innerHTML = text; 
            var output = temp.innerText || temp.textContent; 
            temp = null; 
            return output; 
        } ,
        ochange(t,i){
            this.$refs.context.innerHTML = '';
            this.action({
                moduleName:"danye",
                url:"/api/header/danye",
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
                name:"发展之路",
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
.development{
    width: @public_width;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 100px;
    p{
        text-indent: 28px;
    }
}
</style>
