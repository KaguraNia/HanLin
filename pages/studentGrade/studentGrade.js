// pages/oneStudentGrade/oneStudentGrade.js
Page({
  buttonTapHandler: function (e) {
    console.log('按钮被点击了！');
    const buttonId = e.currentTarget.dataset.id; // 获取被点击按钮的 id  
    const userId = this.data.buttonList[buttonId].userId;
    const buttonText = this.data.buttonList[buttonId].text;
    const app = getApp();
    app.globalData.username=buttonText;
    wx.navigateTo({
      url: '../oneStudentGrade/oneStudentGrade?userId=' + userId,
      success: function (res) {
        console.log('跳转成功');
      },
      fail: function (err) {
        console.log('跳转失败');
      }
    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    buttonList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const that = this;
    const app = getApp();
    let quizNum;
    wx.request({
      url: 'http://121.37.109.0:8080/quiz/quizs?username=' + app.globalData.getExam, // 将用户名编码为 URL 安全的格式  
      method: 'GET',
      success: function (res) {
        if (res.data.code === 200) {
          // 请求成功后的回调函数  
          console.log(res.data);
          quizNum = res.data.data;
          console.log('获取学生的测验次数成功');
          wx.request({
            url: 'http://121.37.109.0:8080/quiz/grades?username=' + app.globalData.getExam, // 将用户名编码为 URL 安全的格式  
            method: 'GET',
            success: function (res) {
              if (res.data.code === 200) {
                // 请求成功后的回调函数  
                console.log(res.data);
                //console.log(res.data.data[0].id);
                console.log('获取教师的测验列表成功');
                const buttonList = [];

                for (let i = 0; i < quizNum; i++) {
                  buttonList.push({
                    id: i, // 每个按钮的唯一标识  
                    userId: res.data.data[i].id,
                    text: res.data.data[i].userName, // 按钮的文本内容  
                  });
                }
                that.setData({
                  buttonList: buttonList
                });
              } else {
                console.log('获取教师的测验列表失败');
                wx.showModal({
                  title: '提示',
                  content: '获取教师的测验列表失败'
                })
              }
            },
            fail: function (error) {
              // 请求失败后的回调函数  
              wx.showModal({
                title: '提示',
                content: '获取教师的测验列表请求失败'
              })
              console.log('获取教师的测验列表请求失败');
            }
          });
        } else {
          console.log('获取教师的测验次数失败');
          wx.showModal({
            title: '提示',
            content: '获取教师的测验次数失败'
          })
        }
      },
      fail: function (error) {
        // 请求失败后的回调函数  
        wx.showModal({
          title: '提示',
          content: '请求失败'
        })
        console.log('请求失败');
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