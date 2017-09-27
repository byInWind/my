define(['jquery', 'util', 'form','state'], function ($, util) {
//// 设置侧边导航选中高亮
  util.setSelect(location.pathname);

  $("#courseBtn").click(function () {
    $('#courseForm').ajaxSubmit({
      url: '/api/course/create',
      type: 'post',
      dataType: 'JSON',
      success: function (data) {
        if (data.code == 200) {
          // 跳转
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
