<template>
  <div class="video-list">
    <div class="video-item" v-for="item in videos" :key="item.id">
      <div class="video-item--used" v-if="item.used">
        This video is currently being uesd.
      </div>
      <img :src="item.img_url" alt="" class="video-item__cover" />
      <div class="video-item__title">
        <span class="video-item__title--normal">{{ item.name }}</span>
        <br />
        <span class="video-item__title--small">
          size：{{ item.size }}{{ item.unit }}</span
        >
      </div>
      <img
        alt="delete"
        src="../assets/trash.svg"
        class="video-item__icon"
        v-if="item.showIcon"
        slot="actions"
        @click="delItem(item.id)"
      />
    </div>
  </div>
</template>


<script>
import "./lib/VideoList.css";
export default {
  data() {
    return {
      videos: this.$store.state.videos,
    };
  },

  methods: {
    delItem(id) {
      this.$store.commit("delItem", id);
    },
  },
};
</script>




