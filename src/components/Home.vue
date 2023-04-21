<template>
    <div class="restro-header-page">
    <Header />
    </div>

    <div  v-if="name != null" class="restro-Home-page">

        <h2>Hello {{ name }}, WeleCome on Home</h2>

        <table border="1px">
            <tr >

                <td>Id</td>
                <td>Item Name</td>
                <td>Address</td>
                <td>Phone Number</td>
            </tr>
            
            <tr v-for="item in restaurants" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.address }}</td>
                <td>{{ item.contect }}</td>
            </tr>
        </table>
    </div>
</template>
<script>
import Header from './Header.vue';
import axios from 'axios';
export default{
    name:"Home",
    components:{
        Header
    },
    data(){
        return{
        name:'',
        restaurants:[],
    }
    },
  async  mounted(){
        console.log('mounted')
        let user = localStorage.getItem('user-info');
        this.name= JSON.parse(user).name
        if(!user){
        this.$router.push({SignUp:'SignUp'})
        }
        let result =await axios.get("http://localhost:3000/restaurant");
        this.restaurants= result.data
        console.log(result)
    }
}
</script>
<style>
td{
    width: 160px;
    height: 40px;
}
</style>
