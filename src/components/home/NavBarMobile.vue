<template>
    <nav>
      <img @click="showDashbord()" class="icone-menu" src="../../assets/menu.png" alt="logo menu">
      <router-link to="/">
        <div class="logo"><img src="../../assets/circle.png" alt="logo circle">
          Circle <br> product</div>
      </router-link>
    </nav>
    <DashbordMobile v-if="displayDashbord" />
    <router-view />
  </template>

    <script>

    import DashbordMobile from './DashbordMobile.vue';
   
    export default {
      name: 'NavBarMobile',
      components: {
        DashbordMobile
      },
      data() {
        return {
          displayDashbord: false
        }
      },
      methods: {
        showDashbord() {
          this.displayDashbord = !this.displayDashbord;
        }
      }
    }

    </script>
  
  <style lang="scss">
$primary-color: #804BF1;
$write-color: #F2F2F2;

  nav {
    background-color: $primary-color;
    height: 90px;
    display: flex;
    justify-content: space-between;
  }
  
  .icone-menu {
    width: 50px;
    height: 50px;
    margin: 20px;
  }
  
  .logo {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
    color: $write-color;
    margin: 20px;
  }
  
  .logo img {
    width: 50px;
    height: 50px;
    margin-right: 5px;
  }
  </style>
  