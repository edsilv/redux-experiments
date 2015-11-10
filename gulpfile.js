var concat = require('gulp-concat');
var connect = require('gulp-connect');
var gulp = require('gulp');
var path = require('path');
var ts = require('gulp-typescript');

gulp.task('build', function() {

    var result = gulp.src([
            './test/*.ts',
            './test/**/*.ts',
            '!./lib/**/*.ts',
            './typings/**/*.ts'
        ])
        .pipe(ts({
            module: 'amd',
            target: 'es5',
            declaration: false,
            noExternalResolve: true
        }));

    return result.js
        //.pipe(concat('test.js'))
        .pipe(gulp.dest('./test'));
});

function mount(connect, dir) {
    return connect.static(path.resolve(dir));
}

gulp.task('test', function() {
    connect.server({
        root: './test',
        middleware: function(connect, opt) {
            return [
                // serve contents of the dist folder
                mount(connect, './')
            ]
        }
    });
});