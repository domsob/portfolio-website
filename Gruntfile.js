module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean : {
            target : {
                src : [ "build/*"]
            }
        },
        uglify: {
            options: {
              mangle: {
                  except: [
                    'js/bootstrap.min.js',
                    'js/jquery.easing.min.js'
                  ]
              }
            },
            library: {
                files: {
                    'build/js/main.min.js': [
                      'js/jquery.js',
                      'js/bootstrap.min.js',
                      'js/jquery.easing.min.js',
                      'js/classie.js',
                      'js/cbpAnimatedHeader.js',
                      'js/jqBootstrapValidation.js',
                      'js/contact_me.js',
                      'js/freelancer.js'
                    ]
                }
            }
        },
        less: {
            expanded: {
                options: {
                    paths: ["css"]
                },
                files: {
                    "css/<%= pkg.name %>.css": "less/<%= pkg.name %>.less"
                }
            }
        },
        cssmin: {
          options: {
            shorthandCompacting: false,
            roundingPrecision: -1,
            keepSpecialComments: 0
          },
          target: {
            files: {
              'build/css/style.min.css': [
                'css/bootstrap.css',
                'css/freelancer.css',
                'font-awesome/css/font-awesome.min.css'
              ]
            }
          }
        },
        htmlclean: {
            root: {
              expand: true,
              cwd: '',
              src: '*.html',
              dest: 'build/'
            }
        },
        copy: {
          options: {
              processContentExclude: ['**/*.{png,gif,jpg,ico,svg,ttf,eot,woff}']
          },
          target: {
            files: [
                {expand: true, src: ['index.html'], dest: 'build/'},
                {expand: true, src: ['img/portfolio/*'], dest: 'build/'},
                {expand: true, src: ['img/*.png'], dest: 'build/'},
                {expand: true, src: ['img/*.jpg'], dest: 'build/'},
                {expand: true, src: ['img/*.jpeg'], dest: 'build/'},
                {expand: true, src: ['img/*.gif'], dest: 'build/'},
                {expand: true, src: ['mail/*'], dest: 'build/'},
                {
                  expand: false,
                  src: ['font-awesome/fonts/fontawesome-webfont.woff'],
                  dest: 'build/fonts/fontawesome-webfont.woff'
                },
                {
                  expand: false,
                  src: ['font-awesome/fonts/fontawesome-webfont.ttf'],
                  dest: 'build/fonts/fontawesome-webfont.ttf'
                }
            ],
          }
        },
        watch: {
          files: [
            'css/**',
            'js/**',
            'font-awesome/**',
            'less/**',
            'mail/**',
            '*.php',
            '*.html',
            '*.js',
            '*.json',
            '*.md'
          ],
          tasks: ['clean', 'uglify', 'less', 'cssmin', 'copy', 'htmlclean']
        }
    });

    // Load the plugins.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-htmlclean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['clean', 'uglify', 'less', 'cssmin', 'copy', 'htmlclean']);

};
