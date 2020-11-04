<template>
  <div id="app">
    <Headers />
    <!-- <van-divider /> -->

    <div id="nav" v-show="$store.state.style.hiddenTab">
      <router-link class="tab" tag="div" to="/">推荐</router-link>
      <router-link class="tab" tag="div" to="/about">热评</router-link>
    </div>
    <router-view />

    <!-- <audio ref="audio" :src="playUrl"></audio> -->
    <Play />
    <!-- <PlayBar /> -->
  </div>
</template>

<script>
import Headers from "@/components/head.vue";
// import PlayBar from "@/components/play-bar.vue"; 
import Play from "@/components/play.vue";
// import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    // PlayBar,
    Play,
    Headers,
  },
  data() {
    return {};
  },
  methods: {
  },
  watch: {
  },
};
</script>

<style lang="less">
#nav {
  display: flex;
  .tab {
    height: 25px;
    flex: 1;
    line-height: 20px;
    text-align: center;
    box-sizing: border-box;
  }
}
.router-link-exact-active {
  border-bottom: 2px solid #ff4e4b;
}
</style>
