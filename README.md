# Angular Dark Minimal Portfolio

Reconstruction of the supplied Astro + React + Tailwind portfolio using **Angular standalone components** and **plain CSS**.

## Run
```bash
npm install
npm start
```

Then open `http://localhost:4200`.

## Structure
- `src/app/portfolio.component.ts` — page composition
- `src/app/nav.component.ts` — responsive shrinking navigation + active section tracking
- `src/app/home.component.ts` — hero, social links, skills and glitch canvas
- `src/app/projects.component.ts` — project cards
- `src/app/contact.component.ts` — contact form
- `src/app/footer.component.ts` — footer and likes UI
- `src/styles.css` — global theme and responsive CSS
- `public/` — original portfolio font, favicon and technology SVG assets

Replace placeholder identity, project URLs and Formspree endpoint in the component data before deployment.
