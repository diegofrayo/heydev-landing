var browserSync = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var less = require('gulp-less');
var pkg = require('./package.json');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');


// Compile LESS files from /less into /css
gulp.task('less', function() {
  return gulp.src(['less/landing.less'])
    .pipe(less())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


// build compiled CSS
gulp.task('build-css', ['less'], function() {
  return gulp.src(['css/landing.css'])
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


// build JS
gulp.task('build-js', function() {
  return gulp.src(['js/landing.js'])
    .pipe(gulp.dest('js'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


// build HTML
gulp.task('build-html', function() {
  return gulp.src('./index-dev.html')
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./'))
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
gulp.task('default', ['less', 'build-css', 'build-js', 'build-html']);


// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  });
});


// Dev task with browserSync
gulp.task('dev', ['browserSync', 'less', 'build-css', 'build-html', 'build-js'], function() {
  gulp.watch('less/*.less', ['less']);
  gulp.watch('css/*.css', ['build-css']);
  gulp.watch('js/*.js', ['build-js']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('index-dev.html', ['build-html']);
  gulp.watch('js/**/*.js', browserSync.reload);
});


// Build tasks
gulp.task('build', ['default', 'minify-css', 'minify-js', 'minify-html', 'copy-assets'], function() {});