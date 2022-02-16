Page({
    data: {
      topMVs: [],
      hasMore: true,
    },
    onLoad: function () {
      this.loadData()
    },
    onPullDownRefresh: function() {
      this.loadData(0)
    },
    loadData: function (offset = 0) {
      wx.request({
        url: `http://123.207.32.32:9001/top/mv?limit=10&offset=${offset}`,
        method: 'GET',
        success: (res) => {
          let newTopMvs = this.data.topMVs;
          if (offset === 0) {
            newTopMvs = res.data.data;
            wx.stopPullDownRefresh();
          } else {
            newTopMvs.push(...res.data.data)
          }
          console.log('newTopMvs', newTopMvs)
          this.setData({
            topMVs: newTopMvs,
            hasMore: res.data.hasMore
          })
        }
      })
    },
    onReachBottom: function () {
      if (!this.data.hasMore) return;
      this.loadData(this.data.topMVs.length)
    }
})