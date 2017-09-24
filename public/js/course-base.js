define(['jquery', 'template', 'util'], function ($, template, util) {
  // 设置侧边导航选中高亮
  util.setSelect('/course/add');
  var csId = util.all('cs_id');
  var flag = util.all('flag');
  //渲染模板
  $.ajax({
    url: '/api//course/basic',
    data: {cs_id: csId},
    type: 'get',
    datatyp: 'json',
    success: function (data) {

      if (flag) {
      data.result.operate='编辑课程';
      }
      else {
        data.result.operate='添加课程';
      }
      var html = template('baseTpl', data.result);
      $("#baseInfo").html(html);
    }
  })
});