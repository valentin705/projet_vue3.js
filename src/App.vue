<template>
  <div id="app">
    <NavBarMobile></NavBarMobile>
    
  </div>
</template>

<script>

import NavBarMobile from './components/home/NavBarMobile.vue'


export default {
  name: 'App',
  components: {
    NavBarMobile,
  },

}

</script>

<style lang="scss">

#app {
  font-family: Avenir, Arial, sans-serif;
  color: white;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
</style>
