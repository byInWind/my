define(['jquery'],function ($) {
  //遮罩层操作   操作全局的ajax  ，再在需要遮罩层的js里引入
   $(document).ajaxStart(function () {
     $(".overlay").show();
   });
  $(document).ajaxStop(function () {
    //这样隐藏的太快了
    //$(".overlay").hide();

    //修改
    setTimeout(function () {
      $(".overlay").hide();
    },500);
  });
})