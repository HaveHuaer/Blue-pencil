<template>
  <div id="app">
    <el-page-header @back="goBack" :class="$route.meta.isShowBack ? '' : 'hide'" :content="$route.meta.title">
    </el-page-header>
    <!-- 路由视图 -->
    <router-view />


  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      history.back()
    }
  },
  computed:{
    calcCardHeight(){
      return{
        height:this.$refs.card.clientHeight + 20 + "px"
      }
    }
  }
}
</script>

<style>
body {
  margin: 0px
}
a{
  text-decoration: none;
}
p{
  margin: 0;
}
.ellipsis {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-page-header {
  height: 50px;
  background-color: #aaa;
  line-height: 50px;
}

.el-page-header.hide .el-page-header__left {
  display: none;
}

.el-page-header.hide .el-page-header__content {
  margin-left: 51%;
}

.el-page-header__content {
  margin-left: 45%;
}
</style>
