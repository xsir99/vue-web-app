<template>
  <div class="content">
    <div class="head">
      <img class="shezhi" src='~_assets/shezhi.png'/>

      <div class="jihuo">
        <div style="display: flex;
    flex-direction: column;
    align-items: center;">
          <img class="jihuo-img" src='~_assets/jihuo.png'/>
          <p>用户激活</p>
        </div>

      </div>
      <div class="user">
        <div class="icon"></div>
        <div class="user-info">
          <p>Cccc</p>
          <p>已激活</p>
          <p>AniyiWangnian</p>
        </div>
      </div>

    </div>
    <div class="form">
      <div class="line">
        <img src="~_assets/test.png">
        <p>资产</p>
        <img src="~_assets/jiantou-you.png">
      </div>
      <div class="line">
        <img src="~_assets/shequ.png">
        <p>交易记录</p>
        <img src="~_assets/jiantou-you.png">
      </div>
      <div class="line"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="stylus" scoped>
.content {
  width 100%
  height 100%

  .form {
    width 100%
    background #ffffff

    .line {
      width 90%
      margin auto
      height 70px
      border-bottom 1px solid rgba(0, 0, 0, .08)
      display flex
      flex-direction row
      align-items center

      position relative

      p {
        font-weight 800
        font-size 17px
        color #2d2f33
      }
      img:nth-of-type(1) {
        position absolute
        left 0px
      }
      img:nth-of-type(2) {
        position absolute
        right 0px
      }

    }
  }

  .head {
    width 100%
    height 220px
    background-color: #163ce2;
    background-image: linear-gradient(297deg, #163ce2 0%, #80D0C7 100%);
    position relative

    .shezhi {
      position absolute
      top 20px
      right 20px
      width 25px
      height 25px
    }

    .jihuo {
      position absolute
      top 120px
      right 10px

      img {
        width 30px
        height 30px
      }

      p {
        margin-top 5px
        font-size 12px
        color #fff
      }
    }

    .user {
      position absolute
      top 100px
      margin-left 20px

      .icon {
        width 80px
        height 80px
        border-radius 80px
        background #2d3033
        display inline-block
      }

      .user-info {
        margin-left 20px
        display inline-block
        position absolute

        p {
          color #fff
          line-height 25px
          font-size 16px

          &:first-child {
            font-size 20px
            font-weight 800

          }
        }
      }
    }


  }
}

</style>