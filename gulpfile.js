var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('webpack');

gulp.task('sass', function() {
	gulp.src('./public/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist/css/'));
});

gulp.task('webpack', function () {

});

gulp.task('default', ['sass'], function () {
});
