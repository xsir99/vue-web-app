<template>
  <div id="content" class="layout">

    <router-view style="z-index: 1"></router-view>
    <cube-tab-bar
        class="menu"
        v-model="selectedLabelDefault"
        :data="tabs"
        @click="clickHandler"
        @change="changeHandler">
    </cube-tab-bar>
  </div>

</template>

<script>
export default {
  name: "index",
  data() {
    return {
      selectedLabelDefault: 'main',
      tabs: [{
        label: '首页',
        icon: 'iconfont icon-1  ',
        value: 'main'
      }, {
        label: '交易',
        icon: 'iconfont icon-jiaoyi',
        value: 'trade',
      }, {
        label: '日志',
        icon: 'iconfont icon-rizhixitong',
        value: 'log',
      }, {
        label: '资讯',
        icon: 'iconfont icon-zixun',
        value: 'info',
      }, {
        label: '我的',
        icon: 'iconfont icon-My',
        value: 'mine'
      }]
    }
  },
  created() {
    console.log("init layout")

  },
  methods: {
    clickHandler(label) {
      // if you clicked home tab, then print 'Home'
      console.log("click", label)
    },
    changeHandler(label) {
      console.log("handle", label)
      this.$router.replace({path: '/' + label})

      // if you clicked different tab, this methods can be emitted
    }
  }
}
</script>

<style lang="stylus" scoped>
.layout {
  width 100%
  z-index 999
}

.menu {
  width 100%
  position fixed
  bottom 0
  z-index 999

}
  .icon1 {
    background-image url("~_assets/icon/home/icon1.png")
  }
</style>