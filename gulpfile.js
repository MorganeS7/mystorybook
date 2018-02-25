var gulp = require('gulp'),
	minifyjs = require('gulp-js-minify'),
	concat = require('gulp-concat');

gulp.task('concat', function(){
  return gulp.src('./scripts/*.js')
  	.pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('minify', function(){
  gulp.src('./dist/all.js')
    .pipe(minifyjs())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['concat', 'minify']);