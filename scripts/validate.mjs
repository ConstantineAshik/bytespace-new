import { chromium } from "playwright";
import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
const base = process.env.BASE_URL || "http://localhost:3001";
await mkdir("validation", { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 1024 },
  deviceScaleFactor: 1,
});
const errors = [],
  results = [];
page.on("pageerror", (error) => errors.push(error.message));
try {
  for (const route of ["/", "/login", "/signup"]) {
    const response = await page.goto(base + route, {
      waitUntil: "networkidle",
    });
    assert.equal(response.status(), 200, route + " must be public");
    await page.evaluate(() => document.fonts.ready);
    await page.locator("img").evaluateAll((images) =>
      Promise.all(
        images.map((image) => {
          image.loading = "eager";
          return image.decode().catch(() => {});
        }),
      ),
    );
    assert.equal(
      await page
        .locator("img")
        .evaluateAll((images) =>
          images.some((image) => !image.complete || !image.naturalWidth),
        ),
      false,
      "All assets must load",
    );
    for (const width of [1440, 768, 390]) {
      await page.setViewportSize({ width, height: width === 390 ? 900 : 1024 });
      await page.screenshot({
        path: `validation/${route === "/" ? "home" : route.slice(1)}-${width}.png`,
        fullPage: true,
      });
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      );
      assert.equal(overflow, false, `${route} overflows at ${width}px`);
      results.push({ route, width, overflow });
    }
  }
  await page.goto(base);
  await page.getByRole("button", { name: "Music", exact: true }).click();
  assert.equal(await page.locator(".course-grid .course-card").count(), 0);
  await page.getByRole("button", { name: "Featured", exact: true }).click();
  assert.equal(await page.locator(".course-grid .course-card").count(), 6);
  await page
    .getByRole("textbox", { name: "Email for newsletter" })
    .fill("student@example.com");
  await page.locator(".newsletter-form button").click();
  await page.getByRole("status").waitFor();
  for (const route of ["/login", "/signup"]) {
    await page.goto(base + route);
    if (route === "/signup")
      await page.getByLabel("Full Name", { exact: true }).fill("Jamie Davis");
    await page.getByLabel("Email", { exact: true }).fill("student@example.com");
    await page.getByLabel("Password", { exact: true }).fill("test-password");
    await page.locator(".auth-submit").click();
    assert.match(await page.getByRole("status").innerText(), /frontend demo/);
  }
  await page.goto(base + "/register");
  assert.equal(new URL(page.url()).pathname, "/signup");
  assert.deepEqual(errors, []);
  await writeFile(
    "validation/browser-report.json",
    JSON.stringify({ base, results, errors, interactions: "passed" }, null, 2),
  );
  process.stdout.write(
    "Passed: routes, assets, responsive layouts, filters, newsletter and authentication forms.\n",
  );
} finally {
  await browser.close();
}
