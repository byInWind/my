define(['jquery', 'template', 'util', 'bootstrap', 'form','state'], function ($, template, util) {

  //设置导航高亮
  util.setSelect('/course/add');
  //获取课程ID
  var csId = util.all('cs_id');
  //响应
  $.ajax({
    url: '/api/course/lesson',
    type: 'get',
    dataType: 'json',
    data: {cs_id: csId},
    success: function (data) {
      if (data.code == 200) {
        //渲染模板
        var html = template('lessonTpl', data.result);
        $("#lessonInfo").html(html);
        //添加课程
        $("#addLesson").click(function () {
          //添加时内容为空,{}
          var html = template('modalTpl', {});
          $("#chapterModal").html(html);
          //弹出模态框
          $("#chapterModal").modal();
          //添加课时信息表单提交
          $("#editBtn").click(function () {
            $("#lessonForm").ajaxSubmit({
              url: '/api/course/chapter/add',
              type: 'post',
              dataType: 'json',
              data : {ct_cs_id : csId},
              success: function (data) {
                if(data.code == 200){
                 // console.log(data)
                  location.reload();
                }
              }
            })
          })
        });

        //编辑课程
        $(".editLesson").click(function () {
          var ctId = $(".editLesson").attr('data-ctId');
          $.ajax({
            url: '/api/course/chapter/edit',
            type: 'GET',
            dataType: 'json',
            data: {ct_id: ctId},
            success: function (data) {
              // console.log(data)
              if (data.code == 200) {
                //  //渲染内容
                var html = template('modalTpl', data.result);
                $("#chapterModal").html(html);
                $(".modal-title").html('编辑课程')
                //  //弹出模态框
                $("#chapterModal").modal();
                //在这儿修改课程，表单提交
                $("#editBtn").click(function () {
                  $("#lessonForm").ajaxSubmit({
                    url: '/api/course/chapter/modify',
                    type: 'post',
                    dataType: 'json',
                    data: {ct_cs_id : csId,ct_id : ctId},
                    success: function (data) {
                      if(data.code == 200){
                        //alert(ctId)
                        location.reload();
                      }
                    }
                  });
                })
              }
            }
          });
        })
      }
    }
  });
})
