import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        selectedMember: ''
    },
    mutations: {
        changeMember(state, newMember){
            state.selectedMember = newMember;
        }
    },
    actions: {
        callMutation({commit}, {newMember}){
            commit('changeMember', newMember)
        }
    },
    getters: {
        getSelectedMember(state) {
            return state.selectedMember
        }
    }
})