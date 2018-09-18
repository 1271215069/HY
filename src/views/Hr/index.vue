<template>
    <div class="hr" ref="context"></div>
</template>

<script>
    export default {
        name: "index",
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
                moduleName:"danye",
                url:"/api/header/danye",
                method:"post",
                data:{
                    title:"人力资源",
                }
            }).then((res)=>{
                console.log(res)
                if(res.code==200){
                    let jg=this.HTMLDecode(res.data.post_content);
                    console.log(jg)
                    let setdiv = document.createElement('div');
                    setdiv.innerHTML=jg;
                    this.$refs.context.appendChild(setdiv)
                    // for(let i=0;i<setdiv.childNodes.length;i++){
                    //     this.$refs.context.appendChild(setdiv.childNodes[i]);
                    // }
                }else{
                    this.$vux.toast.text(res.message)
                }
            }).catch((err)=>{})
        }
    }
</script>

<style scoped lang="less">
@import "../../assets/css/color";
.hr{
    width: @public_width;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 100px;
}
</style>