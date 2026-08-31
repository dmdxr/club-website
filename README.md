# Campus Tech Club — website

A static, no-build-step website hosted free on GitHub Pages.

**Live site:** https://USERNAME.github.io/REPO/

## Editing the site

Every page is a plain HTML file. There is no build step, no framework, and nothing
to install — edit a file, commit it, and GitHub Pages redeploys in about a minute.

| File | What it is |
|---|---|
| `index.html` | Home page — hero, what we do, stats, next events |
| `events.html` | Full event calendar (upcoming + past) |
| `projects.html` | Project team showcase |
| `team.html` | Exec team profiles |
| `join.html` | How to join, FAQ, contact info |
| `404.html` | Shown for broken links |
| `assets/css/style.css` | All styling |
| `assets/js/main.js` | Mobile menu + light/dark toggle |

### Preview your changes locally

Just open the file in a browser:

```
open index.html
```

Or run a local server (nicer, makes `/` links work):

```
python3 -m http.server 8000
```

Then visit http://localhost:8000

### Common edits

**Add an event** — copy an existing `<div class="event">` block in `events.html`
and change the month, day, title, and details.

**Add a team member** — copy a `<div class="card person">` block in `team.html`.
The `avatar` div holds initials; replace it with `<img class="avatar" src="assets/img/name.jpg" alt="">`
to use a photo instead.

**Add a project** — copy a `<div class="card">` block in `projects.html`.

**Change the colors** — edit the CSS variables at the top of `assets/css/style.css`.
The `:root` block is dark mode, `[data-theme="light"]` is light mode.

**Change the club name** — it appears in the `<title>`, the `.brand` link in the
header, and the footer of each page. A find-and-replace across all `.html` files
handles it.

### Things to fill in

Search the project for these placeholders and replace them:

- `hello@example.com` — the club email address
- `href="#"` on Discord / Instagram / GitHub links — real URLs
- The signup form link on `join.html`
- Stats on `index.html` (member count, events per year, etc.)

## Publishing

Pushing to the `main` branch automatically redeploys the site. Settings live under
**Settings → Pages** in the GitHub repository.
