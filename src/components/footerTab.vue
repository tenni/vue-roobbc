<template>
    <div class="floor-tab">
        <div :class="status === index ? 'tab color' : 'tab'" v-for="(list,index) in nav">
            <router-link :to="list.url">
                <img v-if="status === index" v-bind:src="list.imgGo" v-bind:alt="index">
                <img v-else v-bind:src="list.img" v-bind:alt="index">
                {{list.name}}
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        name:"footerTab",
        props:["status"],
        data() {
            return {
                nav:[
                    {
                        name:'探索',
                        img:'../../static/img/productIndexFooterIcon/foot-index.png',
                        imgGo:'../../static/img/productIndexFooterIcon/foot-index-1.png',
                        url:'/index/product'
                    },
                    {
                        name:'订单',
                        img:'../../static/img/productIndexFooterIcon/foot-order.png',
                        imgGo:'../../static/img/productIndexFooterIcon/foot-order-1.png',
                        url:'/index/order'
                    },
                    {
                        name:'消息',
                        img:'../../static/img/productIndexFooterIcon/foot-news.png',
                        imgGo:'../../static/img/productIndexFooterIcon/foot-news-1.png',
                        url:'/index/news'
                    },
                    {
                        name:'我的',
                        img:'../../static/img/productIndexFooterIcon/foot-my.png',
                        imgGo:'../../static/img/productIndexFooterIcon/foot-my-1.png',
                        url:'/index/user/my'
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
    .tab img{
        display: block;
        margin: 0 auto;
        margin-bottom:0.08rem;
        height: 0.5rem;
        width: 0.53rem;
    }
    .color{
        color:#5dadd0;
    }
</style>
