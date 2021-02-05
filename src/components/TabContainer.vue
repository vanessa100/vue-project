<template>
  <div class="tab-container">
    <div class="tab-head">
      <div class="tab-head--current">Reference Videos</div>
      <div class="tab-head--other">
        Completed mocap <span class="dot">2</span>
      </div>
    </div>
    <upload-drag></upload-drag>
    <div class="tab-content">
      <div class="tab-content--current">
        <video-box></video-box>
      </div>
      <div class="tab-content--other"></div>
    </div>
    <div class="tab-footer">
      <button style="width: 100px; height: 30px">Close</button>
    </div>
  </div>
</template>


<script>
import "./lib/TabContainer.css";
import VideoList from "./VideoList";
import UploadDrag from "./UploadDrag.vue";

export default {
  components: {
    "upload-drag": UploadDrag,
    "video-box": VideoList,
  },
};
</script>