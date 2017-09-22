define(['jquery','template'],function($,template) {
	$.ajax({
		url: '/api/teacher/profile',
		type: 'get',
		dataType: 'JSON',
		success : function (data){
          if (data.code==200) {
          	var html = template('personalTpl',data.result);
          	$("#personalInfo").html(html);
          }
		}
	});
	
})