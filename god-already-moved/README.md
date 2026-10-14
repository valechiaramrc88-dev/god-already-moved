# God Already Moved — companion web app

Static site: plain HTML, CSS and JavaScript. No build step, no database, no login.
Each reader's progress and journal are saved in her own browser.

## Files

- `index.html` — the page
- `styles.css` — colors and fonts (taken from the book cover)
- `content.js` — **all the text**: daily actions, verses, prayers, letters, scripts, bonus
- `app.js` — the logic (no need to touch it)
- `assets/cover.jpg` — the book cover

## Before publishing

1. In `content.js`, replace `reviewUrl` with the link to the book's review page.
2. Replace the draft texts in `content.js` with the book's real content, and check each verse against your translation.

## Publish

1. Create a new repository on GitHub and upload all these files (keep the `assets` folder).
2. On vercel.com choose **Add New → Project**, import the repository, leave every setting as it is, and press **Deploy**.

Every change pushed to GitHub is republished by Vercel automatically.
