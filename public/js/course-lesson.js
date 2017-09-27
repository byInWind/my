define(['jquery', 'template', 'util', 'bootstrap'], function ($, template, util) {

  //设置导航高亮
  util.setSelect('/course/add');
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
        });

        //编辑课程
        $(".editLesson").click(function () {
          var ctId = $(this).attr('data-ctId');
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
              }
            }
          });
        })
      }
    }
  });
})
