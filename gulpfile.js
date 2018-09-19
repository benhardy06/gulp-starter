var gulp = require('gulp')
    uglify = require('gulp-uglify')
    rename = require('gulp-rename')
    autoprefixer = require('gulp-autoprefixer')
    plumber = require('gulp-plumber')
    browserSync = require('browser-sync')
    reload = browserSync.reload

gulp.task('scripts', function(){
    gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
    .pipe(plumber())
    .pipe(rename({suffix:'.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
    .pipe(reload({stream:true}))
});


gulp.task('browser-sync', function(){
    browserSync({
        server:{
            baseDir:'./app/'
        }
    })
})


gulp.task('html', function(){
    gulp.src('app/**/*.html')
    .pipe(reload({stream:true}))
})


gulp.task('watch', function(){
    gulp.watch('app/js/**/*.js', ['scripts'])
    gulp.watch('app/**/*.html', ['html'])
})

gulp.task('default', ['scripts', 'html', 'browser-sync', 'watch'])