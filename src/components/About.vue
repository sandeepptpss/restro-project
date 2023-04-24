<template>
<div class="restro-header-page">
<Header/>
</div>
<div class="main-about-page">
    <div v-for="item of abouts" :key="item.id">
    <h2 class="main-about-title">{{ item.title}}</h2> 
    <p class="main-about-desc">{{ item.description }}</p> 
    </div>
</div>
<Footer />
</template>
<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import axios from 'axios';
export default{
    name:"About",
    components:{
    Header,
    Footer
    },
    data(){
      return{
       
      abouts: [],
    }
    },
    async created() {
      const res = await axios.get(`http://localhost:3000/about`);
      this.abouts = res.data;
  }
}
</script>