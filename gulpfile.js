var gulp = require('gulp');
var connect = require('gulp-connect');


//connect
gulp.task('connect', function () {
	connect.server({
		root: 'client',
		port: 3000,
		livereload: true
	});
});

//reload
gulp.task('reload', function () {
	return gulp.src([
		'client/**/*.html',
		'client/**/*.css',
		'client/**/*.js']).pipe(connect.reload());	
});

//watch
gulp.task('watch', function () {
	gulp.watch([
		'client/**/*.html',
		'client/**/*.css',
		'client/**/*.js'], ['reload']);
});

gulp.task('default', [
	'connect',
	'watch'
]);