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
    <infinite-loading @infinite="infiniteHandler">
      <span slot="no-more"> There is no more Videos. </span>
    </infinite-loading>
  </div>
</template>


<script>
import "./lib/VideoList.css";
import InfiniteLoading from "vue-infinite-loading";
import store from '../store';
export default {
  data() {
    return {
      videos: store.state.videos,
    };
  },

  methods: {
    delItem(id) {
      store.commit("DEL_ITEM", id);
    },
    infiniteHandler($state) {
      setTimeout(() => {
        $state.loaded();
        $state.complete();
      }, 1000);
    },

    store
  },

  components: {
    InfiniteLoading,
  },
};
</script>




