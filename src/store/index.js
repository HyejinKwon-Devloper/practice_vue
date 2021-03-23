import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        selectedMember: {
            name: 'BTS',
            img: require('@/assets/bts.jpg')
          },
          message: ''
    },
    mutations: {
        changeMember(state, newMember){
            state.selectedMember = newMember;
        },
        changeMessage(state, newMessage){
            state.message = newMessage;
        }
    },
    actions: {
        changeMember({commit}, {newMember}){
            commit('changeMember', newMember)
        },
        changeMessage({commit}, {newMessage}){
            commit('changeMessage', newMessage)
        }
        
    },
    getters: {
        getSelectedMember(state) {
            return state.selectedMember
        },
        getMessage(state){
            return state.message;
        }
    }
})