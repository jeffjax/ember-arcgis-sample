var gulp        = require('gulp');
var browserSync = require('browser-sync');
var plugins = require('gulp-load-plugins')();

// Static server
gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('js/**/*.js', ['jshint', browserSync.reload]);
});



// Lint the js code
gulp.task('jshint', function () {
  return gulp.src([ 'js/**/*.js' ])
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'))
    .pipe(plugins.jshint.reporter('fail'));
});

// by default start the server
gulp.task('default', ['serve']);