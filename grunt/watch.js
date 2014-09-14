module.exports = {
    watch: {
        traceur :  {
            files :  [ 'app/assets/js/application/**/*.js' ],
            tasks :  [ 'newer:traceur' ]
        }
    },
};
