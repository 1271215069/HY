<template>
    <div class="Sales">
        <z-title cn="销售服务" en="SALES SERVICE"></z-title>
        <p class="text">如果您有什么意见、建议或者服务咨询、投诉等等，或者您有对本公司产品和服务的需求，您都可以填写以下表单，我们将通过您指定的联络方式联络到您，谢谢您的支持！(<span>*</span> 红色项目为必填项)</p>
        <div class="inputBox">
            <flexbox class="flexbox">
                <flexbox-item>
                    <x-input :value="airforce.Sales.name" @on-change="airforce.change.set($event,'name','Sales')" class="input"  title="您的姓名：" placeholder="请输入姓名"></x-input>
                </flexbox-item>
                <flexbox-item :span="3/12">
                    <div class="text"><span>* 必填</span> 格式： <span>张三</span></div>
                </flexbox-item>
            </flexbox>
            <cell title="您的称谓：" value-align="left" class="cell">
                <label for="call">
                    <input type="radio" v-model="call" value="1" id="call" name="call"/>
                    <span>先生</span>
                </label>
                <label for="call2">
                    <input type="radio" v-model="call" value="2" id="call2" name="call"/>
                    <span>女士</span>
                </label>
            </cell>
            <flexbox class="flexbox">
                <flexbox-item>
                    <x-input :value="airforce.Sales.phone" @on-change="airforce.change.set($event,'phone','Sales')" class="input"  title="您的电话：" placeholder="请输入电话"></x-input>
                </flexbox-item>
                <flexbox-item :span="3/12">
                    <div class="text"><span>* 必填</span> 格式： <span>18700000000</span></div>
                </flexbox-item>
            </flexbox>
            <flexbox class="flexbox">
                <flexbox-item>
                    <x-input :value="airforce.Sales.email" @on-change="airforce.change.set($event,'email','Sales')" class="input"  title="您的邮箱：" placeholder="请输入邮箱"></x-input>
                </flexbox-item>
                <flexbox-item :span="3/12">
                    <div class="text"><span>* 必填</span> 格式： <span>123456@qq.com</span></div>
                </flexbox-item>
            </flexbox>
            <flexbox class="flexbox">
                <flexbox-item>
                    <x-input class="input" :value="airforce.Sales.address" @on-change="airforce.change.set($event,'address','Sales')"  title="联系地址：" placeholder="请输入地址"></x-input>
                </flexbox-item>
            </flexbox>
            <flexbox class="flexbox">
                <flexbox-item>
                    <x-input :value="airforce.Sales.qq" @on-change="airforce.change.set($event,'qq','Sales')" class="input"  title="QQ 号码：" placeholder="请输入QQ号码"></x-input>
                </flexbox-item>
            </flexbox>
            <flexbox class="flexbox">
                <flexbox-item>
                   <x-textarea :value="airforce.Sales.content" @on-change="airforce.change.set($event,'content','Sales')" class="input" title="您的反馈：" placeholder="请留下您的宝贵意见"></x-textarea>
                </flexbox-item>
            </flexbox>
            <x-button @click.native="save" class="btn">提交留言</x-button>
        </div>
    </div>
</template>

<script>
    import { ZTitle } from "@/components"
    import { Flexbox, FlexboxItem, XInput, XTextarea, XButton, Cell } from "vux"
    export default {
        name: "index",
        components:{ ZTitle, Flexbox, FlexboxItem, XInput, XTextarea, XButton, Cell },
        data(){return{
           call:'1',
        }},
        methods:{
            save(){
                this.action({
                    moduleName:'Sales',
                    goods:{
                        sex:this.call
                    },
                });
                if(this.$utils.is_S(this.airforce.Sales.name)){
                    this.$vux.toast.text("请输入姓名");
                    return;
                }
                if(this.$utils.is_S(this.airforce.Sales.phone)){
                    this.$vux.toast.text("请输入电话");
                    return;
                }
                if(!this.$utils.isPhone(this.airforce.Sales.phone)){
                    this.$vux.toast.text("电话格式有误");
                    return;
                }
                if(this.$utils.is_S(this.airforce.Sales.email)){
                    this.$vux.toast.text("请输入邮箱");
                    return;
                }
                if(!this.$utils.isEmails(this.airforce.Sales.email)){
                    this.$vux.toast.text("邮箱格式有误");
                    return;
                }
                this.action({
                    moduleName:"Sales_sendmessage",
                    url:"api/header/sendmessage",
                    method:"post",
                    data:this.airforce.Sales
                }).then(res=>{
                    if(res.code != 200){
                        this.$vux.toast.text(res.message);
                        return;
                    }
                    this.$vux.toast.text("感谢您的留言，我们会尽快处理！");
                    let data= {};
                    for (let i in this.airforce.Sales){
                        data[i] = "";
                    }
                    this.action({
                        moduleName:'Sales',
                        goods:data,
                    });
                }).catch(err=>{
                    this.$vux.toast.text(err);
                });
            }
        }
    }
</script>

<style scoped lang="less">
@import "../../assets/css/color";
.Sales{
    width: @public_width;
    margin: auto;
    .text{
        font-size: 14px;
        span{
            color: #f00;
            font-weight: bold;
        }
    }
    .inputBox{
        width: 50%;
        margin: auto;
        margin-top: 50px;
        &/deep/ .flexbox{
            margin-bottom: 20px;
            .input{
                background-color: #e5e5e5;
                &:before{
                    border: none;
                }
            }
        }
        .cell{
            margin-bottom: 20px;
            &:before{
                border: none;
            }
            label{
                margin-left: 15px;
                display: inline-block;
            }
        }
        .btn{
            width: 200px;
            margin-top: 50px;
        }
    }
}
</style>