# Sitemap vs. Pages Audit

**Generated:** 8 February 2026  
**Purpose:** Compare sitemap.xml URLs with actual HTML files in the repository

---

## Summary

- **Total URLs in sitemap.xml:** 10
- **Total HTML pages in repo:** 19 (18 index.html + 1 404.html)
- **Pages missing from sitemap:** 9
- **URLs in sitemap missing from repo:** 0

---

## 1. Pages in Repository NOT in Sitemap

The following pages exist in the repository but are **not listed in sitemap.xml**:

| # | Page Path | Page Type | Language | Notes |
|---|-----------|-----------|----------|-------|
| 1 | `/despre-noi/` | About Us | RO | Informational page |
| 2 | `/en/despre-noi/` | About Us | EN | Informational page |
| 3 | `/cum-castiga/` | How We Earn | RO | Disclosure page |
| 4 | `/en/cum-castiga/` | How We Earn | EN | Disclosure page |
| 5 | `/privacy-policy/` | Privacy Policy | RO | Legal page |
| 6 | `/en/privacy-policy/` | Privacy Policy | EN | Legal page |
| 7 | `/terms/` | Terms of Use | RO | Legal page |
| 8 | `/en/terms/` | Terms of Use | EN | Legal page |
| 9 | `/en/404.html` | 404 Error | EN | Error page (expected to be excluded) |

### Analysis:
- **Legal & disclosure pages** (privacy, terms, how we earn) are missing from sitemap
- **About page** is missing from sitemap
- **404 page** is correctly excluded (noindex) but noted for completeness
- All missing pages are accessible via footer navigation (added recently)

---

## 2. URLs in Sitemap Missing from Repository

**Result:** ✅ All URLs in sitemap.xml have corresponding HTML files in the repository.

No broken sitemap entries detected.

---

## 3. Money Pages Position in Sitemap

The **comparison/money pages** appear in the sitemap as follows:

### Romanian Money Page:
- **URL:** `https://finromania.com/cele-mai-bune-credite-online/`
- **Position:** #4 (out of 10 URLs)
- **Priority:** 0.80
- **Order context:** After homepage (1.00), guide (0.80), safety (0.80)

### English Money Page:
- **URL:** `https://finromania.com/en/cele-mai-bune-credite-online/`
- **Position:** #9 (out of 10 URLs)
- **Priority:** 0.64
- **Order context:** After EN homepage, guide, safety (all 0.64), before EN contact

### Sitemap Order (Full):
1. RO Homepage (priority 1.00)
2. RO Guide (priority 0.80)
3. RO Safety (priority 0.80)
4. **RO Comparison/Money Page (priority 0.80)** ← Money page
5. RO Contact (priority 0.80)
6. EN Homepage (priority 0.80)
7. EN Guide (priority 0.64)
8. EN Safety (priority 0.64)
9. **EN Comparison/Money Page (priority 0.64)** ← Money page
10. EN Contact (priority 0.64)

---

## 4. Recommendations

### High Priority:
1. **Add missing informational pages to sitemap:**
   - `/despre-noi/` and `/en/despre-noi/`
   - `/cum-castiga/` and `/en/cum-castiga/`

### Medium Priority:
2. **Add legal pages to sitemap** (consider lower priority ~0.50):
   - `/privacy-policy/` and `/en/privacy-policy/`
   - `/terms/` and `/en/terms/`

### Notes:
- 404 page should remain excluded (has noindex meta tag)
- Money pages have appropriate priority (0.80 RO, 0.64 EN)
- Consider if legal/disclosure pages should be indexed for transparency/trust signals

---

## 5. Sitemap Coverage Status

| Page Category | RO in Sitemap | EN in Sitemap | Notes |
|---------------|---------------|---------------|-------|
| Homepage | ✅ Yes | ✅ Yes | Priority 1.00 / 0.80 |
| Guide | ✅ Yes | ✅ Yes | Priority 0.80 / 0.64 |
| Safety | ✅ Yes | ✅ Yes | Priority 0.80 / 0.64 |
| Comparison (Money) | ✅ Yes | ✅ Yes | Priority 0.80 / 0.64 |
| Contact | ✅ Yes | ✅ Yes | Priority 0.80 / 0.64 |
| About Us | ❌ No | ❌ No | Missing |
| How We Earn | ❌ No | ❌ No | Missing |
| Privacy Policy | ❌ No | ❌ No | Missing |
| Terms | ❌ No | ❌ No | Missing |
| 404 Error | ❌ No | N/A | Correctly excluded |

**Coverage:** 10/18 public pages (55.6%)

---

*End of audit report*
