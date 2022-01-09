Page({
    data: {
        topMVs: []
    },
    onLoad: function () {
        wx.request({
          url: 'http://123.207.32.32:9001/top/mv',
          method: 'GET',
          success: (res) => {
            this.setData({
                topMVs: res.data.data || []
            })
          }
        })
    },
})