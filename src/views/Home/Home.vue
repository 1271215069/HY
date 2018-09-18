<template>
    <div class="Home">
       <div class="banner">
           <swiper :auto="true" height="600px" :show-dots="false">
               <swiper-item v-for="(item, index) in imglist" :key="index">
                        <img class="bannerimg" :src="item.img">
                </swiper-item>
           </swiper>
       </div>
       <div class="ppjs">
           <div class="container">
               <div class="module-title">
                   <p>品牌介绍</p>
                   <div class="title-bj"><img :src='require("@/assets/img/title-bj.png")' alt=""></div>
                   <p>BRAND INTRODUCTION</p>
               </div>
               <div class="ppjs-content">
                   <div class="ppjs-left">
                       <img :src='require("@/assets/img/ppjs.jpg")' alt="">
                       <!-- <video class="ppjsvideo" controls="controls" src="blob:https://www.bilibili.com/d47f1a5a-fec8-481a-bdc8-7309567af630"></video> -->
                   </div>
                   <div class="ppjs-right">
                       <p>乐清市红远电力设备有限公司,拥有雄厚的技术力量、先进的生产检验设备、精湛的生产工艺、完善的质量保证体系与现代化的管理手段。依托公司强有力的品牌支持，及先进的理念为引导，以“为顾客创造价值，为股东创造利益、为员工创造前程，为社会创造繁荣”为使命，秉承“爱而知不足，唯客户永恒”的企业理念，凭借一支年轻而富有朝气的高素质团队，锐意开拓，不断创新，以卓越的产品，优质、高效的服务为基础，通过名牌战略，立志为中国电力金具行业打造一个诚信、务实、高效和不断超越的专家级的合作伙伴</p>
                        <span> <router-link to="/Technology" class="ppjs-more">了解更多详情>></router-link> </span>
                   </div>
               </div>
           </div>
       </div>



       <!-- <div class="hxys">
           <div class="container">
               <div class="module-title">
                   <p>4大核心优势</p>
                   <div class="title-bj"><img :src='require("@/assets/img/title-bj2.png")' alt=""></div>
                   <p>OUR ADVANTAGES</p>
               </div>
               <div class="hxys-content">
                   <ul>
                       <li class="hxysp-item">
                           <div class="left">
                               <img :src='require("@/assets/img/hxys1.png")' alt="">
                           </div>
                           <div class="right">
                               <p>安全环保 绿色原料</p>
                               <p>公司研究国内外股线市场，发现专业单体倍捻是一个相对真空的市场，为此，公司一次性引进苏拉倍捻机200台，后期又增加100台，形成了全球最大的专业单体倍捻生产线。三阳公司300台苏拉倍捻项目引起了国内乃至欧洲高端客户的广泛关注。</p>
                           </div>
                       </li>
                       <li class="hxysp-item">
                           <div class="left">
                               <img :src='require("@/assets/img/hxys2.png")' alt="">
                           </div>
                           <div class="right">
                               <p>安全环保 绿色原料</p>
                               <p>公司研究国内外股线市场，发现专业单体倍捻是一个相对真空的市场，为此，公司一次性引进苏拉倍捻机200台，后期又增加100台，形成了全球最大的专业单体倍捻生产线。三阳公司300台苏拉倍捻项目引起了国内乃至欧洲高端客户的广泛关注。</p>
                           </div>
                       </li>
                       <li class="hxysp-item">
                           <div class="left">
                               <img :src='require("@/assets/img/hxys3.png")' alt="">
                           </div>
                           <div class="right">
                               <p>安全环保 绿色原料</p>
                               <p>公司研究国内外股线市场，发现专业单体倍捻是一个相对真空的市场，为此，公司一次性引进苏拉倍捻机200台，后期又增加100台，形成了全球最大的专业单体倍捻生产线。三阳公司300台苏拉倍捻项目引起了国内乃至欧洲高端客户的广泛关注。</p>
                           </div>
                       </li>
                       <li class="hxysp-item">
                           <div class="left">
                               <img :src='require("@/assets/img/hxys4.png")' alt="">
                           </div>
                           <div class="right">
                               <p>安全环保 绿色原料</p>
                               <p>公司研究国内外股线市场，发现专业单体倍捻是一个相对真空的市场，为此，公司一次性引进苏拉倍捻机200台，后期又增加100台，形成了全球最大的专业单体倍捻生产线。三阳公司300台苏拉倍捻项目引起了国内乃至欧洲高端客户的广泛关注。</p>
                           </div>
                       </li>
                   </ul>
               </div>
           </div>
       </div> -->



       <div class="cpzs">
           <div class="container">
               <div class="module-title">
                   <p>产品展示</p>
                   <div class="title-bj"><img :src='require("@/assets/img/title-bj.png")' alt=""></div>
                   <p>PRODUCTS SHOW</p>
                </div>
                <div class="cpzs-contant">
                    <ul class="tab-title">
                        <li v-for="(item,index) in tablist" :class="item.type=='all'?'tabactive':''" :key="index" @click.prevent="turntab(item,index)">{{item.name}}</li>
                    </ul>
                    <div class="tab-item">
                        <ul class="tab-item-ul" v-if="!needall">
                            <li v-for="(item,index) in prolist" :key="index" @click="go(item)">
                                <div class="cpimg">
                                    <img :src='item.smeta' alt="">
                                </div>
                                <p>{{item.post_title}}</p>
                            </li>
                        </ul>
                        <div class="allpro" v-if="needall">
                            <div class="goback" @click.prevent="hou">
                                    <
                            </div>
                            <div class="forward" @click.prevent="qian">
                                >
                            </div>
                            
                            <ul id="allproul">
                                <li v-for="(item,index) in prolist" :key="index" @click="go(item)"> 
                                    <img :src="item.smeta" alt="">
                                    <p>{{item.post_title}}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p class="more-con">
                    <router-link to="/product" class="more">查看更多>></router-link>
                </p>
           </div>
       </div>


        <div class="alzs">
            <div class="container">
                <div class="module-title">
                   <p>案例展示</p>
                   <div class="title-bj"><img :src='require("@/assets/img/title-bj.png")' alt=""></div>
                   <p>LATEST SHOWCASE</p>
                </div>
                <div class="alzs-content">
                    <swiper @on-index-change="mmm" v-model="alindex" class="alzsimg" :list="allist" height="350px" :loop='true' :auto='true' :show-dots='false' ></swiper>
                    <div class="btnlist">
                        <button class="goback" @click.prevent="goback"></button>
                        <button class="forward" @click.prevent="forward"></button>
                    </div>
                </div>
                <p class="more-con">
                    <router-link to="/Technology" class="more">查看更多案例>></router-link>
                </p>
            </div>
        </div>



       <div class="zxzx">
           <div class="container">
               <div class="module-title">
                   <p>最新资讯</p>
                   <div class="title-bj"><img :src='require("@/assets/img/title-bj.png")' alt=""></div>
                   <p>LATEST NEWS</p>
                </div>
                <div class="zxzx-content">
                    <div class="newitem" v-for="(item,index) in ClientFastList" v-if="index < 3">
                        <div class="img" v-if="index == 0" ></div>
                        <router-link to="" v-if="index == 0" >
                            <p>{{item.post_title}}</p>
                            <p>{{item.post_excerpt}}</p>
                        </router-link>
                        <div class="left" v-if="index > 0">
                            <p class="top">{{item.post_date | ClientFastDate(1)}}</p>
                            <p class="bottom">{{item.post_date | ClientFastDate(2)}}</p>
                        </div>
                        <div class="right" v-if="index > 0">
                            <router-link to="">
                                <p>{{item.post_title}}</p>
                                <p>{{item.post_excerpt}}</p>
                            </router-link>
                        </div>
                    </div>
                </div>
                <p class="more-con">
                    <router-link to="/news" class="more">查看更多>></router-link>
                </p>
           </div>
       </div>
    </div>
</template>

<script>
import Public from '@/store/public.js'
import { ZTitle} from '@/components'
import { XAddress, ChinaAddressV4Data, Countup, Flexbox, FlexboxItem, XImg, Divider, Swiper, SwiperItem } from 'vux'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'home',
  components: { XAddress, Countup, Flexbox, FlexboxItem, XImg, Divider, Swiper, SwiperItem,ZTitle },
  data () {
    return {
        allist:[],
        alindex:0,
        tablist:[],
        prolist:[],
        imglist:[],
        needall:true,
        sum:0
    }
  },
  methods: {
      go(i){
                this.$router.push("/Predetail?id="+i.id)
            },
      turntab(t,i){//tab切换的方法
        if(this.airforce.layout.hometimmernew){
                clearInterval(this.airforce.layout.hometimmernew);
            }
        if(t.type=="all"){
            this.needall=true;
            let timmernew = setInterval(()=>{
                        this.qian();
                    },3000);
                    console.log(timmernew)
            this.action({
                moduleName:"layout",
                goods:{
                    hometimmernew:timmernew
                }
            })
             this.action({
                moduleName:"layout",
                goods:{
                    hometimeindex:0
                }
            })
        }else{
            this.needall=false;
        }
          let sul=document.getElementsByClassName("tab-title")[0];
          let oli=sul.getElementsByTagName("li");
          for(let l=0;l<this.tablist.length;l++){
              if(i==l){
                oli[l].classList.add("tabactive");
              }else{
                oli[l].classList.remove("tabactive");
              }
          }
         this.action({
            moduleName:"productList",
            url:"/api/header/productList",
            method:"post",
            data:{
                cate_id:t.cid,
                pagesize:"8",
                recommended:"0"
            }
         }).then((res)=>{
             if(res.code==200){
                this.prolist=res.data.data;
             }else{
                 this.$vux.toast.text(res.message)
             }
         }).catch((err)=>{})
      },
      qian(){
            var that=this;
            // console.log(this.airforce.layout.hometimeindex)
            // console.log(this.sum)
            if(this.airforce.layout.hometimeindex>(this.sum-6)){
                this.action({
                        moduleName:"layout",
                        goods:{
                            hometimeindex:0,
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
                            hometimeindex:this.airforce.layout.hometimeindex+1,
                        }
                    })
                console.log(this.airforce.layout.hometimeindex)
                let oul=document.getElementById("allproul");
                if(oul){
                    oul.style.left=-300*this.airforce.layout.hometimeindex+"px";
                }
                
            }
      },
      hou(){
          var that=this;
            if(this.airforce.layout.hometimeindex<=0){
                this.action({
                        moduleName:"layout",
                        goods:{
                            hometimeindex:0,
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
                            hometimeindex:that.airforce.layout.hometimeindex-1,
                        }
                    })
                let oul=document.getElementById("allproul");
                if(oul){
                    oul.style.left=-300*this.airforce.layout.hometimeindex+"px";
                }
                
            }
      },
      goback(){//案例图片后退
        let imglen=this.allist.length;
        if(this.alindex<=0){
            this.alindex=imglen-1;
        }else{
            this.alindex-=1;
        }
      },
      forward(){//案例图片前进
        let imglen=this.allist.length;
        if(this.alindex>=(imglen-1)){
            this.alindex=0;
        }else{
            this.alindex+=1;
        }
      },
      mmm(m){
          this.alindex=m;
      }
  },
  computed: {
      ClientFastList(){
          try {
              return this.airforce.relationships_post.data.data;
          }catch (e){
              return [];
          }
      }
  },
  mounted () {
      this.action({//获取轮播图
            moduleName:"lunbo",
            url:"/api/header/lunbo",
            method:"post",
            data:{
                cid:"1"
            }
      }).then((res)=>{
          if(res.code==200){
              for(let i=0;i<res.data.length;i++){
                  let imgobj={url: 'javascript:;',};
                  imgobj.img=res.data[i].slide_pic;
                  this.imglist.push(imgobj)
              }
          }else{
              this.$vux.toast.text(e.message)
          }
      }).catch((err)=>{})
      this.action({//获取产品分类
            moduleName:"category",
            url:"/api/header/category",
            method:"post",
            data:{}
      }).then((res)=>{
          if(res.code==200){
              let alllist=[{
                  name:"全部",
                  type:"all"
              }]
              this.tablist =alllist.concat(res.data);
              if(this.tablist.length > 1){
                  this.action({
                        moduleName:"productList",
                        url:"/api/header/productList",
                        method:"post",
                        data:{
                            cate_id:this.tablist[0].cid,
                            pagesize:"8",
                            recommended:"0"
                        }
                  }).then((e)=>{
                      if(e.code==200){
                          if(this.tablist[0].type=="all"){
                                this.needall=true;
                                let timmernews = setInterval(()=>{
                                            this.qian();
                                        },3000);
                                        console.log(timmernews)
                                this.action({
                                    moduleName:"layout",
                                    goods:{
                                        hometimmernew:timmernews
                                    }
                                })
                          }
                        this.sum=e.data.count;
                         this.prolist=e.data.data;
                         this.action({
                            moduleName:"layout",
                            goods:{
                                hometimeindex:0,
                            }
                        })
                      }else{
                          that.$vux.toast.text(e.message)
                      }
                  }).catch((error)=>{})
              }
              
          }else{
              this.$vux.toast.text(res.message)
          }
      }).catch((err)=>{})
      

      this.action({//获取头部轮播
                moduleName:"lunbo",
                url:"/api/header/lunbo",
                method:"post",
                data:{
                    cid:"2"
                }
            }).then((res)=>{
                if(res.code==200){
                    this.allist = res.data.map(e=>{
                        e.img = e.slide_pic;
                        e.url = "javascript:;"
                        return e;
                    });
                }else{
                    this.$vux.toast.text(res.message)
                }
            }).catch((err)=>{})
    //   let sul=document.getElementsByClassName("tab-item")[0];//tab初始显示
    //   let oli=sul.getElementsByTagName("li");
    //   oli[0].classList.add("tabactive");

      //最新资讯
      this.action({//获取头部轮播
          moduleName:"relationships_post",
          url:"api/header/relationships",
          method:"post",
          data:{
              recommended:"0"
          }
      });
  }
}
</script>

<style scoped lang="less">
@import "../../assets/css/color.less";
@import "../../assets/css/color";
.container{
    width: 1200px;
    margin: 0 auto;
    padding: 50px 0 70px;
}
.module-title{
    p{
        text-align:center;
        font-size: 25px;
        line-height: 48px;
    }
    .title-bj{
        width: 490px;
        margin: 0 auto;
        img{
            display: block;
            width: 100%;
        }
    }
}
.more-con{
    text-align: center;
    margin-top: 30px;
    .more{
        display: inline-block;
        margin: 0 auto;
        padding: 10px 20px;
        border: 2px solid #666565;
        text-align: center;
    }
}
.tabactive{
    background: #5c8296;
    color:#fff;
}
.Home{

    .banner{
        width: 100%;
        height: 600px;
        .bannerimg{
            display: block;
            width: 100%;
            height:100%;
        }
    }

    .ppjs{
        background: #f5fbfc;
        .ppjs-content{
            margin-top: 35px;
            overflow: hidden;
            .ppjs-left{
                width: 48%;
                height: 434px;
                padding-right: 2%;
                float: left;
                .ppjsvideo{
                    width: 100%;
                    height: 100%;
                }
                img{
                    width: 100%;
                    display: block;
                }
            }
            .ppjs-right{
                width: 48%;
                padding-left: 2%;
                float: left;
                
                p{
                    font-size: 14px;
                    text-indent: 28px;
                    line-height: 30px;
                    width: 90%;
                    margin: 0 auto;
                }
                span{
                    display: block;
                    text-align: right;
                    padding-top: 35px;
                    .ppjs-more{
                        color: #ff0000;
                    }
                }
            }
        }
    }



    .hxys{
        background: url(../../assets/img/hxys-bj.jpg) no-repeat;
        background-size: cover;
        background-position: center;
        .module-title{
            p{
                color:#fff;
            }
        }
        .hxys-content{
            ul{
                width: 100%;
                li{
                    width: 49%;
                    overflow: hidden;
                    display: inline-block;
                    margin-top:55px; 
                    .left{
                        float: left;
                        width: 20%;
                        padding: 0 5%;
                        vertical-align: middle;
                        img{
                            width: 100%;
                            display: block;

                        }
                    }
                    .right{
                        float: left;
                        width: 60%;
                        p{
                            color: #fff;
                        }
                    }
                }
            }
        }
    }



    .cpzs{
        .cpzs-contant{
            margin-top: 50px;
            .tab-title{
                width: 100%;
                margin: 0 auto;
                display: flex;
                justify-content: space-around;
                margin-bottom: 50px;
                li{
                    display: inline-block;
                    font-size: 16px;
                    padding: 2px 5px;
                    cursor: pointer;
                }
            }
            .tab-item{
                //display: none;
                .tab-item-ul{
                    // display: flex;
                    // justify-content: space-around;
                    // flex-wrap: wrap;
                    overflow: hidden;
                    li{
                        width: 23%;
                        padding: 0 1%;
                        float: left;
                        margin-bottom: 20px;
                        cursor: pointer;
                        .cpimg{
                            width: 250px;
                            height: 250px;
                            margin: 0 auto;
                            overflow: hidden;
                            img{
                                display: block;
                                width: 100%;
                                transition: all 0.6s;
                            }
                            img:hover{
                                transform: scale(1.2);
                            }
                        }
                        p{
                            text-align: center;
                            font-size: 16px;
                            line-height: 35px;
                        }
                    }
                }
                .allpro{
                    overflow: hidden;
                    height: 286px;
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
                    
                    #allproul{
                        width: 99999999px;
                        margin: 0;
                        overflow: hidden;
                        position: absolute;
                        left: 0;
                        top: 0;
                        z-index: 10;
                        transition:left 1s linear;
                        li{
                            width: 246px;
                            margin-left: 45px;
                            margin-bottom:14px;
                            float: left;
                            cursor: pointer;
                            img{
                                width: 246px;
                                height: 246px;
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
            .tab-item:nth-child(1){
                display: block;
            }
        }

    }



    .alzs{
        background: #f0f1f2;
        .alzs-content{
            .alzsimg{
                margin: 40px 0;
            }
            .btnlist{
                width: 8%;
                margin: 0 auto;
                overflow: hidden;
                .goback,.goback:focus{
                    float: left;
                    width: 35px;
                    height: 35px;
                    border: none;
                    outline: none;
                    border-radius: 50%;
                    background: url(../../assets/img/left.png) no-repeat;
                    background-size: cover;
                    background-position: center;
                }
                .forward,.forward:focus{
                    float: right;
                    width: 35px;
                    height: 35px;
                    border: none;
                    outline: none;
                    border-radius: 50%;
                    background: url(../../assets/img/right.png) no-repeat;
                    background-size: cover;
                    background-position: center;
                }
            }
        }
    }



    .zxzx{
        //background: #f0f1f2;
        .zxzx-content{
            margin-top: 30px;
            overflow: hidden;
            .newitem{
                width: 48%;
                height: 180px;
                float: right;
                overflow: hidden;
                .left{
                    float: left;
                    width: 12%;
                    .top{
                        font-size: 24px;
                        line-height: 35px;
                        background: #f0f1f2;
                        text-align: center;
                    }
                    .bottom{
                        font-size: 14px;
                        background: #f0f1f2;
                        text-align: center;
                        margin-top: 5px;
                    }
                }
                .right{
                    float: right;
                    width: 83%;
                    padding-bottom:22px;
                    p:nth-child(1){
                        font-size: 18px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    p:nth-child(2){
                        font-size: 14px;
                        line-height: 26px;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 5;
                    }
                }
            }
            .newitem:nth-child(1){
                width: 48%;
                height: 360px;
                margin-right: 4%;
                float: left;
                .img{
                    width: 100%;
                    height: 200px;
                    background:url(../../assets/img/zxzx.png) no-repeat;
                    background-position:center;
                    background-size:cover;
                }
                p:nth-child(1){
                    margin-top: 25px;
                    font-size: 18px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                p:nth-child(2){
                    font-size: 14px;
                    line-height: 26px;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 4;
                }
            }
        }
    }
}
</style>
