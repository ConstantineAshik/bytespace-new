# ByteSpace

A Figma-to-code implementation of the ByteSpace learning platform, built with Next.js App Router, React, TypeScript, Tailwind CSS, and next/image.

- [Live demo](https://bytespace-new-eight-orpin.vercel.app)
- [Public repository](https://github.com/ConstantineAshik/bytespace-new)
- [Unmerged pull request](https://github.com/ConstantineAshik/bytespace-new/pull/1)
- Branch: `feature/bytespace-landing-page`

## Design reference

Implemented from the [accessible ByteSpace Figma copy](https://www.figma.com/design/oQBKooZBfo8E8rvhkFuYvo/ByteSpace-New-Check-website--Copy-?node-id=1-1067), as approved because the assessment file required editor access. Desktop measurements use the original 1440px frames. Tablet and mobile adapt the layout because mobile reference frames were not supplied.

## Included

Complete landing page: header, hero, partner logos, featured courses with category filters, learning categories, growth and creator sections, creator CTA, testimonials, newsletter, and footer.

Bonus authentication screens: `/login` and `/signup`, with `/register` redirecting to signup. Forms validate required fields, email format, and password length. Authentication, social sign-in, and newsletter submissions are frontend demonstrations; no backend service is connected. Search submits a query to the landing URL; a separate search-results page is outside this assessment.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. To run the production build:

```sh
npm run build
npm run start -- --port 3001
```

## Validation

```sh
npm run typecheck
npm run build
npx playwright install chromium
npm run validate
```

The browser check defaults to http://localhost:3001. Set `BASE_URL` to test another host. It saves screenshots and a browser report in the ignored `validation` directory and checks loaded assets, public routes, horizontal overflow at 1440/768/390px, course filtering, newsletter feedback, authentication forms, and the register redirect.

Desktop renders were visually compared with Figma screenshots and extracted source measurements, then corrected for typography, spacing, masks, image positioning, and artwork. The original hero was checked at 1440x1024; the landing page follows the original section heights and container widths.

## Structure and assets

`app` contains routes and shared styles; `components` contains reusable layout, course, authentication, and section components; `data` holds typed repeated content and asset dimensions. Original artwork and SVGs are stored under `public/assets`. Satoshi and Clash Display are supplied locally from Fontshare, and Poppins from Google Fonts, under `public/fonts`. No temporary Figma asset URLs are required at runtime.

The feature branch contains incremental commits and remains unmerged into `main`. Vercel is connected to the GitHub repository; the live production deployment was published from the feature branch. Source `.fig` files and local extraction/validation files are excluded from Git and deployment.
