/**
 * Setup for Grunt automated testing
 * Resource: https://gruntjs.com/getting-started
 */
module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Resource: https://gruntjs.com/configuring-tasks#building-the-files-object-dynamically
    terser: {
      dynamic_mappings: {
        // Grunt will search for "**/*.js" under "lib/" when the "uglify" task
        // runs and build the appropriate src-dest file mappings then, so you
        // don't need to update the Gruntfile when files are added or removed.
        files: [
          {
            expand: true, // Enable dynamic expansion.
            cwd: 'source/', // Src matches are relative to this path.
            src: ['**/*.js'], // Actual pattern(s) to match.
            dest: 'deploy/', // Destination path prefix.
            ext: '.min.js', // Dest filepaths will have this extension.
            extDot: 'first', // Extensions in filenames begin after the first dot
          },
        ],
      },
    },
    cssmin: {
      target: {
        files: [
          {
            expand: true, // Enable dynamic expansion.
            cwd: 'source/', // Src matches are relative to this path.
            src: ['**/*.css'], // Actual pattern(s) to match.
            dest: 'deploy/', // Destination path prefix.
            ext: '.min.css', // Dest filepaths will have this extension.
            extDot: 'first', // Extensions in filenames begin after the first dot
          },
        ],
      },
    },
    htmlmin: {
      target: {
        options: {
          // Target options
          removeComments: true,
          collapseWhitespace: true,
        },
        files: [
          {
            expand: true, // Enable dynamic expansion.
            cwd: 'source/', // Src matches are relative to this path.
            src: ['**/*.html'], // Actual pattern(s) to match.
            dest: 'deploy/', // Destination path prefix.
            ext: '.min.html', // Dest filepaths will have this extension.
            extDot: 'first', // Extensions in filenames begin after the first dot
          },
        ],
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-terser');

  // Default task(s).
  grunt.registerTask('default', ['terser', 'cssmin', 'htmlmin']);
};
