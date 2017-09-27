define(['jquery'],function ($) {
   return {
     all :function (key) {
       var param = location.search.substr(1);
       var tcId=null;
       if (param) {
         var all = param.split('&');
         $.each(all, function (i, item) {
           var arr = item.split('=');
           if (arr[0]==key ) {
             tcId=arr[1];
             return false;
           }
         });
       };
       //返回指定的url部分
       return tcId;
     },
     //设置选中导航高亮显示
     setSelect : function (path){
         $('.aside .navs a[href="'+path+'"]').addClass('active').closest('ul').show();
     }
   }
})
