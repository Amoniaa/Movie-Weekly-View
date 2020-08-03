Page({
  data: {
    weeklyMovieList: [
      {
        name: "天空之城",
        comment: "飞行岛的神秘冒险。",
        imagePath: "/images/tkzc.jpg",
        isHighlyRecommended: true,
        id: 1291583
      }, 
      {
        name: "千与千寻",
        comment: "神隐少女的的神界冒险之旅。",
        imagePath: "/images/qx.jpg",
        isHighlyRecommended: true,
        id: 1291561
      }, 
      {
        name: "魔女宅急便",
        comment: "少女的修行往事。",
        imagePath: "/images/mvzjb.jpg",
        isHighlyRecommended: true,
        id: 1307811
      }, 
      {
        name: "哈尔的移动城堡",
        comment: "魔法世界的奇妙历程。",
        imagePath: "/images/hedydcb.jpg",
        isHighlyRecommended: true,
        id: 1308807
      }, 
      {
        name: "起风了",
        comment: "天才设计师的飞行梦。",
        imagePath: "/images/qfl.jpg",
        isHighlyRecommended: false,
        id: 6791750
      }, 
      {
        name: "悬崖上的金鱼公主",
        comment: "金鱼公主的蜕变旅程。",
        imagePath: "/images/xysdjygz.jpg",
        isHighlyRecommended: true,
        id: 1959877
      }, 
      {
        name: "龙猫",
        comment: "乡间居住的温暖故事。",
        imagePath: "/images/lm.jpg",
        isHighlyRecommended: true,
        id: 1291560
      }
    ],
    count: 0,
    score: 61
  },

  onLoad: function (options) {
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1
    })
  },

  f0: function (event) {
    this.setData({
      currentIndex: this.data.weeklyMovieList.length - 1
    })
  },

  f1: function (event) {
    var movieId = event.currentTarget.dataset.movieId
    //console.log(movieId);

    wx.navigateTo({
      url: '/pages/detail/detail?id=' + movieId
    })
  },

  onShareAppMessage: function () {
    return {
      title: "每周推荐"
    }
  }



})