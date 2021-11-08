# Jasmine (JavaScript Unit Test) Overview

## Resources
- Look at the section "Set up Jasmine with NPM" and below.
  - https://www.testim.io/blog/jasmine-js-a-from-scratch-tutorial-to-start-testing/

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

## Expected output
Your randomized seed will be different and the order of tests may be different, but they should be all there and the number of specs (number of asserts) and number of failures should match.

```
$ jasmine
Randomized with seed 12994
Started
FF.FF.F...FF

Failures:
1) helloWorld2 returns hello world test 2
  Message:
    Expected 'hello world' to be 'hello World'.
  Stack:
    Error: Expected 'hello world' to be 'hello World'.
        at <Jasmine>
        at UserContext.<anonymous> (C:\Users\hanna\Documents\CSE 110\CSE 110 Project\cse110-fa21-group32\test\spec\helloWorld.test.js:20:30)
        at <Jasmine>

2) helloWorld returns hello world test 1
  Message:
    Expected 'hello world' to be 'Hello world'.
  Stack:
    Error: Expected 'hello world' to be 'Hello world'.
        at <Jasmine>
        at UserContext.<anonymous> (C:\Users\hanna\Documents\CSE 110\CSE 110 Project\cse110-fa21-group32\test\spec\helloWorld.test.js:11:30)
        at <Jasmine>

3) helloWorld3 returns hello world test 3
  Message:
    Expected 'hello world' to be 'helloWorld'.
  Stack:
    Error: Expected 'hello world' to be 'helloWorld'.
        at <Jasmine>
        at UserContext.<anonymous> (C:\Users\hanna\Documents\CSE 110\CSE 110 Project\cse110-fa21-group32\test\spec\helloWorld.test.js:29:30)
        at <Jasmine>

4) helloWorld6 returns hello world test 6a
  Message:
    Expected 'hello world' to be 'Hello world'.
  Stack:
    Error: Expected 'hello world' to be 'Hello world'.
        at <Jasmine>
        at UserContext.<anonymous> (C:\Users\hanna\Documents\CSE 110\CSE 110 Project\cse110-fa21-group32\test\spec\helloWorld.test.js:62:30)
        at <Jasmine>

5) helloWorld4 returns hello world test 5b
  Message:
    Expected 'hello world' to be 'Hello world'.
  Stack:
    Error: Expected 'hello world' to be 'Hello world'.
        at <Jasmine>
        at UserContext.<anonymous> (C:\Users\hanna\Documents\CSE 110\CSE 110 Project\cse110-fa21-group32\test\spec\helloWorld.test.js:52:30)
        at <Jasmine>

6) helloWorld8 secondChild returns hello world test 8 child2
  Message:
    Expected 'hello world' to be 'Hello world'.
  Stack:
    Error: Expected 'hello world' to be 'Hello world'.
        at <Jasmine>
        at UserContext.<anonymous> (C:\Users\hanna\Documents\CSE 110\CSE 110 Project\cse110-fa21-group32\test\spec\helloWorld.test.js:97:34)
        at <Jasmine>

7) helloWorld8 firstChild returns hello world test 8 child1
  Message:
    Expected true to be false.
  Stack:
    Error: Expected true to be false.
        at <Jasmine>
        at UserContext.<anonymous> (C:\Users\hanna\Documents\CSE 110\CSE 110 Project\cse110-fa21-group32\test\spec\helloWorld.test.js:91:26)
        at <Jasmine>

12 specs, 7 failures
Finished in 0.092 seconds
Randomized with seed 12994 (jasmine --random=true --seed=12994)
```
