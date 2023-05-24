<template>
  <main>
    <h1 class="product-view__title">{{ product.title }}</h1>
    <section class="section-product-view">
      <div class="product-view__container-img">
        <img class="product-view__img" :src="product.image" alt="">
      </div>
      <div class="product-view__bloc">
        <div class="product-view__desc-cat">
          <div class="product-view__category-bloc">
            <h2 class="product-view__category">Category</h2>
            <div class="category-color" :data-category="product.category">
              <p class="product-view__category-text">{{ product.category }}</p>
            </div>
          </div>
          <div class="product-view__description-bloc">
            <h2 class="product-view__description-title">Description</h2>
            <p class="producuc-view__description-text">{{ product.description }}</p>
          </div>
        </div>
        <div class="product-view__price-pricevat-bloc">
          <div class="product-view_price-bloc">
            <h2 class="product-view__price-title">Price</h2>
            <input class="product-view__input-price" v-model="product.price" type="number" step="0.01" min="0" />
          </div>
          <p class="product-view__price-vat">Price(including VAT):<span v-if="product.price">{{ (product.price *
            1.2).toFixed(2) }}€</span></p>
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

<style lang="scss" scoped>
@import '@/assets/_variablesColor.scss';
@import '@/assets/_styleCategory.scss';
@import '@/assets/_variablesTypographie.scss';

.product-view__title {
  text-align: center;
  font-size: $font-size-title-m;
  font-weight: bold;
  color: $primary-color;
  margin: 2rem;
}

.product-view__container-img {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: auto;
  max-width: 20rem;

  .product-view__img {
    width: 150px;
    height: 150px;
    margin: 2rem;
  }
}

.product-view__desc-cat {
  display: flex;
  flex-direction: column;
  align-items: center;

  .product-view__category {
    display: flex;
    justify-content: center;
    font-size: $font-size-title-m;
    font-weight: bold;
    color: $primary-color;
    margin: 0 0 2rem 0;
  }

  .product-view__category-text {
    display: flex;
    justify-content: center;
    font-size: $font-size-m;
    font-weight: bold;
    color: $write-color-w;
    margin: 20px;
  }

}

.producuc-view__description-text {
  display: flex;
  justify-content: center;
  font-size: $font-size-m;
  font-weight: bold;
  color: $write-color-g;
}

.product-view__bloc {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  .product-view__description-title,
  .product-view__price-title {
    display: flex;
    justify-content: start;
    font-size: $font-size-title-m;
    font-weight: bold;
    color: $primary-color;
    margin: 3rem 0 2rem 0;
  }
}

.product-view__price-pricevat-bloc {
  display: flex;
  align-items: center;
  width: 100%;

  .product-view__price-vat {
    display: flex;
    // flex-direction: column;
    justify-content: center;
    font-size: $font-size-m;
    font-weight: bold;
    color: $write-color-g;
  }
}

.product-view__input-price {
  width: 55%;
  border-radius: 5px;
  background-color: #e6e6e6;
  border: none;
  color: $write-color-g;
  font-size: $font-size-m;
  font-weight: bold;
  padding: 10px 20px;
}

@media screen and (min-width: 900px) {
  .section-product-view {
    display: flex;
  }

  .product-view__container-img {
    margin: 2rem;
    padding: 1rem 3rem;
    height: 25rem;
    width: 100%;
    max-width: 25rem;
    align-items: center;

    .product-view__img {
      width: 80%;
      height: 80%;
      
    }
  }

  .product-view__bloc {
    margin: 0 2rem 0 0;
  }

  .product-view__desc-cat {
    display: flex;
    flex-direction: row;

    .product-view__category-bloc {
      order: 2;
      margin: 3rem 1rem 0 2rem;
    }
  }
}
</style>