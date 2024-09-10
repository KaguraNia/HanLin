Page({
  data: {
    activeNames: ['0'],
    checked: true,checked2: false,
  },
  onChange(event) {
    this.setData({
      activeNames: event.detail,
    });
  },
  onoChange({
    detail
  }) {
    // 需要手动对 checked 状态进行更新
    this.setData({
      checked: detail
    });
  },
  onooChange({
    detail
  }) {
    // 需要手动对 checked 状态进行更新
    this.setData({
      checked2: detail
    });
  },
});