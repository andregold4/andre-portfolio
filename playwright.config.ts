import { defineConfig, devices } from "@playwright/test";

export const viewports = {
  "iphone-se": { width: 375, height: 667 },
  "iphone-12": { width: 390, height: 844 },
  "iphone-15-pro": { width: 393, height: 852 },
  "pixel-7": { width: 412, height: 915 },
  ipad: { width: 768, height: 1024 },
  desktop: { width: 1280, height: 800 },
} as const;

export type ViewportName = keyof typeof viewports;

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["list"], ["html", { open: "never", outputFolder: "playwright-report" }]],
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
    screenshot: "off",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
