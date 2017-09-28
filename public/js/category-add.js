define(['jquery', 'util', 'template','form','validate','state'], function ($, util, template) {
  // 设置导航栏高亮选中
  util.setSelect('/category/main');
  var cgId = util.all('cg_id');

  //alert(cgId)
//课程编辑
//  $("#editBtn").click(function () {
  if (cgId) {
    $.ajax({
      url: '/api/category/edit',
      type: 'GET',
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
    //})
  }else {
    //课程添加
    // $("#addBtn").click(function () {
    $.ajax({
      url: '/api/category/top',
      type: 'get',
      data: $("#editForm").serialize(),
      dataType: 'json',
      success: function (data) {
        if (data.code == 200) {
          //console.log(data)
          var html = template('addTpl', {
            top: data.result
          });
          $('#addInfo').html(html);
            $("#editForm").validate({
              sendForm: false,
              valid: function () {
                $("#editForm").ajaxSubmit({
                  url: '/api/category/add',
                  dataType: 'json',
                  type :'POST',
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
    });

  }
})

