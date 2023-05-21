<template>
  <main>
    <section class="section-product-view">
      <h1>{{ product.title }}</h1>
      <div class="container-img">
        <img :src="product.image" alt="">
      </div>
      <div class="product-view">
        <div class="desc-cat">
          <div class="cat">
            <h2>Category</h2>
            <div class="category-color" :data-category="product.category">
              <p>{{ product.category }}</p>
            </div>
          </div>
          <div>
            <h2>Description</h2>
            <p>{{ product.description }}</p>
          </div>
        </div>
        <div class="price-pricevat">
          <div>
            <h2>Price</h2>
            <input v-model="product.price" type="number" step="0.01" min="0"/>
          </div>
          <p>Price(including VAT):<span v-if="product.price">{{ (product.price * 1.2).toFixed(2) }}</span>€</p>
        </div>
        <UpdateProduct></UpdateProduct>
      </div>
    </section>
  </main>
</template>

<script>

import UpdateProduct from '@/components/product/UpdateProduct.vue';

export default {
  name: 'ProductView',
  components: {
    UpdateProduct
  },

  computed: {
    product() {
      return this.$store.state.product;
    }
  }, 

  created() {
    this.$store.dispatch('loadOneProduct', this.$route.params.id);
  }

}

</script>

<style lang="scss">
$primary-color: #804BF1;
$write-color: #858080;

.section-product-view h1 {
  text-align: center;
}

.container-img {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 50px;
}

.container-img img {
  width: 150px;
  height: 150px;
  margin: 30px 20px;
}

.product-view p {
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  color: $write-color;
  margin: 20px;
}

section .product-view h2 {
  display: flex;
  justify-content: start;
  font-size: 20px;
  font-weight: bold;
  color: $primary-color;
  margin: 20px;
}

section .product-view .h2-cat {
  justify-content: center;
}

.desc-cat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.desc-cat div:first-child {
  width: 55%;
}

.desc-cat div p {
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
}

.price-pricevat {
  display: flex;
  flex-direction: row;
}

.price-pricevat div:first-child {
  width: 55%;
}

.price-pricevat div p {
  justify-content: start;
}

.cat {
  display: flex;
  flex-direction: column;
  align-items: center;

 p {
    color: white;
  }
} 

input {
  width: 80%;
  height: 30px;
  border: none;
  border-radius: 5%;
  background-color: #e6e6e6;
  color: $write-color;
  font-size: 16px;
  font-weight: bold;
  margin: 20px;
  padding: 10px 20px;
}

</style>