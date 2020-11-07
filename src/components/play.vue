<template>
  <div>
    <audio ref="audio" :src="playUrl" @timeupdate="pdateTime"></audio>
    <div class="play-box" v-show="$store.state.style.playPageShow">
      <div class="icon-box" @touchstart="hidden">
        <van-icon name="arrow-down" size="20" color="#ff4e4b" />
      </div>
      <div class="img-box">
        <van-image
          width="100%"
          fit="cover"
          height="300px"
          :src="song.picUrl? song.picUrl : 'https://img.yzcdn.cn/vant/cat.jpeg'"
        />
      </div>
      <!-- 歌名 -->
      <div class="sing-name-warapper">
        <span class="sing-name">{{ song.name }}</span>
        <van-icon
          @click="showPlayList"
          name="bars"
          size="25"
          color="#ff4e4b"
          class="collection"
        />
        <div class="auther">{{ song.artis }}</div>
      </div>
      <!-- 进度条 -->
      <div id="sing-time-box">
        <div>
          <div ref="jindutiao1" id="jindutiao1"></div>
          <div ref="jindutiao" id="jindutiao"></div>
        </div>
        <div class="time-box">
          <span class="start-time">{{ format(currentTime) }}</span>
          <span class="end-time">{{ format(duraction) }}</span>
        </div>
      </div>

      <!--  播放列表  -->
      <div id="play">
        <div class="add">
          <van-icon name="star-o" size="20" color="#ff4e4b" />
        </div>
        <div class="left">
          <img class="lastBtn" :src="lastBtn" />
        </div>
        <div id="play-mu" @click="tapButton" class="play-mu">
          <van-icon
            v-show="!$store.state.play.playing"
            name="play-circle"
            size="50"
            color="#ff4e4b"
          />
          <van-icon
            v-show="$store.state.play.playing"
            name="pause-circle"
            size="50"
            color="#ff4e4b"
          />
        </div>
        <div class="right">
          <img class="nextBtn" :src="nextBtn" alt="" />
        </div>
        <div class="share">
          <van-icon name="share-o" size="20" color="#ff4e4b" />
        </div>
      </div>

      <van-action-sheet class="playListPage" v-model="show" title="歌曲列表">
        <!-- 歌单列表 -->
        <PlayList />
      </van-action-sheet>
    </div>
    <!-- Mini 播放器 play-bar -->
    <div class="play-bar" v-show="!$store.state.style.playPageShow">
      <div
        class="play-bar-image-container"
        @touchstart="showPlayPage"
        @click="showPlayPage"
      >
        <!-- v-lazy="coverImgUrl" -->
        <img class="play-bar-image" :src="song.picUrl? song.picUrl : 'https://img.yzcdn.cn/vant/cat.jpeg'"/>
      </div>
      <p class="play-bar-text">{{ song.name }}</p>
      <!-- :src="playing ? iconPause : iconPlay"  @touchend="tapButton" -->
      <div class="play-bar-button" @click="tapButton">
        <van-icon
          v-show="!$store.state.play.playing"
          name="play-circle"
          class="play-bar-button"
          size="25"
          color="#ff4e4b"
        />

        <van-icon
          v-show="$store.state.play.playing"
          name="pause-circle"
          class="play-bar-button"
          size="25"
          color="#ff4e4b"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PlayList from "./playList";
import { mapState } from "vuex";

export default {
  name: "paly",
  components: {
    PlayList,
  },
  computed: {
    ...mapState({
      playUrl: (state) => state.play.playUrl,
      song: (state) => state.play.song,
      playing: (state) => state.play.playing,
    }),
  },
  data() {
    return {
      actions: [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }],
      show: false,
      currentTime: 0,
      duraction: 0,
      percent: 0,
      lastBtn: require("../assets/last.png"),
      nextBtn: require("../assets/next.png"),
    };
  },
  methods: {
    hidden() {
      this.$store.commit("changePlayBar");
    },
    showPlayList() {
      this.show = !this.show;
    },
    showPlayPage() {
      this.$store.commit("changePlayBar");
    },
    tapButton() {
      this.$store.commit("setPlaying", !this.playing);
    },
    pdateTime(e) {
      // 设置进度条
      var audio = this.$refs.audio;
      this.$refs.jindutiao1.style.width = `${parseInt(
        this.$refs.jindutiao.offsetWidth * (this.currentTime / audio.duration)
      )}px`;
      this.currentTime = e.target.currentTime;
    },
    format(interval) {
      interval = interval | 0;
      var mi = (interval / 60) | 0;
      var sec = interval % 60;
      if (mi < 10) {
        mi = "0" + mi;
      }
      if (sec < 10) {
        sec = "0" + sec;
      }
      return `${mi}:${sec}`;
    },
  },
  watch: {
    playUrl() {
      this.$nextTick(() => {
        this.$refs.audio.play();
        this.$store.commit("setPlaying", true);
      });
    },
    playing(newPlaying) {
      var audio = this.$refs.audio;
      this.$nextTick(() => {
        newPlaying ? audio.play() : audio.pause();
        this.duraction = audio.duration;
      });
    },
  },
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
  overflow: hidden;
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
  position: relative;
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
.lastBtn,
.nextBtn{
  height: 22px;
  width: 22px;
}

.playListPage {
  padding: 0 16px 160px;
  box-sizing: border-box;
}

// play-bar
.play-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #f7f7f7;
  background: -webkit-linear-gradient(top, #f9f9f9, #f3f3f3);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 2;

  .play-bar-image-container {
    width: 37.5px;
    height: 37.5px;
    padding-left: 15px;
    cursor: pointer;

    .play-bar-image {
      width: 37.5px;
      height: 37.5px;
      border-radius: 5px;
      display: inline-block;
    }
  }
}

.play-bar-text {
  flex-grow: 1;
  text-align: left;
  padding-left: 10px;
  cursor: pointer;
}

.play-bar-button {
  width: 20px;
  height: 20px;
  padding-right: 15px;
  cursor: pointer;
}
</style>