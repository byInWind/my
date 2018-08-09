require.config({
    baseUrl: '../../',
    paths: {
        jquery: 'public/assets/jquery/jquery.min',
        cookie: 'public/assets/jquery-cookie/jquery.cookie',
        template: 'public/assets/artTemplate/template-web',
        bootstrap: 'public/assets/bootstrap/js/bootstrap.min',
        datepicker: 'public/assets/bootstrap-datepicker/js/bootstrap-datepicker',
        language: 'public/assets/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
        validate: 'public/assets/validate/jquery-validate.min',
        form: 'public/assets/jquery-form/jquery.form',
        uploadify: 'public/assets/uploadify/jquery.uploadify.min',
        region: 'public/assets/jquery-region/jquery.region',
        //不依赖jQuery，不是标准模块
        ckeditor: 'public/assets/ckeditor/ckeditor',
        echarts: 'public/assets/echarts/echarts.min',
        //不是标准模块
        jcrop: 'public/assets/jcrop/js/Jcrop',
        mock: 'public/assets/mock/mock-min',
        util: 'public/js/util',
        settings: 'public/js/settings',
        teacheradd: 'public/js/teacher-add',
        common: 'public/js/common',
        login: 'public/js/login',
        teacherList: 'public/js/teacher-list',
        index: 'public/js/index',
        courselist: 'public/js/course-list',
        courseadd: 'public/js/course-add',
        coursebase: 'public/js/course-base',
        coursepicture: 'public/js/course-picture',
        courselesson: 'public/js/course-lesson',
        categorylist: 'public/js/category-list',
        categoryadd: 'public/js/category-add',
        repass: 'public/js/repass'
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