<template>
  <div class="tab-container" v-if="showTab">
    <div class="tab-head">
      <div @click="cur = 0" :class="{ active: cur == 0 }">Reference Videos</div>
      <div @click="cur = 1" :class="{ active: cur == 1 }">
        Completed mocap <span class="dot">{{count}}</span>
      </div>
    </div>
    <upload-drag></upload-drag>
    <div class="tab-content">
      <div v-show="cur == 0">
        <video-box></video-box>
      </div>
      <div v-show="cur == 1"></div>
    </div>
    <div class="tab-footer">
      <button style="width: 100px; height: 30px" @click="showTab = false">
        Close
      </button>
    </div>
  </div>
</template>


<script>
import "./lib/TabContainer.css";
import VideoList from "./VideoList";
import UploadDrag from "./UploadDrag.vue";


export default {
  data() {
    return {
      showTab: true,
      cur: 0,
      count: this.$store.state.count,
    };
  },

  components: {
    "upload-drag": UploadDrag,
    "video-box": VideoList, 
  },
};
</script>