<template>
<div class="main-signup">
<div class="inner-logo">
<img class="mysignupLogo" src="./images/Signup.png">
<h2 class="signup-title">Sign Up</h2>
</div>
<div class="signup">
<input v-model="name" type="text" placeholder="Enter Name">
<input v-model="email" type="text" placeholder="Enter Email">
<input type="password" v-model="password" placeholder="Emter Password">
<button class="register" v-on:click="SignUp" type="submit">SignUp</button>
<br/>
<router-link to="/login">Login</router-link>
</div>
</div>
</template>
<script>
import axios from "axios"
export default {
    name:'SignUp',
    data(){
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
     async   SignUp(){
      let result= await axios.post("http://localhost:3000/users",{
        password:this.password,
        email:this.email,
        name:this.name
      });
      if(result.status==201){
        alert('SignUp Successfully')
    
        localStorage.setItem('user-info',JSON.stringify(result.data));
        this.$router.push({name:'Home'})
        }
    }
},
mounted(){
        let User = localStorage.getItem('user-info');
            if(User){
                console.log()
                this.$router.push({name:'Home'})
            }
    }

}

</script>