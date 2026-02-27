# Steve's Quick Start Guide

## Getting Started After Pulling from Git

### Step 1: Clone the Repository

```bash
# Open Terminal and run:
git clone https://github.com/Steve-Sassi/do-the-numbers-site.git
cd do-the-numbers-site
```

### Step 2: Preview Locally

```bash
# Start a local server to preview your site:
python3 -m http.server 8000

# Then open your browser to:
# http://localhost:8000
```

---

## Using Claude Code (Recommended)

Claude Code is what Nick used to build this. It's the easiest way to make changes.

### Installation
```bash
# Install Claude Code CLI (requires Node.js)
npm install -g @anthropic-ai/claude-code

# Navigate to your site folder
cd do-the-numbers-site

# Start Claude Code
claude
```

### Example Commands

Just type what you want in plain English:

**Change text:**
> "Change the hero headline to 'Train Your Sales Team to Build AI Agents'"

**Add content:**
> "Add a new testimonial from John Smith, VP Sales at Acme Corp, who said 'DTN helped our team reclaim 10 hours per week'"

**Update links:**
> "Update my Cal.com link to cal.com/steve-sassi/discovery"

**Fix issues:**
> "The contact form isn't working, help me set it up with Formspree"

**Deploy:**
> "Commit these changes and push to GitHub"

---

## Using Gemini Coder (Alternative)

If you have Gemini Coder set up in VS Code:

1. Open the `do-the-numbers-site` folder in VS Code
2. Open the Gemini Coder panel
3. Type your request, like: "Update the booking link in book.html to cal.com/steve-sassi/discovery"

---

## Immediate Setup Tasks

### 1. Set Up Free Scheduling (Cal.com)

1. Go to **cal.com/signup**
2. Create a free account with `steve@do-the-numbers.com`
3. Create an event type:
   - Name: "30-Minute Discovery Call"
   - Duration: 30 minutes
   - Description: "Let's discuss your sales team's AI enablement goals"
4. Copy your booking link (e.g., `cal.com/steve-sassi/discovery`)
5. Update `book.html`:
   - Find: `cal.com/dtn-consulting/discovery`
   - Replace with your actual Cal.com link

### 2. Set Up Form Submissions (Formspree)

1. Go to **formspree.io**
2. Sign up free with your email
3. Create a new form
4. Copy your form endpoint (looks like `https://formspree.io/f/xyzabcde`)
5. Update `index.html`:
   - Find: `formspree.io/f/placeholder`
   - Replace with your actual Formspree endpoint

### 3. Verify Your LinkedIn URL

Check that this URL is correct in the footer of all pages:
```
linkedin.com/in/steve-sassi
```

If your LinkedIn URL is different, update it in the footer section of each HTML file.

---

## Making Common Changes

### Change Text on the Homepage

1. Open `index.html`
2. Find the text you want to change
3. Edit it
4. Save and refresh browser

Or with Claude Code:
> "Change the hero subheadline to mention AI sales enablement training"

### Add a Real Testimonial

In `index.html`, find this section:
```html
<p class="text-xl text-gray-300 italic mb-6">"Add your first client testimonial here..."</p>
<p class="text-green-400 font-semibold">— Future Client</p>
<p class="text-gray-500 text-sm">VP of Sales, Enterprise Company</p>
```

Replace with a real quote:
```html
<p class="text-xl text-gray-300 italic mb-6">"DTN helped us automate 15 hours of admin work per rep per week. Our close rate improved 20%."</p>
<p class="text-green-400 font-semibold">— John Smith</p>
<p class="text-gray-500 text-sm">VP of Sales, Acme Corporation</p>
```

### Update Your Bio

Edit `about.html` and find the `<!-- Steve Sassi Bio -->` section. Update the text in the `<p>` tags.

---

## Deploying Changes

After making changes locally:

```bash
# Stage all changes
git add .

# Commit with a message
git commit -m "Updated booking link and testimonial"

# Push to GitHub (site updates automatically)
git push
```

Or with Claude Code:
> "Commit my changes with the message 'Updated Cal.com booking link' and push to GitHub"

---

## File Reference

| File | Purpose | When to Edit |
|------|---------|--------------|
| `index.html` | Homepage | Change headlines, add testimonials, update form |
| `book.html` | Booking page | Update Cal.com link |
| `about.html` | Team bios | Update your bio or photo |
| `privacy.html` | Privacy policy | Rarely, unless policy changes |
| Service pages | Service details | When service offerings change |

---

## Troubleshooting

**Site not updating after push?**
- Wait 1-2 minutes, GitHub Pages can be slow
- Check github.com/Steve-Sassi/do-the-numbers-site/actions for build status

**Form not working?**
- Make sure you replaced `formspree.io/f/placeholder` with your actual endpoint
- Check Formspree dashboard for submissions

**Cal.com link broken?**
- Make sure you used the full path (e.g., `cal.com/your-username/event-name`)
- Test by clicking the link yourself

---

## Your Competitive Edge

Remember, your unique value is:

**"Sales Leaders Teaching Sales Teams to Build AI Agents"**

You're not a tech consultant. You've closed multi-million dollar enterprise deals. You understand:
- Pipeline management pain
- CRM frustration
- The admin work that eats selling time
- How to connect disparate apps and remove data silos

Lead with that credibility. Every testimonial, every case study should emphasize: **you speak sales, not just tech.**

---

## Need Help?

- **Claude Code**: Just describe what you want in plain English
- **Nick**: Reach out for bigger changes
- **GitHub Issues**: github.com/Steve-Sassi/do-the-numbers-site/issues
