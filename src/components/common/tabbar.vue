<template>
      <div class="tabbar">
        <!-- <router-link :to="path" class="router"> -->
          <div class="item" v-for="(item,index) in tabList" :key="index" @click="changeactive(index,item)">
              <img class="icon" v-if="current==index" :src="item.icon[1]"></img>
              <img class="icon" v-else :src="item.icon[0]"></img>
              <span>{{item.title}}</span>
          </div>
        <!-- </router-link> -->
          
      </div>
</template>

<script>
import index1 from "assets/imgs/icon_unselect/index.png";
import index2 from "assets/imgs/icon_selected/index.png";
import fenlei1 from "assets/imgs/icon_unselect/classification.png";
import fenlei2 from "assets/imgs/icon_selected/classification.png";
import profile1 from "assets/imgs/icon_unselect/profile.png";
import profile2 from "assets/imgs/icon_selected/profile.png";
import cart1 from "assets/imgs/icon_unselect/shopping_cart.png";
import cart2 from "assets/imgs/icon_selected/shopping_cart.png";
export default {
  props:['current'],
  data() {
    return {
      // current: 0,
      path: "/",
      tabList: [
        {
          path: "/home",
          title: "首页",
          icon: [index1, index2],
        },
        {
          path: "/fenlei",
          title: "分类",
          icon: [fenlei1, fenlei2],
        },
        {
          path: "/shopping",
          title: "购物车",
          icon: [cart1, cart2],
        },
        {
          path: "/profile",
          title: "我的",
          icon: [profile1, profile2],
        },
      ],
    };
  },
  methods: {
    changeactive(index,item) {
      // console.log(index);
      // this.current = index;
      this.path=item.path;
      this.$router.push(this.path)

    },
  },
};
</script>

<style lang="less" scoped>
.tabbar {
  background-color: #ccc;
  height: 71px;
  display: flex;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  .item {
    display: flex;
    flex-direction: column;
    .icon {
      width: 50px;
    }
    span {
      padding-top: 12rpx;
    }
  }
}
</style>