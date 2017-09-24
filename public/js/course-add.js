define(['jquery', 'util', 'form'], function ($, util) {
//设置左侧导航栏高亮选中
  util.setSelect(location.pathname);

  $("#courseBtn").click(function () {
    $('#courseForm').ajaxSubmit({
      url: '/api/course/create',
      type: 'post',
      dataType: 'JSON',
      success: function (data) {
        if (data.code == 200) {
          // 跳转页面
          location.href = '/course/base?cs_id=' + data.result.cs_id;
        }
      }
    })
    //   $.ajax({
    //     url: '/api/course/create',
    //     type: 'post',
    //     data : {cs_name : $('#aaa').val()},
    //     dataType: 'json',
    //     success : function (data){
    // location.href='/course/base';
    //     }
    //   })
  })
})
