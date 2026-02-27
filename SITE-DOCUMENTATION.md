# DTN Consulting Website Documentation

## Overview

This is the website for **DTN Consulting** (do-the-numbers.com), an AI Sales Enablement Training consultancy. The site is hosted on **GitHub Pages** and focuses on helping enterprise sales teams build AI agents to automate busywork.

---

## Your Niche Positioning

Based on analysis of your background and content, your strongest positioning is:

### **"AI Sales Enablement Training"**

**Why this works:**
- Steve has 20+ years in enterprise sales (Informatica, Pivotree, Fortune 500 clients)
- You speak the language of sales leaders (revenue, pipeline, quota)
- Your specialty: removing silos, connecting disparate apps, embedding AI tools across the sales funnel
- You're not "tech consultants teaching sales" — you're "sales veterans who mastered AI"

**Target Keywords for SEO:**
- AI sales enablement training
- Sales AI assistant
- AI for enterprise sales teams
- Sales automation AI
- Vibe coding for sales
- CRM automation AI
- B2B sales AI training

---

## Site Structure

```
do-the-numbers.com/
├── index.html              # Homepage (main landing page)
├── about.html              # Team bios (Steve & Nick)
├── book.html               # Booking page (Cal.com integration)
├── vibe-coding-implementation.html    # Service page
├── digital-transformation-strategy.html  # Service page
├── cloud-ai-integration.html          # Service page
├── privacy.html            # Privacy policy
├── 404.html                # Custom error page
├── favicon.svg             # Site icon
├── sitemap.xml             # For search engines
├── robots.txt              # Search engine directives
├── CNAME                   # Custom domain config
└── images/
    ├── Sales-Enablement-Agent.png
    ├── Vibe-Coding-Implementation-Hero-Image2.png
    ├── digital-transformation-strategy-hero-image.png
    ├── cloud-ai-integration-hero-image.png
    ├── Sassi LI ProfilePic2.jpg
    └── Bianco ProfilePic.jpg
```

---

## Technology Stack

| Component | Technology |
|-----------|------------|
| Hosting | GitHub Pages (free) |
| CSS Framework | Tailwind CSS (via CDN) |
| Fonts | Google Fonts (Inter) |
| Forms | Formspree (free tier) |
| Scheduling | Cal.com (free) |
| Domain | do-the-numbers.com (CNAME configured) |

---

## What Was Built/Changed

### New Files Created
1. **book.html** - Booking page with Cal.com integration
2. **privacy.html** - Privacy policy page
3. **404.html** - Custom 404 error page
4. **favicon.svg** - SVG favicon (DTN logo)
5. **sitemap.xml** - XML sitemap for Google
6. **robots.txt** - Search engine instructions

### SEO Improvements (All Pages)
- Added meta descriptions
- Added Open Graph tags (for social sharing)
- Added Twitter card meta tags
- Added canonical URLs
- Added favicon reference
- Added structured data (JSON-LD) on homepage

### Functionality Fixes
- All "Book a Call" buttons now link to `/book.html`
- All service page CTAs now work
- Mobile hamburger menu now works (JavaScript added)
- Form updated to use Formspree

### New Homepage Sections
- **Social Proof Section**: "Why Sales Leaders Choose Us" with stats
- **Testimonial Placeholder**: Ready for client quotes

### Footer Updates (All Pages)
- Added LinkedIn social link
- Added Privacy Policy link

---

## How Each Page Works

### index.html (Homepage)
- **Hero**: Main value proposition with CTAs
- **Sales Enablement Section**: Your core offering (AI training for sales teams)
- **Triple A Approach**: Aim, Architecture, Accountability methodology
- **Services Grid**: Links to 3 service detail pages
- **Social Proof**: Stats and testimonial placeholder
- **Lead Capture**: Form for guide download (needs Formspree setup)

### book.html (Booking)
- Two booking options: Cal.com scheduler and email
- "What to Expect" process steps
- Setup instructions for Steve (yellow box at bottom)

### Service Pages
Each service page follows the same structure:
- Hero with title and description
- Hero image
- Triple A breakdown for that service
- CTA button linking to booking

---

## Action Items for Steve

### REQUIRED (to make site functional)

| Priority | Task | How To Do It |
|----------|------|--------------|
| 1 | **Set up Cal.com** | Go to [cal.com/signup](https://cal.com/signup), create free account, create a 30-min event type |
| 2 | **Update booking link** | In `book.html`, replace `cal.com/dtn-consulting/discovery` with your Cal.com link |
| 3 | **Set up Formspree** | Go to [formspree.io](https://formspree.io), create free account, get form endpoint |
| 4 | **Update form action** | In `index.html`, replace `formspree.io/f/placeholder` with your Formspree endpoint |
| 5 | **Verify LinkedIn URLs** | Check that `linkedin.com/in/steve-sassi` is correct in all footer links |

### RECOMMENDED (to improve site)

| Task | Notes |
|------|-------|
| Add real testimonials | Replace placeholder in index.html with actual client quotes |
| Compress images | Your hero images are 1MB+. Use [tinypng.com](https://tinypng.com) to compress |
| Add Google Analytics | Optional: Add GA4 tracking code to all pages |
| Submit to Google Search Console | Submit sitemap.xml to get indexed faster |

---

## Editing the Site

### Option 1: Edit directly on GitHub
1. Go to github.com/Steve-Sassi/do-the-numbers-site
2. Click on any file
3. Click the pencil icon to edit
4. Make changes and commit

### Option 2: Clone and edit locally
```bash
git clone https://github.com/Steve-Sassi/do-the-numbers-site.git
cd do-the-numbers-site
# Make edits
git add .
git commit -m "Your change description"
git push
```

### Option 3: Use AI coding tools
See `STEVE-QUICKSTART.md` for instructions on using Claude Code or similar tools.

---

## Domain & Hosting

- **GitHub Pages** automatically deploys when you push to the `main` branch
- **Custom domain** is configured via the `CNAME` file
- **SSL/HTTPS** is provided free by GitHub Pages
- Changes typically go live within 1-2 minutes of pushing

---

## Need Help?

Contact Nick at the email in your .env file, or use Claude Code / Gemini to make changes by describing what you want in plain English.
