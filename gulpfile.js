var gulp = require('gulp');
var babel = require("gulp-babel");
var browserify = require("gulp-browserify");

gulp.task('default', function() {
  return gulp.src(['src/**.js'])
    .pipe(browserify())
    .pipe(babel())
    .pipe(gulp.dest("dist/js"));
});
