
var gulp  =require('gulp');
var server = require('gulp-express');
///scripts task
gulp.task('scripts',function(){
	
	server.run(['app/app.js']);

	 gulp.src(['srcApp/**/*.js','!srcApp/**/*.min.js']).pipe(gulp.dest('app'));
 

})

///		Watch task
gulp.task('watch',function(){
	gulp.watch( ['app.js', 'routes/**/*.js','srcApp/**/*.js'],[server.run]);
})

gulp.task('default',['scripts','watch']); 