# Newton's Apples Physics Society — website

A static, no-build-step website hosted free on GitHub Pages.

**Live site:** https://dmdxr.github.io/club-website/

---

## Setting up the two Google Forms

The site has two form embeds that are **not connected yet**. Until you connect them,
those pages show a "not connected yet" notice instead of a form.

### 1. Create the forms

Go to <https://forms.google.com> and create two forms.

**Membership form** — suggested questions:

| Question | Type | Required |
|---|---|---|
| Full name | Short answer | ✅ |
| UTSC email address | Short answer | ✅ |
| Program of study | Short answer | ✅ |
| Year of study | Multiple choice — 1st / 2nd / 3rd / 4th+ / Grad | ✅ |
| Which topics should we run events on? | Checkboxes — Astrophysics, Quantum, Biophysics, Theory, Outreach | ☐ |
| How did you hear about us? | Multiple choice | ☐ |
| Add me to the weekly email | Checkbox | ☐ |

**Conference 2027 registration form** — suggested questions:

| Question | Type | Required |
|---|---|---|
| Full name | Short answer | ✅ |
| Email address | Short answer | ✅ |
| University / institution | Short answer | ✅ |
| I am registering to… | Multiple choice — Attend only / Give a talk / Present a poster | ✅ |
| Abstract title | Short answer | ☐ (show if presenting) |
| Abstract (250 words max) | Paragraph | ☐ (show if presenting) |
| Track | Multiple choice — Astrophysics & Cosmology / Quantum & Condensed Matter / Biophysics & Medical / Theory & Computation | ☐ |
| Dietary requirements | Short answer | ☐ |
| Which days will you attend? | Checkboxes — Sat 13 Mar / Sun 14 Mar | ✅ |
| I'd like to be considered for the travel bursary | Checkbox | ☐ |
| I consent to my talk being recorded | Checkbox | ☐ |

> Tip: use **Go to section based on answer** so people who pick "Attend only"
> skip the abstract questions.

### 2. Get each form's embed link

Open the form → **Send** (top right) → the **`< >`** tab → copy the URL out of the
`src="..."` attribute. It looks like:

```
https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform?embedded=true
```

### 3. Paste them into the site

Open `assets/js/main.js`. The first few lines are:

```js
var FORMS = {
  membership: "",   // General membership signup form
  conference: ""    // Conference 2027 registration form
};
```

Paste each URL between the quotes, commit, and push. The forms appear on
`join.html` and `conference.html` automatically — nothing else to change.

---

## Editing the site

Every page is plain HTML. There is no build step, no framework, and nothing to
install — edit a file, commit it, and GitHub Pages redeploys in about a minute.

| File | What it is |
|---|---|
| `index.html` | Home — hero, what we do, conference banner, next events |
| `about.html` | About the club — mission, values, history timeline, FAQ |
| `events.html` | Full event calendar (upcoming + past) |
| `conference.html` | Conference 2027 — tracks, schedule, key dates, registration form |
| `team.html` | Executive team profiles |
| `join.html` | Join as a member — benefits, membership form, FAQ |
| `404.html` | Shown for broken links |
| `assets/css/style.css` | All styling |
| `assets/js/main.js` | Form embeds, mobile menu, light/dark toggle |

### Preview your changes locally

```
python3 -m http.server 8000
```

Then visit <http://localhost:8000>. (Opening the `.html` file directly also works,
but the `404.html` links assume a server.)

### Common edits

**Add an event** — copy an existing `<div class="event">` block in `events.html`
and change the month, day, title, and details.

**Add a team member** — copy a `<div class="card person">` block in `team.html`.
The `avatar` div holds initials; swap it for
`<img class="avatar" src="assets/img/name.jpg" alt="">` to use a photo.

**Update the conference schedule** — the two tables in `conference.html` are plain
`<table class="schedule">`; add or edit `<tr>` rows.

**Change the colors** — edit the CSS variables at the top of `assets/css/style.css`.
`:root` is dark mode, `[data-theme="light"]` is light mode.

**Change the club name** — it appears in each page's `<title>`, the `.brand` link
in the header, and the footer. A find-and-replace across all `.html` files does it.

### Still to fill in

Search the project for these and replace them:

- `hello@example.com` — the real club email address
- `href="#"` on the Discord / Instagram / GitHub links
- The stats on `index.html` and `conference.html` (member counts, talk counts)
- Team member names, roles, and bios in `team.html`
- Event dates and room numbers throughout

## Publishing

Pushing to `main` redeploys the site automatically. Settings are under
**Settings → Pages** in the GitHub repository.
