const { test, expect } = require('@playwright/test');

test('Go to VantaShala and submit Registration Form', async ({ page }) => {
  await page.goto('https://www.vantashala.com/');

  // Expect a title "VantaShala" a substring.
  await expect(page).toHaveTitle(/VantaShala/);

  // Find a button titled "Start my kitchen" - id is "dynamicActionBtn"
  await page.locator('id=dynamicActionBtn').click();

  await expect(page).toHaveTitle(/Sign in to VantaShala/);

  // Fill the Registration form
  await page.locator('id=firstName').fill('MyFirstName');
  await page.locator('id=lastName').fill('MyLastName');
  await page.locator('id=email').fill('myfirsttest@gmail.com');
  await page.locator('id=password').fill('mySuperSecretPassword');
  await page.locator('id=password-confirm').fill('mySuperSecretPassword');

  // Click the Registration button
  await page.click('input[type=submit]:visible');

  // Fill the Kitchen Name section
  await page.locator('id=ktchNme').fill('PlayWright-Beginner');
  await page.locator('id=ktchSpclty').fill('Test Automation');
  await page.click('button[id=rsrvKtchNme]:visible');

  // Fill the Kitchen Pictures
    // TODO: Upload images
  await page.click('button[id=cntKtchPics]:visible');

  // Fill the Location Information
    //TODO: Select Apartment option
    await page.locator('id=add1').fill('1 Kitchen St');  
    await page.locator('id=add2').fill('#2');  
    await page.locator('id=city').fill('Frisco');
    await page.locator('id=state').fill('Texas');
    await page.locator('id=cntry').fill('list-item-293-1');
    await page.locator('id=zip').fill('75034');
    await page.locator('id=input-234').fill('8885551212');
    await page.locator('id=input-242').fill('8885551212');
    await page.click('button[id=back_location]:visible');


  // Fill the ID-Docs and ID-Proofs
    //TODO: Upload images
  
    await page.click('button[id=cntDocs]:visible');

  // Acknowledge Terms of service
  await page.locator('id=input-265').check();
  
  // Submit the Kitchen Registration form
  await page.click('button[id=sbmt]:visible');

});


