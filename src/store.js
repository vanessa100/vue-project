import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videos: [
      { id: 1, name: "Video name 1", size: 38, unit: "MB", used: false, img_url: null, showIcon: false },
      { id: 2, name: "Video name 2", size: 18, unit: "MB", used: true,  img_url: null, showIcon: false },
      { id: 3, name: "Video name 3", size: 18, unit: "MB", used: false, img_url: null, showIcon: true  },
      { id: 4, name: "Video name 4", size: 18, unit: "MB", used: false, img_url: null, showIcon: false },
      { id: 5, name: "Video name 5", size: 18, unit: "MB", used: false, img_url: null, showIcon: false },
      { id: 6, name: "Video name 6", size: 18, unit: "MB", used: false, img_url: null, showIcon: false },
      { id: 7, name: "Video name 7", size: 18, unit: "MB", used: false, img_url: null, showIcon: false },
      { id: 8, name: "Video name 8", size: 18, unit: "MB", used: false, img_url: null, showIcon: false },
      { id: 9, name: "Video name 9", size: 18, unit: "MB", used: false, img_url: null, showIcon: false },
      { id: 10, name: "Video name 10", size: 18, unit: "MB", used: false, img_url: null, showIcon: false },
      { id: 11, name: "Video name 11", size: 18, unit: "MB", used: false, img_url: null, showIcon: false },

    ],

    count: 2,
  },
  mutations: {
    DEL_ITEM(state, id) {
      const index = state.videos.findIndex(item => item.id === id)
      if (index !== -1) {
        state.videos.splice(index, 1)
      }
    },

  },
  actions: {

  }
});