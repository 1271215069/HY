<template>
    <div class="module-title">
        <p>{{cn}}</p>
        <div class="title-bj"><img :src='require("@/assets/img/title-bj.png")' alt=""></div>
        <p class="en">{{en}}</p>
        <div class="btns">
            <flexbox class="flexbox" v-if="list.length > 0">
                <!-- <flexbox-item class="flexboxItem" :class="this.classbal? 'bj-p':'bj-c'" ref="allprebtn" v-if="showall" @click.native="allpro">全部</flexbox-item> -->
                <flexbox-item class="flexboxItem" :class="{select:(selectIndex === index)}" @click.native="flexboxItemClick(item,index)" v-for="(item,index) in alllist" :key="index">{{item.name}}</flexbox-item>
                
            </flexbox>
        </div>
    </div>
</template>
<script>
import { Flexbox, FlexboxItem } from "vux";
export default {
    name:"z-title",
    components:{ Flexbox, FlexboxItem },
    data(){return {
        selectIndex:0,
        classbal:false
    }},
    props:{
        cn:{
              type:String,
            },
        en:{
              type:String,
            },
        list:{
              type:Array,
            default:()=>[]
         },
         showall:{
             type:Boolean,
             default:false
         }
    },
    methods:{
        flexboxItemClick(item,index){
            this.classbal=true;
            this.selectIndex = index;
            this.$emit("on-change",item,index);
        },
        allpro(){
            // let probtn=this.$refs.allprebtn;
            // probtn.setAttribute('style', 'background:#5c8296;');
            this.classbal=false;
            this.$emit("on-showall");
        }
    },
    computed:{
        alllist(){
            let uarr=[{name:"全部",type:"all"}]
            uarr.concat(this.list);
            return uarr.concat(this.list);;
        }
    },
    watch:{
        list(){
            try{
                if(this.list.length > 0){
                    this.$emit("on-change",this.alllist[this.selectIndex],this.selectIndex,this.alllist);
                }
            }catch (e){}
        }
    },
    // mounted(){
    //     if(this.showall){
    //         console.log(this.$refs.allprebtn)
    //     }
    // }
}
</script>
<style lang="less" scoped>
.bj-c{
    background: #5c8296!important;
}
.bj-p{
    background: #7cb0cc!important;
}
.module-title{
    margin-top: 50px;
    margin-bottom: 40px;
    p{
        text-align:center;
        font-size: 25px;
        line-height: 48px;
        &.en{
            color: #666666;
        }
    }
    .title-bj{
        width: 490px;
        margin: 0 auto;
        img{
            display: block;
            width: 100%;
        }
    }
    .btns{
        .title-bj;
        width: 80%;
        padding-bottom: 20px;
        &/deep/ .flexbox{
            text-align: center;
            margin-top: 50px;
            .flexboxItem{
                background-color: #7cb0cc;
                line-height: 40px;
                color: #ffffff;
                &:hover{
                    background-color: #7cb0cc/0.9;
                }
                &.select{
                    background-color: #5c8296;
                }
            }
        }
    }
}
</style>
