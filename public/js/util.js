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
       //���� �����URl�е�ָ������
       return tcId;
     },
     //����ָ���Ķ�Ӧ��ַ��ʾ
     setSelect : function (path){
         $('.aside .navs a[href="'+path+'"]').addClass('active').closest('ul').show();
     }
   }
})
