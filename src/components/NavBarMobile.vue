<template>
  <nav class="nav">
    <img @click="showDashboard()" class="nav__icone-menu" src="../assets/img/menu.png" alt="logo menu">
    <router-link to="/" class="nav__logo-bloc">
      <div class="nav__logo"><img class="nav__logo-img" src="../assets/img/circle.png" alt="logo circle">
        Circle <br> product</div>
    </router-link>
    <div class="nav-desktop">
      <div class="dashboard">
        <div class="dashboard__dash-emp">
            <div class="dashboard__bloc">
                <p class="dashboard__text">Dashbaord</p>
                <li class="dashboard__li">Products manager</li>
            </div>
            <p class="dashboard__text">Employees management</p>
        </div>
        <div class="dashboard__border-top"></div>
        <p class="dashboard__log">Logout</p>
    </div>
    </div>
  </nav>
  <DashBoard v-if="displayDashboard" />
  <router-view />
</template>

<script>

import DashBoard from './DashBoard.vue';

export default {
  name: 'NavBarMobile',
  components: {
    DashBoard
  },
  data() {
    return {
      displayDashboard: false
    }
  },
  methods: {
    showDashboard() {
      this.displayDashboard = !this.displayDashboard;
    }
  }
}

</script>
  
<style lang="scss" scoped>
@import '@/assets/_variablesColor.scss';
@import '@/assets/_variablesTypographie.scss';

.nav-desktop {
  display: none;
}

.nav {
  background-color: $primary-color;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__icone-menu {
    width: 50px;
    height: 50px;
    margin: 20px;
  }

  &__logo-bloc {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__logo {
    display: flex;
    align-items: center;
    font-size: $font-size-m;
    font-weight: bold;
    color: $write-color-w;
    margin: 20px;

    &__logo-img {
      width: 50px;
      height: 50px;
      margin-right: 5px;
    }
  }
}

@media screen and (min-width: 768px) {
  .nav {
    display: flex;
    flex-direction: column;
    height: 60rem;
    margin: 0;
    justify-content: start;
    align-items: center;

    .nav__logo-bloc {
      order: 1;
    }

    .nav__icone-menu {
      order: 2;
    }
  }

  @media screen and (min-width: 900px) {
    .nav__icone-menu {
      display: none;
    }

    .nav-desktop {
      order: 2;
      display: flex;
      margin: 3rem 0;
      font-weight: bold;
    }

    .dashboard__text, .dashboard__li, .dashboard__log {
      padding: 1rem;
      white-space: nowrap;
    }
    .dashboard__border-top {
      border-top: 1px solid $write-color-w;
      width: 70%;
      margin: 1rem auto;

    }

  }
}
</style>
  