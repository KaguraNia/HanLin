// pages/userCD/userCD.js
Page({
  createUser() { //创建用户
    let uId = Math.floor(Math.random() * 1000000),
      uType, tId;
    if (this.data.index === 0||this.data.index === 3) { //学生
      uType = 1;//(type=1为学生、2为教师)
      tId = 2;
    }
    if (this.data.index === 1) { //教师
      uType = 2;//(type=1为学生、2为教师)
      tId = 0;
    }
    if (this.data.index === 2) { //管理员
      uType = 1;//(type=1为学生、2为教师)
      tId = 2;
    }
    console.log('按钮被点击了！');
    wx.request({
      // 请求地址，必须是以https://开头 
      // 必须是配置在request合法域名 
      url: 'http://121.37.109.0:8080/user/create',
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
        if (res.data.code === 200) {
          if (this.data.index === 0) { //学生
            wx.showModal({
              title: '提示',
              content: '创建学生成功'
            })
            console.log('创建学生成功');
            console.log(uId)
          }
          if (this.data.index === 1) { //教师
            wx.showModal({
              title: '提示',
              content: '创建教师成功'
            })
            console.log('创建教师成功');
          }
          if (this.data.index === 2) { //管理员
            wx.showModal({
              title: '提示',
              content: '创建管理员成功'
            })
            console.log('创建管理员成功');
          }
        } else {
          console.log('创建用户失败');
          wx.showModal({
            title: '提示',
            content: '创建用户失败，用户已存在'
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
  deleteUser() { //删除用户
    wx.request({
      url: 'http://121.37.109.0:8080/user/delete?username=' + this.data.sorterInfo.username, // 将用户名编码为 URL 安全的格式  
      method: 'DELETE',
      success: function (res) {
        if (res.data.code === 200) {
        // 请求成功后的回调函数  
        console.log(res.data);
        console.log('用户删除成功');
          wx.showModal({
            title: '提示',
            content: '删除用户成功'
          })
        }
        else{
          console.log('用户删除失败，用户不存在');
          wx.showModal({
            title: '提示',
            content: '删除用户失败，用户不存在'
          })
        }
      },
      fail: function (error) {
        // 请求失败后的回调函数  
        wx.showModal({
          title: '提示',
          content: '删除用户请求失败'
        })
        console.log('删除用户请求失败');
      }
    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    motto: '智能阅卷小程序',
    userInfo: {
      nickName: '',
    },
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
    selectShow: false, //控制下拉列表的显示隐藏，false隐藏、true显示
    selectData: ['学生', '教师', '管理员', '家长'], //下拉列表的数据
    index: 0, //选择的下拉列表下标
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

  }, // 点击下拉显示框
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