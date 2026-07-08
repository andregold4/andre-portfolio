# Mobile Responsiveness Report

Generated after Playwright audit across 6 viewports. Screenshots saved to `test-results/screenshots/{viewport}/full-page.png`.

## Test Coverage

| Viewport | Size | Horizontal scroll | Sections visible | Screenshot |
|----------|------|-------------------|------------------|------------|
| iPhone SE | 375×667 | ✅ Pass | ✅ Pass | `test-results/screenshots/iphone-se/` |
| iPhone 12/13/14 | 390×844 | ✅ Pass | ✅ Pass | `test-results/screenshots/iphone-12/` |
| iPhone 15 Pro | 393×852 | ✅ Pass | ✅ Pass | `test-results/screenshots/iphone-15-pro/` |
| Pixel 7 | 412×915 | ✅ Pass | ✅ Pass | `test-results/screenshots/pixel-7/` |
| iPad | 768×1024 | ✅ Pass | ✅ Pass | `test-results/screenshots/ipad/` |
| Desktop | 1280×800 | ✅ Pass | ✅ Pass | `test-results/screenshots/desktop/` |

**Result: 48/48 tests passing** (`npm run test:e2e`)

---

## Issues Found (Before Fix)

### 1. Horizontal scrolling — all mobile & tablet viewports

**Symptoms:** `document.documentElement.scrollWidth` exceeded viewport width on every screen below 1280px.

**Root causes:**

| Element | Location | Problem |
|---------|----------|---------|
| Hero gradient blob | `components/Hero.tsx` | Fixed `600×600px` and `400×400px` decorative divs positioned with negative offsets (`-right-[10%]`, `-left-[5%]`) extended past the viewport |
| Learning background | `components/Learning.tsx` | `-inset-x-[200px]` pushed the radial gradient 200px beyond each side of the section |

**Fix applied:**
- Wrapped Hero decorations in an `absolute inset-0 overflow-hidden` container
- Scaled Hero blobs with `w-[min(600px,80vw)]` / `w-[min(400px,70vw)]`
- Replaced Learning `-inset-x-[200px]` with `inset-0` and added `overflow-hidden` on the section
- Added `overflow-x: hidden` on `html`, `overflow-x-hidden w-full` on `<main>`

---

### 2. Experience timeline — tight on small phones

**Symptoms:** 32px gap (`gap-8`) between timeline dot and content left little room for text on 375px screens.

**Fix applied:** `gap-4 sm:gap-8` on timeline rows.

---

### 3. Education cards — cramped horizontal layout

**Symptoms:** Icon + text in a single row with large padding (`p-7`) could feel tight on narrow screens.

**Fix applied:** `flex-col sm:flex-row`, `gap-4 sm:gap-6`, `p-5 sm:p-7` so cards stack vertically on mobile.

---

### 4. Contact section — decorative gradient overflow risk

**Symptoms:** Full-width radial gradient background could contribute to overflow on edge cases.

**Fix applied:** `overflow-hidden` on the contact section.

---

## Known Limitations (Not Fixed — Out of Scope)

These were observed but intentionally not redesigned per project scope:

| Issue | Viewports affected | Recommendation for future |
|-------|-------------------|---------------------------|
| **No mobile nav menu** | All mobile | Nav links hidden below `sm`; only "AG" logo shows. Add a hamburger/drawer menu for mobile navigation. |
| **No dedicated Projects section** | All | User requested "projects/building" — site has hero status "Currently building at Chaos Labs" but no `#projects` section. Add a projects section when ready. |
| **Hero headline size** | iPhone SE | `clamp(48px,8vw,80px)` renders at 48px minimum — readable but large. Consider `clamp(40px,8vw,80px)` if tighter hero is desired. |
| **Three hero CTA buttons** | iPhone SE | Buttons wrap correctly via `flex-wrap`, but three full buttons can feel crowded. Consider icon-only or stacked CTAs on xs screens. |

---

## How to Run Tests

```bash
# Run all mobile responsive tests
npm run test:e2e

# Open interactive UI
npm run test:e2e:ui

# View HTML report
npm run test:e2e:report
```

Screenshots are regenerated on each run in `test-results/screenshots/`.

---

## Files Changed

- `app/globals.css` — global overflow guard
- `app/page.tsx` — main overflow containment
- `components/Hero.tsx` — clipped, responsive gradient decorations
- `components/Learning.tsx` — fixed background inset overflow
- `components/Experience.tsx` — responsive timeline gap
- `components/Education.tsx` — stacked card layout on mobile
- `components/Contact.tsx` — overflow containment
- `components/RevealOnScroll.tsx` — `willChange` hint for smoother animations
- `playwright.config.ts` — Playwright configuration
- `tests/mobile-responsive.spec.ts` — viewport test suite
- `package.json` — `test:e2e` scripts
