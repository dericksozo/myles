module.exports = function(grunt) {

    'use strict';

    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

    grunt.initConfig({
    	babel: {
    		options: {
    			sourceMap: true,
    			presets: ['babel-preset-es2015'],
                plugins: ['mjsx']
    		},
    		dist: {
                files: [{
                    expand: true,
                    cwd: 'components/',
                    src: ['*.js'],
                    dest: 'compiled/components/'
                }]
            }
    	},
        browserify: {
            dist: {
                files: {
                    'assets/scripts/styleguide.js': ['compiled/components/styleguide.js'],
                    'assets/scripts/app.js': ['compiled/components/app.js']
                },
            }
        }
    });

    grunt.registerTask('default', ['babel', 'browserify']);

};