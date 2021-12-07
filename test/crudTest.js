const { objectExpression } = require("@babel/types");
const { Page } = require("puppeteer");

// Test to see if the search bar exists, should expect not a null
describe('Home Page', function () {
    beforeAll(async () => {
        await page.goto(
          'http://127.0.0.1:5500/source/home.html'
        );
      });
  it('check if search bar exists', async () => {
   let searchBar = document.getElementById('searchFormID');
   expect(searchBar.not.toBeNull());
  });
});

// Test to see if add recipe without filling all the fields works, should not
describe('Add a Recipe', function () {
  beforeAll(async () => {
      await page.goto(
        'http://127.0.0.1:5500/source/home.html#add-recipe'
      );
    });
it('check if adding a recipe works', async () => {
 let input = page.$('#input--cook-time-hour');
 page.type(input,"0");
 let input2 = page.$('#input--cook-time-mins');
 page.type(input2,"30");
 let input3 = page.$('addTitle')
 page.type(input3,"title");
 let input4 = page.$('addSummary');
 page.type(input4,"summary");
 page.click('publish-button');

 await page.goto(
  'http://127.0.0.1:5500/source/home.html#profile'
);
let result = document.getElementById('profile-page-recipeID');
expect(result.not.toBe('Recipe Gallery Should Be Displayed Here.'));
});
});

// test to see if we can successfully go from home to grocery tab
describe("Test Navigation from Home to Grocery", () => {
  beforeAll(async () => {
      await page.goto(
        'http://127.0.0.1:5500/source/home.html'
      );
    });
   test('should change page when button is clicked', async() => {
      var button = await page.$('button#LinkToList');
     
      await button.click();
      await page.waitForNavigation();
      const result = await page.evaluate(() => {
       return JSON.stringify(window.location.href);
      });
      console.log(result);
      expect(result).toBe("\"http://127.0.0.1:5500/source/home.html#grocery\"");
    });
});

// test to see if adding ingredient adds to my list
describe('Check if deleting a checked ingredient works', function () {
  beforeAll(async () => {
      await page.goto(
        'http://127.0.0.1:5500/source/home.html#grocery'
      );
    });
    let result = document.getElementById('#my-list').length;
    let input = page.$('#my-input');
    page.type(input,"test");
    let button = page.$('add-icon');
    button.click;
    let result2 = document.getElementById('#my-list').length;
    expect(result.not.toBe(result2));
});
