<template>
    <div class="floor-tab">
        <div class="tab" v-for="(list,index) in nav">
            <router-link :to="list.url">
                <span class="icon"></span>
                {{list.name}}
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name:"footerTabCT",
        data() {
            return {
                nav:[
                    {
                        name:'探索',
                        url:'/index/product'
                    },
                    {
                        name:'订单',
                        url:'/index/order'
                    },
                    {
                        name:'消息',
                        url:'/index/news'
                    },
                    {
                        name:'我的',
                        url:'/index/user'
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    .floor-tab{
        position: fixed;
        left:0;
        bottom: 0;
        height: 1rem;
        width: 100%;
        background-color:#ffffff;
        text-align: center;
        border-top: 1px solid #f0f0f0;
        font-size: 0;
        z-index: 9;
    }
    .tab{
        display: inline-block;
        width: 22%;
        font-size: 0.2rem;
        vertical-align: bottom;
        color:#1e1a17;
        font-weight: 400;
        margin: 0 0.1rem;
        margin-top: 0.1rem;
        position: relative;
    }
    
    .tab>a{
        display: block;
    }
    .tab .icon{
        display: block;
        margin: 0 auto;
        margin-bottom:0.08rem;
        height: 0.5rem;
        width: 0.53rem;
    }
    .tab:nth-child(1) .icon{
        background: url(../../static/img/productIndexFooterIcon/foot-index.png) no-repeat 0 0 / 100% 100%;
    }
    .tab:nth-child(2) .icon{
        background: url(../../static/img/productIndexFooterIcon/foot-order.png) no-repeat 0 0 / 100% 100%;
    }
    .tab:nth-child(3) .icon{
        background: url(../../static/img/productIndexFooterIcon/foot-news.png) no-repeat 0 0 / 100% 100%;
    }
    .tab:nth-child(4) .icon{
        background: url(../../static/img/productIndexFooterIcon/foot-my.png) no-repeat 0 0 / 100% 100%;
    }
    .tab:nth-child(1) .router-link-active .icon{
        background: url(../../static/img/productIndexFooterIcon/foot-index-1.png) no-repeat 0 0 / 100% 100%;
    }
    .tab:nth-child(2) .router-link-active .icon{
        background: url(../../static/img/productIndexFooterIcon/foot-order-1.png) no-repeat 0 0 / 100% 100%;
    }
    .tab:nth-child(3) .router-link-active .icon{
        background: url(../../static/img/productIndexFooterIcon/foot-news-1.png) no-repeat 0 0 / 100% 100%;
    }
    .tab:nth-child(4) .router-link-active .icon{
        background: url(../../static/img/productIndexFooterIcon/foot-my-1.png) no-repeat 0 0 / 100% 100%;
    }
    .router-link-active{
        color:#5dadd0;
    }
</style>
