export default function(url,data='',method='GET'){
  return new Promise((resolve,reject)=>{
    wx.request({
      url,
      data,
      method,
      success(res) {
        const result = res.data
        resolve(result)
      }
    })
  })
}
