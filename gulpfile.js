var gulp = require('gulp');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var rename = require('gulp-rename');
var cheerio = require('gulp-cheerio');
var inject = require('gulp-inject');
var path = require('path');

gulp.task('svgstore', function () {
  var svgs = gulp
    .src('static/svg/icons/src/*.svg')
    .pipe(svgmin(function (file) {
      var prefix = path.basename(file.relative, path.extname(file.relative));
      return {
        plugins: [{
          convertPathData: false
        }, {
          cleanupIDs: {
            prefix: prefix + '-',
            minify: true
          }
        }]
      }
    }))
    .pipe(cheerio(function ($, file) {
      $('[fill]').attr('fill', 'currentColor');
    }))
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(gulp.dest('dest'));

  function fileContents(filePath, file) {
    return file.contents.toString();
  }

  return gulp
    .src('layouts/partials/src/inline-svg.html')
    .pipe(inject(svgs, { transform: fileContents }))
    .pipe(gulp.dest('layouts/partials'));
});

// Watch asset folder for changes
gulp.task("watch", function () {
  var watcher = gulp.watch("static/svg/icons/src/**/*")
  watcher.on('all', gulp.series('svgstore'))
})

// Set watch as default task
gulp.task("default", gulp.series("watch"))