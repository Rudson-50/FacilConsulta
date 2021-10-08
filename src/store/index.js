import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    usuario: {
      name: "",
      cpf: "",
      tel: "",
      state: "",
      city: "",
      special: "",
      price: "",
      payment: [],
      card: ""
    }
  },
  mutations: {
    UPDATE_USER(state, payload) {
      state.usuario = Object.assign(state.usuario, payload);
    },
  },
 

  modules: {
  }
})
