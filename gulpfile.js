var gulp = require('gulp'),
    requirejsOptimize = require('gulp-requirejs-optimize'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');

gulp.task('optimize', function() {
    return gulp.src('src/js/app.js')
        .pipe(requirejsOptimize({
            baseUrl: 'src/js',
            findNestedDependencies: true,
            name: 'app',
            paths: {
                "jquery": "lib/jquery"
            },
            shim: {
                "jquery": {
                    exports: ["jQuery", "$"]
                }
            }
        }))
        .pipe(rename("app-build.js"))
        .pipe(gulp.dest('src/js'))
        .pipe(notify("Done"));
});

gulp.task('watch', function() {
  gulp.watch(['src/js/**', '!src/js/app-build.js'], ['optimize']);
});

gulp.task('default', ['watch', 'optimize']);
