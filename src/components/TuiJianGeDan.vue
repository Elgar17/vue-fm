<template>
  <div class="list-box">
    <van-grid :border="false" :column-num="3" :gutter="10">
      <van-grid-item
        @click="toList(item.id)"
        v-for="(item, index) in playList"
        :key="index"
        text="误入秘密花园"
      >
        <van-image :src="item.picUrl" />
        <span>{{
          item.name.length > 14 ? item.name.slice(0, 13) + "..." : item.name
        }}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "hot",
  data() {
    return {
      playList: "",
    };
  },
  created() {
    this.getlist();
    // this.$http({
    //   url: "/playlist/detail?id=944971889",
    //   method: "get",
    // }).then((res) => {
    //   this.playList = res.data.playlist;
    // });
  },
  methods: {
    getlist() {
      this.$http({
        url: "/personalized",
        params: {
          limit: 9,
        },
      }).then((res) => {
        if (res.data.code == 200) {
          this.playList = res.data.result;
        }
      });
    },
    toList(id) {
      this.$router.push({ path: "/SongList", query: { id } });
      this.$store.commit("reshowSonglist");
    },
  },
};
</script>

<style lang="less" scoped>
.van-grid-item {
  padding: 3px 0;
}
</style>