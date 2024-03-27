import { test, expect } from "@playwright/test";

test("has a list of users", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(page.getByTestId("user-card")).toHaveCount(2);
});
