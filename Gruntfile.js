"use strict";

function configureGrunt(grunt) {
    grunt.initConfig({

        concurrent: {
            server: {

            }
        }

    });


    grunt.loadNpmTasks("grunt-concurrent");
}

module.exports = configureGrunt;
