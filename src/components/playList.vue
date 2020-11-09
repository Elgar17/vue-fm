<template>
  <div>
    <div class="list" @click="play(item)" v-for="(item,index) in songList" :key="index">
      <!-- {{songList}} -->
      <div class="song-name">
        {{index + 1}} {{item.name}}
        <van-icon name="bar-chart-o" v-if="item.name == song.name"  />
      </div>
      <div class="btn">
        <van-icon size="22" color="#ff4e4b" name="ellipsis" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "playList",
  computed: {
    ...mapState({
      playUrl: (state) => state.play.playUrl,
      songList: (state)=> state.play.playList,
      playing: (state) => state.play.playing,
      song: (state) => state.play.song,
    }),
  },
  methods:{
    play(item){
      console.log(item)
      // this.$http({
      //   url: "/song/url",
      //   method: "get",
      //   params: {
      //     id: item.id,
      //   },
      // }).then((res) => {
      //   if (res.status == 200) {
      //     this.$store.dispatch("aSetUrl", res.data.data[0].url);
      //     this.$store.dispatch("aSetSong", {name: item.name, artis: item.artis,picUrl:item.picUrl,Url:item.Url});
      //   }
      // });
    }
  },
  watch:{
    // 去重
    songList(list){
      for(let i = 0; i < list.length; i++){
        for(let j = i + 1 ; j < list.length; j++){
          if(list[i].name == list[j].name){
            list.splice(j,1)
            j--;
          }
        }
      }
      return list;
    }
  }
};
</script>

<style lang="less" scoped>
.list {
  display: flex;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #efefef;
  .song-name {
    flex: 1;
    height: 100%;
  }
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 100%;
  }
}
</style>