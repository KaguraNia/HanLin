// pages/updateAI/updateAI.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    qqL: []
  },
  onChange(event) {
    // event.detail 为当前输入的值
    console.log(event.detail);
    this.setData({
      value: event.detail
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  afterClick() {
    const that = this;
    const app = getApp();
    console.log(this.data.value)
    wx.request({
      url: 'http://121.37.109.0:8080/question/update?questionId=' + app.globalData.qId + '&comment=' + that.data.value,
      method: 'PUT',
      success: function (res) {
        if (res.data.code === 200) {
          // 请求成功后的回调函数  
          console.log(res.data);
          // console.log(res.data.data.length);
          console.log('评语上传成功');
          wx.showModal({
            title: '提示',
            content: '评语上传成功'
          })
        } else {
          console.log('评语上传失败');
          wx.showModal({
            title: '提示',
            content: '评语上传失败'
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
  onLoad(options) {
    const app = getApp();
    const rrid = 2;
    // const rrid = app.globalData.sId;
    const dqList = [];
    const that = this;
    this.setData({
      rid: rrid,
    });
    wx.request({
      url: 'http://121.37.109.0:8080/question/ocrResult?gradeId=' + that.data.rid,
      method: 'GET',
      success: function (res) {
        if (res.data.code === 200) {

          // 请求成功后的回调函数  
          console.log(res.data);
          // console.log(res.data.data[0].aiJudgeResult);
          // console.log(res.data.data.length);
          console.log('获取获取ocr图片分割结果成功');
          for (let i = 0; i < res.data.data.length; i++) {
            dqList.push({
              id: i,
              aiJR: res.data.data[i].aiJudgeResult,
              oQ: res.data.data[i].originalQuestion,
              qA: res.data.data[i].questionAnswer,
            });
          }
          that.setData({
            qqL: dqList,
            value: res.data.data[0].aiJudgeResult
          })

        } else {
          console.log('获取获取ocr图片分割结果失败');
          wx.showModal({
            title: '提示',
            content: '获取获取ocr图片分割结果失败'
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