Page({

  data: {
    detailObj: {},
    index: null,
    // 是否收藏
    isCollected: false,
    id: null
  },

  onLoad: function (options) {
    console.log(options.id)
    this.setData({
      mid: options.id,
      id: options.id
    })

    var that = this

    wx.request({
      url: "https://douban.uieee.com/v2/movie/subject/" + options.id,
      

      header: {
        "content-type": "json"
      },

      success: function (res) {
        console.log(res)
        if(res.statusCode==200){

          that.setData({
            movie: res.data
          })

          wx.setNavigationBarTitle({
            title: res.data.rating.average + "分: " + res.data.title,
          })

          wx.hideNavigationBarLoading()
          wx.hideLoading()
        }

      }

    })
    
    wx.showNavigationBarLoading()
    wx.showLoading({
      title: '加载中',
    })

    // //根据本地缓存的数据判读用户是否收藏
    // let detailStorage = wx.getStorageSync('isCollected')
    // //如果没有收藏
    // if (!detailStorage) {
    //   //初始化一个空的对象
    //   wx.setStorageSync('isCollected', {});
    // }
    // //如果收藏了
    // if (detailStorage[index]) {
    //   this.setData({
    //     isCollected: true
    //   })
    // }

  },

  onShareAppMessage: function () {
    return {
      title: "向你推荐：" + this.data.movie.title
    }
  },
  previewImg: function (e) {
    var imgUrl = e.currentTarget.dataset.src; //获取当前点击的图片
    var imgArr = this.data.imgArr;
    wx.previewImage({
      current: imgUrl, //当前图片地址
      urls: imgArr,  //所有要预览的图片的地址集合数组形式
      urls: [imgUrl], //一张图写法
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  handleCollection() {
    let isCollected = !this.data.isCollected
    this.setData({
      // 下面本来是这样子的:isCollected=isCollected,可以简写
      isCollected
    })
    //提示用户
    wx.showToast({
      title: isCollected ? '收藏成功' : '取消收藏',
      icon: 'success'
    })
    // //点击收藏图标后缓存数据到本地
    // //把data中的index放到新let出来的index中,因为下面要把index也存进去,要用index来判断你收藏了哪个页面
    // let { index } = this.data;

    // //首先去看一下缓存的数据
    // wx.getStorage({
    //   key: 'isCollected',
    //   success: (data) => {
    //     let obj = data.data;
    //     //如果有,则刷新,没有则追加
    //     obj[index] = isCollected;
    //     wx.setStorage({
    //       key: 'isCollected',
    //       data: obj,
    //       success: () => {

    //       }
    //     });
    //   }
    // })
  }
})