var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

// PATHS

var paths = {
  prefix: 'style/scss/style.css'
};

// AUTOPREFIXER

gulp.task('prefix', function () {
    return gulp.src('style/scss/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('style/css'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.prefix, ['prefix']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'prefix']);