module.exports = {
    options: {
        sourceMaps: true,
        experimental:true,  // Turn on all experimental features
        blockBinding: true  // Turn on support for let and const
    },
    all: {
        files: [{
          expand: true,
          src: [ 'app/assets/js/application/**/*.js' ],
          dest: 'build/'
        }]
    }
};
