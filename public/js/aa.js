define(['jquery', 'template', 'util','form','validate','state'], function ($, template, util) {
  util.setSelect('/category/main');
  //��ȡURL�е�id
  var cgId = util.all('cg_id');
  if (cgId) {
    //�༭����
    $.ajax({
      url: '/api/category/edit',
      type: 'get',
      dataType: 'json',
      data: {cg_id: cgId},
      success: function (data) {
        if (data.code == 200) {
          data.result.operate = '�γ̱༭';
          // ģ��
          var html = template('addTpl', data.result);
          $('#addInfo').html(html);
        }
      }
    });
  } else {
    //��Ӳ���
    $.ajax({
      url: '/api/category/top',
      type: 'get',
      dataType: 'json',
      success: function (data) {
        if (data.code == 200) {
          var html = template('addTpl', data.result);
          $('#addInfo').html(html);
          submitForm('/api/category/add')
        }
      }
    });
    //�첽�ύ��
    function submitForm(url) {
      $("#editForm").validate({
        sendForm: false,
        valid: function () {
          $(this).ajaxSubmit({
            url: url,
            dataType: 'json',
            success: function (data) {
              if (data.code == 200) {
                location.href = '/category/main';
              }
            }
          })
        }
      })
    }
  }
})