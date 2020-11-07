<template>
  <div class="list-box">
    <van-grid :border="false" :column-num="3" :gutter="10">
      <van-grid-item text="误入秘密花园">
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        <span>误入秘密花园</span>
      </van-grid-item>

      <van-grid-item @click="toList">
        <van-image :src="playList.coverImgUrl" />
        <span>{{ playList.name }}</span>
      </van-grid-item>

      <van-grid-item @click="toList">
        <van-image :src="playList.coverImgUrl" />
        <span>{{ playList.name }}</span>
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
    this.$http({
      url: "/playlist/detail?id=944971889",
      method: "get",
    }).then((res) => {
      this.playList = res.data.playlist;
    });
  },
  methods: {
    toList() {
      console.log(6);
      this.$http({
        url: "/playlist/subscribers",
        method: "get",
        params: {
          id: 944971889,
        },
      }).then((res) => {
        console.log(res);
        this.playList = res.data.playlist;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.van-grid-item {
  padding: 3px 0;
}
</style>