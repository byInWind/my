define(['jquery', 'template', 'util'], function ($, template, util) {
  // 设置侧边导航选中高亮
  util.setSelect('/course/add');
  var csId = util.all('cs_id');
  var flag = util.all('flag');
  //渲染模板
  $.ajax({
    url: '/api//course/basic',
    data: {cs_id: csId},
    type: 'get',
    dataType: 'json',
    success: function (data) {
      if (flag) {
        data.result.operate = '编辑课程';
      }
      else {
        data.result.operate = '添加课程';
      }
      var html = template('baseTpl', data.result);
      $("#baseInfo").html(html);
      //处理二级分类的下拉联动操作
      $("#firstType").change(function () {
        var cgId = $(this).val();
        //??cgId不存在  base落下了$.value
       // console.log($(this))

        //获取一级分类id
        $.ajax({
          url: '/api/category/child',
          type: 'get',
          dataType: 'json',
          data: {cg_id: cgId},
          success: function (data) {
            var tpl = ' <option>请选择分类</option>' +
              '{{each list}}' +
              '<option value="{{$value.cg_id}}">{{$value.cg_name}}</option> ' +
              '{{/each}}';
            var html = template.render(tpl, {list: data.result});
            console.log(html)
            $("#secondType").html(html);
          }
        })
      })
    }
  })
});