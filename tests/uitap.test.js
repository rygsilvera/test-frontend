// uitap.test.js
/*
# To Do:
* Move imports to index.js (better practice)
* Add timestamps to JSON output file (in /playright.config.js)
*/
import { test, expect } from "@playwright/test";
import { objects as home } from "../pages/uitap-home.page";
import { objects as dynamicIdObjects } from "../pages/dynamic-id.page";
import { objects as classAttributeObjects } from "../pages/class-attribute.page.js";

test.beforeEach(async ({ page }) => {
    await page.goto(home.url);
  });
  
test.describe("UITAP Home", () => {
// Test Dynamic ID header text
    test("Dynamic ID Page Loads", async({ page }) => {
        await page.getByRole("link", { name: home.dynamicIdLink }).click();
        await expect(page.getByRole("heading", {name: dynamicIdObjects.dynamicIdHeader})).toBeVisible();
    });

    test("Class Attribute Page Loads", async ({ page }) => {
        await page.getByRole("link", { name: home.classAttributeLink }).click();
        await expect(page.getByRole("heading", {name: classAttributeObjects.classAttributeHeader })).toBeVisible();
    });
});