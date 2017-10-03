define(['jquery', 'validate', 'form'], function () {
  $("#repassInfo").validate({
    sendForm: false,
    valid: function () {
      $(this).ajaxSubmit({
        url: '/api//teacher/repass',
        type: 'POST',
        dataType: 'JSON',
        success: function (data) {
          if (data.code == 200) {
             location.reload()
          }
        }
      })
    }
  })
})