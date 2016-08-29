/**
 * Created by Administrator on 2016/6/28.
 */
module.exports = function(grunt){
    //配置代码
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //调用插件
        watch: {
            client: {
                files: ['*.html', '*.htm', 'css/*', 'js/*', 'images/**/*'],
                options: {
                    livereload: true,
                    debounceDelay: 50
                }
            }
        },
        imagemin: {
            /* 压缩图片大小 */
            dist: {
                options: {
                    optimizationLevel: 3 // 定义 PNG 图片优化水平
                },
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,jpeg}'], // 优化 images 目录下所有 png/jpg/jpeg 图片
                    dest: 'images/' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
                }]
            }
        }
    });
    //加载插件
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    //注册任务
    grunt.registerTask('live', ['watch']);
    grunt.registerTask('img', ['imagemin']);
};