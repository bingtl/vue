<template>
  <div class="wrapper">
    <!-- 使用组件标签 -->
    <div class="title">备忘录</div>
    <Add :addComment="addComment"/>
    <List :comments="comments" :deleteComment="deleteComment"/>
  </div>
</template>

<script>
// 引入组件
import Add from '../components/testA/Add'
import List from '../components/testA/List'
export default {
  data () {
    return {
      // 用于接收子组件添加的内容，数据在那个组建，更新数据的行为就在那里
      comments: []
    }
  },
  methods: {
    // 添加日志
    addComment (comment) {
      // 将新的日志放在数组最前面
      this.comments.unshift(comment)
    },
    // 删除日志，根据下标
    deleteComment (index) {
      this.comments.splice(index, 1)
    }

  },
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
