<template>
  <cube-tab-bar
      v-model="selectedLabelDefault"
      :data="tabs"
      @click="clickHandler"
      @change="changeHandler">
  </cube-tab-bar>
</template>
<script>
export default {
  data() {
    return {
      selectedLabelDefault: '首页',
      tabs: [{
        label: '首页',
        icon: 'cubeic-home'
      }, {
        label: '交易',
        icon: 'cubeic-like'
      }, {
        label: '日志',
        icon: 'cubeic-calendar'
      }, {
        label: '资讯',
        icon: 'cubeic-person'
      }, {
        label: '我的',
        icon: 'cubeic-person'
      }]
    }
  },
  methods: {
    clickHandler(label) {
      // if you clicked home tab, then print 'Home'
      console.log(label)
    },
    changeHandler() {
      // if you clicked different tab, this methods can be emitted
    }
  }
}
</script>