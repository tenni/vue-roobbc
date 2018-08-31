<template>
    <div>
        <div style="margin-bottom: 1rem;">
            <router-view v-on:floorStatus="setFloorStatus"></router-view>
        </div>
        <div style="height:1rem;" v-if="!wx">
            <footerTab :status="floorStatus"></footerTab>
        </div>
    </div>
</template>
<script>
    import footerTab from "@/components/footerTab"
    export default {
        name:"index",
        components:{footerTab},
        data(){
            return{
                floorStatus:"",
                wx:false
            }
        },
        created(){
            //console.log(this.$route.query)
            if(this.$route.query.wx){
                //this.wx = true
            }
        },
        methods:{
            setFloorStatus(floorStatus){
                this.floorStatus = Number(floorStatus);
            }
        }
    }
</script>