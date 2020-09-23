module.exports = function(grunt) {

    //Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        watch: {
            stylus: {
                files: [
                    'src/stylus/**/*.styl'
                ],
                tasks: ['stylus']
            },
            pug: {
                files: [
                    'src/pug/*.pug'
                ],
                tasks: ['pug']
            },
        },


        stylus:{
            compile: {
                options: {
                    compress: true,
                    paths: ['src/stylus/'],
                    import: [
                        "nib/*"
                    ],
                },
                files: {
                        './dist/css/styles.css': ['src/stylus/*.styl', '!src/stylus/_*.styl']
                },
            },
        },

        pug:{
            compile:{
                options: {
                    pretty:false,
                },
                files: {
                    './dist/index.html' : ['src/pug/index.pug', '!src/pug/_*.pug']
                },
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-stylus');
    
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-pug')
}