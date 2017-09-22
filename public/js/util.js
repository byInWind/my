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
       //返回 所需的id 值
       return tcId;
     }
   }
})
