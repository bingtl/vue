<template>
  <div class="list_content">
    <div class="list_content_A">
      <span>title:</span>
      <span>{{comment.name}}</span>
    </div>
    <div class="list_content_B">{{comment.content}}</div>
    <div class="list_content_C" @click="deleteItem">删除</div>
  </div>
</template>

<script>
// 引入组件

export default {
  props: {
    comment: Object,
    deleteComment: Function,
    idnex: Number
  },
  methods: {
    deleteItem () {
      const {comment, index, deleteComment} = this
      console.log(index)
      if (window.confirm('确定删除' + comment.name + '的内容吗')) {
        // 点击确认的时候更新comments 删除内容
        deleteComment(index)
      }
    }
  }
}
</script>

<style>
.list_content {
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  width: 596px;
  border: #383838 1px solid;
  min-height: 60px;
  position: relative;
}
.list_content_C{
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 20px;
    border: #383838 1px solid;
    text-align: center;
    line-height: 20px;
    font-size: 14px;
    color: #383838;
    cursor: pointer;
}
</style>
