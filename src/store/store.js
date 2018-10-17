import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    // 定义状态
    state: {
        author: 'test u',
        age: '26',
        stateList: {'a': 'atest', 'b': 'bbtest'}
    },
    mutations: {
        newAuthor (state, msg) {
            state.author = msg;
        },
        newAge (state, msg) {
            state.age = msg;
        },
        stateList (state, msg) {
            state.stateList = msg;
        }
    }
})
export default store