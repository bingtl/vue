// vue 的插件库
(function(){
    // 定义向外暴露的插件对象
    const MyPlugin = {}
    // 插件对象必须有一个 install方法， 接收一个vue和options
    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或属性
        Vue.myGlobalMethod = function () {
         console.log('vue函数对象的方法myGlobalMethod（）')
        }
      
        // 2. 添加全局资源
        Vue.directive('my-directive', function(el,binding){
            
            el.textContent = binding.value.toUpperCase()
            
        
        })
      
        // 3. 注入组件选项
        Vue.mixin({
          created: function () {
            // 逻辑...
          }
        })
      
        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
          console.log('vue实例对象的方法')
        }
      }
    //   向外暴露
    window.MyPlugin = MyPlugin
})()