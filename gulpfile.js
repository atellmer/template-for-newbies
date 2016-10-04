var gulp = require('gulp');
var concat = require('gulp-concat');
var stylus = require('gulp-stylus');
var nib = require('nib');
var connect = require('gulp-connect');


//connect
gulp.task('connect', function () {
	connect.server({
		root: 'client',
		port: 3000,
		livereload: true
	});
});

//stylus
gulp.task('styl', function () {
	return gulp.src(['client/**/*.styl'])
		.pipe(concat('bundle.styl'))
		.pipe(stylus({
			use: [nib()],
			compress: false
		}))
		.pipe(gulp.dest('client/dist/'))
		.pipe(connect.reload());
});

//html
gulp.task('html', function () {
	return gulp.src(['client/**/*.html'])
  .pipe(connect.reload());	
});

//js
gulp.task('scripts', function () {
	return gulp.src(['client/**/*.js'])
  .pipe(connect.reload());	
});

//watch
gulp.task('watch', function () {
	gulp.watch(['client/**/*.html'], ['html']);
  gulp.watch(['client/**/*.js'], ['scripts']);
  gulp.watch(['client/**/*.styl'],['styl']);
});

gulp.task('default', [
	'connect',
  'styl',
	'watch'
]);