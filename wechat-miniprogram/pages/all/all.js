// pages/all/all.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buttonList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const that=this;
    wx.request({
      url: 'http://121.37.109.0:8080/user/get', // 将用户名编码为 URL 安全的格式  
      method: 'GET',
      success: function (res) {
        if (res.data.code === 200) {
          // 请求成功后的回调函数  
          console.log(res.data);
          //console.log(res.data.data[0].id);
          console.log('获取用户列表成功');
          const buttonList = [];
          const quizNum=res.data.data.length;
          for (let i = 0; i < quizNum; i++) {
            buttonList.push({
              id: i, // 每个按钮的唯一标识  
              userId: res.data.data[i].id%10000,
              userName: res.data.data[i].name, // 按钮的文本内容  
              userP: res.data.data[i].password
            });
          }
          that.setData({
            buttonList: buttonList
          });
        } else {
          console.log('获取学生的测验列表失败');
          wx.showModal({
            title: '提示',
            content: '获取学生的测验列表失败'
          })
        }
      },
      fail: function (error) {
        // 请求失败后的回调函数  
        wx.showModal({
          title: '提示',
          content: '获取学生的测验列表请求失败'
        })
        console.log('获取学生的测验列表请求失败');
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})