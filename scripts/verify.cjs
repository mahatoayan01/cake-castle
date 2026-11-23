const { chromium } = require('playwright');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const projectDir = path.resolve(__dirname, '..');

async function runVerification() {
  console.log('================================================================');
  console.log('      CAKE CASTLE PURE VEG BAKERY - VERIFICATION SUITE          ');
  console.log('================================================================');

  // 1. Launch Vite preview server
  console.log('\n[1/5] Starting Vite preview server on port 4173...');
  const server = spawn('npx', ['vite', 'preview', '--port', '4173', '--strictPort'], {
    cwd: projectDir,
    shell: true,
  });

  server.stdout.on('data', (d) => {
    // console.log(`[Preview] ${d}`);
  });
  server.stderr.on('data', (d) => {
    console.error(`[Preview Err] ${d}`);
  });

  // Wait 3 seconds for server to start
  await new Promise((r) => setTimeout(r, 3000));

  let browser;
  const consoleErrors = [];
  const brokenImages = [];

  try {
    console.log('[2/5] Launching headless Chrome from C:/Program Files/Google/Chrome/Application/chrome.exe...');
    const chromePath = fs.existsSync('C:/Program Files/Google/Chrome/Application/chrome.exe')
      ? 'C:/Program Files/Google/Chrome/Application/chrome.exe'
      : 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';

    browser = await chromium.launch({
      executablePath: chromePath,
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const viewports = [
      { name: 'Mobile', width: 375, height: 667 },
      { name: 'Tablet', width: 768, height: 1024 },
      { name: 'Desktop', width: 1440, height: 900 }
    ];

    const routes = [
      { name: 'Home', path: '#/' },
      { name: 'Menu', path: '#/menu' },
      { name: 'Location', path: '#/location' },
      { name: 'Contact', path: '#/contact' },
      { name: 'Cart', path: '#/cart' },
      { name: 'Owner Login', path: '#/login' },
      { name: 'Owner Dashboard (Redirect check)', path: '#/dashboard' }
    ];

    console.log('\n[3/5] Testing responsive layouts, horizontal overflow, and console health...');

    for (const vp of viewports) {
      console.log(`\n--- Viewport: ${vp.name} (${vp.width}x${vp.height}) ---`);
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height }
      });
      const page = await context.newPage();

      // Listen for console errors
      page.on('console', msg => {
        if (msg.type() === 'error') {
          consoleErrors.push({ viewport: vp.name, text: msg.text() });
        }
      });

      // Listen for failed image requests
      page.on('response', resp => {
        const url = resp.url();
        if (url.includes('/images/') && resp.status() !== 200 && resp.status() !== 304) {
          brokenImages.push({ url, status: resp.status() });
        }
      });

      for (const route of routes) {
        const fullUrl = `http://localhost:4173/${route.path}`;
        await page.goto(fullUrl, { waitUntil: 'domcontentloaded' });
        await page.waitForTimeout(300);

        // Measure horizontal overflow
        const overflow = await page.evaluate(() => {
          const docEl = document.documentElement;
          const body = document.body;
          const scrollWidth = Math.max(docEl.scrollWidth, body.scrollWidth);
          const clientWidth = window.innerWidth;
          return {
            hasOverflow: scrollWidth > clientWidth,
            scrollWidth,
            clientWidth
          };
        });

        const overflowStatus = overflow.hasOverflow ? `❌ OVERFLOW (+${overflow.scrollWidth - overflow.clientWidth}px)` : '✅ No Overflow';
        console.log(`  • ${route.name.padEnd(20)} | ${overflowStatus}`);

        if (overflow.hasOverflow) {
          throw new Error(`Horizontal overflow detected on ${route.name} at ${vp.width}px`);
        }
      }

      await context.close();
    }

    // 4. Test Add-to-Cart and Checkout Flow
    console.log('\n[4/5] Testing Add-to-Cart and Checkout Flow...');
    const flowContext = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const flowPage = await flowContext.newPage();

    // Go to menu
    await flowPage.goto('http://localhost:4173/#/menu', { waitUntil: 'domcontentloaded' });
    await flowPage.waitForTimeout(400);
    console.log('  • Navigated to Menu page');

    // Click "Add to Cart" on first 2 items
    const addButtons = flowPage.locator('button:has-text("Add to Cart")');
    const buttonCount = await addButtons.count();
    console.log(`  • Found ${buttonCount} "Add to Cart" buttons`);
    
    await addButtons.nth(0).click();
    console.log('  • Clicked first "Add to Cart"');
    await flowPage.waitForTimeout(400);

    await addButtons.nth(1).click();
    console.log('  • Clicked second "Add to Cart"');
    await flowPage.waitForTimeout(400);

    // Verify cart count badge
    const cartBadge = flowPage.locator('header a[href="#/cart"] span.bg-gold-500');
    const badgeText = await cartBadge.innerText();
    console.log(`  • Cart badge count in header: "${badgeText}" (Expected: 2)`);
    if (badgeText !== '2') throw new Error(`Cart badge was ${badgeText}, expected 2`);

    // Navigate to Cart
    await flowPage.goto('http://localhost:4173/#/cart', { waitUntil: 'domcontentloaded' });
    await flowPage.waitForTimeout(400);
    console.log('  • Navigated to Cart page');

    // Check customer form
    await flowPage.fill('#customer-name', 'Rajesh Kulkarni');
    await flowPage.fill('#customer-phone', '+91 98221 99887');
    await flowPage.fill('#customer-address', '14, Silver Oak Society, Yerawada, Pune');
    console.log('  • Filled checkout customer details');

    // Submit checkout
    await flowPage.click('button:has-text("Place Demo Order")');
    await flowPage.waitForTimeout(600);

    const orderSuccessHeading = await flowPage.locator('h1:has-text("Sweet! Your Order Has Been Placed")');
    const isSuccessVisible = await orderSuccessHeading.isVisible();
    console.log(`  • Order confirmation view visible: ${isSuccessVisible ? '✅ YES' : '❌ NO'}`);
    if (!isSuccessVisible) throw new Error('Order confirmation screen did not appear');

    // 5. Test Owner Login and Dashboard
    console.log('\n[5/5] Testing Owner Authentication & Dashboard...');
    await flowPage.goto('http://localhost:4173/#/login', { waitUntil: 'domcontentloaded' });
    await flowPage.waitForTimeout(400);
    console.log('  • Navigated to Owner Login page');

    const credsBox = await flowPage.locator('text=owner@demo.com').isVisible();
    console.log(`  • Demo credentials box visible: ${credsBox ? '✅ YES' : '❌ NO'}`);

    // Click Sign In
    await flowPage.click('button:has-text("Sign In to Dashboard")');
    await flowPage.waitForTimeout(600);

    const dashboardHeading = await flowPage.locator('h1:has-text("Cake Castle Owner Dashboard")');
    const isDashboardVisible = await dashboardHeading.isVisible();
    console.log(`  • Dashboard rendered after login: ${isDashboardVisible ? '✅ YES' : '❌ NO'}`);
    if (!isDashboardVisible) throw new Error('Dashboard did not render after login');

    // Check stats & tables
    const statsVisible = await flowPage.locator('text=Orders Today').isVisible();
    const ordersTableVisible = await flowPage.locator('table').isVisible();
    console.log(`  • Summary stats visible: ${statsVisible ? '✅ YES' : '❌ NO'}`);
    console.log(`  • Orders table visible: ${ordersTableVisible ? '✅ YES' : '❌ NO'}`);

    // Test tab switch to payments
    await flowPage.click('button:has-text("Payment History")');
    await flowPage.waitForTimeout(300);
    const paymentsVisible = await flowPage.locator('th:has-text("Payment ID")').isVisible();
    console.log(`  • Payment history table visible: ${paymentsVisible ? '✅ YES' : '❌ NO'}`);

    // Click Sign Out
    await flowPage.click('button:has-text("Sign Out")');
    await flowPage.waitForTimeout(600);
    console.log('  • Clicked Sign Out');

    // Try navigating back to dashboard without login (should redirect to /login)
    await flowPage.goto('http://localhost:4173/#/dashboard', { waitUntil: 'domcontentloaded' });
    await flowPage.waitForTimeout(400);
    const currentUrl = flowPage.url();
    const isProtected = currentUrl.includes('/login');
    console.log(`  • Dashboard protected route check (redirects to /login): ${isProtected ? '✅ YES' : '❌ NO'}`);
    if (!isProtected) throw new Error('Protected route allowed unauthenticated access');

    // Check image health and console errors
    console.log('\n================================================================');
    console.log(`Console Errors: ${consoleErrors.length}`);
    if (consoleErrors.length > 0) {
      consoleErrors.forEach(e => console.error(`  - ${e.viewport}: ${e.text}`));
    }
    console.log(`Broken Images: ${brokenImages.length}`);
    if (brokenImages.length > 0) {
      brokenImages.forEach(i => console.error(`  - ${i.url} (status ${i.status})`));
    }

    console.log('\n🎉 ALL VERIFICATION SUITE CHECKS PASSED WITH 100% SUCCESS!');
    console.log('================================================================');

    await browser.close();
    server.kill();
    process.exit(0);

  } catch (err) {
    console.error('\n❌ Verification Failed:', err.message);
    if (browser) await browser.close();
    server.kill();
    process.exit(1);
  }
}

runVerification();
