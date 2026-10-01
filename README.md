# ByteSpace Hero

Implementation of Figma node `1:1695` (`Hero_Frame`), with the original 1440 × 1024 desktop layout. Only this section is implemented.

## Run

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Validation

```sh
npm run typecheck
npm run build
npx playwright install chromium
node scripts/validate.mjs
```

The `validation` folder contains the Figma export, desktop/tablet/mobile captures, and browser checks. Desktop captures were visually compared and the exported mask positioning and transparent image shadows corrected.

Original Figma images and SVGs are in `public/assets`; fonts are served locally from `public/fonts`. Font families are Poppins (600), Satoshi (400/500/700), and Clash Display (variable, wordmark at 700). Satoshi and Clash Display are from Fontshare; Poppins is from Google Fonts.

The desktop canvas preserves Figma's exact positions. Tablet scales the canvas proportionally; mobile reflows the header and text while resizing and repositioning the original decorative assets. Mobile is an adaptation because no mobile reference was supplied.

The search form submits its query to `/?q=...`; search results and navigation destinations are reserved for the later page tasks.
