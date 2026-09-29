# Mahantesh Khetri — personal website

A standalone static portfolio with 18 gallery photographs, project stories, a community photo story, awards and document slots.

See HOSTING.md for GitHub Pages setup, alternative hosts, and editing instructions.

Build: `node build.mjs`. Output: `dist`. No package installation is needed. The GitHub Actions workflow builds and publishes after changes to main.

Content lives in `content/*.json`, `home.mjs`, `community.mjs` and `render.mjs`. Gallery rendering is in `gallery.mjs`; shared navigation/metadata are in `templates.mjs`. Styles and browser interactions are `dist/site.css` and `dist/site.js`.

Photos supplied by the owner remain unchanged. Photo captions describe the scenes without inventing names, relationships, dates or locations. Replace captions with your own context at any time.

The optional `SITE_URL` build setting is the full public site URL, including any repository path. `BASE_PATH` is only the path prefix, such as `/portfolio`. The GitHub workflow supplies both automatically.

Public address: https://mahanteshkhetri.github.io

Repository: https://github.com/MahanteshKhetri/mahanteshkhetri.github.io

The website is hosted independently on GitHub Pages.
