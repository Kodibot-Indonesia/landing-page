# Landing Page Improvements Plan

**Date:** 2025-03-19
**Repo:** Kodibot-Indonesia/landing-page
**Status:** Pending Review

---

## Goal

Fix critical UX issues on kodibot.id landing page based on review:
1. CTA URL consistency
2. Pricing display formatting
3. Language standardization in comparison table
4. Prepare for future additions (demo video, testimonials)

---

## Issues Found

### 1. CTA URL Inconsistency (HIGH PRIORITY)

**Problem:** Hero, Pricing, and CTA components use `/register` which points to a non-existent local route. Nav correctly uses `${LMS_URL}/register`.

**Files affected:**
- `src/components/landing/Hero.astro` (line 41)
- `src/components/landing/Pricing.astro` (lines 63, 69)
- `src/components/landing/CTA.astro` (line 24)

**Current:**
```astro
href="/register"
```

**Should be:**
```astro
href={`${LMS_URL}/register`}
```

**Fix:**
1. Import `LMS_URL` from `../../lib/config.js` in each component
2. Replace hardcoded `/register` with `${LMS_URL}/register`

---

### 2. Dead "Watch Demo" Link (HIGH PRIORITY)

**Problem:** Hero.astro links to `#demo` anchor, but no demo section exists.

**File:** `src/components/landing/Hero.astro` (line 47)

**Options:**
- **A (Temporary):** Change link to open YouTube video in new tab (when video ready)
- **B (Future):** Create a Demo section with embedded video

**Recommendation:** For now, change to:
```astro
href="https://youtube.com/placeholder"  // Update when video ready
target="_blank"
rel="noopener noreferrer"
```

Or add a disabled state with tooltip "Coming Soon".

---

### 3. Pricing Section Redesign (HIGH PRIORITY)

**Problem 1:** Only shows 1 plan, but should show all 3 paid plans.

**Problem 2:** Price displays as "RpRp399thousand" due to double "Rp" prefix.

**Problem 3:** Price is WRONG. According to MEMBERSHIP.md, Founding Member is Rp 349.000, not Rp 399.000.

**Correct pricing from MEMBERSHIP.md:**
| Plan | Price | Duration | Note |
|------|-------|----------|------|
| Free Trial | Rp 0 | 7 days | Akses penuh, sekali per akun |
| Bulanan | Rp 99.000 | 30 days | Recurring manual |
| 3 Bulan | Rp 149.000 | 90 days | Hemat ~50rb vs bulanan |
| **Founding Member** | **Rp 349.000** | Lifetime | Maks. 100 slot, early adopter |

**Design Decision:** Show 3 paid plans (skip Free Trial - auto-granted on signup)

**New Pricing Section Layout:**
```
┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
│    Bulanan      │  │    3 Bulan      │  │ Founding Member │
│    Rp 99rb      │  │    Rp 149rb     │  │    Rp 349rb     │
│    30 hari      │  │    90 hari      │  │   LIFETIME      │
│                 │  │                 │  │  ⭐ POPULAR     │
│   [Bayar]       │  │   [Bayar]       │  │   [Bayar]       │
└─────────────────┘  └─────────────────┘  └─────────────────┘
```

**Files to update:**
- `src/components/landing/Pricing.astro` - Redesign to 3 cards
- `messages/en.json` - Add pricing messages for all plans
- `messages/id.json` - Add pricing messages for all plans
- `messages/ms.json` - Add pricing messages for all plans

**New message keys needed:**
```json
// Plan names
"pricing_plan_monthly": "Monthly" / "Bulanan" / "Bulanan"
"pricing_plan_3month": "3 Months" / "3 Bulan" / "3 Bulan"
"pricing_plan_lifetime": "Founding Member" / "Founding Member" / "Founding Member"

// Prices
"pricing_monthly_price": "99"
"pricing_3month_price": "149"
"pricing_lifetime_price": "349"

// Durations
"pricing_monthly_duration": "30 days" / "30 hari" / "30 hari"
"pricing_3month_duration": "90 days" / "90 hari" / "90 hari"
"pricing_lifetime_duration": "Lifetime" / "Seumur Hidup" / "Seumur Hidup"

// Features (same for all plans)
"pricing_f1": "Access Scratch, MakeCode, Arduino curriculum"
"pricing_f2": "Full browser-based Interactive Simulator"
// etc.
```

**Component approach:**
- Create array of plans in component frontmatter
- Map over plans to generate cards
- Highlight "Founding Member" as featured (different border color, "Popular" badge)

---

### 4. Hardcoded Indonesian Text in Comparison (MEDIUM PRIORITY)

**Problem:** Comparison table has hardcoded Indonesian text mixed with English.

**File:** `src/components/landing/Comparison.astro`

**Hardcoded text found:**
- Line 97: "Simulator Bawaan"
- Line 132: "24/7 Tersedia"

**Fix:**
1. Add new message keys:
   - `comparison_c4_simulator` (EN: "Built-in Simulator", ID: "Simulator Bawaan")
   - `comparison_c4_available` (EN: "24/7 Available", ID: "24/7 Tersedia")

2. Update component to use `{m.comparison_c4_simulator()}` and `{m.comparison_c4_available()}`

---

### 5. Missing Social Proof (FUTURE)

**Problem:** No testimonials, student count, or trust metrics.

**Recommendation:** Create new component `Testimonials.astro` (separate task)

**Data needed from user:**
- Parent testimonials (name, quote, optional photo)
- Student count
- Projects created count
- Schools partnered (if any)

---

## Implementation Order

### Phase 1: Critical Fixes (Do Now)
1. [ ] Fix CTA URLs in Hero, Pricing, CTA components → use `${LMS_URL}/register`
2. [ ] Redesign Pricing section to show 3 plans (Monthly, 3-Month, Founding Member)
3. [ ] Update all pricing messages in en.json, id.json, ms.json

### Phase 2: Polish (Do Soon)
4. [ ] Add missing message keys for comparison table
5. [ ] Update Comparison.astro to use messages (replace hardcoded ID text)

### Phase 3: Enhancements (Future)
6. [ ] Add Testimonials section (when beta testers available)
7. [ ] Add trust metrics (student count, etc.)
8. [ ] Add Demo section when video ready

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/landing/Hero.astro` | Import LMS_URL, fix CTA href to `${LMS_URL}/register` |
| `src/components/landing/Pricing.astro` | **Major redesign:** 3 cards, import LMS_URL, fix CTA hrefs |
| `src/components/landing/CTA.astro` | Import LMS_URL, fix CTA href |
| `src/components/landing/Comparison.astro` | Replace hardcoded text with messages |
| `messages/en.json` | Add new pricing keys (3 plans), add comparison keys |
| `messages/id.json` | Add new pricing keys (3 plans), add comparison keys |
| `messages/ms.json` | Add new pricing keys (3 plans), add comparison keys |

---

## Verification

After changes:
1. Run `npm run dev` locally
2. Test all CTA buttons point to `app.kodibot.id/register`
3. Verify pricing shows 3 cards with correct prices:
   - Bulanan: Rp 99rb
   - 3 Bulan: Rp 149rb
   - Founding Member: Rp 349rb (highlighted)
4. Switch languages (EN/ID/MS) and verify all text changes
5. Run `npm run build` to ensure no build errors

---

## Open Questions

1. ~~**Demo video:** Where will it be hosted? YouTube? Self-hosted?~~ → **YouTube** (video menyusul)
2. **Testimonials:** Do you have parent quotes ready? Names OK to use? → **Belum ada, cari beta tester dulu**
3. **Metrics:** Approximate student count? Projects created? → **Belum rilis, skip dulu**
4. ~~**Pricing:** Is Rp 399,000 final? Should we show monthly equivalent?~~ → **Rp 349.000 (Founding Member)** - FIXED in plan
5. ~~**Show all plans or just Founding Member?~~ → **Show all 3 paid plans**

**No remaining questions - ready to execute.**

---

## Risks

- **Low risk:** Changes are localized to specific components
- **No database changes**
- **No API changes**
- **i18n changes require updating all 3 language files**

