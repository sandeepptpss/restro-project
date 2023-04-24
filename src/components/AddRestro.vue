<template>
<div class="restro-header-page">
<Header/>
</div>
<h2 class="add-resto-heading">Hello User, WeleCome our Restaurant add Page</h2>
<div class="restro-Home-page">
<h2 class="add-resto-data">Add Restaurant Data</h2>
<form>
<div class="add-restro signup">
<input  v-model="name" required type="text" placeholder="Enter Name">
<input  v-model="address" required type="text" placeholder="Enter Address" >
<input  v-model="contect" type="contect" placeholder="Enter Contect" >
<!-- <input  type="file"  accept="image/*" ref="file" @change="selectImage"/> -->

<button class="register add-item" v-on:click="AddData" type="submit">Restaurant Add Item</button>
</div>
</form>
</div>
<Footer />
</template>
<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import axios from "axios"
export default{
    name:"AddRestro",
    components:{
        Header,
        Footer
    },
    data(){
        return{
            name:'',
            address:'',
            contect:''
        
        }
    },

    methods:{
    async AddData(){
        if(!this.name || !this.address || !this.contect){
            return;
        }
    let result= await axios.post("http://localhost:3000/restaurant",{
        name:this.name,
        address:this.address,
        contect:this.contect,
        file:this.file
      });
    
      if(result.status==201){
            alert('Add Item Successfully')
            // localStorage.setItem('user-info',JSON.stringify(result.data));
            this.$router.push({name:'Home'})
      
   }
   console.warn("result",result)
}
}
}
</script>