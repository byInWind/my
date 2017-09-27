/**
 * 分类列表模块
 */

define(['jquery', 'util', 'template','state'], function ($, util, template) {
  // 设置导航
  util.setSelect('/category/list');

  // 查看所有分类
  $.ajax({
    url: '/api/category',
    type: 'post',
    success: function (info) {
      if(info.code == 200) {
        // 模板引擎
        var html = template('categoryTpl', {list: info.result});
        // 添加DOM
        $('#categoryInfo').html(html);
      }
    }
  });
});
