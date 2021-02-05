<template>
  <div class="container">
    <tab-container></tab-container>
  </div>
</template>

<script>
import TabContainer from './components/TabContainer.vue';
import store from './store';

export default {
  components: {
    "tab-container": TabContainer,
  },
  store

};
</script>

<style>
.container {
  background-color: grey;
  padding: 10px;
  height: 600px;
}
</style>



