define(['jquery', 'template', 'cookie'], function ($,template) {
  //NProgress.start();
  //
  //NProgress.done();
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
        location.href = '/main/login'
      }
    });
  });
// 验证用户是否登陆了
  var flag = $.cookie('PHPSESSID');
  //location.pathname 地址，防止不断跳转
  if (!flag && location.pathname!='/main/login') {
    location.href = '/main/login';
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