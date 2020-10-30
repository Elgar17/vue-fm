<template>
  <div class="head">
    <div class="logo-box">
      <van-icon name="music" color="#ff4e4b" size="35" />
      <h1>VVFM</h1>
    </div>
    <van-search @click="toSearch" placeholder="搜索 歌曲" />
    <van-icon
      @click="cancle"
      v-show="!$store.state.style.hiddenTab"
      name="cross"
      size="20"
    />
  </div>
</template>

<script>
export default {
  name: "head",
  methods: {
    toSearch() {
      if(this.$route.path == "/search") return ;
      this.$router.push("/search");
      this.$store.commit("hiddenTab");
    },
    cancle() {
      this.$router.push("/");
      this.$store.commit("hiddenTab");
    },
  },
};
</script>

<style lang="less" scoped>
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}
.logo-box {
  display: flex;
  align-items: center;
  height: 54px;
  line-height: 54px;
  h1 {
    padding: 0 0 0 5px;
  }
}
</style>