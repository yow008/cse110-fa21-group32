describe('Basic user flow for Website', () => {
    beforeAll(async () => {
      await page.goto(
        'http://127.0.0.1:5500/source/home.html'
      );
    });
  
    // Simply checks how many side panel buttons there are. (Should be just 1)
    it('Home Page - Checking how mnay side panel buttons are on the page', async () => {
      console.log('Checking number of side panel buttons');
  
      const numberSidePanelButtons = await page.$$eval(
        '.openbtn',
        (sidePanelBtns) => sidePanelBtns.length
      );
  
      expect(numberSidePanelButtons).toBe(1);
    });
  });

  describe("Test title of the homepage", () => {
    beforeAll(async () => {
        await page.goto(
          'http://127.0.0.1:5500/source/home.html'
        );
      });
    test("Title of the page", async () => {
        const title = await page.title();
        console.log(title);
        expect(title).toBe("CookEZ");
    }, 1000);
});


describe("Test navigation to Profile", () => {
    beforeAll(async () => {
        await page.goto(
          'http://127.0.0.1:5500/source/home.html'
        );
      });
    test("Testing nav to profile", async () => {
            let item = await page.$('search-icon');
            let itemShadow = await item.getProperty('shadowRoot');
            let butt = await itemShadow.$('button');
            await butt.click();
            let inText = await butt.getProperty('innerText');
            expect(inText['_remoteObject'].value).toBe("Search...");
          }, 2500);
});
    