define(['jquery', 'mock', 'cookie'], function ($, Mock) {
    Mock.mock('http://login.com', 'post', function () {
        return Mock.mock({
            'code': 200,
            'result':'success'
        });
    });
    //表单提交
    $('#loginBtn').click(function () {
        $.ajax({
            url: 'http://login.com',
            type: 'post',
            dataType: 'json',
            // 表单序列化
            data: $("#loginForm").serialize(),
            success: function (data) {
                console.log(data)
                if (data.code == 200) {

                    //记录用户信息  实现信息共享，后台返回了头像与用户名
                    $.cookie('loginInfo', JSON.stringify(data.result), {path: '/'});
                    //console.log($.cookie().loginInfo)
                    //return false;
                    // 跳转到主页
                    location.href = '/my/views/main/index.html'
                }
                ;
            }
        });
        //防止不登录直接提交
        return false;
    });
})
