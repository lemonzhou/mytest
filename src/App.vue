<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/home">首页</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/category">分类</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/cart">购物车</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/order">订单中心</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      home: ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    position: fixed;
    bottom: 0;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
  }
  /* 移动端 1px 边框问题 */
  .tab::after {
    position: absolute;
    display: block;
    left: 0;
    bottom: 0;
    width: 100%;
    /* border-top: 1px solid rgba(7, 17, 27, 0.1); */
    content: ' ';
  }
  .tab-item {
    flex: 1;
  }
  .tab-item a {
    display: block;
    font-size: 14px;
    color: rgb(77, 85, 93);
  }
  .tab-item a.router-link-active {
    color: rgb(240, 20, 20);
  }
</style>
