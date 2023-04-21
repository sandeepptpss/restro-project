<template>
    <div class="restro-header-page" >
        <Header/>
    </div>
<div class="restro-Home-page">
    <h2>WeleCome on Restaurant Update  Page </h2>
</div>
</template>
<script>
import Header from './Header.vue';
export default{
    name:"Update",
    components:{
        Header
    },
    mounted(){
        console.log('mounted')
        let User = localStorage.getItem('user-info');
        if(!User){
            this.$router.push({SignUp:'SignUp'})
        }
    }
}

</script>
