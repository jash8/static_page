<template>
  <div id="app">
    <router-view></router-view>
    <left-nav></left-nav>
  </div>
</template>

<script>

import 'simple-reset/simple.css';
import leftNav from '@/components/public_comps/leftNav';

export default {
  name: 'app',
 components:{
   leftNav
 }
}
</script>

<style>
html,body{
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
