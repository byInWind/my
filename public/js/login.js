define(['jquery','cookie'], function ($) {
  //ʵ�ֵ�¼
  $('#loginBtn').click(function () {
    $.ajax({
      url: '/api/login',
      type: 'post',
      dataType: 'json',
      // �����л�����ȡ���б�����
      data: $("#loginForm").serialize(),
      success: function (data) {
        if (data.code == 200) {

          //��¼�û���Ϣ,ת����json��ʽ
          $.cookie('loginInfo', JSON.stringify(data.result), {path: '/'});
          //console.log($.cookie().loginInfo)
          //return false;
          // ��ת����ҳ
          location.href = '/main/index'
        };
      }
    });
    return false;
  });
})
