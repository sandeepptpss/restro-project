<template>
    <div class="restro-header-page">
    <Header />
    </div>
    <img class="banner-image" src="./images/banner23.jpg">
    <div  class="restro-Home-page">
       <h2 class="main-menu-title" v-if="name">Hello {{ name }}, WeleCome on Home</h2> 
       <h2 class="main-data-logout" v-else>Please login first then restaurant details will be shown</h2>
        <table  v-if="name" border="1px" width="100%">
            <tr>
                <td>Id</td>
                <td>Item Name</td>
                <td>Address</td>
                <td>Phone Number</td>
                <td>Action</td>
            </tr>
            <tr v-for="item in restaurants" :key="item.id">
                <td  v-if="item.id">{{ item.id }}</td>
                <td  v-if="item.name ">{{ item.name }}</td>
                <td  v-if="item.address">{{ item.address }}</td>
                <td  v-if="item.contect">{{ item.contect }}</td>
                <td><router-link :to="'/update/'+item.id">Update</router-link>
                <button v-on:click="deleteRestaurant(item.id)">Delete</button>
                </td>
            </tr>
        </table>
    </div>


    <Footer />
</template>

<script>
import Footer from './Footer.vue';
import Header from './Header.vue';
import axios from 'axios';
export default{
    name:"Home",
    components:{
    Header,
    Footer
  
},
    data(){
        return{
        name:'',
        restaurants:[],
    }
    },

    methods:{
      async  deleteRestaurant(id){
 
            let result =await axios.delete("http://localhost:3000/restaurant/"+id);
            if(result.status==200){
                this.loadData();
            }
         
        },
        async  loadData(){
        let user = localStorage.getItem('user-info');
        this.name= JSON.parse(user).name
        if(!user){
        this.$router.push({SignUp:'SignUp'})
        }
        let result =await axios.get("http://localhost:3000/restaurant");
        this.restaurants= result.data
        
    }
    },
    mounted(){
     this.loadData();
    }
}
</script>
<style>
td{
    width: 160px;
    height: 40px;
}
</style>
