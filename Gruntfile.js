module.exports = function(grunt) {
  // Do grunt-related things in here
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          strictMath: true
        },
        files: {
          'public/css/cartoon.css': 'public/css/cartoon.less'
        }
      }
    },
    watch: {
      files: ['public/css/cartoon.less'],
      tasks: ['less']
    }
  });

  // 加载任务插件。
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['less', 'watch']);
};