# This is the website for Sindre.ai

First, install all dependencies:
```sh
npm install
```

Run the following command to start a local development server:
```sh
npm run dev
```
This will make the project accessible via the browser on http://localhost:3000.

To create a production build of the project run the following command in your terminal:
```sh
npm run build
```

## How to push to production

**Automatically:**
When merging to **main** branch, all changes are pushed to production. 

**Manually:**
To push changes to production manually, go to Actions and run this workflow:
```sh
Deploy Astro site to Pages
```
