# jerolan.github.com

Source code for my personal site.
This site has been built with [Next.js](https://nextjs.org/) and [Tailwind.css](https://tailwindcss.com/docs/theme#app).

## Development

If you want to make use of this project, you will only need Node.js installed.

### 1. Install the dependencies

```bash
yarn install
```

### 2. Run the project

```bash
yarn start
```

### 3. Build and deploy

This command will generate the static site (thanks to next static export) on `/out`, you could serve it in any HTTP server, like [Netlify](https://app.netlify.com/) o Github Pages

```bash
yarn build
```

### 5. Additional notes

You probably will need to replace `public/.well-known`
