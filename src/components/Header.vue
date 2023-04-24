<template>
 <div class="main-resrtro-header-outer" >
  <p class="announcement-bar-timtle">50% Discount Deals & Food Offers in Try City  Mohali, Chandigarh and Punchkula </p>
<div class="main-resrtro-header">

<router-link  to="/">Home</router-link>
<router-link  to="/add">Add Restaurant</router-link>
<router-link  to="/about">About</router-link>
<router-link  v-if="isLoggedIn == null" to="/login" class="nav-link"> Login </router-link>
<router-link  v-else  v-on:click="handleLogout" to="#">Logout</router-link>
</div>
</div>
</template>
<script>
export default{
    name:"Header",
    data(){
       return{
        isActive:true,
        isActived:false,
         email:''
    }
    },
  computed: {
   isLoggedIn() {
    return window.localStorage.getItem("user-info");
  }
},
methods:{
    handleLogout(){
        localStorage.clear();
        this.$router.push({name:'Login'})
        }
    }
}
</script>