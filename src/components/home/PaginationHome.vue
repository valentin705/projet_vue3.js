<template>
    <div class="pagination-bloc">
      <Paginate
        v-model="currentPage"
        :page-count="calculatePageCount"
        :page-range="3"
        :click-handler="clickCallback"
        :prev-text="'<<'"
        :next-text="'>>'"
        :container-class="'pagination'"
        :page-class="'page-item'"
      ></Paginate>
    </div>
  </template>
  
  <script>
  import Paginate from "vuejs-paginate-next";
  
  export default {
    name: "PaginationComponent",
    props: {
      products: {
        type: Array,
        required: true,
      },
      perPage: {
        type: Number,
        default: 7,
      },
    },
    data() {
      return {
        currentPage: 1,
      };
    },
    computed: {
      calculatePageCount() {
        return Math.ceil(this.products.length / this.perPage);
      },
      displayedProducts() {
        const start = (this.currentPage - 1) * this.perPage;
        const end = start + this.perPage;
        return this.products.slice(start, end);
      },
    },
    components: {
      Paginate,
    },
    methods: {
      clickCallback(pageNum) {
        this.currentPage = pageNum;
      },
    },
  };
  </script>
  
  <style lang="scss">
  @import "@/assets/_variablesColor.scss";
  
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