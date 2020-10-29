<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />

    <PlayBar/>
  </div>
</template>

<script>
import PlayBar from "@/components/play-bar.vue";

export default {
  name: "Home",
  components: {
    PlayBar,
  },
  data(){
    return{
      
    }
  }
};
</script>

<style lang="less">
</style>
