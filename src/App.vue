<template>
  <div id="app">
    <!--    <HelloWorld class="main" msg="Welcome to Your Vue.js App"/>-->
    <router-view></router-view>
  </div>
</template>

<script>
import './style/global.styl'

export default {
  name: 'App',
  components: {}
}
</script>

<style lang="stylus">

#app {
  display block
  width 100%
  height 100%
}

</style>
