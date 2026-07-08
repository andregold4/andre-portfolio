import { test, expect, type Page } from "@playwright/test";
import { viewports, type ViewportName } from "../playwright.config";
import fs from "fs";
import path from "path";

const viewportNames = Object.keys(viewports) as ViewportName[];

/** Sections to verify. "building" maps to hero status line — no dedicated projects section yet. */
const sections = [
  { id: "hero", selector: "section:has(h1)", label: "Hero" },
  { id: "about", selector: "#about", label: "About" },
  { id: "experience", selector: "#experience", label: "Experience" },
  { id: "learning", selector: "#learning", label: "Learning" },
  {
    id: "building",
    selector: "text=Currently building at Chaos Labs",
    label: "Building (hero status)",
  },
  { id: "contact", selector: "#contact", label: "Contact" },
] as const;

async function hasHorizontalScroll(page: Page): Promise<boolean> {
  return page.evaluate(() => {
    const doc = document.documentElement;
    return doc.scrollWidth > doc.clientWidth + 1;
  });
}

async function getOverflowingElements(page: Page): Promise<string[]> {
  return page.evaluate(() => {
    const viewportWidth = document.documentElement.clientWidth;
    const offenders: string[] = [];

    document.querySelectorAll("body *").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) return;
      if (rect.right > viewportWidth + 1 || rect.left < -1) {
        const tag = el.tagName.toLowerCase();
        const id = el.id ? `#${el.id}` : "";
        const cls =
          el.className && typeof el.className === "string"
            ? `.${el.className.split(" ").slice(0, 2).join(".")}`
            : "";
        offenders.push(`${tag}${id}${cls} (right: ${Math.round(rect.right)}px)`);
      }
    });

    return [...new Set(offenders)].slice(0, 8);
  });
}

for (const viewportName of viewportNames) {
  const viewport = viewports[viewportName];

  test.describe(`${viewportName} (${viewport.width}x${viewport.height})`, () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto("/", { waitUntil: "domcontentloaded" });
      // Allow scroll-reveal animations to settle
      await page.waitForTimeout(800);
    });

    test("no horizontal scroll", async ({ page }) => {
      const overflows = await hasHorizontalScroll(page);
      const offenders = overflows ? await getOverflowingElements(page) : [];

      expect(
        overflows,
        offenders.length
          ? `Horizontal scroll detected. Offending elements:\n${offenders.join("\n")}`
          : "Horizontal scroll detected"
      ).toBe(false);
    });

    for (const section of sections) {
      test(`${section.label} section is visible`, async ({ page }) => {
        const locator = page.locator(section.selector).first();
        await expect(locator).toBeVisible();

        const box = await locator.boundingBox();
        expect(box).not.toBeNull();
        expect(box!.width).toBeLessThanOrEqual(viewport.width);
        expect(box!.x).toBeGreaterThanOrEqual(-1);
        expect(box!.x + box!.width).toBeLessThanOrEqual(viewport.width + 1);
      });
    }

    test("capture full-page screenshot", async ({ page }) => {
      const dir = path.join("test-results", "screenshots", viewportName);
      fs.mkdirSync(dir, { recursive: true });
      await page.screenshot({
        path: path.join(dir, "full-page.png"),
        fullPage: true,
      });
    });
  });
}
