var browserSync = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
var gulp = require('gulp');
var header = require('gulp-header');
var htmlmin = require('gulp-htmlmin');
var less = require('gulp-less');
var pkg = require('./package.json');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

// Set the banner content
var banner = ['/*!\n',
	' * Start Bootstrap - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
	' * Copyright 2013-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
	' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n',
	' */\n',
	''
].join('');

// Compile LESS files from /less into /css
gulp.task('less', function() {
	return gulp.src(['less/creative.less', 'less/landing.less'])
		.pipe(less())
		.pipe(header(banner, {
			pkg: pkg
		}))
		.pipe(gulp.dest('css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

// Minify compiled CSS
gulp.task('minify-css', ['less'], function() {
	return gulp.src(['css/creative.css', 'css/landing.css'])
		.pipe(cleanCSS({
			compatibility: 'ie8'
		}))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

// Minify JS
gulp.task('minify-js', function() {
	return gulp.src(['js/creative.js', 'js/landing.js'])
		.pipe(uglify())
		.pipe(header(banner, {
			pkg: pkg
		}))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('js'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

// Minify HTML
gulp.task('minify-html', function() {
	return gulp.src('./index-dev.html')
		.pipe(rename('index.html'))
		.pipe(htmlmin({
			collapseBooleanAttributes: true,
			collapseWhitespace: true,
			removeComments: true,
			removeEmptyAttributes: false,
			removeRedundantAttributes: true
		}))
		.pipe(gulp.dest('./'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

// Copy vendor libraries from /node_modules into /vendor
gulp.task('copy', function() {

	gulp.src(['node_modules/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
		.pipe(gulp.dest('vendor/bootstrap'));

	gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
		.pipe(gulp.dest('vendor/jquery'));

	gulp.src(['node_modules/magnific-popup/dist/*'])
		.pipe(gulp.dest('vendor/magnific-popup'));

	gulp.src(['node_modules/scrollreveal/dist/*.js'])
		.pipe(gulp.dest('vendor/scrollreveal'));

	gulp.src([
			'node_modules/font-awesome/**',
			'!node_modules/font-awesome/**/*.map',
			'!node_modules/font-awesome/.npmignore',
			'!node_modules/font-awesome/*.txt',
			'!node_modules/font-awesome/*.md',
			'!node_modules/font-awesome/*.json'
		])
		.pipe(gulp.dest('vendor/font-awesome'));
})

// Run everything
gulp.task('default', ['less', 'minify-css', 'minify-js', 'minify-html', 'copy']);

// Configure the browserSync task
gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: ''
		},
	});
});

// Dev task with browserSync
gulp.task('dev', ['browserSync', 'less', 'minify-css', 'minify-html', 'minify-js'], function() {
	gulp.watch('less/*.less', ['less']);
	gulp.watch('css/*.css', ['minify-css']);
	gulp.watch('js/*.js', ['minify-js']);
	// Reloads the browser whenever HTML or JS files change
	gulp.watch('index-dev.html', ['minify-html']);
	gulp.watch('js/**/*.js', browserSync.reload);
});