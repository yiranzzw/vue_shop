import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {}, shops: [], baseUrl: 'http://plateform.com:81', shopInfo: {}
  },
  getters: {
    user (state) {
      return state.user
    },
    shops (state) {
      return state.shops
    },
    baseUrl (state) {
      return state.baseUrl
    },
    shopInfo (state) {
      return state.shopInfo
    }
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    setShops (state, shops) {
      shops.forEach((v) => {
        state.shops.push(v)
      })
    },
    setShopInfo (state, shopInfo) {
      state.shopInfo = shopInfo
    }
  },
  actions: {
    // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。
    getShopInfo ({ state, commit }, param) {
      return new Promise((resolve, reject) => {
        console.log('getShopInfo')
        axios.get(state.baseUrl + '/api/shop/' + param.id)
          .then((data) => {
            console.log(data)
            commit('setShopInfo', data.data)
            resolve()
          })
          .catch((err) => {
            console.log(err)
            reject()
          })
      })
    }
  }
})
