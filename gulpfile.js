var gulp = require('gulp');

gulp.task('default',function(){

}); 

//压缩html文件
var gulp = require('gulp'),
    minify=require('gulp-minify-html');

gulp.task('myhtml',function(){
     gulp.src('*.html')
     .pipe(minify())
     .pipe(gulp.dest('dist/html'))
});
gulp.task('default',['myhtml']);
//压缩css文件
var gulp =require('gulp'),
minify=require('gulp-minify-css');
gulp.task('mycss',function(){
	gulp.src('css/*.css')
	.pipe(minify())
	.pipe(gulp.dest('dist/css'))
});
gulp.task('default',['mycss']);