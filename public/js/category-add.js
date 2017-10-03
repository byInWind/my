define(['jquery', 'util', 'template', 'form', 'validate', 'state'], function ($, util, template) {
  // 设置导航栏高亮选中
  util.setSelect('/category/list');
  var cgId = util.all('cg_id');
//课程编辑
  if (cgId) {
    $.ajax({
      url: '/api/category/edit',
      type: 'GET',
      dataType: 'json',
      data: {cg_id: cgId},
      success: function (data) {
        if (data.code == 200) {
          data.result.operate = '编辑分类';
          // 模板
          var html = template('addTpl', data.result);
          $('#addInfo').html(html);
          //修改分类
          $("#editForm").validate({
            sendForm: false,
            valid: function () {
              $(this).ajaxSubmit({
                url: '/api/category/modify',
                type: 'post',
                dataType: 'JSON',
                data: {cg_id: cgId},
                success: function (data) {
                  if (data.code == 200) {
                    // 刷新当前页面
                    //console.log(data)
                    location.href = '/category/list';
                  }
                }
              })
            }
          })
        }
      }
    });
    //})
  } else {
    //课程添加
    $.ajax({
      url: '/api/category/top',
      type: 'get',
      data: $("#editForm").serialize(),
      dataType: 'json',
      success: function (data) {
        if (data.code == 200) {
          data.result.operate = '添加分类';
          var html = template('addTpl', {top: data.result});
          $('#addInfo').html(html);
          $("#editForm").validate({
            sendForm: false,
            valid: function () {
              $("#editForm").ajaxSubmit({
                url: '/api/category/add',
                dataType: 'json',
                type: 'POST',
                success: function (data) {
                  if (data.code == 200) {
                    location.href = '/category/list';
                  }
                }
              })
            }
          })
        }
      }
    });

  }
})

