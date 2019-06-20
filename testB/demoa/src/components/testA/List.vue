<template>
  <div class="list">
    <div class="list_title">事件列表</div>
    <div class="list_wrapper">
      <item v-for="(comment, index) in comments" :key="index" :comment="comment" :deleteComment="deleteComment" :index="index"/>
    </div>
    <div v-show="comments.length===0">暂无事件</div>
  </div>
</template>

<script>
// 引入组件
import item from './Item'
export default {
  components: {
    item
  },
  props: {
    comments: Array,
    deleteComment: Function
  }
}
</script>

<style>
.list {
  width: 600px;
  float: left;
  overflow: hidden;
}
.list_title {
  width: 100%;
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 30px;
  color: #383838;
  font-weight: bold;
}
.list_wrapper {
  display: block;
  width: 100%;
  margin-top: 50px;
  overflow: hidden;
}
.list_content {
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  width: 596px;
  border: #383838 1px solid;
  min-height: 60px;
  position: relative;
}
</style>
