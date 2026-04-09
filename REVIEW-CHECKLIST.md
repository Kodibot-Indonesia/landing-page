# Landing Page Review Checklist

## ✅ Fase 1: Quick Wins

### 1. Social Proof Section
- [ ] 3 testimonial cards displayed correctly
- [ ] Testimonials show in grid layout (3 columns on desktop, 1 on mobile)
- [ ] Each testimonial has: quote, author, location, 5-star rating
- [ ] Trust badges visible (7-Day Money Back, Secure Payment)

### 2. Hero Section
- [ ] Avatar group showing "500+ students" trust signal
- [ ] Better spacing between trust items
- [ ] Mobile responsive (no overflow)

### 3. Pricing Section
- [ ] Payment method icons visible (Visa, Mastercard, QRIS, GoPay)
- [ ] Money-back guarantee highlighted
- [ ] Trust badge visible

### 4. FAQ Schema
- [ ] JSON-LD structured data present in page source
- [ ] FAQ showing in Google rich results (optional check)

---

## ✅ Fase 2: Content & Structure

### 5. Learning Path Section
- [ ] Time estimate badge visible per level (e.g., "4-6 hours")
- [ ] Deliverable badge visible per level (e.g., "2 interactive games")
- [ ] CTAs present: "Sign Up Now" + "Or Buy Per Course"
- [ ] Timeline displays correctly (gradient line on desktop)

### 6. About Section (NEW)
- [ ] Section appears after Social Proof
- [ ] 4 feature cards with icons displayed
- [ ] Stats row showing: 500+ students, 50+ modules, 4.8/5 rating
- [ ] Mission statement visible

### 7. CTA Placements
- [ ] Hero: 2 CTAs (Register + Demo)
- [ ] Solution: 2 CTAs
- [ ] CircuitLab: 1 CTA + "Free Course" label
- [ ] LearningPath: 2 CTAs
- [ ] Footer: Contact links working

---

## ✅ Fase 3: Lead Magnet

### 8. LeadMagnet Section (NEW)
- [ ] Section appears before FAQ
- [ ] Green gradient background
- [ ] 3 feature items visible
- [ ] CTA button "Start Free Learning" functional

---

## ✅ Fase 4: SEO & Performance

### 9. SEO Checklist
- [ ] Meta title displays correctly
- [ ] Meta description displays correctly
- [ ] Open Graph tags working (when shared)
- [ ] Google Fonts (Inter) loading
- [ ] Font rendering correctly (no Montaser Arabic fallback)

### 10. Performance
- [ ] Page loads without critical errors
- [ ] Images loading (hero screenshots, circuit lab image)
- [ ] Animations smooth (blob animation, fade-in)

---

## ✅ Multi-Language (3 Bahasa)

### 11. Language Switching
- [ ] EN version displays correctly
- [ ] ID version displays correctly  
- [ ] MS version displays correctly
- [ ] Language switcher works in navbar

### 12. Content per Language
| Section | EN | ID | MS |
|---------|----|----|-----|
| Hero title | ✓ | ✓ | ✓ |
| Testimonials | Sarah (Jakarta), Budi (Surabaya), Dewi (Bandung) | Same, localized | Sarah (Kuala Lumpur), Budi (Johor), Dewi (Penang) |
| Learning Path times | "4-6 hours" | "4-6 jam" | "4-6 jam" |
| About stats | English labels | Indonesian labels | Malaysian labels |
| Lead Magnet | English | Indonesian | Malaysian |

---

## 🔍 Visual Checkpoints

### Desktop View
1. Hero: Screenshot carousel cycling + trust signals
2. Problem: 3 cards in row
3. Solution: Steps + outcomes + CTAs
4. CircuitLab: Image + features list
5. LearningPath: Timeline with badges + CTAs
6. Comparison: Table scrollable
7. SocialProof: 3 testimonials grid + stats
8. About: 4 feature cards + stats + mission
9. Pricing: 2 cards (Founding Member + Per Course)
10. LeadMagnet: Green banner before FAQ
11. FAQ: Accordion items
12. CTA: Final green section
13. Footer: Links working

### Mobile View
1. No horizontal scroll
2. Hamburger menu works
3. All images optimized
4. CTAs full-width and tappable
5. Testimonials stack vertically
6. Pricing cards scrollable if needed

---

## 🐛 Potential Issues to Watch

1. **LSP Errors** - These are TypeScript cached errors, build works fine
2. **Image loading** - Check CircuitLab image, hero screenshots
3. **Animations** - Hero blob animation should work
4. **Links** - All LMS_URL links should work
5. **WhatsApp** - Floating button functional

---

## 📋 Quick Test Commands

```bash
# Build project
npm run build

# Start dev server
npm run dev

# Check for console errors
# Open browser dev tools → Console tab
```

---

## ✅ Sign-off

- [ ] All 3 languages working
- [ ] No critical errors in console
- [ ] All CTAs linking correctly
- [ ] Mobile responsive
- [ ] Ready for deployment