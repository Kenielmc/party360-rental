This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

# 📸 360 Party Camera Rental Web App

A full-stack booking web application for renting out a 360-degree party camera. Built using **Next.js**, **MySQL**, and deployed on **Vercel**.

---

## 🚀 Live Demo

👉 [Click here to view the deployed app](party360-final-ae3r.vercel.app)

---

## 🛠️ Features

- 📆 Book 360 camera services for events
- 💻 Full CRUD functionality (Create, Read, Update, Delete)
- 📡 API integration between frontend and backend using Axios
- 🧾 Data stored securely in a MySQL database
- 🌐 Fully deployed and accessible via Vercel

---

## 📂 Tech Stack

- **Frontend**: React (Next.js)
- **Backend**: Next.js API Routes
- **Database**: MySQL (via MySQL Workbench or PlanetScale)
- **Deployment**: Vercel
- **Tools**: Axios, CSS Modules or Tailwind CSS (optional)

---

## ⚙️ Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/Kenielmc/Party360Final.git
cd party360-rental

### 🎨 Tailwind CSS Integration & UI Features

This project uses **Tailwind CSS v3.4** for fast, modern, and responsive UI development.

#### ✅ Setup Details

- Installed via `npm install -D tailwindcss@3.4.1 postcss autoprefixer`
- Configured using:
  - `postcss.config.js`
  - `tailwind.config.js`
- Global Tailwind styles included in `styles/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;


