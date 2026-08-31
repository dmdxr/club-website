# Newton's Apples Physics Society — website

A static, no-build-step website hosted free on GitHub Pages.

**Live site:** https://dmdxr.github.io/club-website/ 

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
