import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
       city:'城市名'
    },
    getters: {
        getCityFn(state){
            return state.city
        }
    },
    actions: {
        setCityName({commit,state},name){
            commit("setCity",name)
        }
    },
    mutations: {
        setCity(state,name){
            state.city=name
        }
    },
})
export default store