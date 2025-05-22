<!--
 * @Author: your name
 * @Date: 2022-04-22 22:41:33
 * @LastEditTime: 2025-05-22 11:20:45
 * @LastEditors: xiejun xiejun@keeprisk.com
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /htmlTemplete/Users/jiwenjie/Desktop/codeWorkSpace/VsCodeSpace/do-it-myself/vue-project-base/src/App.vue
-->
<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Heder />
    <router-view />
  </div>
</template>
<script>
import Heder from'@/components/layout/header.vue' 

  export default {
    name: 'IndexHome',
    components: {Heder},
    data() {
      return {
        languageStr: "en"
      }
    },
    created() {

    },
    methods: {

    }
  }

</script>
<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
    
  }
</style>
