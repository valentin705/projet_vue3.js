import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    products: [],
    product: {},
  },
  getters: {
  },
  mutations: {
    loadProducts(state, products){
      state.products = products
    }, 

    loadOneProduct(state, product){
      state.product = product
    },
  
  },
  actions: {
    loadProducts({commit}) {
      axios.get('https://fakestoreapi.com/products')
      .then(response => {
        console.log(response.data);
        commit('loadProducts', response.data)
      })
      .catch(error => {
        console.log(error);
      });
    },

    loadOneProduct({commit}, id) {
      axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        console.log(response.data);
        commit('loadOneProduct', response.data)
      })
      .catch(error => {
        console.log(error);
      });
    },

  },
  modules: {
  }
})
