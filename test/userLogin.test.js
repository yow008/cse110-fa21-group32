describe("Test title of userLogin", () => {
    beforeAll(async () => {
        await page.goto(
          'http://127.0.0.1:5500/source/userLogin.html'
        );
      });
    test("Title of the page", async () => {
        const title = await page.title();
        console.log(title);
        expect(title).toBe("Login / Sign Up Form");
    }, 1000);
});
  
const assert = require('assert');


describe('Login Page', function () {
    beforeAll(async () => {
        await page.goto(
          'http://127.0.0.1:5500/source/userLogin.html'
        );
      });
  it('should let you log in', async () => {
   let input =  page.$('input[name="log-user"]');
    page.type(input,"Martin1234");
    let pass = page.$('input[name="log-pass"]');
    page.type(pass,"1234");
    page.click('button#form_button');

    const pageUrl = await page.goto('http://127.0.0.1:5500/source/home.html');
    assert.equals(pageUrl,'http://127.0.0.1:5500/source/home.html');
  });
});