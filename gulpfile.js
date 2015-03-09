'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var babelify = require('babelify');
var base64 = require('gulp-base64');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');

gulp.task('default', ['css', 'js']);

gulp.task('css', function () {
    gulp.src([
        './node_modules/react-components/components/**/*.styl',
        './components/**/*.styl'
    ])
        .pipe(stylus({
            sourcemap: {
                inline: true,
                sourceRoot: '.',
                basePath: '.'
            }
        }))
        .pipe(base64({debug: true}))
        .pipe(autoprefixer())
        .pipe(concat('index.css'))
        .pipe(gulp.dest('build'));
});

gulp.task('js', function () {
    gulp.src('./index.js')
        .pipe(browserify({
            debug: true,
            transform: ['babelify']
        }))
        .pipe(gulp.dest('build'))
});
