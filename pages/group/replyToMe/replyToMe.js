// pages/group/replyToMe/replyToMe.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //三项数据只用作测试，更新后可集成到一个对象中进行遍历。
    textArray:[
      '满身烟味的我 走路带上点浮夸',
      '想买悦刻五代找我丁真就对了',
      '竖起中指王源他算个寄吧',
      '台上打饱嗝我在和雪豹比划',
      '丁真势力正在不断地扩大',
      '微博之夜掏裤裆我上上下下',
      '珈乐心理放线被我轻松击垮',
      '甜美微笑爆杀那些小题做题家',
      '脚叫做勾八 八八八八八',
      '对你说藏话 啦啦啦啦啦',
      '你不会回笼 回家找你妈',
      '抽传统香烟 我测你们码',
      '偶尔骑骑小马 理塘走一走',
      '随手掏出悦刻 你也来一口',
      '哥们不费力 就住进了高楼',
      '理塘高速路 都 五档起步走',
      '去联合国学英文 哥们Let\'s go',
      '回理塘实践 哥们 Let\'s 抽',
      '哥们哇啦哇啦乱唱听感就拉满了',
      '你文化程度再高你也听不懂的',
      '感觉这首歌技术不如丁真',
      '因为你是肥猪 体重要按吨',
      '我投资悦刻 别他妈倒闭了',
      '有烟弹寄一个 给礼堂的丁真',
      '我特么想抽烟(快给我抽)',
      '抽死我个byd(快给我抽)',
      '抽 抽 抽 抽 抽抽抽(快给我抽)',
      '(快给我抽)',
      '(快给我抽)',
      '(快给我抽)',
      '快给我 快给我 快给我 快给我 我要抽 我要抽 我要抽 我要抽',
      'I GOT 油 我想抽',
      'I GOT 油 ALL MY MIND',
      '抽不了兜着走',
      '走走走走走走走',
      'I GOT 油 我想抽',
      'I GOT 油 ALL MY MIND',
      '抽不了兜着走',
      '走走走走走走走',
      '那些说唱 都是一坨屎',
      '攻击性没有 词汇还低能的要死',
      '但我心怀善念 接纳悦刻五的每个孝子',
      '我的回笼技术能够气死那些黑子',
      '一眼丁真 鉴定为纯纯的若智',
      '牙医丁真 鉴定为纯纯的白齿',
      '经过A门的时候帮我把烟雾给封死',
      '王源不发龙狙证明他并没有素质',
      'I GOT 油 我想抽',
      'I GOT 油 ALL MY MIND',
      '抽不了兜着走',
      '走走走走走走走',
      'I GOT 油 我想抽',
      'I GOT 油 ALL MY MIND',
      '抽不了兜着走',
      '走走走走走走走',
      '打完狙我准备骑珍珠去抽一根 哦',
      '但是珍珠不在了',
      '我只能骑着我的纠纠',
      '穿越整个四川找悦刻旗舰店',
      '为了芋泥啵啵 我抽胖了双脸',
      '但是人们依然爱我 爱我纯真双眼',
      '为了苦练烟嗓我抽烟好几年',
      '现在一唱歌哥们嗓子就漏电',
      '我爱抽烟 出生到太平间',
      '我爱抽烟 一天十根直到肺病变',
      '不要抽 假的烟 不要抽',
      '如果你不知道去哪里就来我直播间',
      '为了买烟我付出太多',
      '没有电子烟的人生就只是片荒漠',
      '没有悦刻的人生我也只是个喽啰',
      '看到不认识的烟杆我会去抚摸',
      '这一段我也不知道我在唱什么',
      '也许我也只是溜大了',
      '也许我只不过是溜大了',
      '就像你的人生糊弄糊弄不就完了么'],
      replyerName:'锐克首席代言人丁真',
      replyTime:'2022/10/10 15:15:15'
    },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  //跳转到回复他人的页面
  reply(e){
    wx.navigateTo({
      url: '../replyToMe/replyToOthers/replyToOthers',
    })
  }
})