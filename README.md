# Shrek Consulting IT

A swamp-themed parody landing page for a fictional managed IT provider. Built with Next.js App Router, TypeScript, and Tailwind CSS. The contact API validates the submission and logs it to the server console; it does not send email or store submissions.

## Run locally

Requirements: Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To make a production build locally:

```bash
npm run build
npm run start
```

## Edit the site copy

Update `lib/content.ts` to edit the service descriptions, plans, testimonials, FAQ, and other site copy.

## Push to GitHub

Create an empty repository on GitHub, then run these commands from this project directory (replace the URL with your repository URL):

```bash
git init
git add .
git commit -m "Build Shrek Consulting IT landing page"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

## Deploy on Vercel

1. Sign in to Vercel and choose **Add New → Project**.
2. Import the GitHub repository.
3. Keep the detected Next.js settings and click **Deploy**.

No environment variables or external services are required. The contact submissions appear in the Vercel function logs.

## Parody note

This is a fictional parody site. Company details, pricing, and testimonials are illustrative and not a real offer or endorsement.
