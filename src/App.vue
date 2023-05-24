<template>
  <div class="content">
    <NavBarMobile class="navBar"></NavBarMobile>
  </div>
</template>

<script>

import NavBarMobile from './components/NavBarMobile.vue'


export default {
  name: 'App',
  components: {
    NavBarMobile,
  },

}

</script>

<style lang="scss">
@import "@/assets/_variablesTypographie.scss";

#app {
  font-family: $font-family;
  color: white;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

.content {
  min-width: 350px;
  margin: 0;
  overflow-x: auto;
}

@media screen and (min-width: 768px) {
  .content {
    display: flex;
    padding-bottom: 0;
  }
}
</style>
