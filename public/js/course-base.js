define(['jquery', 'template','ckeditor', 'util', 'validate','form','state'], function($, template,CKEDITOR, util, validate) {
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

      ////添加富文本   这个位置不对，还没渲染出来就添加，报错。。。。。。
      //CKEDITOR.replace('editor');
      var html = template('baseTpl', data.result);
      $("#baseInfo").html(html);
      //添加富文本
      CKEDITOR.replace('editor');
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
           // console.log(html)
            $("#secondType").html(html);
          }
        });
      });
      //保存 --更新课程基本信息
      //validate选中的是表单form
      $("#baseForm").validate({
        //阻止submit按钮默认的提交功能
        sendForm: false,
        valid: function () {

          $.ajax({
            url: '/api/course/update/basic',
            type: 'POST',
            dataType: 'json',
            data: $("#baseForm").serialize(),
            success: function (data) {
              //console.log($("#baseForm").serialize());
              //console.log(data.result)   //这里tc_id为空？？通过表单序列化 获取数据，需要name，也需要value值，不然，最终data可以获取到，但是没有value对应的值为空，如果使用下面的插件就没问题
              //跳到添加/编辑课程封面 该界面需要cs_id
              location.href='/course/picture?cs_id='+data.result.cs_id;
            }
          })
          //$(this).ajaxSubmit({
          //    url: '/api/course/update/basic',
          //    type: 'POST',
          //    dataType: 'json',
          //    data: {cs_id : csId},
          //    success :function (data) {
          //    console.log(data)
          //   }
          //})
        }
      })
    }
  })
});