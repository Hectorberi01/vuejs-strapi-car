<template>
  <div id="app">
    <Header/>
    
    <main>
      <router-view></router-view>
    </main>
    <Footer/>
  
   
  </div>
</template>

<script>
  import Footer from './componentes/footer.vue';
  import Header from './componentes/header.vue';
  export default{
    name:'app',
    data: () => ({

    }),
    components: {  Footer, Header }
  }
</script>

<style>
 @import './style/app.css';
  #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #fefefe;
      background-color: black;
  }
</style>
