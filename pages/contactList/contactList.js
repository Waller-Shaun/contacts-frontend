// pages/contactList/contactList.js
//页面处理逻辑：1.从后端获取联系人数据 2.点击查看联系人详情 3.删除联系人
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contacts:[],
    newContact:{ name: '', phone: '',id:'' },
    showModal:false,
    showModifyModal:false
  },

    /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    //发送请求联系人列表
    this.getContacts();
  },
  goToContactDetail(e){
    const contactID = e.currentTarget.dataset.id;//获取点击的联系人id
    wx.navigateTo({
      url: `/pages/contactDetail/contactDetail?id=${contactID}`,//跳转到详情页面，并传递联系人id
    });
  },

  //删除联系人
  deleteContact(e){
    const contactID = e.currentTarget.dataset.id;//获取点击的联系人id
    wx.request({
      url: `http://localhost:3000/contacts/${contactID}`,
      method:'DELETE',
      success:()=>{
        // 更新页面，删除本地的联系人条目
        this.setData({
          contacts:this.data.contacts.filter(contact=>contact.id !==contactID)
        });
        wx.showToast({
          title:'删除成功',
          icon:'success'
        });
      },
      fail:(err)=>{
        console.error('删除联系人失败',err);
        wx.showToast({
          title:'删除失败',
          icon:'error'
        });
      }
    })
  },

  //修改联系人
  modifyContact(e){
    const newContact = this.data.newContact;
    if(!newContact.name||!newContact.phone){
      wx.showToast({
        title: '请填写完整信息',
        icon:'error'
      })
      return;
    }
    wx.request({
      url: `http://localhost:3000/contacts/${newContact.id}`,
      method:'PUT',
      data:newContact,
      success:(res)=>{

        this.hideModifyModal();
        wx.showToast({
          title:'更新成功',
          icon:'success'
        });
        this.setData({
          newContact:{name:'',phone:'',id:''}//清空
      })
      this.getContacts();
    },
      fail:(err)=>{
        console.error('更新联系人失败',err);
        wx.showToast({
          title:'更新失败',
          icon:'error'
        });
      }
    })
  },
  showModal(){
    console.log("显示模态框");
    this.setData({
      showModal:true
    });
  },
  hideModal(){
    console.log("关闭模态框");
    this.setData({
      showModal:false,
      newContact:{ name: '', phone: '',id:'' },
    });
    console.log('模态框关闭后，newContact:', this.data.newContact); // 调试，确保清空
    setTimeout(() => {
      this.setData({
        newContact: { name: '', phone: '', id: '' }
      });
    }, 50);
  },

  //显示修改模态框
  showModifyModal(e){
    console.log("显示修改模态框");
    const contactName = e.currentTarget.dataset.name;
    const contactPhone = e.currentTarget.dataset.phone;
    const contactId = e.currentTarget.dataset.id;
    this.setData({
      showModifyModal:true,
      newContact: { name: contactName, phone: contactPhone, id: contactId }
    });
  },
  hideModifyModal(){
    console.log("关闭修改模态框");
    this.setData({
      showModifyModal:false,
      newContact: { name: '', phone: '', id: '' } // 清空 newContact，防止残留
    });
    console.log('模态框关闭后，newContact:', this.data.newContact); // 调试，确保清空
    setTimeout(() => {
      this.setData({
        newContact: { name: '', phone: '', id: '' }
      });
    }, 50);
  },
  handleNameInput(e){
    this.setData({
      'newContact.name':e.detail.value
    });
  },
  handlePhoneInput(e){
    this.setData({
      'newContact.phone':e.detail.value
    });
  },

  //添加联系人
  addContact(){
    const newContact = this.data.newContact;
    if(!newContact.name || !newContact.phone){
      wx.showToast({
        title: '请填写完整信息',
        icon:'error'
      });
      return;
    }
    wx.request({
      url: 'http://localhost:3000/contacts',
      method:'POST',
      data:newContact,
      success:(res)=>{
        //console.log('返回的联系人信息:', res.data);
        
        this.setData({
          contacts:[...this.data.contacts,res.data],
          newContact:{name:'',phone:''},//清空
          showModal:false
        });
        wx.showToast({
          title: '联系人已添加',
          icon:'success'
        });
        this.getContacts();
      },
      fail:(err)=>{
        console.error("联系人添加失败",err);
        wx.showToast({
          title: '添加失败',
          icon:'error'
        });
      }
    });
  },
  //获取联系人
  getContacts() {
    wx.request({
      url: 'http://localhost:3000/contacts', 
      method: 'GET',
      success: (res) => {
        this.setData({
          contacts: res.data // 更新联系人列表
        });
      },
      fail: (err) => {
        console.error('获取联系人列表失败:', err);
      }
    });
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