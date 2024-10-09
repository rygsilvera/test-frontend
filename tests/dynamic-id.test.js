// dynamic-id.test.js
/*
# To Do:
* Move imports to index.js (better practice)
*/
import { test, expect } from "@playwright/test";
import { objects as home } from "../pages/uitap-home.page";
import { objects as dynamicIdObjects } from "../pages/dynamic-id.page";

test.beforeEach(async ({ page }) => {
  await page.goto(home.url);
});

test.describe("Dynamic ID", () => {
  test("Valid Dynamic ID Page Headers", async({ page }) => {
    await page.getByRole("link", { name: home.dynamicIdLink }).click();
    await expect(page.getByRole("heading", {name: dynamicIdObjects.dynamicIdHeader}))
    .toHaveText("Dynamic ID");
    await expect(page.getByRole("heading", {name: dynamicIdObjects.scenarioHeader}))
    .toHaveText("Scenario");
    await expect(page.getByRole("heading", {name: dynamicIdObjects.playgroundHeader}))
    .toHaveText("Playground");
  });

  test("Click Button on Dynamic ID Page", async ({ page }) => {
    await page.getByRole("link", { name: home.dynamicIdLink }).click();
    await page.getByRole("button", { name: dynamicIdObjects.dynamicIdButtonName }).click();
  });
});