<template>
  <div class="detailContainer">
    <h1 class="title">{{book.title}}</h1>
    <img :src="book.image" alt="">
    <div class="bookProfile">
      <p>作者:{{book.author}}</p>
      <p>出版社:{{book.publisher}}</p>
      <p>出版日期:{{book.pubdate}}</p>
      <p>定价:{{book.price}}</p>
    </div>
    <div class="btn">
      <button>收藏文章</button>
      <button>分享文章</button>
    </div>
    <div class="contentIntro">
      <h2 class="authorIntro">作者简介</h2>
      <p>{{book.author_intro}}</p>
      <h2>文章简介</h2>
      <p class="summary">{{book.summary}}</p>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        book:{}
      }
    },
    mounted(){
      this.book = JSON.parse(this.$mp.query.book)
      wx.setNavigationBarTitle({
        title: this.book.title
      })
    }
  }
</script>
<style lang="stylus"  rel="stylesheet/styles">
  .detailContainer
    display flex
    flex-direction column
    h1
      height 80rpx
      text-align center
      line-height 80rpx
      font-weight  700
    img
      width 70%
      height 700rpx
      margin 20rpx auto
    .bookProfile
      padding-left 15%
      font-size 32rpx
    .btn
      margin 30rpx auto 60rpx
      display flex
      button
        width 200rpx
        height 80rpx
        line-height 80rpx
        font-size 32rpx
        margin 0 20rpx
    .contentIntro
      padding 10%
      font-size 32rpx
      h2
        text-align: center
        color #02a774
        font-size 36rpx
        font-weight: 700
      p
        width 100%
        font-size 34rpx
        text-indent 34rpx
</style>
