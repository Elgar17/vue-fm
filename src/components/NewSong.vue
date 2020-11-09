<template>
  <div class="new-song">
    <div
      class="list"
      v-for="(item, index) in newsonglist"
      :key="index"
      @click="paly(item.id,item.name,item.song.artists[0].name,item.picUrl)"
    >
      <img :src="item.picUrl" alt="" />
      <div class="name">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newsong",
  data() {
    return {
      newsonglist: [],
    };
  },
  created() {
    this.$http({
      url: "personalized/newsong",
      method: "get",
    }).then((res) => {
      if (res.data.code == 200) {
        this.newsonglist = res.data.result;
        this.newsonglist = this.newsonglist.splice(0, 9);
      }
    });
  },
  methods: {
    paly(id,name,art,picUrl) {
      this.$http({
        url: "/song/url",
        method: "get",
        params: {
          id: id,
        },
      }).then((res) => {
        if (res.status == 200) {
          this.$store.dispatch("aSetUrl", res.data.data[0].url);
          this.$store.dispatch("aSetSong", {name: name, artis: art,picUrl:picUrl,Url:res.data.data[0].url});
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.new-song {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.list {
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 90%;
    margin: 0 auto;
  }
  .name {
    padding: 5px;
  }
}
</style>