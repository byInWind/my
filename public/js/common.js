define(['jquery', 'template', 'cookie'], function ($,template) {
  //遮罩层操作   操作全局的ajax  ，再在需要遮罩层的js里引入
  $(document).ajaxStart(function () {
    $(".overlay").show();
  });
  $(document).ajaxStop(function () {
    //这样隐藏的太快了
    //$(".overlay").hide();

    //修改
    setTimeout(function () {
      $(".overlay").hide();
    },500);
  });
//控制左侧菜单的折叠和展开
  $('.navs ul').prev('a').on('click', function () {
    $(this).next().slideToggle();
  });
// 退出登录时
  $('#logout').click(function () {
    $.ajax({
      url: '/api/logout',
      type: 'post',
      dataType: 'json',
      success: function () {
        location.href = '/my/views/main/login.html'
      }
    });
  });
// 验证用户是否登陆了
  var flag = $.cookie('PHPSESSID');
  //location.pathname 地址，防止不断跳转
  if (!flag && location.pathname!='/my/views/main/login.html') {
    location.href = './login.html';
  }
// 填充头像信息
  var loginInfo = $.cookie('loginInfo');
  loginInfo = loginInfo && JSON.parse(loginInfo);
  var tpl = '<div class="avatar img-circle"><img src="{{tc_avatar}}"></div> <h4>{{tc_name}}</h4>'
  var render=template.compile(tpl);
  var html =render(loginInfo);
  $('.aside .profile').html(html);
  //$('.aside .profile img').attr('src', loginInfo.tc_avatar);
  //$('.aside .profile h4').html(loginInfo.tc_name);

});