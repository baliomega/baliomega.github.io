module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
            dist: {
                files: {
                    'public/js/script.min.js': ['build/js/script.js']
                }
            }
        },

        postcss: {
            options: {
                map: true, // inline sourcemaps
                processors: [
                    require('pixrem')(), // add fallbacks for rem units
                    require('autoprefixer')({browsers: 'last 4 versions'}), // add vendor prefixes
                    require('cssnano')() // minify the result
                ]
            },
            dist: {
                src: 'public/css/style.min.css'
            }
        },

        sass: {
            options: {
                style: 'compressed',
                sourcemap: 'inline'
            },
            dist: {
                src: 'build/sass/style.sass',
                dest: 'public/css/style.min.css'
            }
        },

        watch: {
            grunt: {
                options: {
                    reload: true
                },
                files: ['Gruntfile.js']
            },
            css: {
                files: ['build/sass/*.sass'],
                tasks: ['sass', 'postcss']
            },
            js: {
                files: ['build/js/*.js'],
                tasks: ['uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');

    grunt.registerTask('default', ['watch']);
};