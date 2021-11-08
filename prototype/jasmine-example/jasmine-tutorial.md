# Jasmine (JavaScript Unit Test) Overview

## Resources
- Look at the section "Set up Jasmine with NPM" and below. (https://www.testim.io/blog/jasmine-js-a-from-scratch-tutorial-to-start-testing/) [https://www.testim.io/blog/jasmine-js-a-from-scratch-tutorial-to-start-testing/]

## Install Jasmine
For the example: do the following in `/prototype/jasmine-test`.

For the source: do the following in `/test`.

Run `npm install --save-dev jasmine` in the indicated directory. This should create a directory called `node_modules` that contains the Jasmine libraries.

**IMPORTANT:** Create a .gitignore in the root of your project directory with `node_modules` in it to prevent committing hundreds of files to our repo.

## Run Jasmine example
Go to `/prototype/jasmine-test` and run `jasmine` to run the unit tests. This will run all of the tests (specs) in the spec_dir that match the regex in spec_files found in `/prototype/jasmine-test/spec/support/jasmine.json`.

## Run Jasmine tests for source repo
The unit tests will be located in the `/test/spec` directory. For each Javascript source file called `(example).js`, name the corresponding unit test file as `(example).test.js`.

Navigate to the `/test` directory and run `jasmine` to run the unit tests.