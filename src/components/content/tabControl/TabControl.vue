<template>
  <div class="tab-control">
    <div class="top">
      <p v-for="(item, index) in top" :key="index" @click="changeactive(index)" :class="{active:current==index}" >
        {{ item }}
      </p>
    </div>
    <div class="goods">
      <div class="good" v-for="(item, index) in goods" :key="index">
        <img src="" alt="" />
        <span class="title"></span>
        <div class="good_bottom">
          <span class="price"></span>
          <span class="icon"></span>
          <span class="collection"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
    };
  },
  props: {
    top: {
      type: Array,
      default() {
        return [];
      },
    },
      goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    changeactive(index) {
      this.current = index;
    },
  },
};
</script>

<style lang="less" scoped>
.tab-control {
  width: 100%;
  background-color: #fff;
  .top {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .active {
      color: pink;
      border-bottom: 3px solid pink;
    }
    p {
      flex: 1;
      font-size: 16px;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
  .goods {
    display: flex;
    flex-wrap: wrap;
    .good {
      box-sizing: border-box;
      padding: 5px;
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 100%;
        height: auto;
        margin-bottom: 5px;
      }
      .title {
        font-size: 16px;
      }
      .good_bottom {
        display: flex;
        align-items: center;
        justify-content: center;
        .price {
          color: pink;
          font-size: 16px;
          padding-right: 5px;
        }
        .icon {
          width: 10px;
          height: auto;
          padding-right: 5px;
        }
        .collection {
          font-size: 16px;
        }
      }
    }
  }
}
</style>