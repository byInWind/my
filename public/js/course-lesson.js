define(['jquery', 'template', 'util'], function ($, template, util) {
  //设置导航高亮
  util.setSelect('/course/add');
  var csId = util.all('cs_id');
  console.log(csId)
  //响应
  $.ajax({
    url: '/api/course/lesson',
    type: 'get',
    dataType: 'json',
    data: {cs_id: csId},
    success: function (data) {
      if (data.code == 200) {
        console.log(data)
        //渲染模板
        var html = template('lessonTpl', data.result);
        $("#lessonInfo").html(html);
      }
      ;
    }
  });
})
