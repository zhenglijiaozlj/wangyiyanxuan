<template>
  <div class="bookSearch">
    <div class="searchContainer">
      <input
        class="search"
        type="text"
        placeholder="书中自有黄金屋"
        placeholder-class
        confirm-type="search"
        v-model="searchContent"
        @confirm="handleConfirm"

      />
      <span @click="handleEmpty" v-show="searchContent">X</span>
    </div>
    <BookList :booksList="bookData" :searchContent="searchContent" v-if="bookData"/>
  </div>
</template>
<script>
  import BookList from  '../bookList/index.vue'
  import request from '../../utils/request'
  export default{
    components:{
      BookList
    },
    data(){
      return {
        searchContent:'',
        bookData:0
      }
    },
    methods:{
      handleEmpty(){
        this.searchContent = ''
      },
      async handleConfirm(){
        let {searchContent} = this
        const result = await request('http://localhost:3000/searchBooks',searchContent)
          let items = []
          result.forEach((item,index)=>{
            if(item.title.indexOf(searchContent,0)>=0){
              items.push(item)
            }
          })
        this.bookData = items
        console.log(items)
      }
    }
  }
</script>
<style lang="stylus"  rel="stylesheet/styles">
  .bookSearch
    width 100%
    height 100%
    .searchContainer
      position relative
      width 80%
      height 80rpx
      margin 0 auto
      border-bottom 2rpx solid #02a774
      .search
        width 95%
        float left
        height 80rpx
        .input-placeholder
          text-align center
          font-size 28rpx
          line-height 80 rpx
          color  #02a774
      span
        float right
        height 80rpx
        line-height 80rpx
</style>
