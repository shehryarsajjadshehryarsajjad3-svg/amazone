# bazaara — E-commerce Storefront

Next.js 14 + Tailwind CSS se bana hua ek professional e-commerce demo store.
Home page, category/search filter, product detail page, cart, aur checkout
(mock — koi real payment process nahi hota) sab included hain.

## Local pe chalane ka tareeqa

```bash
npm install
npm run dev
```

Phir browser mein `http://localhost:3000` khol lein.

## Vercel pe deploy karna

**Sabse aasan tareeqa (GitHub ke zariye):**

1. Ye folder GitHub pe ek naye repo mein push karein:
   ```bash
   git init
   git add .
   git commit -m "bazaara store"
   git branch -M main
   git remote add origin <apka-github-repo-url>
   git push -u origin main
   ```
2. [vercel.com](https://vercel.com) pe jaa kar GitHub se login karein.
3. "Add New Project" → apna repo select karein → "Deploy" dabayein.
4. Vercel khud detect kar lega ke ye Next.js project hai — koi extra
   configuration ki zaroorat nahi. Deploy hote hi apko live link mil jayega
   (misal ke taur pe `bazaara-xyz.vercel.app`).

**Bina GitHub ke (Vercel CLI se):**

```bash
npm install -g vercel
vercel
```

Sawalat ka jawab de kar (project name, directory, etc.) deploy ho jayega,
aur akhir mein link mil jayega.

## Customize karne ke liye

- **Products:** `data/products.js` mein apne products, prices (PKR) aur
  categories daal sakte hain.
- **Images:** abhi placeholder images (`picsum.photos`) use ho rahi hain —
  inhein apni real product photos ke URLs se replace kar dein.
- **Brand naam/colors:** `tailwind.config.js` mein colors aur `app/layout.js`
  mein site ka naam/title change kar sakte hain.
- **Checkout:** `app/checkout/page.js` mein abhi sirf ek mock order-confirm
  flow hai. Real payment (Stripe, JazzCash, Easypaisa, etc.) integrate karne
  ke liye is form ke submit handler mein apna payment gateway ka API call
  add karna hoga.

## Tech stack

- Next.js 14 (App Router)
- Tailwind CSS
- React Context (cart state — koi database nahi, refresh pe cart reset ho
  jayega; real store ke liye database/local storage add karna hoga)
