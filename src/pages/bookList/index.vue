<template>
  <ul class="bookListContainer">
    <li
      v-for="(book,index) in booksList"
      :key="index"
      @click="toDetail(book)"
      >
      <div class="left">
        <img :src="book.image" alt="">
        <div class="bookIntro">
          <p>{{book.title}}</p>
          <p>作者：{{book.author}}</p>
          <p>出版社：{{book.publisher}}</p>
        </div>
      </div>
      <span>{{book.price}}</span>
    </li>
  </ul>
</template>
<script>
  export default{
    props:['booksList'],
    data(){
      return {
        booksList:[]
      }
    },
    mounted(){
      if(this.$mp) {
        this.booksList = JSON.parse(this.$mp.query.booksList)
      }
      wx.setNavigationBarTitle({
        title:'图书列表'
      })
    },
    methods:{
      toDetail(book){
        wx.navigateTo({
          url: '/pages/detail/main?book='+JSON.stringify(book)
        })
      }
    }
  }
</script>
<style lang="stylus"  rel="stylesheet/styles">
  .bookListContainer
    width 100%
    height 100%
    li
      width 100%
      height 200rpx
      display flex
      justify-content space-between
      border-bottom 1rpx solid #eee
      padding 10rpx
      .left
        display flex
        img
          width 200rpx
          height 200rpx
        .bookIntro
          max-width 70%
          margin-left 18rpx
          display flex
          flex-direction column
          justify-content space-between
          font-size 28rpx
          padding 15rpx 0
      span
        margin-right 40rpx
        font-size 32rpx
        color #f00
        font-weight 700
</style>
