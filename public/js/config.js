require.config({
  baseUrl: '/public/assets',
  paths: {
    jquery: 'jquery/jquery.min',
    cookie: 'jquery-cookie/jquery.cookie',
    template: 'artTemplate/template-web',
    bootstrap: 'bootstrap/js/bootstrap.min',
    datepicker : 'bootstrap-datepicker/js/bootstrap-datepicker',
    language : 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
    validate :'validate/jquery-validate.min',
    form : 'jquery-form/jquery.form',
    uploadify : 'uploadify/jquery.uploadify.min',
    region : 'jquery-region/jquery.region',
    //不依赖jQuery，不是标准模块
    ckeditor : 'ckeditor/ckeditor',
    util: '../js/util',
    settings : '../js/settings',
    teacheradd: '../js/teacher-add',
    common: '../js/common',
    login: '../js/login',
    teacherList: '../js/teacher-list',
    index : '../js/index'
  },
  shim: {
    bootstrap: {
      deps: ['jquery']
    },
     language: {
      deps: ['jquery','datepicker']
    },
    validate: {
      deps :['jquery']
    },
    uploadify: {
      deps :['jquery']
    },
    ckeditor : {
      exports : 'CKEDITOR'
    }
  }
});