<template>
  <div class="content">
      <a class="inner" :href="item.link" v-for="(item,index) in recommends" :key="index">
          <img :src="item.image" alt="">
          <p>{{item.title}}</p>
      </a>
  </div>
</template>

<script>

export default {
    data(){
        return {

        }
    },
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    },
    mounted(){
        console.log("22",this.recommends);
    }

}
</script>

<style lang="less" scoped>
.content{
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
    width: 100%;
    display: flex;
    .inner{
        flex:1;
        padding-bottom: 18px;
        img{
            padding:5px 5px;
            box-sizing: border-box;
            width: 90%;
            height: auto;
        }
        p {
            font-size: 16px;
        }
    }
}
</style>