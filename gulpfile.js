var fileinclude = require('gulp-file-include');
var gulp = require('gulp');
var mustache = require("gulp-mustache");

//.pipe(mustache('items.json'), {extension: 'html'})
gulp.task('compile', function() {
    return (
        gulp.src('./templates/*.html')
            .pipe(fileinclude({
                prefix: '@@',
                basepath: 'templates',
            }))
            .pipe(mustache('items.json'), {'extension': 'html'})
            .pipe(gulp.dest('.'))
    );
});

gulp.task('default', gulp.series('compile'));
