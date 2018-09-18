<template>
    <div class="Ndetail">
        <z-title cn="新闻详情" en="NEWS"></z-title>
        <div class="nd-content">
            <p class="title">{{title}}</p>
            <div ref="context"></div>
        </div>
    </div>
</template>
<script>
import { ZTitle } from "@/components"
export default {
    name:"index",
    data(){
        return{
            title:"",
            
        }
    },
    components:{
        ZTitle
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
            moduleName:"shipsDetail",
            url:"/api/header/shipsDetail",
            method:"post",
            data:{
                object_id:this.$route.query.rid,
                term_id:this.$route.query.fid,
            }
        }).then((res)=>{
            if(res.code==200){
                console.log(res)
                this.title=res.data.post_title;
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
.Ndetail{
    width: 1200px;
    margin: 0 auto;
    .nd-content{
        .title{
            text-align: center;
            font-size: 20px;
            margin-bottom: 50px;
        }
    }
}
</style>
