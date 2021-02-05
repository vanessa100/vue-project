<template>
  <div class="container">
    <tab-container></tab-container>
  </div>
</template>

<script>
import TabContainer from './components/TabContainer.vue';


export default {
  components: {
    "tab-container": TabContainer,
  },

};
</script>

<style>
.container {
  background-color: grey;
  padding: 10px;
}
</style>



