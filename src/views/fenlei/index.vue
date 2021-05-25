<template>
  <div class="home">
      <div class="container">
          <p>分类</p>
      </div>
      <tabbar :current=1>
      </tabbar>
  </div>
</template>

<script>
const tabbar=()=>import("components/common/tabbar")
export default {
    data(){
        return{
           
        }
    },
components:{
    tabbar
},
created(){
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
