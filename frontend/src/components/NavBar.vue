<template>
  <div class="nav-bar">
    <ul>
      <li><router-link :to="{ name: 'patients' }">Patients</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.nav-bar {
  background-color: #2f3033;
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
}
.nav-bar ul {
  list-style: none;
  margin:0 ;
  padding: 0;
  text-align: center;
  color: white;
}
.nav-bar ul li {
  display: inline-block;
  margin: 0 5px;
  padding: 25px;
  float: left;
}
.nav-bar:after {
  content: '';
}
.nav-bar ul li a {
  text-decoration: none;
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  color: white;
  padding: 10px;
  border-radius: 7px;
}
.nav-bar ul li a:hover {
  background-color: #5e5e5e;
}
</style>