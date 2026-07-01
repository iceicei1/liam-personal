# Liam Liang Personal Website

React + Vite personal website foundation for Liam Liang.

## What is included

- First screen name gate using the local `TextPressure` effect.
- Click-through portfolio page inspired by large-type black editorial portfolio layouts.
- WebGL LightRays background on the portfolio home screen.
- Scroll-snap resume flow: profile home, career, skills, selected work and contact.
- Large cards for career and selected project evidence.
- Desktop-first layout with a maximum content width of about `1700px`.

## Run locally

Install dependencies, then run the dev server:

```powershell
npm install
npm run dev
```

On this machine, a local npm CLI was downloaded because `npm` was not available globally. You can also run:

```powershell
$env:PATH='C:\Users\liaml\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;' + $env:PATH
& 'C:\Users\liaml\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe' '.\.tools\npm\package\bin\npm-cli.js' run dev
```

The current preview URL is usually:

```text
http://127.0.0.1:5173
```

## Deploy publicly

Build the public files:

```powershell
npm run build
```

The public website files are generated in:

```text
C:\Users\liaml\Documents\Job\personal-site\dist
```

For Netlify:

- Build command: `npm run build`
- Publish directory: `dist`

This project also includes `netlify.toml`, so Netlify can detect the same settings automatically.

For the quickest manual upload, use:

```text
C:\Users\liaml\Documents\Job\personal-site\liam-portfolio-dist.zip
```

## Deploy with GitHub Pages

This project includes a GitHub Actions workflow:

```text
.github/workflows/deploy.yml
```

Recommended GitHub Pages setup:

1. Create a GitHub repository, for example `liam-portfolio`.
2. Push this `personal-site` project to the repository.
3. In GitHub, open the repository and go to `Settings` -> `Pages`.
4. Under `Build and deployment`, set `Source` to `GitHub Actions`.
5. Push to the `main` branch.
6. Open the `Actions` tab and wait for `Deploy to GitHub Pages` to finish.

The public URL will usually be:

```text
https://YOUR-GITHUB-USERNAME.github.io/liam-portfolio/
```

If you create a user site repository named `YOUR-GITHUB-USERNAME.github.io`, the URL will be:

```text
https://YOUR-GITHUB-USERNAME.github.io/
```

## Edit later

- Main React code: `src/main.jsx`
- TextPressure component: `src/components/TextPressure.jsx`
- LightRays component: `src/components/LightRays.jsx`
- Styling: `src/styles.css`
- Contact placeholders currently use `your.email@example.com`, `LinkedIn placeholder`, and `Resume placeholder`.

The content is based only on `../job-match-bot/profile.md`. Add new claims only after they are confirmed.
