# Kodibot Landing Page - Content Reduction Plan

## Executive Summary

**Current State:** 13 content sections, ~1000+ lines of component code
**Target State:** 8-9 content sections, ~600 lines of component code
**Reduction:** ~35-40% shorter page, faster load time, better conversion

---

## Current Section Inventory

| # | Section | Lines | Purpose | Verdict |
|---|---------|-------|---------|---------|
| 1 | Hero | 130 | Main intro + screenshot carousel | KEEP |
| 2 | Problem | 38 | 3 pain points | KEEP |
| 3 | Solution | 62 | Value prop + video demo | KEEP |
| 4 | HowItWorks | 45 | 3-step process | MERGE into Solution |
| 5 | Simulator | 61 | Arduino/circuit showcase | MERGE with Electronics |
| 6 | Electronics | 148 | 4 circuit tools | MERGE with Simulator |
| 7 | TeachableMachine | 225 | ML/AI features (4 cards) | SIMPLIFY to 2 cards |
| 8 | LearningPath | 260 | Curriculum path + SVG diagram | SIMPLIFY drastically |
| 9 | Outcome | 57 | Learning outcomes | KEEP (short) |
| 10 | Comparison | ~50 | Platform comparison table | KEEP |
| 11 | Pricing | ~80 | Pricing plans | KEEP |
| 12 | FAQ | ~40 | FAQ accordion | KEEP |
| 13 | CTA | ~30 | Final call-to-action | KEEP |

---

## Phase 1: Merge Simulator + Electronics → CircuitLab

### Current Problem
- Simulator shows Arduino circuit image + 3 bullet points
- Electronics shows 4 circuit-related tools in cards
- Both have similar visual treatment (dark/light theme, CTA at bottom)
- Redundant messaging about "virtual circuit" concept

### Solution: New Unified Section "CircuitLab"

**Structure:**
```
┌─────────────────────────────────────────────────┐
│  Badge: "VIRTUAL CIRCUIT LAB"                   │
│  Title: Belajar Elektronika Tanpa Hardware      │
│  Subtitle: ...                                  │
├─────────────────────────────────────────────────┤
│  ┌─────────┐  ┌─────────┐                       │
│  │ Hero    │  │ Feature │                       │
│  │ Image   │  │ List    │                       │
│  │ (Circuit│  │ - Circuit Builder               │
│  │  JS)    │  │ - Conductor Quiz                │
│  │         │  │ - Short Circuit Viz             │
│  │         │  │ - LED Challenge                 │
│  └─────────┘  └─────────┘                       │
├─────────────────────────────────────────────────┤
│  Bottom CTA: "Coba Gratis"                      │
└─────────────────────────────────────────────────┘
```

**Files to Create:**
- `src/components/landing/CircuitLab.astro` (new)

**Files to Remove:**
- `src/components/landing/Simulator.astro`
- `src/components/landing/Electronics.astro`

**Files to Update:**
- `src/pages/index.astro` - replace imports
- `src/pages/[locale]/index.astro` - replace imports

**i18n Keys to Consolidate:**
- Keep: `electronics_*` keys (more descriptive)
- Remove: `simulator_*` keys (redundant)
- Add: `circuitlab_*` keys for new section header

**Estimated Lines:** ~100 (down from 209)

---

## Phase 2: Simplify LearningPath

### Current Problem
- 260 lines of code
- Complex SVG fork diagram (desktop + mobile versions)
- Two "tracks" with duplicate content
- Step 4 "Advanced Projects" appears in both tracks

### Solution: Simplified Linear Path

**Before (Complex Fork):**
```
    [Scratch] [Electronics]
         \     /
          \   /
           \ /
            •
           / \
          /   \
     [Coding] [Robotics]
         \     /
          \   /
           \ /
      [Advanced]
```

**After (Simple Linear):**
```
┌─────────────────────────────────────────────────┐
│  Badge: "LEARNING PATH"                         │
│  Title: Dari Zero ke Hero                       │
├─────────────────────────────────────────────────┤
│  Step 1: Scratch Programming (Foundation)       │
│  Step 2: Electronics Basics (NEW)               │
│  Step 3: MakeCode IoT / Arduino Virtual         │
│  Step 4: Advanced Projects                      │
├─────────────────────────────────────────────────┤
│  Note: "Pilih track coding atau robotics"       │
└─────────────────────────────────────────────────┘
```

**Visual Treatment:**
- Simple vertical timeline (no SVG fork)
- 4 steps max, no branching
- Use Tailwind for connectors (border-left)
- Mobile-friendly by default

**Files to Update:**
- `src/components/landing/LearningPath.astro` - rewrite

**i18n Keys to Update:**
- Simplify `learning_path_*` keys
- Remove track-specific duplicates

**Estimated Lines:** ~80 (down from 260)

---

## Phase 3: Simplify TeachableMachine

### Current Problem
- 225 lines
- Hero visual + 4 feature cards + bottom CTA
- Same pattern as Electronics (repetitive)

### Solution: Reduce to 2 Cards + Inline Features

**Before:** 4 cards (Image Classification, Sound Recognition, Pose Detection, Export & Share)

**After:**
```
┌─────────────────────────────────────────────────┐
│  Badge: "AI FOR KIDS"                           │
│  Title: Teachable Machine                       │
├─────────────────────────────────────────────────┤
│  ┌───────────────────┐  ┌───────────────────┐   │
│  │ Hero Visual       │  │ How It Works      │   │
│  │ (Camera icon +    │  │ 1. Train with     │   │
│  │  floating labels) │  │    webcam         │   │
│  │                   │  │ 2. Test & Export  │   │
│  └───────────────────┘  └───────────────────┘   │
├─────────────────────────────────────────────────┤
│  Inline feature list (not cards):               │
│  ✓ Image Classification  ✓ Sound Recognition    │
│  ✓ Pose Detection        ✓ Export & Share       │
├─────────────────────────────────────────────────┤
│  CTA: "Coba Gratis"                             │
└─────────────────────────────────────────────────┘
```

**Files to Update:**
- `src/components/landing/TeachableMachine.astro` - simplify

**Estimated Lines:** ~100 (down from 225)

---

## Phase 4: Merge HowItWorks into Solution

### Current Problem
- HowItWorks shows "3 steps": Belajar → Praktek → Selesai
- Solution shows "3 features": Video + Simulator + Hardware
- Conceptually similar, can be combined

### Solution: Extended Solution Section

**Before (Solution):**
- Video demo
- 3 feature items

**After (Solution + HowItWorks merged):**
```
┌─────────────────────────────────────────────────┐
│  Badge: "SOLUSI KAMI"                           │
│  Title: Platform Belajar Interaktif             │
├─────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────┐    │
│  │         Video Demo (Play Button)        │    │
│  └─────────────────────────────────────────┘    │
├─────────────────────────────────────────────────┤
│  3-Step Process (from HowItWorks):              │
│  1. Pilih Kursus    2. Praktek Virtual  3. Selesai│
├─────────────────────────────────────────────────┤
│  3 Key Features (current Solution):             │
│  ✓ Kurikulum Terstruktur                        │
│  ✓ Simulator Interaktif                         │
│  ✓ Tanpa Hardware Fisik                         │
└─────────────────────────────────────────────────┘
```

**Files to Remove:**
- `src/components/landing/HowItWorks.astro`

**Files to Update:**
- `src/components/landing/Solution.astro` - add 3-step process
- `src/pages/index.astro` - remove HowItWorks import
- `src/pages/[locale]/index.astro` - remove HowItWorks import

**Estimated Lines:** ~90 (combined from 107)

---

## Phase 5: Add Missing Sections (Optional)

### Testimonials (New)
- 3-4 testimonial cards
- Parent/student quotes
- Star ratings
- Adds credibility (currently missing)

### Social Proof (New)
- Student count
- Courses completed
- Partner logos (if any)

**Note:** These are ADDITIONS, not reductions. Consider adding only if conversion data supports need for social proof.

---

## Final Section Order (After Reduction)

```
1. Nav
2. Hero                    ← KEEP
3. Problem                 ← KEEP (3 pain points)
4. Solution                ← EXPANDED (includes HowItWorks)
5. CircuitLab              ← NEW (merged Simulator + Electronics)
6. TeachableMachine        ← SIMPLIFIED (2 cards + inline features)
7. LearningPath            ← SIMPLIFIED (linear timeline)
8. Outcome                 ← KEEP
9. Comparison              ← KEEP
10. Pricing                ← KEEP
11. FAQ                    ← KEEP
12. CTA                    ← KEEP
13. Footer
14. WhatsAppFloating
```

**Total Sections:** 12 content sections (down from 13)
**Estimated Line Reduction:** ~400 lines (~35% reduction)

---

## Implementation Checklist

### Phase 1: CircuitLab Merge
- [ ] Create `CircuitLab.astro` with merged content
- [ ] Update `index.astro` imports
- [ ] Update `[locale]/index.astro` imports
- [ ] Add i18n keys for new section
- [ ] Delete `Simulator.astro`
- [ ] Delete `Electronics.astro`
- [ ] Test all 3 locales (en, id, ms)

### Phase 2: LearningPath Simplify
- [ ] Rewrite `LearningPath.astro` with linear timeline
- [ ] Remove SVG fork diagram
- [ ] Update i18n keys
- [ ] Test responsive layout

### Phase 3: TeachableMachine Simplify
- [ ] Reduce from 4 cards to 2
- [ ] Convert remaining features to inline list
- [ ] Update i18n keys if needed

### Phase 4: HowItWorks Merge
- [ ] Add 3-step process to `Solution.astro`
- [ ] Update `index.astro` imports
- [ ] Update `[locale]/index.astro` imports
- [ ] Delete `HowItWorks.astro`
- [ ] Update i18n keys

### Phase 5: Testing
- [ ] Run `npm run build` - no errors
- [ ] Test all pages in browser
- [ ] Test all 3 locales
- [ ] Check mobile responsiveness
- [ ] Verify no broken links
- [ ] Lighthouse audit (target: 90+ performance)

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Broken i18n keys | Medium | High | Test all 3 locales after each phase |
| Missing imports | Low | Medium | Check both index.astro files |
| Layout issues on mobile | Medium | Medium | Test responsive at each phase |
| SEO impact from content removal | Low | Low | Keep key keywords in merged sections |

---

## Timeline Estimate

| Phase | Duration | Dependencies |
|-------|----------|--------------|
| Phase 1: CircuitLab | 2-3 hours | None |
| Phase 2: LearningPath | 1-2 hours | None |
| Phase 3: TeachableMachine | 1 hour | None |
| Phase 4: HowItWorks merge | 1 hour | None |
| Phase 5: Testing | 1 hour | All phases complete |

**Total: 6-8 hours** (can be done in 1 day)

---

## Success Metrics

After implementation, measure:

1. **Page Load Time** - Target: < 2s (currently ~3s)
2. **Scroll Depth** - Expect more users reaching Pricing/CTA
3. **Conversion Rate** - Target: +10-15% (less friction)
4. **Bounce Rate** - Target: -5-10% (more focused content)

---

## Files Summary

### To Create
- `src/components/landing/CircuitLab.astro`

### To Delete
- `src/components/landing/Simulator.astro`
- `src/components/landing/Electronics.astro`
- `src/components/landing/HowItWorks.astro`

### To Modify
- `src/pages/index.astro`
- `src/pages/[locale]/index.astro`
- `src/components/landing/Solution.astro`
- `src/components/landing/LearningPath.astro`
- `src/components/landing/TeachableMachine.astro`
- `messages/en.json` (i18n keys)
- `messages/id.json` (i18n keys)
- `messages/ms.json` (i18n keys)

---

## Next Steps

1. Review and approve this plan
2. Start with Phase 1 (CircuitLab merge) - biggest impact
3. Continue with Phase 2-4 sequentially
4. Run full test suite after all phases
5. Deploy to staging for QA
6. Monitor metrics for 1 week before full rollout

---

*Plan created: April 1, 2026*
*Repository: ~/Repository/FPK-Creative/workspaces/landing-page/*
