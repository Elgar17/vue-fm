<template>
  <div class="home">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <h2>推荐歌单</h2>
    <TuiJianGeDan/>
  </div>
</template>

<script>
// @ is an alias to /src
import  TuiJianGeDan from "@/components/TuiJianGeDan.vue";

export default {
  name: "Home",
  components: {
    TuiJianGeDan
  },
};
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
h2{
  text-align: center;
}
</style>