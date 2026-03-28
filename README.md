# Lesson 3.4 trial site

This package is a clean single-lesson trial for **Lesson 3.4 成语故事二则**.

## Folder structure

- `index.html` — trial landing page
- `word-explorer.html` — simple redirect to the lesson page
- `lesson-3-4-word.html` — the main lesson page
- `style.css` — shared site styles
- `app.js` — shared config and network helper
- `lesson-3-4.js` — lesson data + all page logic
- `worker/index.js` — Cloudflare Worker for AI + Supabase logging
- `worker/wrangler.toml` — Worker config
- `supabase/001_create_trial_tables.sql` — SQL for storage tables

## Recommended deployment order

1. Create a new GitHub repo.
2. Upload the root files (`index.html`, `word-explorer.html`, `lesson-3-4-word.html`, `style.css`, `app.js`, `lesson-3-4.js`).
3. Create a Cloudflare Pages project from that GitHub repo.
4. Create or update a Cloudflare Worker using `worker/index.js`.
5. Add your existing secrets to the Worker.
6. Run the SQL file in Supabase.
7. Test the lesson page.

## Files to publish to Cloudflare Pages

Upload these files to the root of the Pages repo:

- `index.html`
- `word-explorer.html`
- `lesson-3-4-word.html`
- `style.css`
- `app.js`
- `lesson-3-4.js`

## Worker secrets

Set the same secret values you already use. This code supports the common names below:

- `OPENROUTER_API_KEY`
- `OPENROUTER_MODEL` (optional)
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

If your existing project already uses these names, do not change anything.
If your current Worker uses different names, only update the `getEnv()` arrays in `worker/index.js`.

## Front-end API base

The static site currently uses:

- `https://quiet-field-a529.xc2375.workers.dev`

That is defined in `app.js`.
If you deploy a new Worker, replace only that value.

## What gets stored in Supabase

- AI question + AI response → `lesson_ai_logs`
- Practice events / hints / pattern quiz → `lesson_events`

## Safe first test

1. Open `lesson-3-4-word.html`
2. Ask one AI question
3. Open one Hanzi hint
4. Submit one Hanzi answer
5. Check whether rows appear in Supabase
