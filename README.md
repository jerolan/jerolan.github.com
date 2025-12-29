# jerolan.github.com

Source code for my personal site.
This site has been built with [Next.js](https://nextjs.org/) and [Tailwind.css](https://tailwindcss.com/docs/theme#app).

## Development

If you want to make use of this project, you will only need Bun installed. You can get Bun at [https://bun.sh/](https://bun.sh/).

### 1. Install the dependencies

```bash
bun install
```

### 2. Run the project

```bash
bun start
```

### 3. Build and deploy

This command will generate the static site (thanks to next static export) on `/out`. You can serve it with any HTTP server, like [Netlify](https://app.netlify.com/) or Github Pages.

```bash
bun run deploy
```

### 5. Additional notes

You probably will need to replace `public/.well-known`
