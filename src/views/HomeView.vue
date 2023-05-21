<template>
  <div class="home">
    <main>
      <h1> Products management</h1>
      <section>
        <div class="thead">
          <p>Product name</p>
          <p>Category</p>
          <p>Price</p>
          <p>Price(VAT)</p>
        </div>
        <ShowProducts></ShowProducts>
      </section>
    </main>
  </div>
</template>

<script>
import ShowProducts from '@/components/home/ShowProducts.vue';

export default {
  name: 'HomeView',

  data() {
    return {
      products: []
    }
  },

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

<style lang="scss">
$primary-color: #804BF1;
$write-color: #F2F2F2;

h1 {
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: $primary-color;
  margin: 20px;
}

table {
  border-collapse: collapse;
}

.thead {
  display: flex;
  font-size: 12px;
  font-weight: bold;
  color: $write-color;
  margin: 20px;
  height: 60px;
  background-color: $primary-color;
  border-radius: 5%;

}

.thead p:first-child {
  white-space: nowrap;
}

.thead p:nth-of-type(3){
  justify-content: end;
}

.thead p {
  width: 100%;
  display: flex;
  align-items: center;
  margin: 10px;
}

p:first-child {
  min-width: 30%;
  overflow: hidden;
}
</style>
