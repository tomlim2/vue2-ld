import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

type AppMode = 'default' | 'widget'

interface StoreState {
  count: number
  appMode: AppMode
  widgetList: any
}

const store = new Vuex.Store({
  state: {
    count: 0,
    appMode: 'default' as AppMode,
    widgetList: {
      using: [
        {
          name: 'widget type A',
          type: 'typeA',
          widgetId: 1111
        },
        {
          name: 'widget type B',
          type: 'typeB',
          widgetId: 2222
        },
      ],
      available: [
        {
          name: 'widget type A',
          type: 'typeA',
          widgetId: 1111
        },
        {
          name: 'widget type B',
          type: 'typeB',
          widgetId: 2222
        },
        {
          name: 'widget type C',
          type: 'typeC',
          widgetId: 3333
        },
        {
          name: 'widget type D',
          type: 'typeD',
          widgetId: 4444
        }
      ]
    }
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