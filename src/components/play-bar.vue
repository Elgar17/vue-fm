<template>
  <div class="play-bar">
    <div
      class="play-bar-image-container"
      @touchstart="showPlayPage"
      @click="showPlayPage"
    >
      <img class="play-bar-image" v-lazy="coverImgUrl" />
    </div>
    <p class="play-bar-text">{{title}}</p>
    <img
      class="play-bar-button"
      :src="playing ? iconPause : iconPlay"
      @touchend="tapButton"
      @click="tapButton"
    />
  </div>
</template>

<script>
export default {
    name:"paly-bar",
    data(){
        return{
            title: "elgar1",
            
        }
    },
    methods:{
        showPlayPage(){
            console.log("shouPlayPage")
        },
        tapButton(){
            console.log("tapButton")
        }
    }
};
</script>

<style lang="less" scoped>
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