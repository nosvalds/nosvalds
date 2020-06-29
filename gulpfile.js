let gulp = require('gulp');

// Image copy from src/ to dist/
gulp.task('image-cpy', () => {
    return gulp.src('./src/images/**/*', { base: 'src'})
        .pipe(gulp.dest('./dist'))
})

// Image copy watcher function
gulp.task('image-watcher', () => {
    return gulp.watch('./src/img/**/*', gulp.task('image-cpy'));
})
