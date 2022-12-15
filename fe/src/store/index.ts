import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

type AppMode = 'default' | 'widget'

interface StoreState {
  count: number
  appMode: AppMode
  widgets: any
}

const store = new Vuex.Store({
  state: {
    count: 0,
    appMode: 'default' as AppMode,
    widgets: {}
  },
  mutations: {
    increment(state: StoreState) {
      state.count++
    },
    toggleWidgetEditMode(state: StoreState) {
      if (state.appMode == 'widget') {
        state.appMode = 'default'
      } else {
        state.appMode = 'widget'
      }
    },
    resetAppMode(state: StoreState) {
      state.appMode = 'default'
    }
  }
})

export default store