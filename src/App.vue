<template>
  <div class="container">
    <tab-content></tab-content>
  </div>
</template>

<script>
import TabContent from "./components/TabContent";

export default {
  components: {
    "tab-content": TabContent,
  },

  methods: {},
};
</script>

<style>
.container {
  background-color: grey;
  padding: 10px;
}
</style>



