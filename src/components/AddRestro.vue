<template>
<div class="restro-header-page">
<Header/>
</div>
<h2 class="add-resto-data">Add Restaurant Data</h2>
<form>
<div class="add-restro signup">
    <div>
    <input  v-model="name" required type="text" placeholder="Enter Name">
    <p v-if="errors.length" class="text-center">
        <ul v-for="error in errors">
        <li v-show="error == 'Name required'">{{ error }}</li>
        </ul>
    </p>
    </div>
<input  v-model="address" required type="text" placeholder="Enter Address" >
<p v-if="errors.length" class="text-center">
    <ul v-for="error in errors">
    <li v-show="error == 'address required'">{{ error }}</li>
    </ul>
</p>
<input  v-model="contect" type="contect" placeholder="Enter Contect" >
<p v-if="errors.length" class="text-center">
    <ul v-for="error in errors">
    <li v-show="error == 'contect required'">{{ error }}</li>
    </ul>
</p>
<button class="register add-item" v-on:click="AddData" type="submit">Add Item</button>
</div>
</form>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios"
export default{
    name:"AddRestro",
    components:{
        Header
    },
    data(){
        return{
            errors: [],
            name:'',
            address:'',
            contect:''
        }
    },
    methods:{
    async AddData(e){
        e.preventDefault();
    

      this.errors = [];

        if (this.name && this.address) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        this.errors.push('Name required.');
      }
      if (!this.address) {
        this.errors.push('address required.');
      }
      if (!this.contect) {
        this.errors.push('contect required.');
      }

        // if(!this.name || !this.address || !this.contect){
        // return'This is required';
        
        // }
        if (this.errors.length === 0) { 
            let result= await axios.post("http://localhost:3000/restaurant",{
                name:this.name,
                address:this.address,
                contect:this.contect
            });
            if(result.status==201){
                localStorage.setItem('user-info',JSON.stringify(result.data));
                this.$router.push({ name: 'Home' });
            }
        }
  
}
}
}
</script>