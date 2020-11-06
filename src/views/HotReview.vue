<template>
  <div class="hotReview">
    <!-- 公告 -->
    <van-notice-bar
      left-icon="gift"
      background="#fafafa"
      color="#ff3a37"
      :scrollable="false"
    >
      <van-swipe
        vertical
        class="notice-swipe"
        :autoplay="3000"
        :show-indicators="false"
      >
        <van-swipe-item>愿你不辜负生活，不迷失方向。</van-swipe-item>
        <van-swipe-item>总有一句打动你的心。</van-swipe-item>
      </van-swipe>
    </van-notice-bar>

    <!-- 评论列表 -->

    <div class="list-box" v-for="(item,index) in list" :key="index">
      <div class="head-box">
        <van-image
          width="25"
          height="25"
          fit="cover"
          :src="item.simpleUserInfo.avatar"
        />
      </div>
      <div class="content-box">
        <div class="title-box">{{item.simpleUserInfo.nickname}}</div>
        <p>{{item.content}}</p>
        <div class="like-box">
          <!-- <van-icon name="share" color="#ff3a37" size="20" /> -->
          <span>{{item.likedCount}}</span>
          <van-icon name="good-job" color="#ff3a37" size="20" />
        </div>
      </div>
      <van-divider />
    </div>
  </div>
</template>


<script>
export default {
  name: "Review",
  data() {
    return {
      list: [],
    };
  },
  created(){
    this.gelist()
  },
  methods: {
    gelist() {
      this.$http({
        url: "/comment/hotwall/list",
        method: "get",
      }).then((res) => {
        if (res.data.code === 200) {
          this.list = res.data.data;
        }
      });
    },
  },
};
</script>

<style>
</style>

<style lang="less" scoped>
.hotReview{
  padding-bottom: 50px;
}
.notice-swipe {
  height: 40px;
  line-height: 40px;
}

.list-box {
  display: flex;
  .head-box {
    display: flex;
    justify-content: center;
    width: 40px;
  }
  .content-box {
    flex: 1;
    .title-box {
      height: 25px;
      line-height: 25px;
      font-weight: bold;
      color: #546685;
      font-size: 14px;
    }
  }
  .like-box {
    height: 25px;
    padding-right: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    span {
      font-size: 18px;
      margin: 0 5px;
      line-height: 18px;
    }
  }
}
</style>
