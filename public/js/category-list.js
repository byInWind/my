define(['jquery', 'util', 'template','state'], function ($, util, template) {
  // 设置导航
  util.setSelect(location.pathname);

  // 查看所有分类
  $.ajax({
    url: '/api/category',
    type: 'get',
    dataType:'json',
    success: function (data) {
      if(data.code == 200) {
        // 模板引擎
        var html = template('categoryTpl', {list: data.result});
        // 添加DOM
        $('#categoryInfo').html(html);
      }
    }
  });
});
