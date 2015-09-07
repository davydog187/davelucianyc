"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("build-sass", function () {
    gulp.src("./app/components/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("./public/stylesheets/"));
});

gulp.task("sass", ["build-sass"], function() {
    return gulp.watch("./app/components/*.scss", ["build-sass"]);
});

gulp.task("server", function() {
});

gulp.task("default", ["sass", "server"], function() {
});

