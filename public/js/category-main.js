define(['jquery', 'template', 'util', 'state'], function ($, template, util) {
  //左侧导航高亮
  util.setSelect(location.pathname)
  //获取数据
  $.ajax({
    url: '/api/category/top',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      if (data.code==200) {
        var html = template('categoryTpl', {list: data.result});
        $("#categoryInfo").html(html);
      }
    }
  })
});