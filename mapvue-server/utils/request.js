
// 浏览器和React Native
let Fly=require("flyio/dist/npm/fly")
let fly=new Fly;
//通过用户id获取信息,参数直接写在url中
exports.get = function(url){
  return new Promise(res=>{
    fly.get(url)
      .then(function (response) {
        console.log(response);
        res(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  })
}

