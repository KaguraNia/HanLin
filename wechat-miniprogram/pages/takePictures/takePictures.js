// pages/takePictures/takePictures.js
import Toast from '../../dist/toast/toast';
Page({
  afterRead(event) {
  },
  /**
   * 页面的初始数据
   */
  onChange(event) {
    this.setData({
      activeNames: event.detail,
    });
  },
  data: {
    gradientColor: {
      '0%': '#6149f6',
      '100%': '#4bb0ff',
    },
    fileList: [],
    value: 1,
    tt: "上传中…",
    username: null,
    activeNames: ['1', '2', '3'],
    option1: [{
        text: '语文',
        value: 0
      },
      {
        text: '数学',
        value: 1
      },
      {
        text: '英语',
        value: 2
      },
      {
        text: '物理',
        value: 3
      },
      {
        text: '化学',
        value: 4
      },
      {
        text: '生物',
        value: 5
      },
      {
        text: '历史',
        value: 6
      },
      {
        text: '地理',
        value: 7
      },
      {
        text: '政治',
        value: 8
      },
    ],
    option2: [],
    value2: 9,
    value1: 0,
  },
  bindDelete(event) {
    console.log(event.detail.index);
  },
  change1(value) {
    //console.log(value.detail);
    this.setData({
      value1: value.detail
    })
    //console.log(this.data.value1);
  },
  change2(value) {
    //console.log(value.detail);
    this.setData({
      value2: value.detail
    })
    //console.log(this.data.value1);
  },
  afterClick() {
    const that = this;
    const app = getApp();
    const v = this.data.value1;
    const sub = this.data.option1[v].text;
    console.log(this.data.option1[v].text)

    that.setData({
      fileList: []
    })
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'http://121.37.109.0:8080/image/img/upload?subject=' + sub + '&quizid=' + 1, 
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success(res) {
            console.log(res);
            if (res.statusCode === 200) {
              // 请求成功后的回调函数  
              // console.log(res.data);
              // console.log(res.data.data.length);
              console.log('试卷上传成功');
              wx.showModal({
                title: '试卷上传成功',
                content: 'AI 奋力批阅中，稍后可在 “卷海诗卉” 查看详情'
              })
              that.setData({
                fileList: []
              })
            } else {
              console.log('试卷上传失败');
              that.setData({
                fileList: []
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
        })
      }
    })
    // wx.uploadFile({
    //   // url: 'http://121.37.109.0:8080/image/img/upload?subject=' + sub + '&quizid=' + 1,
    //   name: 'photo',
    //   url: "http://121.37.109.0:8080/image/img/upload",
    //   success: function (res) {
    //     console.log(res.data);
    //     if (res.data.code === 200) {
    //       // 请求成功后的回调函数  
    //       // console.log(res.data);
    //       // console.log(res.data.data.length);
    //       console.log('试卷上传成功');
    //       that.setData({
    //         fileList: []
    //       })
    //     } else {
    //       console.log('试卷上传失败');
    //       that.setData({
    //         fileList: []
    //       })
    //     }
    //   },
    //   fail: function (error) {
    //     // 请求失败后的回调函数  
    //     wx.showModal({
    //       title: '提示',
    //       content: '请求失败'
    //     })
    //     console.log('请求失败');
    //   }
    // });
  },
  afterRead(event) {
    const fileList = this.data.fileList;
    const {
      file
    } = event.detail;
    fileList.push({
      url: file.url,
      name: 'file',
    })
    this.setData({
      fileList: fileList
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const app = getApp();
    const username = app.globalData.username;
    this.setData({
      username: username
    })
    const that = this;
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
                    value: i + 9, // 每个按钮的唯一标识  
                    userId: res.data.data[i].id,
                    text: res.data.data[i].userName, // 按钮的文本内容  
                  });
                }
                that.setData({
                  option2: buttonList
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
  onChange(event) {
    const {
      picker,
      value,
      index
    } = event.detail;
    //Toast(`当前值：${value}, 当前索引：${index}`);
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