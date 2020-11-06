<template>
  <div class="home">
    <van-swipe
      class="my-swipe"
      :autoplay="4000"
      height="160"
      indicator-color="white"
    >
      <van-swipe-item v-for="(item, index) in swiperData" :key="index">
        <img class="sw-img" v-lazy="item.pic" />
      </van-swipe-item>
    </van-swipe>

    <h2>推荐歌单</h2>
    <TuiJianGeDan />
  </div>
</template>

<script>
// @ is an alias to /src
import TuiJianGeDan from "@/components/TuiJianGeDan.vue";

export default {
  name: "Home",
  data() {
    return {
      swiperData: [],
    };
  },
  components: {
    TuiJianGeDan,
  },
  created() {
    this.getBenner();
  },
  methods: {
    getBenner() {
      this.$http({
        url: "banner?type=1",
        method: "get",
      }).then((data) => {
        if (data.status == 200) {
          this.swiperData = data.data.banners;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  padding-bottom: 50px;
}

.my-swipe .van-swipe-item {
  height: auto;
  color: #fff;
  font-size: 20px;
  text-align: center;
}
.sw-img {
  width: 100%;
  height: 100%;
}
h2 {
  text-align: center;
}
</style>