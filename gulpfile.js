var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    harp        = require('harp');

gulp.task('harp-server', function () {
  harp.server(__dirname + '/_harp', {
        port: 4000
    }, function () {
        browserSync({
            proxy: "localhost:4000",
            open: false
        });

        gulp.watch("_harp/css/**/*.scss", function () {
            reload("main.css", {stream: true});
        });

        gulp.watch([
            "_harp/**/*.ejs",
            "_harp/**/*.jade",
            "_harp/js/**/*.js",
            "_harp/**/*.json",
            "_harp/**/*.md"
        ], function () {
            reload();
        });
    })
});

gulp.task('default', ['harp-server']);
