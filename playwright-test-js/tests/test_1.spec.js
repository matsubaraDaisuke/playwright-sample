const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test')

test.describe('Browse LambdaTest in different search engines', () => {
  test('Search LambdaTest on Bing', async ({ page }) => {
    await page.goto('https://www.bing.com')
    await page.waitForLoadState('domcontentloaded')
    await page.waitForTimeout(3000)
    const element = await page.$('[id="sb_form_q"]')
    await element.click()
    await element.type('LambdaTest')
    await page.waitForTimeout(1000)
    await page.waitForTimeout(1000)
    await page.keyboard.press("Enter")
    await page.waitForSelector('[class=" b_active"]')
    const title = await page.title()

    console.log('Page title:: ', title)
    // Use the expect API for assertions provided by playwright
    expect(title).toEqual(expect.stringContaining('LambdaTest'))
  })
})
