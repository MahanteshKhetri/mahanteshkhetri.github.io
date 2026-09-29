# Managing your website

Public address: https://mahanteshkhetri.github.io

Repository: https://github.com/MahanteshKhetri/mahanteshkhetri.github.io

# Publish independently of ChatGPT

This site is plain HTML, CSS, JavaScript and image files. It does not need ChatGPT to run. No separate admin login or upload service is currently installed.

## Recommended: GitHub Pages

1. Create a GitHub account, or sign into yours.
2. Create a public repository named `YOUR-USERNAME.github.io` for the shortest address. A repository named `portfolio` also works, at `YOUR-USERNAME.github.io/portfolio/`.
3. Extract `mahantesh-github-source.zip` and upload its contents to the repository, including `.github/workflows/pages.yml`. Use the `main` branch. Upload the extracted files, not the ZIP itself.
4. In the repository, open Settings → Pages. Set Source to GitHub Actions.
5. Open Actions → Publish portfolio to GitHub Pages → Run workflow. Later saves to `main` trigger the same workflow automatically.
6. Open the address shown by the completed deployment. The workflow automatically configures the site's address and repository subpath.

GitHub Pages is available for public repositories on GitHub Free. With this option, the source and uploaded photos in the repository are public as well as the website. A custom domain is optional and purchased separately.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## Update photos, PDFs and text later

You can use GitHub's web interface; no local development tools are required for routine content changes.

- **Photo:** upload a photo to `dist/assets/`, then add its record to `content/gallery.json`. Copy an existing record and change its filename, title, caption, alt text, dimensions and group. Leave unknown dates/places out.
- **Resume/CV:** upload your PDF to `dist/assets/`, then change the appropriate `file` value in `content/documents.json` from `null` to `/assets/your-file.pdf`.
- **Instagram:** replace `null` in `content/social.json` with your full profile URL in quotation marks.
- **Project text:** edit `content/stories.json`.
- **Home story:** edit `home.mjs`.
- **Community story:** edit `community.mjs`.
- **Gallery layout:** edit `gallery.mjs` and `dist/site.css`.
- **Other social links:** edit `templates.mjs`.

Choose Commit changes after each edit. The included workflow rebuilds and publishes the site. GitHub history lets you retrieve previous versions.

A form-based admin dashboard needs a CMS/authentication and storage service; GitHub Pages alone does not provide server-side login or file uploads. GitHub itself can serve as the authenticated editing interface for now.

## Easiest manual upload: Netlify

Extract `mahantesh-public-site.zip`. Sign into Netlify and drag the extracted folder (containing index.html) into its manual deploy area. Upload the updated folder again for future changes. Do not upload the source ZIP as the website.

https://docs.netlify.com/start/quickstarts/netlify-drop-quickstart/

## Another option: Cloudflare

Cloudflare Pages supports direct upload of the public-site ZIP, or automatic deployment from a GitHub repository. For Git integration use build command `node build.mjs` and output directory `dist`. Set `SITE_URL` to your final public address. Leave `BASE_PATH` empty for a root domain.

https://developers.cloudflare.com/pages/get-started/direct-upload/
https://developers.cloudflare.com/pages/get-started/git-integration/

## Build locally

Install Node.js and run `node build.mjs`. Preview `dist` using any local HTTP server. `SITE_URL` is optional for preview; set it when the final host is known to generate canonical URLs and the sitemap. `BASE_PATH` supports GitHub project repositories. Both are automatically supplied by the GitHub workflow.

The downloadable packages exclude the old ChatGPT hosting configuration and Git history. The previous ChatGPT copy is separate from this GitHub website.
