"use strict"

module.exports = (grunt) ->
	require("load-grunt-tasks") grunt
	require("time-grunt") grunt
	grunt.initConfig
		coffee:
			options:
				base: true
			dist:
				files:
					'angular-static-seo.js': 'angular-static-seo.coffee'

		uglify:
			dist:
				options:
					sourceMap: 'angular-static-seo.min.js.map'
				files:
					'angular-static-seo.min.js': ['angular-static-seo.js']

	grunt.registerTask "build", ["coffee:dist", "uglify:dist"]
