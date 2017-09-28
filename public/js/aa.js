define(['jquery', 'template', 'util','form','validate','state'], function ($, template, util) {
  util.setSelect('/category/main');
  //获取URL中的id
  var cgId = util.all('cg_id');
  if (cgId) {
    //编辑操作
    $.ajax({
      url: '/api/category/edit',
      type: 'get',
      dataType: 'json',
      data: {cg_id: cgId},
      success: function (data) {
        if (data.code == 200) {
          data.result.operate = '课程编辑';
          // 模板
          var html = template('addTpl', data.result);
          $('#addInfo').html(html);
        }
      }
    });
  } else {
    //添加操作
    $.ajax({
      url: '/api/category/top',
      type: 'get',
      dataType: 'json',
      success: function (data) {
        if (data.code == 200) {
          var html = template('addTpl', data.result);
          $('#addInfo').html(html);
          submitForm('/api/category/add')
        }
      }
    });
    //异步提交表单
    function submitForm(url) {
      $("#editForm").validate({
        sendForm: false,
        valid: function () {
          $(this).ajaxSubmit({
            url: url,
            dataType: 'json',
            success: function (data) {
              if (data.code == 200) {
                location.href = '/category/main';
              }
            }
          })
        }
      })
    }
  }
})