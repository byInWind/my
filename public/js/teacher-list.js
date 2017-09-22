define(['jquery', 'template','bootstrap'], function ($, template) {
  //讲师列表
  $.ajax({
    url: '/api/teacher',
    type: 'get',
    dataType: 'json',
    success: function (data) {
      var html = template('teacherTpl', {list: data.result});
      $("#teacherInfo").html(html);
      //启用与注销
      $('.control').click(function () {
        //.closest('父元素') 也可以选择父元素
        //！！！ var dataId= $('.control').parent('td')  这样获取的都是同一个dataId
        var dataId = $(this).parent('td').attr('data-id');
        var dataStatus = $(this).attr('data-status');
        var that = this;
        $.ajax({
          url: '/api/teacher/handle',
          type: 'post',
          dataType: 'json',
          data: {tc_id: dataId, tc_status: dataStatus},
          success: function (data) {
            if (data.code == 200) {
              //console.log(this)  这里this不是$('.control')，所有上面用that
              $(that).attr('data-status', data.result.tc_status);
              if (data.result.tc_status == 1) {
                $(that).text("启用")
              } else {
                $(that).text("注销")
              }
            }
          }
        })
      });

      //查 看
      $('.checklook').click(function () {
        var dataId = $(this).parent('td').attr('data-id');
       // console.log(dataId)
        $.ajax({
          url: '/api/teacher/view',
          type: 'get',
          dataType: 'json',
          data: {tc_id: dataId},
          success: function (data) {
            var html=template('teacherModalTpl',data.result);
            $('#modalTpl').html(html);
            //console.log(html)
           // $("#teacherModal").modal()
          }
        });
      });
    }
  });
});
