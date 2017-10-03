require.config({
  baseUrl: '/public/assets',
  paths: {
    jquery: 'jquery/jquery.min',
    cookie: 'jquery-cookie/jquery.cookie',
    template: 'artTemplate/template-web',
    bootstrap: 'bootstrap/js/bootstrap.min',
    datepicker: 'bootstrap-datepicker/js/bootstrap-datepicker',
    language: 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
    validate: 'validate/jquery-validate.min',
    form: 'jquery-form/jquery.form',
    uploadify: 'uploadify/jquery.uploadify.min',
    region: 'jquery-region/jquery.region',
    //不依赖jQuery，不是标准模块
    ckeditor: 'ckeditor/ckeditor',
    echarts: 'echarts/echarts.min',
    //不是标准模块
    jcrop: 'jcrop/js/Jcrop',
    state: '../js/state',
    util: '../js/util',
    settings: '../js/settings',
    teacheradd: '../js/teacher-add',
    common: '../js/common',
    login: '../js/login',
    teacherList: '../js/teacher-list',
    index: '../js/index',
    courselist: '../js/course-list',
    courseadd: '../js/course-add',
    coursebase: '../js/course-base',
    coursepicture: '../js/course-picture',
    courselesson: '../js/course-lesson',
    categorylist: '../js/category-list',
    categoryadd: '../js/category-add'
  },
  shim: {
    bootstrap: {
      deps: ['jquery']
    },
    language: {
      deps: ['jquery', 'datepicker']
    },
    validate: {
      deps: ['jquery']
    },
    uploadify: {
      deps: ['jquery']
    },
    ckeditor: {
      exports: 'CKEDITOR'
    },
    jcrop: {
      deps: ['jquery']
    }
  }
});