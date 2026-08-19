# Museum tiles — custom content

Each tile in `Museum.astro` is driven by a `Room` object passed from `src/pages/index.astro`.
Text is always supported; add `image` to bring in a picture, and `layout` to control
where it sits. Tiles without `image` render as text-only.

## Room fields

```ts
interface Room {
	eyebrow: string;
	label: string;
	caption: string;
	href: string;
	stat?: { value: string; label: string };
	image?: ImageMetadata;              // from `import x from '../assets/...'`
	imageAlt?: string;                  // defaults to `label` if omitted
	layout?: 'text-only' | 'image-left' | 'image-right' | 'image-top';
}
```

## Usage

```astro
---
import myImage from '../assets/work-1.jpg';
---

const rooms = [
	{
		eyebrow: 'Work Experience',
		label: 'Adfactors PR',
		caption: 'Agency pitches and a live retainer.',
		href: '/work',
		image: myImage,
		imageAlt: 'Adfactors PR campaign board',
		layout: 'image-left',
		stat: { value: '171', label: 'pitch & retainer slides' },
	},
];
```

- All images should eventually live under `src/assets/` and be imported as
  Astro image assets (like `hero.jpg` in `GalleryHero.astro`) so they get
  optimized at build time.
- Omit `image`/`layout` to keep the original text-only tile.
- The bold 14px `var(--color-accent)` border applies to every tile regardless
  of layout — that's the "frame" look shared across the corridor.
- On mobile (`<760px`), `image-left`/`image-right` collapse to a stacked
  image-on-top layout automatically.
