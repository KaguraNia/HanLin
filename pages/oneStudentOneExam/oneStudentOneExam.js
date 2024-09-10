// pages/oneStudentOneExam/oneStudentOneExam.js
Page({
  buttonTapHandler: function (e) {
    console.log('按钮被点击了！');
    const app = getApp();
    // console.log(bid)
    // console.log(boQ)
    // console.log(baiJR)
    // console.log(bqA)
    const id = e.currentTarget.dataset.id;
    const s = this.data.qList[id].sId;
    console.log(id)
    console.log("this.data.qList[id].sId:" + this.data.qList[id].sId)
    app.globalData.sId = id + 1;
    wx.navigateTo({
      url: '../testQList/testQList',
      success: function (res) {
        console.log('跳转成功');
      },
      fail: function (err) {
        console.log('跳转失败');
      }
    });
  },
  onOpen() {
    const that = this;
    const dqList = [];
    if (that.data.mark === true) {
      that.data.mark = false;
      for (let i = 0; i < that.data.sLength; i++) {
        let sId = that.data.subjectList[i].subId;
        console.log("sId" + sId);
        wx.request({
          url: 'http://121.37.109.0:8080/question/ocrResult?gradeId=' + sId,
          method: 'GET',
          success: function (res) {
            if (res.data.code === 200) {

              // 请求成功后的回调函数  
              console.log(res.data);
              // console.log(res.data.data[0].aiJudgeResult);
              // console.log(res.data.data.length);
              console.log('获取获取ocr图片分割结果成功');
              dqList.push({
                sId: sId,
                id: i,
                aiJR: res.data.data[0].aiJudgeResult,
                oQ: res.data.data[0].originalQuestion,
                qA: res.data.data[0].questionAnswer,
              });

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
      }
      dqList.sort((a, b) => a.id - b.id);
      // console.log(dqList);
      that.setData({
        qList: dqList
      });

      // console.log(that.data.qList);
    }
    this.data.qList.sort((a, b) => a.id - b.id);
    this.setData({
      qList: this.data.qList
    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    activeName: ['0'],
    receivedQuizId: null,
    receivedButtonText: null,
    bTotalScore: null,
    subjectList: [],
    knowList: [],
    qList: [],
    sLength: null,
    mark: true
  },
  onChange(event) {
    this.setData({
      activeName: event.detail,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const that = this;
    const subjectList = [];
    const knowList = [];
    this.setData({
      receivedQuizId: options.quizId,
      receivedButtonText: options.buttonText,
      bTotalScore: options.bTotalScore
    });
    console.log("接收到的 quizId：", this.data.receivedQuizId);
    console.log("接收到的 buttonText：", this.data.receivedButtonText);
    wx.request({
      url: 'http://121.37.109.0:8080/subject/grade?quizId=' + this.data.receivedQuizId,
      method: 'GET',
      success: function (res) {
        if (res.data.code === 200) {
          // 请求成功后的回调函数  
          console.log(res.data);
          console.log(res.data.data.length);
          console.log('获取各科成绩列表成功');
          let sId;
          that.setData({
            sLength: res.data.data.length,
          });
          const app = getApp();
          app.globalData.qId = res.data.data[0].quizId;
          for (let i = 0; i < res.data.data.length; i++) {
            sId = res.data.data[i].id;
            subjectList.push({
              id: i,
              subId: sId,
              subject: res.data.data[i].subject,
              score: res.data.data[i].score,
              fullScore: res.data.data[i].fullScore
            });
          }
          that.setData({
            subjectList: subjectList,
          });
        } else {
          console.log('获取各科成绩列表失败');
          wx.showModal({
            title: '提示',
            content: '获取各科成绩列表失败'
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
    wx.request({
      url: 'http://121.37.109.0:8080/knowledgePoint/getOne?quizId=' + this.data.receivedQuizId,
      method: 'GET',
      success: function (res) {
        if (res.data.code === 200) {
          // 请求成功后的回调函数  
          console.log(res.data);
          // console.log(res.data.data.length);
          console.log('获取相关知识点列表和掌握情况成功');
          for (let i = 0; i < res.data.data.length; i++) {
            knowList.push({
              id: i,
              content: res.data.data[i].content,
              masteryDegree: res.data.data[i].masteryDegree,
            });
          }
          that.setData({
            knowList: knowList
          });
        } else {
          console.log('获取相关知识点列表和掌握情况失败');
          wx.showModal({
            title: '提示',
            content: '获取相关知识点列表和掌握情况失败'
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