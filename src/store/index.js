import { createStore } from "vuex";

export default createStore({
  state: {
    orders: [
      {
        nombre: 'Dobel',
        telefono: '555-555-5555',
        pastel: 'Personalizado'
      },
      {
        nombre: 'Maria Angeles Lopez Candia',
        telefono: '852-789-1245',
        pastel: 'Fresa'
      },
      {
        nombre: 'Takeshi Kitahara Miranda',
        telefono: '235-123-7856',
        pastel: 'Vainilla Italiana'
      },
      {
        nombre: 'Bill Gates',
        telefono: '789-789-7878',
        pastel: 'Chocolate'
      },
    ]
  },
  getters: {},
  mutations: {
    addOrder (state, order) {
      state.orders.push(order);
    },
    getOrders () {
      return state.orders;
    }
  },
  actions: {
    addOrder ({ commit}, order) {
      commit('addOrder', order);
    }
  },
  modules: {},
});
