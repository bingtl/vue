<template>
  <div class="add">
    <div class="add_title">新建事件</div>
    <div class="add_content">
      <h3>日志名称</h3>
      <input type="text" v-model="name">
      <h3>具体内容</h3>
      <textarea name id cols="30" rows="10" v-model="content"></textarea>
      <br>
      <button @click="add">提交</button>
    </div>
  </div>
</template>

<script>
// 引入组件

export default {
  props: {
    addComment: {
      // 指定了属性名/属性值的类型/必要性
      type: Function,
      required: true
    }
  },
  data () {
    return {
      name: '',
      content: ''
    }
  },
  methods: {
    add () {
      // 检查输入内容的合法性
      const name = this.name.trim()
      const content = this.content.trim()
      if (!name || !content) {
        alert('日志名称或日志内容不能为空')
        return
      }
      // 根据输入的数据，封装成一个comment对象
      const comment = {
        name,
        content
      }
      // 将内容添加到 comments中
      this.addComment(comment)

      //  清除输入内容
      this.name = ''
      this.content = ''
    }
  }
}
</script>

<style>
.add {
  width: 600px;
  float: left;
  overflow: hidden;
}
.add_title {
  width: 100%;
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 30px;
  color: #383838;
  font-weight: bold;
}
.add_content {
  width: 100%;
  margin-top: 50px;
  overflow: hidden;
}
</style>
