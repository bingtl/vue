<template>
  <div class="wrapper">
    <!-- 使用组件标签 -->
    <div class="title">备忘录</div>
    <Add/>
    <List/>
  </div>
</template>

<script>
// 引入组件
import Add from './components/Add'
import List from './components/List'
export default {
  // 将引入的组建映射成标签
  components: {
    Add,
    List
  }
}
</script>

<style>
.wrapper{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
}
.title{
    width: 1200px;
    height: 100px;
    margin: 0 auto;
    font-size: 40PX;
    color: #383838;
    font-weight: bold;
    text-align: center;
    line-height: 100PX;
}
</style>
