<template>
    <div class="tbody" v-for="product in displayedProducts" :key="product.id" @click="selectProduct(product.id)">
        <p class="tbody__title">{{ product.title }}</p>
        <div class="category-color tbody__category-bloc" :data-category="product.category">
            <p class="tbody__category">{{ product.category }}</p>
        </div>
        <p class="tbody__price">{{ product.price.toFixed(2) }}€</p>
        <p class="tbody__price-vat">{{ (product.price * 1.2).toFixed(2) }}€</p>
    </div>
    <div class="pagination-bloc">
        <Paginate v-model="page" :page-count="calculatePageCount" :page-range="3" :click-handler="clickCallback"
            :prev-text="'<<'" :next-text="'>>'" :container-class="'pagination'" :page-class="'page-item'">
        </Paginate>
    </div>
</template>

<script>
import Paginate from "vuejs-paginate-next";
export default {
    name: 'ShowProducts',

    data() {
        return {
            page: 1,
        }
    },

    computed: {
        products() {
            return this.$store.state.products;
        },
        calculatePageCount() {
            const perPage = 7;
            return Math.ceil(this.products.length / perPage);
        },
        displayedProducts() {
            const perPage = 7;
            const start = (this.page - 1) * perPage;
            const end = start + perPage;
            return this.products.slice(start, end);
        }
    },

    components: {
        Paginate: Paginate
    },

    methods: {
        selectProduct(id) {
            this.$store.commit('loadOneProduct', id);
            this.$router.push('/product/' + id);
        },
        clickCallback(pageNum) {
            console.log(pageNum);
        },
    }
}
</script>

<style lang="scss">
@import '@/assets/_variablesColor.scss';
@import '@/assets/_styleCategory.scss';
@import '@/assets/_variablesTypographie.scss';

.tbody {
    display: flex;
    font-size: $font-size-m;
    font-weight: bold;
    color: $write-color-g;
    margin: 1rem;
    padding: 1.2rem;
    box-sizing: border-box;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    cursor: pointer;
    align-items: center;

    &__title {
        display: flex;
        width: 35%;
        justify-content: start;
    }

    &__category-bloc {
        align-items: center;
        height: fit-content;
        width: 25%;
        align-content: center;
        text-align: center;
        justify-content: center;
        padding: 0.5rem;
        margin: 0 1rem;
    }

    &__price,
    &__price-vat {
        display: flex;
        justify-content: center;
        width: 20%;
    }
}

.pagination-bloc {
    display: flex;
    justify-content: center;
    margin: 3rem;
}

.pagination {
    display: flex;
}

.page-item {
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid $primary-color;
    cursor: pointer;
    background-color: $primary-color;
   
}
</style>