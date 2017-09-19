define(['jquery','cookie'], function ($) {
  //实现登录
  $('#loginBtn').click(function () {
    $.ajax({
      url: '/api/login',
      type: 'post',
      dataType: 'json',
      // 表单序列化，获取所有表单内容
      data: $("#loginForm").serialize(),
      success: function (data) {
        if (data.code == 200) {

          //记录用户信息,转换成json格式
          $.cookie('loginInfo', JSON.stringify(data.result), {path: '/'});
          //console.log($.cookie().loginInfo)
          //return false;
          // 跳转到主页
          location.href = '/main/index'
        };
      }
    });
    return false;
  });
})
