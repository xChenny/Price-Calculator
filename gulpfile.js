const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const path = require('path');

const paths = {
    src: ['src/**/*.js'],
    build: 'build',
    // Must be absolute or relative to source map
    sourceRoot: path.join(__dirname, 'src'),
};

gulp.task('babel', function () { 
    return gulp.src(paths.src)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['babel-preset-env']
        }))
        .pipe(sourcemaps.write('.',
                  { sourceRoot: paths.sourceRoot }))
        .pipe(gulp.dest(paths.build));
});

gulp.task('watch', function() {
    gulp.watch(paths.src, ['babel']);
});

gulp.task('default', ['watch']);