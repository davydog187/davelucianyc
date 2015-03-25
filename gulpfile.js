"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function () {
    gulp.src("./app/components/sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./public/css"));
});

gulp.task("default", function() {

});

