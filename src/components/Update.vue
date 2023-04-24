<template>
<div class="restro-header-page" >
<Header/>
</div>
<h2 class="add-resto-update">Hello User, WeleCome our Restaurant Update Page</h2>
<div class="restro-Home-page">
<h2 class="add-resto-data">Update Restaurant Data</h2>
<form class="update-form">
<div class="add-restro signup">
<input  v-model="restaurant.name" required type="text" placeholder="Enter Name">
<input  v-model="restaurant.address" required type="text" placeholder="Enter Address" >
<input  v-model="restaurant.contect" type="contect" placeholder="Enter Contect" >
<button class="register add-item" v-on:click="updateData" type="submit">Update Add Item</button>
</div>
</form>
</div>
</template>
<script>
import Header from './Header.vue';
import axios from 'axios';
export default{
    name:"Update",
    components:{
        Header
    },
    data(){
        return{
        restaurant: {
        name:'',
        address:'',
        contect:''
            }
        }
    },
    methods:{
       async updateData(e){
            e.preventDefault();
          console.log( this.restaurant)

          let result= await axios.put("http://localhost:3000/restaurant/" + this.$route.params.id,{
        name:this.restaurant.name,
        address:this.restaurant.address,
        contect:this.restaurant.contect
      });
    
      if(result.status==200){
            alert('Update Item Successfully')
            // localStorage.setItem('user-info',JSON.stringify(result.data));
            this.$router.push({name:'Home'})
       }
        }
    },
    async   mounted(){
        console.log('mounted')
        let User = localStorage.getItem('user-info');
        if(!User){
            this.$router.push({SignUp:'SignUp'})
        }
        const result = await axios.get("http://localhost:3000/restaurant/" + this.$route.params.id)
        // console.warn(this.$route.params.id)
        console.warn(result.data);
        this.restaurant=result.data
    }
}
</script>
