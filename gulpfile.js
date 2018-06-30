var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    uglifyJs  =  require('gulp-uglify-es').default,
    cssNano  =  require('gulp-cssnano'),
    reload = browserSync.reload;

var src = {
html:['index.html'],
};

gulp.task('default', ['watch'], function(){
  gulp.start('watch');
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'dist/',
      index: 'index.html'
    },
    port: 3000,
    open: true
  });
});

gulp.task('html', function(){
  gulp.src(src.html)
    .pipe(reload({
      stream:true
    }))
});

gulp.task('watch', ['browserSync'], function(){
  	gulp.watch('./dist/index.html', ['html']);
});

gulp.task('scripts', function() {
  return gulp.src([
      './src/js/libs/list.min.js', 
      './src/js/libs/modernizr-custom.js', 
      './src/js/libs/snap.svg-min.js',
      './src/js/main.js',
      './src/js/painter.js',
      './src/js/classContent.js',
      './src/js/classie.js',
    ])
    .pipe(concat('new.js'))
    .pipe(uglifyJs())
    .pipe(gulp.dest('./dist/'))
});

gulp.task('min-css', function() {
  return gulp.src('src/css/*.css')
    .pipe(concat('new.css'))
    .pipe(cssNano())
    .pipe(gulp.dest('dist/'));
});