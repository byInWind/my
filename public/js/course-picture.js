define(['jquery', 'template', 'util','uploadify'], function ($, template, util,uploadify) {
  //设置默认选中的导航
  util.setSelect('/course/add');

  var csId = util.all('cs_id');
  $.ajax({
    url: '/api/course/picture',
    type: 'get',
    dataType: 'JSON',
    data: {cs_id: csId},
    success: function (data) {
       //模板渲染
      var html = template('pictureTpl',data.result);
       $("#pictureInfo").html(html);
      //图片上传
      $("#myfile").uploadify({
        width : 80,
        height : 'auto',
        //设置进度条为空
        itemTemplate : '<span></span>',
        buttonText : '选择图片',
        buttonClass : 'btn btn-success btn-sm',
        swf : '/public/assets/uploadify/uploadify.swf',
        //后台接口
        uploader : '/api/uploader/cover',
        //传递的课程图片名称
        fileObjName : 'cs_cover_original',
        //额外传递的参数
        formData :{cs_id :csId},
        onUploadSuccess : function(a,b,c){
          var obj = JSON.parse(b);
          $('.preview img').attr('src',obj.result.path);
        }
      });
    }
  })
})