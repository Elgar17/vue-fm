<template>
  <div class="search">
    <div
      class="list"
      @click="paly(item)"
      v-for="(item, index) in songlist"
      :key="index"
    >
      <div>
        {{ item.name }} <span>{{ item.artists[0].name }}</span>
      </div>
      <div>···</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      list: [1, 2, 3, 4],
      loading: true,
      finished: false,
    };
  },
  computed: {
    ...mapState({
      songlist: (state) => state.play.searchList,
    }),
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    paly(data) {
      this.$store.commit("changePlayBar");
      // console.log(data.rul);
      // this.$store.dispatch('aSetSong',{name: data.name, artis:data.artists[0].name,Url:res.data.data[0].url})
      this.$http({
        url: "/song/url",
        method: "get",
        params: {
          id: data.id,
        },
      }).then((res) => {
        if (res.status == 200) {
          this.$store.dispatch('aSetUrl',res.data.data[0].url);
          // console.log(item)
          //,picUrl:res.data.data[0].url
          this.$store.dispatch('aSetSong',{name: data.name, artis:data.artists[0].name})
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.list {
  display: flex;
  justify-content: space-between;
  height: 40px;
  padding: 0 10px;
  font-size: 14px;
  border-bottom: 1px solid #eee;
  div {
    height: 40px;
    line-height: 40px;
    span {
      font-size: 12px;
      color: #ccc;
    }
  }
}
</style>