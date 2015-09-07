"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function () {
    gulp.src("./app/components/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("./public/stylesheets/"));
});

gulp.task("default", function() {

});

