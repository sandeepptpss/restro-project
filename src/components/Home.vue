<script>
export default{
    name:"Home",
    mounted(){
        console.log('mounted')
        let User = localStorage.getItem('user-info');
        if(!User){
            this.$router.push({SignUp:'SignUp'})
        }
    }
}

</script>
<template>

    <h2>This is Home Page</h2>
</template>