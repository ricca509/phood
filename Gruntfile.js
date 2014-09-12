module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: [
            'src/public/js/**/*.js'
            ]
        },
        jasmine: {
            all: {
                src: 'src/public/js/**/*.js',
                options: {
                    specs: 'test/unit/spec/*.spec.js',
                    helpers: 'test/spec/*.helper.js',
                    template: require('grunt-template-jasmine-requirejs'),
                    templateOptions: {
                        requireConfig: {
                            baseUrl: 'src/public/js'
                        },
                        requireConfigFile: 'src/public/js/main.js'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('default', ['jshint']);
};
