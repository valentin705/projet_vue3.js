<template>
    <button type="submit" @click="addProductToLocalStorage(product)">Update product</button>
</template>

<script>

export default {
  name: 'ProductView',

  components: {

  },

  computed: {
   product() {
    // Access the product from the store
     return this.$store.state.product;
   }
  },

  methods: {
    addProductToLocalStorage(product) {
      // Dispatch the action from your store
      this.$store.dispatch('addProductToLocalStorage', product);
    }

    
    
  },

}

</script>

<style lang="scss">
$primary-color: #804BF1;
$write-color: #F2F2F2;

.section-product-view button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border: none;
  border-radius: 5%;
  background-color: $primary-color;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin: 50px auto 50px auto;
  padding: 10px 20px;
}

.section-product-view button:hover {
  background-color: #8652f46c;
}
</style>