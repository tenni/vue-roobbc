<template>
    <div>
        <div style="margin-bottom: 1rem;">
            <router-view></router-view>
        </div>
        <div style="height:1rem;" v-if="!wx">
            <footerTabCT></footerTabCT>
        </div>
    </div>
</template>
<script>
    import footerTabCT from "@/components/footerTabCT"
    export default {
        name:"index",
        components:{footerTabCT},
        data(){
            return{
                wx:false
            }
        },
        created(){
            
        },
        methods:{
            
        }
    }
</script>