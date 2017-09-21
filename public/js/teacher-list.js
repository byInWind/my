define(['jquery', 'template'], function ($, template) {
  //讲师列表
  $.ajax({
    url: '/api/teacher',
    type: 'get',
    dataType: 'json',
    success: function (data) {
      var html = template('teacherTpl', {list: data.result});
      $("#teacherInfo").html(html);
      //启用与注销
      $('.control').click(function(){
       //！！！ var dataId= $('.control').parent('td')  这样获取的都是同一个dataId
        var dataId= $(this).attr('data-id');
        var dataStatus= $(this).attr('data-status');
        var that=this;
       console.log(that)
        $.ajax({
          url: '/api/teacher/handle',
          type: 'post',
          dataType: 'json',
          data: {tc_id: dataId,tc_status:dataStatus},
          success:function (data){
            if (data.code==200) {
              //console.log(this)  这里this不是$('.control')，所有上面用that
              $(that).attr('data-status',data.result.tc_status);
              if (data.result.tc_status==0) {
                $(that).text("启用")
              }else{
                $(that).text("注销")
              }
            }
          }
        })       
       });
    }
  });
});