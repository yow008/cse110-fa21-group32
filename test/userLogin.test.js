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
  
