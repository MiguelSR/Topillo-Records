var gulp = require('gulp');
var mustache = require("gulp-mustache");

        //.pipe(mustache('items.json'), {extension: 'html'})
gulp.task('compile', function() {
    foo = gulp.src('./templates/*.html')
        .pipe(mustache('items.json'), {'extension': 'html'})
        .pipe(gulp.dest('.'));
});

gulp.task('default', ['compile',]);
