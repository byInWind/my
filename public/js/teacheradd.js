define(['jquery', 'template', 'util'], function ($, template, util) {
  //获取URL中的id
  var tcId = util.all('tc_id');
  if (tcId) {
    //编辑操作
    $.ajax({
      url: '/api/teacher/edit',
      type: 'get',
      data: {tc_id: tcId},
      dataType: 'json',
      success: function (data) {
        data.result.operate='编辑讲师';
        var html = template('teacherTpl', data.result);
        $("#teacherInfo").html(html);
      }
    });
  } else {
    //添加操作
    $.ajax({
      url: '/api/teacher',
      type: 'get',
      dataType: 'json',
      success: function (data) {
        var html = template('teacherTpl', {operate:'添加讲师'});
        $("#teacherInfo").html(html);
      }
    });
  }
});