import { test, expect } from '@playwright/test';
import { baseURL } from './testConfig';

// Test for render component
test('should render LandingMainContain component', async ({ page }) => {
  await page.goto(baseURL);
  await expect(page.locator('main')).toBeVisible();
});

// Test for title
test('has title', async ({ page }) => {
  await page.goto(baseURL);

  await expect(page).toHaveTitle('YAKUSE');
});

// // Test for button navigation to Temukan Kebutuhan
// test('temukan kebutuhan able to be clicked', async ({ page }) => {
//   await page.goto(baseURL);

//   await page.getByTestId('action-temukan-kebutuhan').click();

//   await expect(page).toHaveURL(`${baseURL}/landing#Temukan-Kebutuhan`);
// });

// // Test for button navigation to Temukan Pembeli
// test('temukan pembeli able to be clicked', async ({ page }) => {
//   await page.goto(baseURL);

//   await page.getByTestId('action-temukan-pembeli').click();

//   await expect(page).toHaveURL(`${baseURL}/landing#Temukan-Pembeli`);
// });

// // Test for button navigation to Info UMKM
// test('info umkm able to be clicked', async ({ page }) => {
//   await page.goto(baseURL);

//   await page.getByTestId('action-info-umkm').click();

//   await expect(page).toHaveURL(`${baseURL}/landing#Info-UMKM`);
// });

// Test for button navigation to Sign Up at Main Description
test('should navigate to register page on Daftar Sekarang! button click', async ({
  page,
}) => {
  await page.goto(baseURL);
  await page.click('text=Daftar Sekarang!');
  await expect(page).toHaveURL(`${baseURL}/register`);
});

// Test for button navigation to Sign Up at Navbar
test('should navigate to register page on Sign Up button click', async ({
  page,
}) => {
  await page.goto(baseURL);
  await page.click('text=Sign Up');
  await expect(page).toHaveURL(`${baseURL}/register`);
});

// Test for button navigation to Sign In at Navbar
test('should navigate to login page on Sign In button click', async ({
  page,
}) => {
  await page.goto(baseURL);
  await page.click('text=Sign In');
  await expect(page).toHaveURL(`${baseURL}/login`);
});