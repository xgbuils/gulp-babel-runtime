var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');

gulp.task('node', function () {
    return gulp.src('src/*.js')
        .pipe(babel({optional: ['runtime']}))
        .pipe(gulp.dest('dist/node/'));
});

function compile(watch) {
  var bundler = watchify(
    browserify(
  	  './src/index.js', { 
  	  	debug: true 
  	  }
  	).transform(
  	  babelify.configure({
  	  	optional: 'runtime'
  	  })
  	)
  );

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('index.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./dist/browser'));
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling...');
      rebundle();
    });
  }

  rebundle();
}

function watch() {
  return compile(true);
}

gulp.task('browser', function() { return compile(); });
gulp.task('browser-watch', function() { return watch(); });