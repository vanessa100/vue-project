<template>
  <div id="contentwrap" class="contentwrap">
    <div class="tab">
      <div id="tab_current" class="tab-current">
        <span>Reference Videos</span>
      </div>
      <div id="tab_other" class="tab-other">
        <span>Completed mocap</span>
      </div>
    </div>
    <upload-drag></upload-drag>

    <video-box></video-box>
    <div style="text-align: center; padding: 10px">
      <button type="button" style="width: 100px; height: 30px">Close</button>
    </div>
  </div>
</template>

<script>
import "./lib/TabContent.css";
import VideoListVue from "./VideoList";
import UploadDrag from "./UploadDrag.vue";

export default {
  components: {
    "upload-drag": UploadDrag,
    "video-box": VideoListVue,
  },

  methods: {},
};
</script>