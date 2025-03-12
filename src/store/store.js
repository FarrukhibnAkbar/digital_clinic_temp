import { createStore } from 'vuex'

export default createStore({
    state () {
        return {
            navBarToggle: false
        }
    },
    mutations: {
        toggleSideBar(state) {
            state.navBarToggle = !state.navBarToggle
            console.log(state.navBarToggle)
        }
    },
    actions: {
        $toggleSideBar({commit}) {
            commit('toggleSideBar')
        }
    }
})