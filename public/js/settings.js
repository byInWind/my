define(['jquery','template','uploadify'],function($,template) {
	$.ajax({
		url: '/api/teacher/profile',
		type: 'get',
		dataType: 'JSON',
		success : function (data){
          if (data.code==200) {
          	var html = template('personalTpl',data.result);
          	$("#personalInfo").html(html);
          	//图像上传
          	$("#upfile").uploadify({
          		swf : '/public/assets/uploadify/uploadify.swf',
          		width :120,
          		height :120,
          		buttonText :'',
                uploader : '/api/uploader/avatar',
                fileObjName : 'tc_avatar',
                itemTemplate : '<span></span>',
                onUploadSuccess :function (a,b){
                      var obj=JSON.parse(b);
                      $(".preview img").attr('src',obj.result.path);
                }
          	})
          }
		}
	});
	
})