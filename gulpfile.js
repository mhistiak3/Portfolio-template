const gulp = require("gulp");
const postcss = require("gulp-postcss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

function buildStyles() {
  return gulp
    .src("src/styles.css")
    .pipe(postcss([tailwindcss, autoprefixer, cssnano]))
    .pipe(gulp.dest("src/css"));
}

function watchFiles() {
  gulp.watch("src/*.css", buildStyles);
  gulp.watch("src/*.html", buildStyles);
}

exports.default = gulp.series(buildStyles, watchFiles);
