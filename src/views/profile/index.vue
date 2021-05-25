<template>
  <div class="home">
      <div class="container">
          <p>我的</p>
      </div>
      <tabbar :current=3>
      </tabbar>
  </div>
</template>

<script>
const tabbar=()=>import("components/common/tabbar")

export default {
components:{
    tabbar
}
}
</script>

<style lang="less" scoped>
.home{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    .container{
        width:100%;
        background-color: #fff;
        flex:1;
        overflow: auto;
    }
}
</style>
