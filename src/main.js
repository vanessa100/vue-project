import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)

// var store = new Vuex.Store({
//   state: {
//     tasks: [
//       { id: '1', title: 'Something', state: 'TASK_INBOX' },
//       { id: '2', title: 'Something more', state: 'TASK_INBOX' },
//       { id: '3', title: 'Something else', state: 'TASK_INBOX' },
//       { id: '4', title: 'Something again', state: 'TASK_INBOX' },
//     ],

//     videos: [
//       { id: 1, name: "Video name 1", size: 38, unit: "MB" },
//       { id: 2, name: "Video name 2", size: 18, unit: "MB" },
//       { id: 3, name: "Video name 3", size: 18, unit: "MB" },
//       { id: 4, name: "Video name 4", size: 18, unit: "MB" },
//       { id: 5, name: "Video name 5", size: 18, unit: "MB" },
//       { id: 6, name: "Video name 6", size: 18, unit: "MB" },
//       { id: 7, name: "Video name 7", size: 18, unit: "MB" },
//       { id: 8, name: "Video name 8", size: 18, unit: "MB" },
//     ],
//   },
//   mutations: {
//     ARCHIVE_TASK(state, id) {
//       state.tasks.find(task => task.id === id).state = 'TASK_ARCHIVED';
//     },
//     PIN_TASK(state, id) {
//       state.tasks.find(task => task.id === id).state = 'TASK_PINNED';
//     },
//   },
//   actions: {
//     archiveTask({ commit }, id) {
//       commit('ARCHIVE_TASK', id);
//     },
//     pinTask({ commit }, id) {
//       commit('PIN_TASK', id);
//     },
//   },
// });


Vue.config.productionTip = false


import app from './App.vue'

new Vue({
  el: '#app',
  render: c => c(app),
  // store // 挂载 store 状态管理对象
})