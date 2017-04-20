const gulp = require('gulp');
const sass = require('gulp-sass');
const rimraf = require('rimraf');
const autoprefixer = require('gulp-autoprefixer');
const babel = require("gulp-babel");
const browserify = require("gulp-browserify");

gulp.task('clean', (callback) => {
  rimraf('dist', callback);
})

gulp.task('move-html', ['clean'], () => {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('compile-sass', () => {
  rimraf('dist/**/*.css', ()=> {});

  return gulp.src('src/stylesheets/index.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('bundle-js', function() {
  return gulp.src(['src/**/**.js'])
    .pipe(browserify())
    .pipe(babel())
    .pipe(gulp.dest("dist/"));
});

gulp.task('default', ['move-html', 'compile-sass', 'bundle-js']);

gulp.task('watch', () => {
  gulp.watch('src/**/*.html', ['move-html']);
  gulp.watch('src/**/*.scss', ['compile-sass']);
  gulp.watch('src/**/*.js', ['bundle-js']);
});

