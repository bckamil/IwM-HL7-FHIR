<template>
  <div id="app">
    <link rel="stylesheet" 
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
      crossorigin="anonymous">
    <NavBar />    
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.bg-gray {
  background-color: lightgray
}
</style>
