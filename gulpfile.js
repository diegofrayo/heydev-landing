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
gulp.task('less', function () {
  return gulp.src(['./src/less/landing.less'])
    .pipe(less())
    .pipe(gulp.dest('./heydev/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


// build JS
gulp.task('build-js', function () {
  return gulp.src(['./src/js/landing.js'])
    .pipe(gulp.dest('./heydev/js'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


// build HTML
gulp.task('build-html', function () {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./heydev'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


// minify CSS
gulp.task('minify-css', function () {
  return gulp.src(['./src/css/landing.css'])
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('./heydev/css/'));
});


// minify JS
gulp.task('minify-js', function () {
  return gulp.src(['./src/js/landing.js'])
    .pipe(uglify())
    .pipe(gulp.dest('./heydev/js'));
});


// minify HTML
gulp.task('minify-html', function () {
  return gulp.src('./src/index.html')
    .pipe(replace('[TIMESTAMP]', timestamp))
    .pipe(htmlmin({
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      removeComments: true,
      removeEmptyAttributes: false,
      removeRedundantAttributes: true
    }))
    .pipe(gulp.dest('./heydev'));
});


gulp.task('copy-assets', function () {
  gulp.src([
      './assets/**/*.ico',
      './assets/**/*.jpg',
      './assets/**/*.png',
      '!./assets/**/*.psd',
      '!./assets/images/backgrounds/original/*',
      '!./assets/images/bg-patterns/**/*',
      '!./assets/images/portfolio/**/*',
      '!./assets/images/team/original/*',
      '!./assets/images/tech-stack/original/*'
    ])
    .pipe(gulp.dest('./heydev/assets'));
});


// Run everything
gulp.task('default', ['less', 'build-js', 'build-html']);


// Configure the browserSync task
gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: './heydev'
    },
  });
});


// Dev task with browserSync
gulp.task('dev', ['browserSync', 'less', 'build-html', 'build-js', 'copy-assets'], function () {
  gulp.watch('./src/less/*.less', ['less']);
  gulp.watch('./src/js/*.js', ['build-js']);
  gulp.watch('./src/index.html', ['build-html']);
});


// Build tasks
gulp.task('prod', function () {
  runSequence('default', ['minify-css', 'minify-js', 'minify-html', 'copy-assets']);
});