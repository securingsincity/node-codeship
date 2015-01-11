var gulp = require('gulp')
  , jshint = require('gulp-jshint')
  , mocha = require('gulp-mocha');


gulp.task('lint', function() {
  gulp.src(['lib/**.js','index.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
});

gulp.task('default',['lint'], function() {
  gulp.watch(['lib/**.js','index.js'],['lint']);
});