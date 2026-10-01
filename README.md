# ByteSpace

A responsive learning-platform frontend built with Next.js App Router, React, TypeScript, Tailwind CSS, and next/image. Includes the full landing page and Login/Signup screens with browser form validation. Authentication and newsletter submissions are frontend demos.

- [Live demo](https://bytespace-new-eight-orpin.vercel.app)
- [Figma design](https://www.figma.com/design/oQBKooZBfo8E8rvhkFuYvo/ByteSpace-New-Check-website--Copy-?node-id=1-1067)
- [Pull request](https://github.com/ConstantineAshik/bytespace-new/pull/1)

## Development

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Production and verification

```sh
npm run typecheck
npm run build
npm run start -- --port 3001
```

In another terminal, run the browser checks:

```sh
npx playwright install chromium
npm run validate
```

Checks cover routes, image loading, responsive overflow, category filters, and forms. Set `BASE_URL` to test another host.

## Project structure

`app` contains routes and styles; `components` contains shared UI and page sections; `data` holds course content, testimonials, and intrinsic image sizes. Original artwork and fonts are served locally from `public`. Desktop follows the 1440px design; tablet and mobile reflow the layout.

## Git workflow

The implementation has been merged into `main` through the linked pull request. Vercel is connected to the repository, and production is published from `main`.
