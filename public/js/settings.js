define(['jquery','template','ckeditor','uploadify','region','datepicker','language','validate','form'],function($,template,CKEDITOR) {
	//ckeditor顺序。在第三个，参数里应该也排在第三，否则找不到
  $.ajax({
		url: '/api/teacher/profile',
		type: 'get',
		dataType: 'JSON',
		success : function (data){
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
          	});
          	//三级联动
          
          	 $('#pcd').region({
                url : '/public/assets/jquery-region/region.json'
            });
             //富文本
             CKEDITOR.replace('edit');
             //提交表单
             $("#settingsForm").validate({
              //关闭默认提交 按钮应是submit
              sendForm : false,
              valid : function (){
                var hometown='';
                var p=$("#p").find('option:selected').text();
                var c=$("#c").find('option:selected').text();
                var d=$("#d").find('option:selected').text();
                hometown = p+'-'+c+'-'+d;
         
                //富文本无法更改，需要用ckeditor的方法更新富文本内容
                for(var instance in CKEDITOR.instances){
                  CKEDITOR.instances[instance].updateElement();
                }
              //提交表单
                $(this).ajaxSubmit({
                  url: '/api/teacher/modify',
                  type: 'post',
                  dataType: 'JSON',
                  data: {tc_hometown :hometown},
                  success : function (data){
                     if(data.code == 200){
                         // 刷新当前页面
                      location.reload();
              }
                 }
                })     
           //直接ajax500
              //  $(this).ajaxSubmit({
              //     url: '/api/teacher/modify',
              //     type: 'post',
              //     dataType: 'JSON',
              //     data: {tc_hometown :hometown},
              //     success : function (data){
              //        if(data.code == 200){
              //            // 刷新当前页面
              //         location.reload();
              // }
              //    }
              //   })           
              }
             });
		}
	});
	
})