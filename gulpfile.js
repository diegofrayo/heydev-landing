var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var less = require('gulp-less');
var replace = require('gulp-replace');
var runSequence = require('gulp-run-sequence');
var uglify = require('gulp-uglify');
var timestamp = new Date().getTime();


// Compile LESS files from /less into /css
gulp.task('less', function() {
  return gulp.src(['less/landing.less'])
    .pipe(less())
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


// build JS
gulp.task('build-js', function() {
  return gulp.src(['js/landing.js'])
    .pipe(gulp.dest('./build/js'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


// build HTML
gulp.task('build-html', function() {
  return gulp.src('./index.html')
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


// minify CSS
gulp.task('minify-css', function() {
  return gulp.src(['css/landing.css'])
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('./build/css/'));
});


// minify JS
gulp.task('minify-js', function() {
  return gulp.src(['js/landing.js'])
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});


// minify HTML
gulp.task('minify-html', function() {
  return gulp.src('./index.html')
    .pipe(replace('[TIMESTAMP]', timestamp))
    .pipe(htmlmin({
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      removeComments: true,
      removeEmptyAttributes: false,
      removeRedundantAttributes: true
    }))
    .pipe(gulp.dest('./build'));
});


gulp.task('copy-assets', function() {
  gulp.src(['./img/**/*.png', './img/**/*.jpg', './img/**/*.ico', '!./img/backgrounds/original/*', '!./img/bg-patterns/original/*', '!./img/portfolio/original/*', '!./img/team/original/*', '!./img/tech-stack/original/*'])
    .pipe(gulp.dest('./build/img'));
});


// Run everything
gulp.task('default', ['less', 'build-js', 'build-html']);


// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './build'
    },
  });
});


// Dev task with browserSync
gulp.task('dev', ['browserSync', 'less', 'build-html', 'build-js', 'copy-assets'], function() {
  gulp.watch('less/*.less', ['less']);
  gulp.watch('js/*.js', ['build-js']);
  gulp.watch('index.html', ['build-html']);
});


// Build tasks
gulp.task('prod', function() {
  runSequence('default', ['minify-css', 'minify-js', 'minify-html', 'copy-assets']);
});