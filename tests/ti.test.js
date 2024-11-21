// ti.test.js

import {test, expect} from '@playwright/test';
import {tiHome, tiElements} from '../index.js';

test.beforeEach(async ({page}) => {
    await page.goto(tiHome.tiURL);
  });
  
test.describe('Add/Remove Elements Suite', () => {
    test('Navigate to Add/Remove Elements Page', async({page}) => {
        await page.getByRole('link', {name: tiHome.tiElementsLink}).click();
        await expect(page.getByRole('heading', {name: tiElements.tiElementsHeader})).toBeVisible();
    });

    test('Click Add Element Button', async({page}) => {
        await page.getByRole('link', {name: tiHome.tiElementsLink}).click();
        await expect(page.getByRole('button', {name: tiElements.tiAddElementButton})).toBeVisible();
        await page.getByRole('button', {name: tiHome.tiAddElementButton}).click();
    });

    test('Click Delete Button', async({page}) => {
        await page.getByRole('link', {name: tiHome.tiElementsLink}).click();
        await expect(page.getByRole('button', {name: tiElements.tiAddElementButton})).toBeVisible();
        await page.getByRole('button', {name: tiHome.tiAddElementButton}).click();
        await expect(page.getByRole('button', {name: tiElements.tiDelete})).toBeVisible();
        await page.getByRole('button', {name: tiElements.tiDelete}).click();
    });
});