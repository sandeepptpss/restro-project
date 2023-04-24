<template>
  <div class="restro-header-page">
<Header/>
</div>
  <div class="main-signup">
    <div class="inner-logo">
      <img class="mysignupLogo" src="./images/SignUp.png">
      <h2 class="signup-title">Sign Up</h2>
    </div>
    <div class="signup">
      <div class="main-field">
        <p v-if="errors.length" class="text-center">
        <ul v-for="error in errors">
          <li v-show="error == 'Name required'">{{ error }}</li>
        </ul>
        </p>
      </div>
      <div class="main-field">
        <input v-model="name" type="text" placeholder="Enter Name" required>
        <p v-if="errors.length" class="text-center">
        <ul v-for="error in errors">
          <li v-show="error == 'Email required' || error == 'Valid email required'">{{ error }}</li>
        </ul>
        </p>
      </div>
      <div class="main-field">
        <input v-model="email" type="text" placeholder="Enter Email" required>
        <p v-if="errors.length" class="text-center">
        <ul v-for="error in errors">
          <li v-show="error == 'password required'">{{ error }}</li>
        </ul>
        </p>
        <input type="password" v-model="password" placeholder="Emter Password" required>
      </div>
      <button class="register" v-on:click="SignUp" type="submit">SignUp</button>
      <br />
      <router-link class="login-btn" to="/login">Login</router-link>
    </div>
  </div>
  <Footer />
</template>
<script>
import axios from "axios"
import Header from "./Header.vue"
import Footer from "./Footer.vue"
export default {
  name: 'SignUp',
  components:{
        Header,
        Footer
    },
  data() {
    return {
      errors: [],
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async SignUp() {
      // this.errors = [];
      // if (!this.name) {
      //   this.errors.push("Name required");
      // }
      // if (!this.name) {
      //   this.errors.push("password required");
      // }
      // if (!this.email) {
      //   this.errors.push('Email required');
      // } else if (!this.validEmail(this.email)) {
      //   this.errors.push('Valid email required');
      // }
      // if (!this.errors.length) {
      //   return true;
      // }

        if(!this.password || !this.email || !this.name){
          alert('this field is required')
         return;
        
        }
      if (this.errors.length === 0) {
        let result = await axios.post("http://localhost:3000/users", {
          password: this.password,
          email: this.email,
          name: this.name
        });
        if (result.status == 201) {
          alert('SignUp Successfully')
          localStorage.setItem('user-info', JSON.stringify(result.data));
          this.$router.push({ name: 'Home' })
        }
      }
    }

  },
  mounted() {
    let User = localStorage.getItem('user-info');
    if (User) {
      console.log()
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>