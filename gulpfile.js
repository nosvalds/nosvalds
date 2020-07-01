let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let htmlmin = require('gulp-htmlmin');

// Image copy from src/ to dist/
gulp.task('image-cpy-icons', () => {
    return gulp.src('./src/images/icons/*', { base: 'src'})
        .pipe(gulp.dest('./dist/'))
})

gulp.task('image-cpy-photos', () => {
    return gulp.src('./src/images/photos/*', { base: 'src'})
        .pipe(gulp.dest('./dist/'))
})

gulp.task('image-cpy', gulp.parallel('image-cpy-icons', 'image-cpy-photos'));

// Image copy watcher function
gulp.task('image-watcher', () => {
    return gulp.watch('./src/images/**/*', gulp.task('image-cpy'));
})

// CSS minifying function from /css/style.css to /docs/css/style.css for publishing
gulp.task('minify-css', () => {
    return gulp.src('./src/css/style.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist/css/'));
});

// CSS minifier watcher
gulp.task('css-min-watcher', ()=> {
    return gulp.watch('./src/css/*.css', gulp.task('minify-css'));
});

// HTML minifier task from /src/ to /docs/
gulp.task('minify-html', () => {
    return gulp.src('./src/index.html') // don't copy components page over
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('dist'));
  });

// HTML minifier watcher
gulp.task('html-min-watcher', ()=> {
    return gulp.watch('./src/index.html', gulp.task('minify-html'));
});

// default gulp task for on-demand compilation
gulp.task('default', gulp.parallel('minify-html','minify-css','image-cpy'));

// watch task to turn on the watcher to automate compilation when changes are made
gulp.task('watch',gulp.parallel('css-min-watcher','html-min-watcher','image-watcher'));