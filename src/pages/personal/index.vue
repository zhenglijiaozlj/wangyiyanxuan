<template>
  <div id="personalContainer">
    <div class="head">
      <img :src="userInfo.avatarUrl?userInfo.avatarUrl:'/static/imgs/personal/personal.png'" alt="">
      <button open-type="getUserInfo" @getuserinfo="handleGetUserInfo">{{userInfo.nickName?userInfo.nickName:'登录'}}</button>
    </div>
    <div class="cardList">
      <div class="card" @click="handleCollection">
        <span>我的收藏</span>
        <span class="more">more ></span>
      </div>
      <div class="card" @click="toScan">
        <span>扫码看书</span>
        <span class="more">more ></span>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        userInfo: {}
      }
    },
    mounted(){
//      用户授权后获取用户信息
      wx.getUserInfo({
        success: (res) => {
          this.userInfo = res.userInfo
        },
        fail: () => {
          console.log('获取失败')
        }
      })
    },
    methods: {
//        弹出授权框
      handleGetUserInfo(res){
//        判断用户点击的是否是授权
        if(res.mp.detail.userInfo){
          this.userInfo = res.mp.detail.userInfo
        }
      }
    }
  }
</script>
<style lang="stylus"  rel="stylesheet/styles">
  #personalContainer
    display flex
    flex-direction column
    .head
      width 100%
      background #02a774
      padding 40rpx 0
      img
        width 100rpx
        height 100rpx
        vertical-align middle
        margin 0 40rpx
        border-radius 50rpx
      button
        display inline-block
        height 60rpx
        line-height 60rpx
        background rgba(0,0,0, .2)
        vertical-align middle
        color #fff
        font-size 28rpx

    .cardList
      .card
        width 90%
        margin 20rpx auto
        border 1rpx solid #eeeeee
        padding 20rpx
        border-radius 10rpx
        font-size 30rpx
        .more
          float right
</style>
