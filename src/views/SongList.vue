<template>
  <div class="song-list">
    <div class="head-box">
      <div class="back">
        <van-icon @click="back" name="arrow-left" color="#ff4e4b" size="25" />
        首页
      </div>
      <!--  <van-image
        fit="cover"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      /> -->
      <div class="img-name-box">
        <div class="img-box">
          <div class="playCount">
            <van-icon name="play" size="14" />{{
              list.playCount
                ? list.playCount.toString().length > 4
                  ? list.playCount.toString().slice(0, -4) + "万"
                  : list.playCount
                : ""
            }}
          </div>
          <van-image
            fit="cover"
            radius="5"
            width="150"
            height="150"
            :src="list.coverImgUrl"
          />
        </div>
        <div class="name-box">
          <div class="name">{{ list.name }}</div>
          <div class="tag">
            标签：
            <van-tag
              v-for="(item, index) in list.tags"
              :key="index"
              type="primary"
              >{{ item }}</van-tag
            >
          </div>
          <div class="disc-box">
            简介：{{
              list.description
                ? list.description.length > 41
                  ? list.description.slice(0, 50) + "..."
                  : list.description
                : ""
            }}
          </div>
        </div>
      </div>
    </div>
    <div class="list-box">
      <div class="list"  @click="play(item)" v-for="(item, index) in list.tracks" :key="index">
        <div class="index">{{ index + 1 }}</div>
        <div class="song-name">
          {{ item.name.length > 7 ? item.name.slice(0, 7) + "..." : item.name }}
        </div>
        <span>{{ item.ar[0].name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "songList",
  data() {
    return {
      list: {},
    };
  },
  created() {
    this.getList();
  },
  methods: {
    back() {
      this.$router.push("/");
      this.$store.commit("reshowSonglist");
    },
    getList() {
      this.$http({
        url: "/playlist/detail",
        method: "get",
        params: {
          id: this.$route.query.id, // 520345230
        },
      }).then((res) => {
        console.log(res.data);
        this.list = res.data.playlist;
      });
    },
    play(albom){
      // console.log(albom.id)
      this.$http(
        {
          url:"/song/url",
          params:{
            id: albom.id
          }
        }
      ).then(res=>{
        console.log(albom)
        this.$store.dispatch("aSetUrl",res.data.data[0].url)
        this.$store.dispatch('aSetSong',{name: albom.name, artis:albom.ar[0].name,picUrl:albom.al.picUrl})
      })
    }
  },
};
</script>

<style lang="less" scoped>
.song-list {
  .head-box {
    width: 100%;
    height: 300px;
    background-color: rgb(5, 117, 121, 5);
    .back {
      display: flex;
      align-items: center;
      height: 40px;
      background-color: #fff;
      line-height: 40px;
      padding-left: 10px;
      font-size: 16px;
    }
    .img-name-box {
      display: flex;
      padding: 20px;

      .img-box {
        position: relative;
        padding-right: 20px;
        .playCount {
          display: flex;
          align-items: center;
          position: absolute;
          z-index: 1;
          color: #fff;
          right: 23px;
        }
      }
      .name-box {
        .name {
          font-size: 18px;
          color: #fff;
          font-weight: bold;
          padding-bottom: 5px;
        }
        .tag {
          color: #fff;
          padding-bottom: 5px;
        }
        .disc-box {
          color: #fff;
        }
      }
    }
  }
  .list-box {
    margin-top: -20px;
    background-color: #fff;
    border-radius: 15px 15px 0 0;
    padding: 15px;
    .list {
      display: flex;
      height: 40px;
      line-height: 40px;
      // background-color: #ccc;
      border-bottom: 1px solid #ccc;
      .index {
        margin-right: 10px;
        color: #ccc;
      }
      .song-name {
        font-size: 16px;
        margin-right: 10px;
      }
      span {
        color: #aaa;
      }
    }
  }
}
</style>