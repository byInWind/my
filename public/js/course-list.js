define(['jquery','util','template','state'],function ($,util,template) {
//设置左侧导航栏高亮选中
  util.setSelect(location.pathname);
  $.ajax({
  	url: '/api/course',
  	type: 'GET',
  	dataType: 'json',
    success : function (data){
    	var html=template('courseList',{list : data.result});
        $("#courseInfo").html(html);
    }
  })
})
