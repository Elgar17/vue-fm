<template>
  <div class="play-box" v-show="$store.state.style.playPageShow">
    <div class="icon-box" @touchstart="hidden">
      <van-icon name="arrow-down" size="20" color="#ff4e4b" />
    </div>
    <div class="img-box">
      <van-image
        width="100%"
        fit="cover"
        height="300px"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
    </div>
    <!-- 歌名 -->
    <div class="sing-name-warapper">
      <span class="sing-name">Another Ghost</span>
      <van-icon name="bars" size="25" color="#ff4e4b" class="collection" />
      <div class="auther">Elgar</div>
    </div>
    <!-- 进度条 -->
    <div id="sing-time-box">
      <div>
        <div id="jindutiao1"></div>
        <div id="jindutiao"></div>
      </div>
      <div class="time-box">
        <span class="start-time">00:00</span>
        <span class="end-time">00:00</span>
      </div>
    </div>

    <!--  播放列表  -->
    <div id="play">
      <div class="add">
        <van-icon name="star-o" size="20" color="#ff4e4b"/>
      </div>
      <div class="left" >《</div>
      <div id="play-mu" class="play-mu">
        <van-icon name="play-circle" size="50" color="#ff4e4b" />
        <!-- <van-icon name="pause-circle" size="40" color="#ff4e4b" /> -->
      </div>
      <div class="right">》</div>
      <div class="share">
        <van-icon name="share-o" size="20" color="#ff4e4b" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "paly",
  data(){
    return{

    }
  },
  methods:{
    hidden(){
      this.$store.commit('changePlayBar')
    }
  }
};
</script>

<style lang="less" scoped>
.play-box {
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: #ddd;
}

.img-box {
  width: 100%;
  height: 300px;
}
.icon-box {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  width: 25px;
  height: 25px;
  position: absolute;
  z-index: 2;
  margin: 20px 15px;
  border-radius: 50%;
  background-color: rgba(1, 2, 2, 0.3);
}

// <!-- 歌名 -->
.sing-name-warapper {
  padding: 20px 20px 0 20px;
}

.sing-name-warapper .sing-name {
  font-size: 20px;
  font-weight: bold;
}
.sing-name-warapper .collection {
  float: right;
  display: block;
  width: 20px;
  height: 20px;
  background-size: 100%;
  background-repeat: no-repeat;
}

.sing-name-warapper .auther {
  margin-top: 5px;
  font-size: 13px;
  color: #ff4e4b;
}

/* 进度条 */
#sing-time-box {
  width: 100%;
  height: 50px;
  padding: 10px 0;
}
#sing-time-box #jindutiao {
  height: 4px;
  background-color: #ccc;
}
#sing-time-box #jindutiao1 {
  float: left;
  width: 1%;
  height: 4px;
  background-color: #ff4e4b;
}

#sing-time-box .time-box {
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
}

#play {
  position: absolute;
  background-color: #ccc;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: space-around;
}
</style>