# Tomato Food Ordering Website

A modern food ordering website built with React and Vite. The app lets users browse dishes by category, search the menu, add items to a cart, review order totals, complete a checkout form, and contact the restaurant through a dedicated Contact Us page.

## Features

- Responsive home page with hero section, menu categories, food cards, app download section, and footer
- Food menu with 32 dishes grouped by category
- Search function for filtering dishes by name, category, or description
- Add, remove, and update cart item quantities
- Cart page with subtotal, delivery fee, total amount, promo-code input, and empty-cart state
- Checkout page with delivery information form and order confirmation message
- Contact Us page with form, topic selector, and restaurant contact details
- Sign in / sign up popup UI
- React Router navigation between Home, Cart, Checkout, and Contact pages

## Tech Stack

- React
- Vite
- React Router DOM
- CSS
- ESLint

## Project Structure

```text
Food Ordering Website/
├── public/
├── src/
│   ├── assets/
│   │   ├── admin_assets/
│   │   └── frontend_assets/
│   ├── components/
│   │   ├── AppDownload/
│   │   ├── ExploreMenu/
│   │   ├── FoodDisplay/
│   │   ├── FoodItem/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── LoginPopup/
│   │   └── navbar/
│   ├── context/
│   │   └── StoreContext.jsx
│   ├── pages/
│   │   ├── Cart/
│   │   ├── Contact/
│   │   ├── Home/
│   │   └── PlaceOrder/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Pages

| Page | Route | Description |
| --- | --- | --- |
| Home | `/` | Browse categories, search food, view dishes, and add items to cart |
| Cart | `/cart` | Review selected items and order totals |
| Checkout | `/order` | Enter delivery details and place an order |
| Contact | `/contact` | Send a message and view restaurant contact details |

## Getting Started

### 1. Open the project folder

If you are in the outer folder, move into the actual Vite project folder:

```powershell
cd "C:\Users\DELL\Documents\Food App\Food Ordering Website\Food Ordering Website"
```

### 2. Install dependencies

```powershell
npm install
```

### 3. Start the development server

```powershell
npm start
```

You can also use:

```powershell
npm run dev
```

After the server starts, open the local URL shown in the terminal. It is usually:

```text
http://localhost:5173/
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Starts the Vite development server |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Creates a production build in the `dist` folder |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint checks |

## How To Use

1. Open the home page.
2. Choose a menu category or use the search icon to find food.
3. Add dishes to the cart using the add button on each food card.
4. Open the cart page and review the order summary.
5. Proceed to checkout and fill in delivery information.
6. Place the order to see the confirmation message.
7. Use the Contact Us page to send a message to the restaurant.

## Current App Behavior

This is a frontend-only project. Cart actions, checkout submission, sign in, and contact form submission work in the browser UI, but they do not send data to a backend server or database yet.

To make it production-ready, the next step would be adding a backend API for user accounts, real orders, payments, contact messages, and persistent cart/order storage.

## Build

Create an optimized production build:

```powershell
npm run build
```

Preview the production build:

```powershell
npm run preview
```

## Notes

- Main menu data is stored in `src/assets/frontend_assets/assets.js`.
- Cart state is managed through React Context in `src/context/StoreContext.jsx`.
- Page routes are configured in `src/App.jsx`.
- Styling is organized beside each component or page in its matching `.css` file.

## Project Name

Tomato Food Ordering Website
