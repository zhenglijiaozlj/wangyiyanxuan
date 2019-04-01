<template>
  <div id="wrapper">
    <swiper
      id="firstViewContainer"
      :indicator-dots="index!==3"
      @change="handleChange">
      <swiper-item>
        <img src="/static/imgs/firstView/1.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/2.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/3.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/nvsheng.jpg" alt="">
      </swiper-item>
    </swiper>
    <button class="btn" v-show="index===3" @click="handleClick">开始体验</button>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        index: 0
      }
    },
    methods: {
      handleChange(event){
        this.index = event.mp.detail.current
      },
      handleClick(){
        wx.navigateTo({
          url: '/pages/personal/main'
        })
      }
    },
  }
</script>
<style lang="stylus" rel="stylesheet/styles">
  #wrapper
    width 100%
    height 100%
    #firstViewContainer
      width 100%
      height 100%
      img
        width 100%
        height 100%
    .btn
      width 300rpx
      height 80rpx
      margin-top -100rpx
      line-height 80rpx
      font-size 40rpx
      background rgba(255,255,255,0.5)
</style>
