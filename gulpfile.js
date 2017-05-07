var gulp = require('gulp'),
    requirejsOptimize = require('gulp-requirejs-optimize'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');

gulp.task('optimize', function() {
    return gulp.src('src/js/app.js')
        .pipe(requirejsOptimize({
            config: {
                "app/addModules": {
                    namespace: "demo"
                }
            },
            baseUrl: 'src/js',
            findNestedDependencies: true,
            name: 'app',
            optimize: "none",
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
        .pipe(gulp.dest('dist'))
        .pipe(gulp.dest('D:\\oracle\\apex\\images\\demo\\js'))
        .pipe(notify("Done"));;
});

gulp.task('optimize', function() {
    return gulp.src('src/js/app.js')
        .pipe(requirejsOptimize({
            config: {
                "app/addModules": {
                    namespace: "demo"
                }
            },
            baseUrl: 'src/js',
            findNestedDependencies: true,
            name: 'app',
            optimize: "none",
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
        .pipe(gulp.dest('dist/js'))
        .pipe(gulp.dest('D:\\oracle\\apex\\images\\demo\\js'))
        .pipe(notify("Done"));;
});

gulp.task('watch', function() {
  gulp.watch('src/js/', ['optimize']);
});

gulp.task('default', ['watch', 'optimize']);
