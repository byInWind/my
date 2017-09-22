require.config({
  baseUrl: '/public/assets',
  paths: {
    jquery: 'jquery/jquery.min',
    cookie: 'jquery-cookie/jquery.cookie',
    template: 'artTemplate/template-web',
    bootstrap: 'bootstrap/js/bootstrap.min',
    util: '../js/util',
    datepicker : 'bootstrap-datepicker/js/bootstrap-datepicker',
    language : 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
    teacheradd: '../js/teacheradd',
    common: '../js/common',
    login: '../js/login',
    teacherList: '../js/teacher-list'
  },
  shim: {
    bootstrap: {
      deps: ['jquery']
    },
     language: {
      deps: ['jquery','datepicker']
    }
  }
});