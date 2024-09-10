var wxCharts = require('../../utils/wxcharts.js');
var app = getApp();
var lineChart = null;
var lineChart1, lineChart2, lineChart3, lineChart4, lineChart5, lineChart6 = null;
Page({
  data: {
    activeNames: ['1'],
  },
  onChange(event) {
    this.setData({
      activeNames: event.detail,
    });
  },
  touchHandler: function (e) {
    console.log(lineChart.getCurrentDataIndex(e));
    lineChart.showToolTip(e, {
      // background: '#7cb5ec',
      format: function (item, category) {
        return category + ' ' + item.name + ':' + item.data
      }
    });
  },
  touchHandler1: function (e) {
    console.log(lineChart1.getCurrentDataIndex(e));
    lineChart1.showToolTip(e, {
      // background: '#7cb5ec',
      format: function (item, category) {
        return category + ' ' + item.name + ':' + item.data
      }
    });
  },
  touchHandler2: function (e) {
    console.log(lineChart2.getCurrentDataIndex(e));
    lineChart2.showToolTip(e, {
      // background: '#7cb5ec',
      format: function (item, category) {
        return category + ' ' + item.name + ':' + item.data
      }
    });
  },
  touchHandler3: function (e) {
    console.log(lineChart3.getCurrentDataIndex(e));
    lineChart3.showToolTip(e, {
      // background: '#7cb5ec',
      format: function (item, category) {
        return category + ' ' + item.name + ':' + item.data
      }
    });
  },
  touchHandler4: function (e) {
    console.log(lineChart4.getCurrentDataIndex(e));
    lineChart4.showToolTip(e, {
      // background: '#7cb5ec',
      format: function (item, category) {
        return category + ' ' + item.name + ':' + item.data
      }
    });
  },
  touchHandler5: function (e) {
    console.log(lineChart5.getCurrentDataIndex(e));
    lineChart5.showToolTip(e, {
      // background: '#7cb5ec',
      format: function (item, category) {
        return category + ' ' + item.name + ':' + item.data
      }
    });
  },
  touchHandler6: function (e) {
    console.log(lineChart6.getCurrentDataIndex(e));
    lineChart6.showToolTip(e, {
      // background: '#7cb5ec',
      format: function (item, category) {
        return category + ' ' + item.name + ':' + item.data
      }
    });
  },
  createSimulationData: function () {
    var categories = [];
    var data = [];
    var chData = [];
    var mData = [];
    var eData = [];
    var pData = [];
    var cData = [];
    var bData = [];

    var adata = [];
    var achData = [];
    var amData = [];
    var aeData = [];
    var apData = [];
    var acData = [];
    var abData = [];
    for (var i = 0; i < 5; i++) {
      const a1 = Math.random() * (40) + 70;
      const a2 = Math.random() * (40) + 90;
      const a3 = Math.random() * (40) + 90;
      const a4 = Math.random() * (25) + 50;
      const a5 = Math.random() * (25) + 60;
      const a6 = Math.random() * (25) + 60;
      const a = a1 + a2 + a3 + a4 + a5 + a6;

      const aa1 = Math.random() * (40) + 60;
      const aa2 = Math.random() * (30) + 80;
      const aa3 = Math.random() * (30) + 80;
      const aa4 = Math.random() * (25) + 40;
      const aa5 = Math.random() * (25) + 50;
      const aa6 = Math.random() * (25) + 50;
      const aa = aa1 + aa2 + aa3 + aa4 + aa5 + aa6;
      categories.push('考试' + (i + 1));
      chData.push(a1);
      mData.push(a2);
      eData.push(a3);
      pData.push(a4);
      cData.push(a5);
      bData.push(a6);
      data.push(a);

      achData.push(aa1);
      amData.push(aa2);
      aeData.push(aa3);
      apData.push(aa4);
      acData.push(aa5);
      abData.push(aa6);
      adata.push(aa);
    }
    // data[4] = null;
    return {
      categories: categories,
      data: data,
      chData: chData,
      mData: mData,
      eData: eData,
      pData: pData,
      cData: cData,
      bData: bData,

      adata: adata,
      achData: achData,
      amData: amData,
      aeData: aeData,
      apData: apData,
      acData: acData,
      abData: abData,
    }
  },
  onLoad: function (e) {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    var simulationData = this.createSimulationData();
    lineChart = new wxCharts({
      canvasId: 'lineCanvas',
      type: 'line',
      categories: simulationData.categories,
      animation: true,
      // background: '#f5f5f5',
      series: [{
        name: '班级平均分',
        data: simulationData.data,
        format: function (val, name) {
          return val.toFixed(2);
        }
      }, {
        name: '年级平均分',
        data: simulationData.adata,
        format: function (val, name) {
          return val.toFixed(2);
        }
      }],
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        title: '分数',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 700
      },
      width: windowWidth,
      height: 200,
      dataLabel: false,
      dataPointShape: true,
      extra: {
        lineStyle: 'curve'
      }
    });
    lineChart1 = new wxCharts({
      canvasId: 'lineCanvas1',
      type: 'line',
      categories: simulationData.categories,
      animation: true,
      // background: '#f5f5f5',
      series: [{
        name: '班级平均分',
        data: simulationData.chData,
        format: function (val, name) {
          return val.toFixed(2);
        }
      }, {
        name: '年级平均分',
        data: simulationData.achData,
        format: function (val, name) {
          return val.toFixed(2);
        }
      }],
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        title: '分数',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 490
      },
      width: windowWidth,
      height: 200,
      dataLabel: false,
      dataPointShape: true,
      extra: {
        lineStyle: 'curve'
      }
    });
    lineChart2 = new wxCharts({
      canvasId: 'lineCanvas2',
      type: 'line',
      categories: simulationData.categories,
      animation: true,
      // background: '#f5f5f5',
      series: [{
        name: '班级平均分',
        data: simulationData.mData,
        format: function (val, name) {
          return val.toFixed(2);
        }
      }, {
        name: '年级平均分',
        data: simulationData.amData,
        format: function (val, name) {
          return val.toFixed(2);
        }
      }],
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        title: '分数',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 490
      },
      width: windowWidth,
      height: 200,
      dataLabel: false,
      dataPointShape: true,
      extra: {
        lineStyle: 'curve'
      }
    });
    lineChart3 = new wxCharts({
      canvasId: 'lineCanvas3',
      type: 'line',
      categories: simulationData.categories,
      animation: true,
      // background: '#f5f5f5',
      series: [{
        name: '班级平均分',
        data: simulationData.eData,
        format: function (val, name) {
          return val.toFixed(2);
        }
      }, {
        name: '年级平均分',
        data: simulationData.aeData,
        format: function (val, name) {
          return val.toFixed(2);
        }
      }],
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        title: '分数',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 490
      },
      width: windowWidth,
      height: 200,
      dataLabel: false,
      dataPointShape: true,
      extra: {
        lineStyle: 'curve'
      }
    });
    lineChart4 = new wxCharts({
      canvasId: 'lineCanvas4',
      type: 'line',
      categories: simulationData.categories,
      animation: true,
      // background: '#f5f5f5',
      series: [{
        name: '班级平均分',
        data: simulationData.pData,
        format: function (val, name) {
          return val.toFixed(2);
        }
      }, {
        name: '年级平均分',
        data: simulationData.apData,
        format: function (val, name) {
          return val.toFixed(2);
        }
      }],
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        title: '分数',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 490
      },
      width: windowWidth,
      height: 200,
      dataLabel: false,
      dataPointShape: true,
      extra: {
        lineStyle: 'curve'
      }
    });
    lineChart5 = new wxCharts({
      canvasId: 'lineCanvas5',
      type: 'line',
      categories: simulationData.categories,
      animation: true,
      // background: '#f5f5f5',
      series: [{
        name: '班级平均分',
        data: simulationData.cData,
        format: function (val, name) {
          return val.toFixed(2);
        }
      }, {
        name: '年级平均分',
        data: simulationData.acData,
        format: function (val, name) {
          return val.toFixed(2);
        }
      }],
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        title: '分数',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 490
      },
      width: windowWidth,
      height: 200,
      dataLabel: false,
      dataPointShape: true,
      extra: {
        lineStyle: 'curve'
      }
    });
    lineChart6 = new wxCharts({
      canvasId: 'lineCanvas6',
      type: 'line',
      categories: simulationData.categories,
      animation: true,
      // background: '#f5f5f5',
      series: [{
        name: '班级平均分',
        data: simulationData.bData,
        format: function (val, name) {
          return val.toFixed(2);
        }
      }, {
        name: '年级平均分',
        data: simulationData.abData,
        format: function (val, name) {
          return val.toFixed(2);
        }
      }],
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        title: '分数',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 490
      },
      width: windowWidth,
      height: 200,
      dataLabel: false,
      dataPointShape: true,
      extra: {
        lineStyle: 'curve'
      }
    });
  }
});