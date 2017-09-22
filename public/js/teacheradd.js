define(['jquery', 'template', 'util','datepicker','language'], function ($, template, util) {
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
        data.result.operate = '编辑讲师';
        var html = template('teacherTpl', data.result);
        $("#teacherInfo").html(html);
        submitForm('/api/teacher/update');
      }
    });
  } else {
    //添加操作
    var html = template('teacherTpl', {operate: '添加讲师'});
    $("#teacherInfo").html(html);
    submitForm('/api/teacher/add')
  }
  //提交表单
  function submitForm(url) {
    $('#teacherBtn').click(function () {
      $.ajax({
        url: url,
        type: 'post',
        data: $("#teacherForm").serialize(),
        dataType: 'json',
        success: function (data) {
          if (data.code == 200) {
            location.href = '/teacher/list';
          }
        }
      });
    });
  };
});