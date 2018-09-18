<template>
    <div class="Contact">
        <z-title cn="联系我们" en="CONTACT US"></z-title>

        <h1>乐清市红远电力设备有限公司</h1>

        <p>地址：浙江省乐清市柳市镇新民村</p>
        <p>电话：15209885785</p>
        <p>传真：0577-61713365</p>
        <p>网址: www.hongydl.com</p>
        <p>微信: 15209885785</p>
        <p>QQ: 543391526</p>
    </div>
</template>

<script>
    import { ZTitle } from "@/components"
    export default {
        name: "index",
        components:{ ZTitle }
    }
</script>

<style scoped lang="less">
@import "../../assets/css/color";
.Contact{
    width: @public_width;
    margin: auto;
    h1{
        font-size: 18px;
        line-height: 50px;
    }
    p{
        font-size: 14px;
        line-height: 40px;
    }
}
</style>