// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({

  buttonTapHandlert() {
    let uId, uType, tId;
    if (this.data.index === 0 || this.data.index === 3) { //学生
      uId = 3;
      uType = 1; //(type=1为学生、2为教师)
      tId = 2;
    }
    if (this.data.index === 1) { //教师
      uId = 2;
      uType = 2; //(type=1为学生、2为教师)
      tId = 0;
    }
    if (this.data.index === 2) { //管理员
      uId = 1;
      uType = 1; //(type=1为学生、2为教师)
      tId = 2;
    }
    console.log('按钮被点击了！');
    wx.request({
      // 请求地址，必须是以https://开头 
      // 必须是配置在request合法域名 
      url: 'http://121.37.109.0:8080//user/login',
      // 请求方式 
      method: 'POST',
      // 请求参数 
      data: {
        id: uId,
        name: this.data.sorterInfo.username,
        password: this.data.sorterInfo.password,
        teacherId: tId,
        type: uType
      },
      // 请求成功的回调 
      success: (res) => {
        console.log(res)
        // 模拟登录验证
        if (res.data.code === 200) {
          const app = getApp();
          app.globalData.username = this.data.sorterInfo.username;
          app.globalData.getExam = this.data.sorterInfo.username;

          if (this.data.index === 0||this.data.index === 3) { //学生
            app.globalData.userType = this.data.index; //教师：1
            console.log("userType：" + app.globalData.userType)
            wx.navigateTo({
              url: '../studentHome/studentHome',
              success: function (res) {
                console.log('跳转成功');
              },
              fail: function (err) {
                console.log('跳转失败');
                wx.showModal({
                  title: '提示',
                  content: '登录失败'
                })
              }
            });
          }
          if (this.data.index === 1) { //教师
            app.globalData.userType = this.data.index; //教师：1
            console.log("userType：" + app.globalData.userType)
            wx.navigateTo({
              url: '../teacherHome/teacherHome',
              success: function (res) {
                console.log('跳转成功');
              },
              fail: function (err) {
                console.log('跳转失败');
                wx.showModal({
                  title: '提示',
                  content: '登录失败'
                })
              }
            });
          }
          if (this.data.index === 2) { //管理员
            app.globalData.userType = this.data.index; //教师：1
            console.log("userType：" + app.globalData.userType)
            wx.navigateTo({
              url: '../adminHome/adminHome',
              success: function (res) {
                console.log('跳转成功');
              },
              fail: function (err) {
                console.log('跳转失败');
                wx.showModal({
                  title: '提示',
                  content: '登录失败'
                })
              }
            });
          }
        } else {
          console.log('账号密码错误');
          wx.showModal({
            title: '提示',
            content: '账号密码错误'
          })
        }
      }
    })
  },
  bindKeyInput: function (e) {
    let item = e.currentTarget.dataset.name;
    this.setData({
      [item]: e.detail.value
    });
  },
  data: {
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
    selectShow: false, //控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['学生', '教师', '管理员', '家长'], //下拉列表的数据
    index: 0, //选择的下拉列表下标
  },
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onChooseAvatar(e) {
    const {
      avatarUrl
    } = e.detail
    const {
      nickName
    } = this.data.userInfo
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  onInputChange(e) {
    const nickName = e.detail.value
    const {
      avatarUrl
    } = this.data.userInfo
    this.setData({
      "userInfo.nickName": nickName,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  // 点击下拉显示框
  selectTap() {
    this.setData({
      selectShow: !this.data.selectShow
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
    this.setData({
      index: Index,
      selectShow: !this.data.selectShow
    });
  }
})