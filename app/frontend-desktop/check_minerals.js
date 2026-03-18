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
  await page.waitForTimeout(2000); // Wait for animations
  
  await page.screenshot({ path: 'game_dashboard_check.png' });
  
  console.log('Opening Minerals Modal...');
  const buttons = await page.$$('button');
  // Minerals is the 7th menu item in BottomNav. We can click the button containing the Gem icon
  await page.click('button:has(svg.lucide-gem)');
  await page.waitForTimeout(1000);
  
  await page.screenshot({ path: 'game_minerals_modal_check.png' });
  console.log('Captured Minerals Modal screenshot.');

  await browser.close();
})();
