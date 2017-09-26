define(['jquery', 'template', 'util'], function ($, template, util) {
  //���õ�������
  util.setSelect('/course/add');
  var csId = util.all('cs_id');
  console.log(csId)
  //��Ӧ
  $.ajax({
    url: '/api/course/lesson',
    type: 'get',
    dataType: 'json',
    data: {cs_id: csId},
    success: function (data) {
      if (data.code == 200) {
        console.log(data)
        //��Ⱦģ��
        var html = template('lessonTpl', data.result);
        $("#lessonInfo").html(html);
      }
      ;
    }
  });
})
