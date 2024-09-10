// pages/teacherHome/teacherHome.js
Page({
  buttonTapHandler1: function () {
    console.log('按钮被点击了！');
    wx.navigateTo({
      url: '../takePictures/takePictures', // 这里是教师拍照上传的路径
      success: function (res) {
        console.log('跳转成功');
      },
      fail: function (err) {
        console.log('跳转失败');
      }
    });
  },
  buttonTapHandler2: function () {
    console.log('按钮被点击了！');
    wx.navigateTo({
      url: '../classGrade/classGrade', // 这里是教师查看班级历次成绩统计的路径
      success: function (res) {
        console.log('跳转成功');
      },
      fail: function (err) {
        console.log('跳转失败');
      }
    });
  },
  buttonTapHandler3: function () {
    console.log('按钮被点击了！');
    wx.navigateTo({
      url: '../studentGrade/studentGrade', // 这里是教师查看学生成绩变化情况的路径
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
    active: 1,
  },
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    this.setData({
      active: event.detail
    });
    console.log('点击标签' + event.detail);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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