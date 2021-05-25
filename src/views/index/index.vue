<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <div class="container">
      <indexswiper :banners="banners"> </indexswiper>
      <indexrecommend :recommends="recommends" />
      <Feature />
      <tab-control class="tab-control" :top="TabControl"> </tab-control>
      <ul>
        <li>gjal1</li>
        <li>gjal2</li>
        <li>gjal3</li>
        <li>gjal4</li>
        <li>gjal5</li>
        <li>gjal6</li>
        <li>gjal7</li>
        <li>gjal8</li>
        <li>gjal9</li>
        <li>gjal10</li>
        <li>gjal11</li>
        <li>gjal12</li>
        <li>gjal13</li>
        <li>gjal14</li>
        <li>gjal15</li>
        <li>gjal16</li>
        <li>gjal17</li>
        <li>gjal18</li>
        <li>gjal19</li>
        <li>gjal20</li>
        <li>gjal21</li>
        <li>gjal22</li>
        <li>gjal23</li>
        <li>gjal24</li>
        <li>gjal25</li>
        <li>gjal26</li>
        <li>gjal27</li>
        <li>gjal28</li>
        <li>gjal29</li>
        <li>gjal30</li>
        <li>gjal31</li>
        <li>gjal32</li>
        <li>gjal33</li>
        <li>gjal34</li>
        <li>gjal35</li>
        <li>gjal36</li>
        <li>gjal37</li>
        <li>gjal38</li>
        <li>gjal39</li>
        <li>gjal40</li>
        <li>gjal41</li>
        <li>gjal42</li>
        <li>gjal43</li>
        <li>gjal44</li>
        <li>gjal45</li>
        <li>gjal46</li>
        <li>gjal47</li>
        <li>gjal48</li>
        <li>gjal49</li>
        <li>gjal50</li>
        <li>gjal51</li>
        <li>gjal52</li>
        <li>gjal53</li>
        <li>gjal54</li>
        <li>gjal55</li>
        <li>gjal56</li>
        <li>gjal57</li>
        <li>gjal58</li>
        <li>gjal59</li>
        <li>gjal60</li>
        <li>gjal61</li>
        <li>gjal62</li>
        <li>gjal63</li>
        <li>gjal64</li>
        <li>gjal65</li>
        <li>gjal66</li>
        <li>gjal67</li>
        <li>gjal68</li>
        <li>gjal69</li>
        <li>gjal70</li>
        <li>gjal71</li>
        <li>gjal72</li>
        <li>gjal73</li>
        <li>gjal74</li>
        <li>gjal75</li>
        <li>gjal76</li>
        <li>gjal77</li>
        <li>gjal78</li>
        <li>gjal79</li>
        <li>gjal80</li>
        <li>gjal81</li>
        <li>gjal82</li>
        <li>gjal83</li>
        <li>gjal84</li>
        <li>gjal85</li>
        <li>gjal86</li>
        <li>gjal87</li>
        <li>gjal88</li>
        <li>gjal89</li>
        <li>gjal90</li>
        <li>gjal91</li>
        <li>gjal92</li>
        <li>gjal93</li>
        <li>gjal94</li>
        <li>gjal95</li>
        <li>gjal96</li>
        <li>gjal97</li>
        <li>gjal98</li>
        <li>gjal99</li>
        <li>gjal100</li>
      </ul>
    </div>
    <tabbar :current="0"> </tabbar>
  </div>
</template>

<script>
const tabbar = () => import("components/common/tabbar");
const NavBar = () => import("components/common/NavBar");
const TabControl = () => import("components/content/tabControl/TabControl");
import { getHomeMultidata } from "network/home";
import { getHomeGoods } from "network/home";
import indexswiper from "views/index/childcomponents/indexswiper";
import indexrecommend from "views/index/childcomponents/indexrecommend";
import Feature from "views/index/childcomponents/FeatureView";

export default {
  data() {
    return {
      // current:0
      TabControl: ["流行", "新歌", "精选"],
      banners: [],
      recommends: [],
      goods:{
        pop:{page:0,list:[]},
        news:{page:0,list:[]},
        sell:{page:0,list:[]}
      }
    };
  },
  components: {
    tabbar,
    NavBar,
    indexrecommend,
    indexswiper,
    Feature,
    TabControl,
  },
  methods:{
    getHomeMulti(){
      //   1.请求多个数据
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      console.log("11", this.recommends);
    })
    },
    async getHomegoods(type){
      const page=this.goods[type].page+1
      const data=await getHomeGoods(type,page)
      console.log("流行",data);
    }

  },
  created() {
    console.log("refs", this.$refs);
    this.getHomeMulti();
    this.getHomegoods();
   
  },
  destoryed(){
    console.log("destory");
  }
};
</script>

<style lang="less" scoped>
.home {
  padding-top: 44px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .home-nav {
    width: 100%;
    position: fixed;
    top: 0;
    background-color: var(--color-tint);
    color: #fff;
  }
  .container {
    width: 100%;
    background-color: #fff;
    flex: 1;
    overflow: auto;
    .tab-control {
      top: 0px;
      position: sticky;
    }
  }
}
</style>
