var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync');
	

gulp.task('sass', function() {
	return gulp.src('sass/**/*.sass')
	.pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
	.pipe(gulp.dest('css'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: '../EasyRent/'
		},
		notify: false
	});
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
	gulp.watch('sass/**/*.sass', ['sass']);
	gulp.watch('index.html', browserSync.reload);
	gulp.watch('js/*.js', browserSync.reload);
	gulp.watch('css/media.css', browserSync.reload);
});