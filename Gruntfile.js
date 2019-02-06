module.exports = function(grunt) {
  // Do grunt-related things in here
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //编译 less 文件
    less: {
      development: {
        options: {
          strictMath: true
        },
        files: {
          'public/css/cartoon.css': 'public/less/cartoon.less',
          'public/css/bootstrap.css': 'public/less/bootstrap.less'
        }
      }
    },
    //监听文件变化
    watch: {
      files: ['public/less/cartoon.less', 'public/less/bootstrap.less', 'public/css/bootstrap.css'],
      tasks: ['less', 'cssmin']
    },
    //压缩 css 文件
    cssmin:{
      options:{
        stripBanners:true, //合并时允许输出头部信息
        banner:'/*!<%= pkg.name %> - <%= pkg.version %>-'+'<%=grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build:{
        src:'public/css/bootstrap.css',
        dest:'public/css/bootstrap.min.css' //dest 是目的地输出
      }
    }
  });

  // 加载任务插件。
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['less', 'cssmin', 'watch']);
};