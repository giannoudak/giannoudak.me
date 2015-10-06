var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var connect = require('gulp-connect');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var angularTemplates = require('gulp-angular-templates');
var amgularTemplateCache = require('gulp-angular-templatecache');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');



gulp.task('connect', function () {
	connect.server({
		root: 'public',
		port: process.env.PORT 
	})
})


gulp.task('browserify', function() {
	// Grabs the app.js file
    return browserify('./app/app.js')
    	// bundles it and creates a file called main.js
		.bundle().on('error', function(err){
			// print the error (can replace with gulp-util)
			console.log(err.message);
			// end this stream
			this.emit('end');
			})
        .pipe(source('main.js'))
		.pipe(buffer())
    	.pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
		.pipe(sourcemaps.write('./')) // writes .map file
        // saves it the public/js/ directory
        .pipe(gulp.dest('./public/js/'));
})


gulp.task('sass', function() {
	return sass('sass/style.sass')
		.pipe(gulp.dest('./public/css'))
})

gulp.task('views', function () {
    gulp.src('app/**/*.html')
        .pipe(amgularTemplateCache('templates.js', {module: 'app.templates', standalone: true}))
        .pipe(gulp.dest('public/js'));
});



gulp.task('watch', function() {
	gulp.watch('app/**/*.js', ['browserify','views'])
	gulp.watch('sass/style.sass', ['sass'])
	gulp.watch('app/**/*.html', ['views']);
})

gulp.task('default', ['browserify','sass','views','connect', 'watch'])

