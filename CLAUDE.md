@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Next.js (Pages Router) frontend for Zetter Gallery — a web gallery for paintings created with the Zetter Minecraft mod. It is a thin client over a separate backend API (`api.zetter.gallery`); there is no database or business logic here.

## Commands

- `npm run dev` — dev server on port 8080, loads `.env.development` via `env-cmd`
- `npm run build` — production build (`output: 'standalone'`); `postbuild` runs `next-sitemap`
- `npm run lint` — ESLint 9 flat config (`eslint.config.mjs`, Next presets + Prettier); `npx eslint path/to/file.tsx` for a single file
- `npx tsc --noEmit` — type-check
- `npm run i18n` — extract messages from source into `content/locales/en.json`, then compile all locales into `content/compiled-locales/`

There is no test suite.

## Architecture

**Routing/pages**: `src/pages/` (Pages Router). Data-driven pages use `getServerSideProps` and wrap the page in a layout component from `src/components/layouts/` (`default`, `clean`, `wiki`). `_app.tsx` also supports a per-page `getLayout` (`NextPageWithLayout`) and wraps everything in `IntlProviderWrapper` → `AuthProviderWrapper`.

**API access** (`src/utils/request/`): `apiGet` / `apiPost` / `apiDelete` switch behaviour based on whether a Next `context` is passed:
- With `context` (server side, in `getServerSideProps`): uses `NEXT_INTERNAL_API_URI`, reads the `token` cookie from the request, forwards `context.locale` as `Accept-Language`.
- Without `context` (browser): uses `NEXT_PUBLIC_API_URI` and the client-side `token` cookie.

Non-2xx responses throw `HttpCodeError`; in `getServerSideProps`, catch and return `handleRequestErrors(e)` which redirects to `/400`, `/401`, `/404` or `/500`. API responses are typically transformed to component props via mappers in `src/utils/mappers/`.

**DTOs** (`src/dto/request`, `src/dto/response`): copied by hand from the backend — keep them in sync with the backend rather than inventing shapes.

**Auth** (`src/context/auth.context.tsx`): the bearer token lives in the `token` cookie; the current player and refresh token are cached in `localStorage` and re-validated against the cookie on route changes (`/players/me`). Login is via Microsoft (`pages/auth/start|finish`) and a cross-auth/consent flow used by the Minecraft mod (`pages/auth/cross|consent`).

**Next actions** (`src/utils/nextAction/`): multi-step user journeys are chained by passing a serialized list of `{url, messageId}` in the `next` query param; supporting pages redirect to the next entry.

**i18n**: `react-intl` with Next's built-in `i18n` locales (`en, ru, zh, pl, fr, de, tr, uk, pt` in `next.config.js`). Compiled locale JSONs are statically imported in `src/context/intl.context.tsx` — adding a locale requires updating both `next.config.js` and that file. Translations are managed through Crowdin (`crowdin.yml`): `en.json` is the source, compiled files are the targets.

Message ID convention: `{path|"common"}[.error]?[.{component}]+.node`
- Path: camelCase → dash-case, `/` → `.` (e.g. `wiki/zetter/recipes` → `wiki.zetter.recipes`)
- Keep component hierarchy (`footer.legal.rules`); at least one component segment
- Use the most specific path; shared components use `common` (e.g. `common.icon.error`)
- Errors go right after path/common: `wiki.error.no-translation`, `common.error.generic`

**Styling**: SCSS modules colocated with components; `src/styles` is on the Sass include path. SVGs and PNGs are imported as static images (`StaticImageData`) and rendered via `<Icon asset={...}>` or `next/image`. Shared styles are imported as `src/styles/...` — this relies on the project root being in Sass `loadPaths` in `next.config.js`.

## Code conventions

- Component files: `kebab-case.<type>.tsx` (e.g. `painting-post.component.tsx`, `auth.context.tsx`), with an `index.ts` re-exporting named exports. Pages are exempt (named for routing). A few older components use PascalCase dirs/files.
- No default exports from components (pages and contexts are the exception).
- Path aliases: `@/*` → `src/*`, plus `@components/*`, `@hooks/*`, `@styles/*`, `@assets/*`.
- Prettier: single quotes, trailing commas.

## Environment & deployment

Env vars: `NEXT_INTERNAL_API_URI` (server-side API), `NEXT_PUBLIC_API_URI`, `NEXT_PUBLIC_STATIC_URI`, `NEXT_PUBLIC_FRONTEND_URI`. `stub.env` shows the expected shape.

Next.js only accepts `NODE_ENV` of `production`, `test` or `development`, so staging runs with `NODE_ENV=production` plus staging secrets.

Deployed as Docker containers (`cd/node/Dockerfile`, multi-stage; `docker-compose.{dev,prod}.yml`) to self-hosted Hetzner runners via GitHub Actions (`.github/workflows/`). Production deploys on GitHub release publish; the workflow writes `.env.production` from secrets at build time.
