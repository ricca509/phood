module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: [
            'public/js/*.js',
            'public/js/app/helpers/*.js',
            'public/js/app/models/*.js',
            'public/js/app/routers/*.js',
            'public/js/app/views/*.js',
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint']);

};