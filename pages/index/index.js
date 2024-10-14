// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    motto: '这里是底部导航栏',
    userInfo: {
      avatarUrl: defaultAvatarUrl, //登录的默认头像，因为用户现在还没有传入信息。
      nickName: '',
    },
    hasUserInfo: false, //表示用户信息是否已获取，控制页面中是否展示用户信息。
    canIUseGetUserProfile: wx.canIUse('getUserProfile'), //这些是兼容性检查
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
  },
  //bindViewTap（）用于页面跳转，此处跳转到logs页面
  bindViewTap() { 
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  goToContactList(){
    wx.navigateTo({
      url:'../contactList/contactList'
    })
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    const { nickName } = this.data.userInfo
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  onInputChange(e) {
    const nickName = e.detail.value
    const { avatarUrl } = this.data.userInfo
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
})
