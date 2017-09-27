define(['jquery', 'template', 'util','datepicker','language','form','validate','state'], function ($, template, util) {
  
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
  //异步提交表单 
  function submitForm(url) {
    $("#teacherForm").validate({
      sendForm : false,
      valid :function (){
        $(this).ajaxSubmit({
          url : url,
          dataType: 'json',
          success : function (data){
             if (data.code==200) {
              location.href = '/teacher/list';
             }
          }
        })
      },
      description : {
        tc_Name :{
          required : "用户名不能为空"
        },
         tc_Pass :{
          required : "密码不能为空",
          pattern :"必须是6位数字"
        },
         tc_joinData :{
          required : "日期不能为空"
        }
      }
    })
  }
  //同步提交表单
  // function submitForm(url) {
  //   $('#teacherBtn').click(function () {
  //     $.ajax({
  //       url: url,
  //       type: 'post',
  //       data: $("#teacherForm").serialize(),
  //       dataType: 'json',
  //       success: function (data) {
  //         if (data.code == 200) {
  //           location.href = '/teacher/list';
  //         }
  //       }
  //     });
  //   });
  // };
});