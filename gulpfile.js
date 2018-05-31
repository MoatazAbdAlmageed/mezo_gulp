var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var rename = require("gulp-rename");
var sass = require("gulp-sass");
var gulp_concat = require("gulp-concat");
var uglify = require('gulp-uglify');

/*  +++++++++++ Gulp helper tasks +++++++++++ */
gulp.task('default', [
    'copyhtml',
    'imagemin',
    'compilesass',
    'concatJs',
]);
gulp.task('watch', function () {
/* code here */
});



/*  +++++++++++ HTML tasks   +++++++++++ */
gulp.task('copyhtml', function () {
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
});


/*  +++++++++++ Images tasks   +++++++++++ */
gulp.task('imagemin', () =>
  gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
);

/*  +++++++++++ CSS tasks   +++++++++++ */
gulp.task('compilesass', () =>
  gulp.src('src/css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
);

/*  +++++++++++ js tasks   +++++++++++ */
gulp.task('concatJs', function () {
    gulp.src('src/js/*.js')
        .pipe(gulp_concat('main.js'))
        .pipe(gulp.dest('dist/js'))
});


