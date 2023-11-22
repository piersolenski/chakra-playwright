test("should navigate to the Installation page", async ({ page }) => {
  await page.goto("https://chakra-ui.com");
  await page.click('[href="/getting-started"]');
  await expect(page).toHaveURL("https://chakra-ui.com/getting-started");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Installation",
  );
});
