# SOFALIVING Sofa Customiser

Responsive single-page site built with **Next.js 14 (App Router), React, JavaScript and Tailwind CSS**. No backend.

## Live demo
<!-- Vercel link yahan add karo -->

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Features
- Hero section with CTA that scrolls to the customiser
- Featured collection cards (Luna, Urban, Cloud) with price and "Customise" button
- Interactive customiser: model, colour, fabric and seating controls
- Price is derived from data (`data/sofas.js`), not hardcoded per combination
- Changing model resets an invalid colour to a valid one
- Live configuration summary and price breakdown
- Enquiry form with validation (errors and success state)
- Responsive layout for desktop and mobile

## Folder structure

```
sofaliving/
├── app/
│   ├── layout.js          # fonts, metadata
│   ├── page.js            # holds config state, composes sections
│   └── globals.css        # Tailwind + shared classes
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── FeaturedSofas.jsx
│   ├── SofaCard.jsx
│   ├── SofaCustomiser.jsx
│   ├── ColourSelector.jsx
│   ├── OptionGroup.jsx
│   ├── PriceSummary.jsx
│   ├── SofaPreview.jsx
│   ├── About.jsx
│   ├── EnquiryForm.jsx
│   └── Footer.jsx
├── data/
│   └── sofas.js           # models, colours, fabrics, seatings, copy
├── lib/
│   ├── pricing.js         # price + colour-validity logic
│   └── validation.js      # form rules
├── public/
│   └── images/            # product and preview photos
├── tailwind.config.js
├── postcss.config.js
└── jsconfig.json
```

## How it works
- `page.js` keeps one `config` object: `{ modelId, colourId, fabricId, seatingId }`.
- **Price is derived**, never hardcoded: `base + fabric adjustment + seating adjustment` (`lib/pricing.js`).
- Changing model calls `getValidColour`, so an unavailable colour resets to the model's first colour.
- Card "Customise" button sets the model and scrolls to the customiser.
- Enquiry form shows the live configuration, validates on submit and shows a success state.

## Pricing rules
- Base price by model: Luna ₹42,999, Urban ₹54,999, Cloud ₹64,999
- Fabric: Linen ₹0, Velvet +₹5,000, Leatherette +₹8,000
- Seating: 2 Seater −₹7,000, 3 Seater ₹0, L Shape +₹18,000
- Default: Luna / Beige / Natural Linen / 3 Seater = ₹42,999

## Known limitations
- Preview photos exist only for some colours (Luna: Beige, Grey; Urban: Beige, Charcoal; Cloud: Beige, Blue). Other colours show the first available photo.
- Changing fabric or seating updates the price and summary, but not the photo.
- Enquiry form does not send email or save data. It only shows a success message.
- Footer legal links (Privacy Policy, Terms, etc.) are placeholders (`#`).
- Images are for training/demo use only.
- No automated tests.