<template>
<div class="main-login-page">
<div class="inner-logo">
<img class="mysignupLogo" src="./images/Signup.png">
<h2 class="login-title">Login</h2>
</div>
<div class="signup">
<input v-model="email" type="text" placeholder="Enter Email">
<input type="password" v-model="password" placeholder="Emter Password">
<button class="register" v-on:click="Login" type="submit">Login</button>
<br/>
<router-link to="/sign-up">Sign Up</router-link>
</div>
</div>
</template>


<script>
import axios from 'axios';
export default{
name:"Login",
  data(){
    return{
    email:'',
    password:''
    }
  },
  methods:{
  async  Login(){
    let result = await axios .get(
    `
    http://localhost:3000/users?email=${this.email}& password= ${this.password}
    `
    );
    if(result.status==200 && result.data.length>0){
        alert('Login Successfully')
        localStorage.setItem('user-info',JSON.stringify(result.data[0]));
        this.$router.push({name:'Home'})
        }
    }
  },
  mounted(){
        let User = localStorage.getItem('user-info');
        if(User){
        this.$router.push({name:'Home'})
      }
    }
}
</script>