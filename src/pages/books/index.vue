<template>
  <div id="booksContainer">
    <swiper indicator-dots>
      <swiper-item v-for="(item,index) in carousel" :key="index">
        <img :src="item.image" alt="">
      </swiper-item>
    </swiper>
    <div class="booksList">
      <div class="nav">
        <h2>全部商品</h2>
        <span @click="toBookList"> > </span>
      </div>
      <ul class="list">
        <li v-for="(book,index) in booksList" :key="index" @click="toDetail(book)">
          <img :src="book.image" alt="">
          <p>《{{book.title}}》</p>
          <p>{{book.author}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import booksList from './datas/data.json'
  export default{
    data(){
      return {
        booksList:[]
      }
    },
    mounted(){
      this.booksList = booksList
    },
    computed:{
      carousel(){
        return [...this.booksList].splice(0,4)
      }
    },
    methods:{
      toDetail(book){
        wx.navigateTo({
          url: '/pages/detail/main?book='+JSON.stringify(book)
        })
      },
      toBookList(){
        const {booksList} = this
        wx.navigateTo({
          url: '/pages/bookList/main?booksList='+JSON.stringify(booksList)
        })
      }
    }
  }
</script>
<style lang="stylus"  rel="stylesheet/styles">
  #booksContainer
    width 100%
    swiper
      width 100%
      height 400rpx
      img
        width 100%
        height 400rpx
    .booksList
      width 100%
      .nav
        display: flex
        justify-content space-between
        padding 20rpx
        span
          width 50rpx
          height 50rpx
      .list
        width 100%
        li
          width 50%
          height 360rpx
          border-bottom 1rpx solid #eee
          box-sizing border-box
          float left
          text-align center
          img
            width 200rpx
            height 200rpx
            margin-top 20rpx
          p
            text-align center
            height 60rpx
            line-height 60rpx
            font-size 28rpx
          &:nth-child(2n+1)
            border-right  1rpx solid #eee
</style>
