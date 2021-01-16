describe('Digital Regulation About Us Page', () => {
  
  test('should be titled "About"', async () => {
    await page.goto('https://digitalregulation.org');
    await page.click('.menu-item-702');

    await page.waitForSelector('h1');
    
    const html = await page.$eval('h1', el => el.innerHTML);

    expect(html.trim()).toBe('About');
  }, 15000);
});