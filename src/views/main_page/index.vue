<template>
  <div class="container">
    <div class="header">
      <cube-slide ref="slide" :data="items" @change="changePage" :autoPlay="false">
        <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
          <a :href="item.url">
            <img src="@/assets/logo.png">
          </a>
        </cube-slide-item>
      </cube-slide>
    </div>
    <div class="notice">
      <div class="news-left">
        <img src="@/assets/notice.png">
      </div>
      <div class="news-right">
        <cube-slide ref="slide" :data="items" direction="vertical" :showDots="false">
          <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
            <div class="notice-font">
              <p>重要通知！！</p>
            </div>
          </cube-slide-item>
        </cube-slide>
      </div>
    </div>
    <div class="list-scroll-wrap">
      <cube-scroll
          ref='alarm-list-scroll'
          :data="items" :options="options"
          :scroll-events="['scroll']"
          @pulling-down="onPullingDown">
        <div class="show-price">
          <div class="price-item" :key="item.name" v-for="item in coins">
            <div>
              <p>{{ item.name }}</p>
              <p :style="item.red?style_red:style_green">{{ item.price }}</p>
              <p :style="item.red?style_red:style_green">{{ item.percent }}</p>
            </div>
          </div>

        </div>
        <div class="button">
          <div class="card">
            <div class="card-api">
              <p>API授权</p>
              <p>快捷一键办理</p>
            </div>
            <div class="card-bill">
              <p>电子账单</p>
              <p>急速查询 轻松知晓</p>
            </div>
          </div>
        </div>
        <div id="coin-tab">
          <cube-tab-bar
              v-model="selectedLabelDefault"
              show-slider
              :data="tabs"
              @change="changeTabHandler">
          </cube-tab-bar>

        </div>
        <!--  下拉刷新  需要加上:cube-pulldown-wrapper  定位下拉盒子内容在content顶部 :style="pullDownStyle" -->
        <template slot="pulldown" slot-scope="props">
          <div
              v-if="props.pullDownRefresh"
              class="cube-pulldown-wrapper"
              :style="props.pullDownStyle">
            <div
                v-show="props.beforePullDown"
                class="before-trigger"
                :style="{paddingTop: props.bubbleY + 'px'}">
              <span :class="{rotate: props.bubbleY > 20}">↓</span>
            </div>
            <div class="after-trigger" v-show="!props.beforePullDown">
              <div v-show="props.isPullingDown" class="loading">
                <cube-loading></cube-loading>
              </div>
              <div v-show="!props.isPullingDown" class="text"><span class="refresh-text">加载成功！</span></div>
            </div>
          </div>

        </template>
      </cube-scroll>


    </div>


  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      selectedLabelDefault: 'huobi',
      tabs: [{
        label: '火币',
        value: 'huobi',
      }, {
        label: 'Biance',
      }, {
        label: 'OKEx',
      }, {
        label: '比特儿',
      }],

      /* options 参数配置参考better-scroll 的官网*/
      items: [1, 2, 3],
      options: {
        pullDownRefresh: {
          threshold: 40,
          stop: 50,
        },
        pullUpLoad: {
          threshold: 100,
        },
      },
      pullDownY: 0,
      pullDownStyle: '',
      coins: [
        {name: 'UTC/BTC', price: '15685.66', percent: '15.9%', red: 1},
        {name: 'UTC/ETH', price: '15685.66', percent: '15.9%', red: 1},
        {name: 'UTC/ABC', price: '15685.66', percent: '15.9%', red: 0},
      ],
      style_red: 'color: red',
      style_green: 'color: #03ad90',
    }
  },
  computed: {},

  methods: {
    changeTabHandler(value) {
      console.log(value)
    },
    onPullingDown() {
      console.log("pull down!!!!")
      setTimeout(() => {
        this.$refs['alarm-list-scroll'].forceUpdate()
      }, 1000)
    },
    changePage(current) {
      console.log('当前轮播图序号为:' + current)
    },
    clickHandler(item, index) {
      console.log(item, index)
    },
    onScrollHandle(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="stylus">
.container {
  width 100%
  height 100%
}

.header {
  width 100%
  height 220px;

  img {
    width 100%
    height 100%
  }

}

.notice {
  width 100%
  margin auto
  height 40px
  border-bottom 1px solid rgba(0, 0, 0, .08)

  .news-left {
    padding-left 30px

    width 8%
    height 100%
    float left
    display flex
    align-items center

    img {
      width: 22px;
      height: 22px;
    }
  }

  .news-right {
    float left
    height 100%
    width 70%

    .notice-font {
      height 100%
      width 100%
      align-items center
      display flex

      p {
        overflow: hidden;
        font-size: 13px;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}

.cube-pulldown-wrapper
  .before-trigger
    font-size: 30px
    line-height: 30px
    align-self: flex-end

    span
      display: inline-block
      transition: all 0.3s
      color: #666

      &.rotate
        transform: rotate(180deg)

  .after-trigger
    .text
      padding 12px 0

      .refresh-text
        color: grey

.list-scroll-wrap {
  height: calc(100vh - 1.5rem);

  .show-price {
    width 100%
    height 80px
    display flex
    flex-direction row
    border-bottom: 9px solid #f0f0f0;

    .price-item {
      width 33.3%
      height 100%
      display flex

      div {
        justify-content center
        margin auto

        p {
          font-size 13px
          font-weight 700
          text-align center

          &:nth-child(2) {
            font-size: 20px
            font-weight: 700
            line-height: 1.4
          }

          &:first-child {
            color #2d3033
          }
        }

      }
    }
  }

  .item {
    height: 1.6rem;
    background: lightblue;
    margin: 0.3rem;

    &:nth-child(1) {
      margin-top: 0;
    }
  }
}

.button {
  display flex
  position: relative;
}

.card {
  width 100%
  margin: 17px 18px;
  display flex
  justify-content: space-between
  overflow hidden


  .card-api {
    margin-right: 11px;
    border-radius: 5px;
    width: 191px;
    height: 93px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url('~_assets/api.jpg')
    position relative
    p {
      position absolute
      margin-left 15px
      color #fff
      &:first-child{
        top 16px
        line-height 30px;
        font-size 16px
        font-weight 800
      }
      &:last-child{
        top 50px
        font-size 12px
        opacity 0.7
      }
    }



  }

  .card-bill {
    border-radius: 5px;
    width: 191px;
    height: 93px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url('~_assets/api.jpg')
    position relative
    p {
      position absolute
      margin-left 15px
      color #fff
      &:first-child{
        top 16px
        line-height 30px;
        font-size 16px
        font-weight 800
      }
      &:last-child{
        top 50px
        font-size 12px
        opacity 0.7
      }
    }

  }
}
</style>

<style lang="stylus">

#coin-tab {
  .cube-tab {
    padding-bottom: 15px;
    div {
      font-weight 800
      font-size 16px
    }
  }
  .cube-tab_active {
    color #0078ff

    div {
      font-weight 800
      font-size 16px
    }
  }
}
</style>