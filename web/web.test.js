describe('Example.com clock more info', () => {
  test('should be titled "About"', async () => {
    await page.goto('https://example.com');

    const title1 = await page.$eval('h1', el => el.innerText);
    expect(title1).toBe('Example Domain');

    await page.click('a');
    await page.waitForSelector('h1', { visible: true });
    const title2 = await page.$eval('h1', el => el.innerText);

    expect(title2).toMatch('Reserved Domains');
  }, 60000);
});
