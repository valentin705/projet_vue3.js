<template>
  <main class="home">
    <h1 class="home__title"> Products management</h1>
    <section class="section">
      <div class="thead">
        <p class="thead__prod-name">Product name</p>
        <p class="thead__category">Category</p>
        <p class="thead__price">Price</p>
        <p class="thead__price-vat">Price(VAT)</p>
      </div>
      <ShowProducts />
    </section>
  </main>
</template>

<script>
import ShowProducts from '@/components/home/ShowProducts.vue';

export default {
  name: 'HomeView',

  components: {
    ShowProducts,

  },

  methods: {
    clickCallback(pageNum) {
      console.log(pageNum);
    }
  },

  created() {
    this.$store.dispatch('loadProducts');
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/_variablesColor.scss';
@import '@/assets/_variablesTypographie.scss';

.home {
  margin-bottom: 2rem;
}
.home__title {
  display: flex;
  justify-content: center;
  font-size: $font-size-title-m;
  font-weight: bold;
  color: $primary-color;
  margin: 3rem;
}

.thead {
  display: flex;
  font-size: $font-size-m;
  font-weight: bold;
  color: $write-color-w;
  margin: 1rem;
  padding: 1.2rem;
  background-color: $primary-color;
  border-radius: 15px;

  &__prod-name {
    display: flex;
    width: 35%;
    justify-content: center;
  }

  &__category {
    display: flex;
    justify-content: center;
    width: 25%;
  }

  &__price,
  &__price-vat {
    display: flex;
    justify-content: center;
    width: 20%;
  }
}

@media screen and (min-width: 768px) {
  .home {
    align-items: center;
    margin: auto;
    width: 80%;

    &__title {
      font-size: $font-size-title-d;
    }
  }
  .thead {
    font-size: $font-size-d;
  }

}
  
</style>
