<template>
  <div>
    <div class="header">
      <cube-slide ref="slide" :data="items" @change="changePage" :autoPlay="false">
        <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
          <a :href="item.url">
            <img src="@/assets/logo.png">
          </a>
        </cube-slide-item>
        <cube-slide-item>
          <a >
            <img src="@/assets/LOGO01@2x.png">
          </a>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      items: [
        {
          url: 'http://www.didichuxing.com/',
          image: '@/assets/logo.png'
        },
        {
          url: 'http://www.didichuxing.com/',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
        },
        {
          url: 'http://www.didichuxing.com/',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
        }
      ]
    }
  },
  methods: {
    changePage(current) {
      console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index) {
      console.log(item, index)
    }
  }
}
</script>

<style lang="stylus" scoped>
  img {
    width 100%
    height 100%
  }

</style>