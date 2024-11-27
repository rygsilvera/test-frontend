// ti.test.js

import {test, expect} from '@playwright/test';
import {tiHome, tiElements, tiJSAlerts} from '../index.js';

test.beforeEach(async ({page}) => {
    await page.goto(tiHome.tiURL);
  });
  
test.describe('Add/Remove Elements Suite', () => {
    test('Navigate to Add/Remove Elements Page', async({page}) => {
        await page.getByRole('link', {name: tiHome.tiElementsLink}).click();
        await expect(page.getByRole('heading', {name: tiElements.elementsHeader})).toBeVisible();
    });

    test('Click Add Element Button', async({page}) => {
        await page.getByRole('link', {name: tiHome.tiElementsLink}).click();
        await expect(page.getByRole('button', {name: tiElements.addElementButton})).toBeVisible();
        await page.getByRole('button', {name: tiHome.addElementButton}).click();
    });

    test('Click Delete Button', async({page}) => {
        await page.getByRole('link', {name: tiHome.tiElementsLink}).click();
        await expect(page.getByRole('button', {name: tiElements.addElementButton})).toBeVisible();
        await page.getByRole('button', {name: tiHome.addElementButton}).click();
        await expect(page.getByRole('button', {name: tiElements.delete})).toBeVisible();
        await page.getByRole('button', {name: tiElements.delete}).click();
    });
});

test.describe('JavaScript Alerts', () => {

     test('Click for JS Alerts', async({page}) => {
        await page.getByRole('link', {name: tiHome.tiAlerts}).click();
        
        page.on('dialog', async dialog => {
            await expect(dialog.message()).toContain(tiJSAlerts.jsAlertMessage);
            await dialog.accept();
        });
        await page.getByRole('button', {name: tiJSAlerts.clickJSAlert}).click();
    });

    test('Click for JS Confirm | Cancel', async({page}) => {
        await page.getByRole('link', {name: tiHome.tiAlerts}).click();
        
        page.on('dialog', async dialog => {
            await expect(dialog.message()).toContain(tiJSAlerts.jsConfirmMessage);
            await dialog.dismiss();
        });
        await page.getByRole('button', {name: tiJSAlerts.clickJSConfirm}).click();
    });

    test('Click for JS Confirm | OK', async({page}) => {
        await page.getByRole('link', {name: tiHome.tiAlerts}).click();
        
        page.on('dialog', async dialog => {
            await expect(dialog.message()).toContain(tiJSAlerts.jsConfirmMessage);
            await dialog.accept();
        });
        await page.getByRole('button', {name: tiJSAlerts.clickJSConfirm}).click();
    });

    test('Click for JS Prompt', async({page}) => {
        await page.getByRole('link', {name: tiHome.tiAlerts}).click();
        
        page.on('dialog', async dialog => {
            await expect(dialog.message()).toContain(tiJSAlerts.jsPromptMessage);
            await dialog.accept(tiJSAlerts.jsPromptEntry);
        });
        await page.getByRole('button', {name: tiJSAlerts.clickJSPrompt}).click();
    });
});