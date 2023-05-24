<template>
    <button class="btn-update-price btn-update-price--color" type="submit" @click="addProductToLocalStorage(product)">Update product</button>
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

<style lang="scss" scoped>
  @import '@/assets/_variablesColor.scss';
  @import '@/assets/_variablesTypographie.scss';

.btn-update-price {
  height: 50px;
  border: none;
  border-radius: 5%;
  background-color: $primary-color;
  color: white;
  font-size: $font-size-m;
  font-weight: bold;
  cursor: pointer;
  margin: 4rem;
  padding: 10px 20px;
}

.btn-update-price--color:hover {
  background-color: #8652f46c;
}
</style>