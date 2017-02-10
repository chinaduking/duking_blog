<template>
   <div id="editor">
      <!-- 通过 v-model 控制 value -->
      <markdown-editor v-model="content" ref="markdownEditor" :configs="configs"></markdown-editor>
   </div>
</template>

<script type="text/javascript">
 import { markdownEditor } from 'vue-simplemde'

 // 添加更多配置，获取编辑器对象，添加事件绑定，判断编辑器状态
export default {

  components: {
    markdownEditor
  },

  data () {
    return {
      content: 'hello markdown!',
      configs: {
        status: false, // 禁用底部状态栏
        initialValue: '请输入符合markdown格式的类容', // 设置初始值
        renderingConfig: {
          codeSyntaxHighlighting: true, // 开启代码高亮
          highlightingTheme: 'atom-one-light' // 自定义代码高亮主题，可选列表(https://github.com/isagalaev/highlight.js/tree/master/src/styles)
        }
      }
    }
  },

  computed: {
    simplemde () {
      return this.$refs.markdownEditor.simplemde
    }
  },


  methods: {
    handleInput () {
      // do some things
    }
  }
}
</script>

<style>
 
</style>