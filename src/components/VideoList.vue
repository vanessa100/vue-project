<template>
  <div class="video-container">
    <div class="video-list">
      <div class="video-item" v-for="item in videos" :key="item.id">
        <div class="video-used">This video is currently being uesd.</div>
        <img alt="" class="video-cover" />
        <div class="video-title">
          <span class="video-title--name">{{ item.name }}</span>
          <br />
          <span class="video-title--size">
            size：{{ item.size }}{{ item.unit }}</span
          >
        </div>

        <img alt="d" class="delete-icon" />
      </div>
    </div>
  </div>
</template>

<script>
import "./lib/VideoList.css";
export default {
  data() {
    return {
      videos: [
        { id: 1, name: "Video name 1", size: 38, unit: "MB" },
        { id: 2, name: "Video name 2", size: 18, unit: "MB" },
        { id: 3, name: "Video name 3", size: 18, unit: "MB" },
        { id: 4, name: "Video name 4", size: 18, unit: "MB" },
        { id: 5, name: "Video name 5", size: 18, unit: "MB" },
        { id: 6, name: "Video name 6", size: 18, unit: "MB" },
        { id: 7, name: "Video name 7", size: 18, unit: "MB" },
        { id: 8, name: "Video name 8", size: 18, unit: "MB" },
      ],
    };
  },

  methods: {},
};
</script>




