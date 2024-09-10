// pages/oneStudentGrade/oneStudentGrade.js
Page({
  buttonTapHandler: function (e) {
    console.log('按钮被点击了！');
    const buttonId = e.currentTarget.dataset.id; // 获取被点击按钮的 id  
    const quizId = this.data.buttonList[buttonId].quizId;
    const buttonText = this.data.buttonList[buttonId].text;
    const bTotalScore = this.data.buttonList[buttonId].totalScore;
    console.log("buttonId：", buttonId);
    console.log("quizId：", quizId);
    console.log("buttonText：", buttonText);
    console.log("bTotalScore：", bTotalScore);
    wx.navigateTo({
      url: '../oneStudentOneExam/oneStudentOneExam?quizId=' + quizId + '&buttonText=' + buttonText+ '&bTotalScore=' + bTotalScore,
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
      url: 'http://121.37.109.0:8080/quiz/quizNum?username=' + app.globalData.username, // 将用户名编码为 URL 安全的格式  
      method: 'GET',
      success: function (res) {
        if (res.data.code === 200) {
          // 请求成功后的回调函数  
          console.log(res.data);
          quizNum = res.data.data;
          console.log('获取学生的测验次数成功');
          wx.request({
            url: 'http://121.37.109.0:8080/quiz/quiz?username=' + app.globalData.username, // 将用户名编码为 URL 安全的格式  
            method: 'GET',
            success: function (res) {
              if (res.data.code === 200) {
                // 请求成功后的回调函数  
                console.log(res.data);
                //console.log(res.data.data[0].id);
                console.log('获取学生的测验列表成功');
                const buttonList = [];

                for (let i = 0; i < quizNum; i++) {
                  buttonList.push({
                    id: i, // 每个按钮的唯一标识  
                    quizId: res.data.data[i].id,
                    text: res.data.data[i].quizName, // 按钮的文本内容  
                    totalScore: res.data.data[i].totalScore
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
        } else {
          console.log('获取学生的测验次数失败');
          wx.showModal({
            title: '提示',
            content: '获取学生的测验次数失败'
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