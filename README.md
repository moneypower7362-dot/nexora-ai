# NEXORA AI — Free-first starter website

This is a working starter project, not a Meta AI clone and not yet a published website.

## Included
- Responsive chat interface
- Server-side Groq API call at `/api/chat` (API key is not exposed to the browser)
- YouTube ideas / script / SEO prompt shortcuts
- Browser-local reminders (stored on the same browser/device; page must remain open for alerts)

## Important limitations
- You must create your own Groq API key and add it as a Cloudflare Pages secret named `GROQ_API_KEY`.
- Free model access and rate limits can change; check your account's limits.
- WhatsApp is NOT connected. Sending/reading WhatsApp messages requires a separate approved WhatsApp Business/API integration or a compliant connector, plus explicit approval before sending.
- YouTube shortcuts generate text; they do not upload videos or fetch private channel data.
- Reminders are local to one browser and are not cloud-synced or guaranteed if the browser/device is closed.

## Deploy for free (Cloudflare Pages + GitHub)
1. Create a GitHub account and a new **public or private** repository named `nexora-ai`.
2. Upload all files/folders from this project to the repository (keep `functions/api/chat.js` in exactly that path).
3. Create/sign in to Cloudflare: https://dash.cloudflare.com/
4. Open Workers & Pages → Create application → Pages → Connect to Git.
5. Select your `nexora-ai` repository.
6. Framework preset: None. Build command: leave blank (or `exit 0`). Build output directory: `/` or the repository root, depending on the dashboard field; for static HTML, Cloudflare Pages serves `index.html` from the configured output directory. If dashboard requires a folder, place the site files in `public/` and set output to `public`.
7. Deploy. Cloudflare gives you a `*.pages.dev` URL.
8. In Groq Console create an API key: https://console.groq.com/keys
9. In Cloudflare Pages → your project → Settings → Variables and Secrets, add secret `GROQ_API_KEY` with your key. Optionally add `GROQ_MODEL` as `openai/gpt-oss-20b`.
10. Redeploy the site.

## Local preview
You can open `index.html` directly to preview the interface, but AI chat needs the deployed `/api/chat` endpoint.

## Security
Never put your Groq key in `index.html`, GitHub, screenshots, or public chat messages. Add it only as a Cloudflare secret. Add usage limits/abuse protection before sharing widely.
