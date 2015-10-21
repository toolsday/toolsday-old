var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    harp        = require('harp');

gulp.task('harp-server', function () {
    harp.server(__dirname, {
        port: 4000
    }, function () {
        browserSync({
            proxy: "localhost:4000",
            open: false
        });

        gulp.watch("public/css/**/*.scss", function () {
            reload("main.css", {stream: true});
        });

        gulp.watch([
            "public/**/*.ejs",
            "public/**/*.jade",
            "public/js/**/*.js",
            "public/**/*.json",
            "public/**/*.md"
        ], function () {
            reload();
        });
    })
});

gulp.task('default', ['harp-server']);