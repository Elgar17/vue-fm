<template>
  <div>
    <div class="list">
      <div class="song-name">
          0001
          <van-icon name="bar-chart-o" />
      </div>
      <div class="btn">
        <van-icon size="22" color="#ff4e4b" name="ellipsis" />
      </div>
    </div>
    <div class="list">
      <div class="song-name">0002</div>
      <div class="btn">
        <van-icon size="22" color="#ff4e4b" name="ellipsis" />
      </div>
    </div>
    <div class="list">
      <div class="song-name">0003</div>
      <div class="btn">
        <van-icon size="22" color="#ff4e4b" name="ellipsis" />
      </div>
    </div>
    <div class="list">
      <div class="song-name">0004</div>
      <div class="btn">
        <van-icon size="22" color="#ff4e4b" name="ellipsis" />
      </div>
    </div>
    <div class="list">
      <div class="song-name">0005</div>
      <div class="btn">
        <van-icon size="22" color="#ff4e4b" name="ellipsis" />
      </div>
    </div>
    <div class="list">
      <div class="song-name">0005</div>
      <div class="btn">
        <van-icon size="22" color="#ff4e4b" name="ellipsis" />
      </div>
    </div>
    <div class="list">
      <div class="song-name">0005</div>
      <div class="btn">
        <van-icon size="22" color="#ff4e4b" name="ellipsis" />
      </div>
    </div>
    <div class="list">
      <div class="song-name">0005</div>
      <div class="btn">
        <van-icon size="22" color="#ff4e4b" name="ellipsis" />
      </div>
    </div>
    <div class="list">
      <div class="song-name">0005</div>
      <div class="btn">
        <van-icon size="22" color="#ff4e4b" name="ellipsis" />
      </div>
    </div>
    <div class="list">
      <div class="song-name">0005</div>
      <div class="btn">
        <van-icon size="22" color="#ff4e4b" name="ellipsis" />
      </div>
    </div>
    <div class="list">
      <div class="song-name">0005</div>
      <div class="btn">
        <van-icon size="22" color="#ff4e4b" name="ellipsis" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "playList",
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