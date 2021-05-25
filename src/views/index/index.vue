<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <div class="container">
      <indexswiper :banners="banners"> </indexswiper>
      <indexrecommend :recommends="recommends"/>
    </div>
    <tabbar :current="0"> </tabbar>
  </div>
</template>

<script>
const tabbar = () => import("components/common/tabbar");
const NavBar = () => import("components/common/NavBar");
import {getHomeMultidata} from "network/home"
import indexswiper from "views/index/childcomponents/indexswiper"
import indexrecommend from "views/index/childcomponents/indexrecommend"


export default {
  data() {
    return {
      // current:0
      banners:[],
      recommends:[]
    };
  },
  components: {
    tabbar,
    NavBar,
    indexrecommend,
    indexswiper
  
  },
  created(){
    console.log("refs",this.$refs);
    //   1.请求多个数据
    getHomeMultidata().then(res=>{
        this.banners=res.data.banner.list;
        this.recommends=res.data.recommend.list;
        console.log("11",this.recommends);

    })
  }
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
  .container {
    width: 100%;
    background-color: #fff;
    flex: 1;
    overflow: auto;
  }
}
</style>
