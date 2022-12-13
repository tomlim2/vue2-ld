import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    widgetEditMode: false,
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
    increment(state: any) {
      state.count++
    },
    toggleWidgetEditMode(state) {
      state.widgetEditMode = !state.widgetEditMode
    }
  }
})

export default store