<template>
<div class="main-resrtro-header">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restaurant</router-link>
    <router-link to="/update">Update Restaurant</router-link>
    <router-link  v-on:click="Logout" to="#">Logout</router-link >
</div>
</template>
<script>
export default{
    name:"Home",
    methods:{
        Logout(){
        localStorage.clear();
        this.$router.push({name:'Login'})
        }
    },
    mounted(){
        let User = localStorage.getItem('user-info');
        if(!User){
            this.$router.push({Login:'Login'})
        }
    }

}
</script>