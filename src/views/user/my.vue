<template>
	<div class="user-block">
            <!--<a href="javascript:void(0);" class="user-list" v-if="!whileWx">-->
                <!--<img src="../../assets/img/userMy/addUser.png" class="user-list-img">-->
                <!--<span>邀请好友</span>-->
                <!--<img src="../../assets/img/userMy/icon-mom.png" class="user-list-return"/>-->
            <!--</a>-->
            <a href="javascript:void(0);" class="user-list" @click="goCustomerService">
                <img src="../../assets/img/userMy/icon-help.png" class="user-list-img">
                <span>联系客服</span>
                <img src="../../assets/img/userMy/icon-mom.png" class="user-list-return"/>
            </a>
        </div>
</template>

<script>
export default {
  name: 'my',
  data () {
  	return {
  	  msg: 'Welcome to Your Vue.js App'
  	}
  },
  created(){
    this.$emit("floorStatus",3);
  },
  methods:{
    goCustomerService(){
      this.$router.push({
          path:'/customer'
      })
    }
  }
    
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
