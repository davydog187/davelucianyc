"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var spawn = require("child_process").spawn;
var node;

gulp.task("build-sass", function () {
    gulp.src("./app/components/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("./public/stylesheets/"));
});

gulp.task("sass", ["build-sass"], function() {
    return gulp.watch("./app/components/*.scss", ["build-sass"]);
});

gulp.task("server", function() {
    if (node) {
        node.kill();
    }

    node = spawn("node", ["app.js"], { stdio: "inherit" });

    node.on("close", function (exitCode) {
        if (exitCode === 8) {
            gulp.log("Error detected, waiting for changes...");
        }
    });
});

gulp.task("default", ["sass"], function() {
    gulp.run("server");

    gulp.watch(["./app.js", "./app/code/**/*.js"], function() {
        gulp.run("server");
    });

    gulp.watch("./public/style.css", function() {
        gulp.run("server");
    });

});

process.on("exit", function() {
    if (node) {
        node.kill();
    }
})

