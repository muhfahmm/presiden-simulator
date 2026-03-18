const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });

  console.log('Navigating to Select Country...');
  await page.goto('http://localhost:4000/select-country');
  await page.waitForTimeout(2000);
  
  console.log('Entering Game...');
  await page.click('button:has-text("Mulai Simulasi")');
  
  console.log('Waiting for /game...');
  await page.waitForURL('**/game', { timeout: 10000 });
  await page.waitForTimeout(2000); 
  
  // 1. Capture Default Map
  await page.screenshot({ path: 'map_mode_default_check.png' });
  console.log('Captured Default Map screenshot.');
  
  // 2. Click SDA Mode
  console.log('Switching to SDA Mode...');
  // The button has "SDA"
  await page.click('button:has-text("SDA")');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'map_mode_sda_check.png' });
  console.log('Captured SDA Map screenshot.');

  // 3. Click Trade Routes Mode
  console.log('Switching to Trade Routes Mode...');
  await page.click('button:has-text("Perdagangan")');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'map_mode_trade_check.png' });
  console.log('Captured Trade Routes Map screenshot.');

  await browser.close();
})();
