<template>
    <div class="tbody" v-for="product in displayedProducts" :key="product.id" @click="selectProduct(product.id)">
        <p>{{ product.title }}</p>
        <div class="category-color" :data-category="product.category">
            <p>{{ product.category }}</p>
        </div>
        <p>{{ product.price.toFixed(2) }}€</p>
        <p>{{ (product.price * 1.2).toFixed(2) }}€</p>
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
$primary-color: #804BF1;
$write-color: #858080;

.tbody {
    display: flex;
    flex-direction: row;
    font-size: 12px;
    font-weight: bold;
    color: $write-color;
    margin: 20px;
    height: 60px;
    box-sizing: border-box;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5%;
    cursor: pointer;
    align-items: center;
}

.tbody p:first-child {
    white-space: nowrap;
    min-width: 30%;
    overflow: hidden;
}

.tbody p:nth-child(3), .tbody p:nth-child(4) {
    justify-content: end;
    margin: 10px;
}

.tbody p {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 10px;
}

.pagination-bloc {
    display: flex;
    justify-content: center;
    margin: 50px;
}
.pagination {
    // position: relative;
    display: flex;
}

.page-item {
    margin: 0 5px;
    padding: 5px 10px;
    border: 1px solid $primary-color;
    cursor: pointer;
    background-color: $primary-color;
}

.page-item:hover {
    background-color: $primary-color;
}

.page-item.active {
    background-color: $primary-color;
}

.category-color[data-category="men's clothing"] {
    background-color: orange;
    color: white;
    border-radius: 15px;
    display: flex;
}

.category-color[data-category="jewelery"] {
    background-color: green;
    color: white;
    border-radius: 15px;
    display: flex;
}

.category-color[data-category="electronics"] {
    background-color: blue;
    color: white;
    border-radius: 15px;
    display: flex;
}

.category-color[data-category="women's clothing"] {
    background-color: red;
    color: white;
    border-radius: 15px;
    display: flex;
}
</style>