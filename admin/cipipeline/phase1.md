## Notes on Pipeline


### Our Pipeline relies on many different parts but it is split up into two different branches. We have the Deploy Branch Linting & Formatting branch. We also have the Main Branch Linting and Formatting branch. 


#### Deploy Branch Linting & Formatting Branch
  - Includes functions for handling the front-end deployment and generating JS docs for our files. (working)
  - Branch also includes features that deal with linting our css and js, as well as validating our html. (Working)
  - Planned Areas for this branch : 
  - Getting CodeClimate or Codeacy integrated
  - Integrating either one of these into our pipeline will allow for better quality control of the code and be able to manage pull requests with much more ease.

#### Main Branch Linting & Formatting (Everything works)
  - Inclues a Prettier which will help us auto style our files or flag us for syntax and styling to make sure everything looks uniform
  - Includes a js-test block to run our jest and will hold our unit testing and end2end testing
  - Branch also inclues the proper linting for css and js as well as our html-validation