<template>
  <div id="app">
    <Headers v-show="$store.state.style.showSonglist" />
    <!-- <van-divider /> -->

    <div id="nav" v-show="$store.state.style.showSonglist && $store.state.style.hiddenTab" >
      <router-link class="tab" tag="div" to="/">推荐</router-link>
      <router-link class="tab" tag="div" to="/about">热评</router-link>
    </div>
    <router-view />

    <Play />
  </div>
</template>

<script>
import Headers from "@/components/head.vue";
import Play from "@/components/play.vue";
export default {
  name: "Home",
  components: {
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
