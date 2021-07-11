# jerolan.github.com

Source code for my personal site.
This site has been built with [Parcel](https://parceljs.org/) and [Tailwind.css](https://tailwindcss.com/docs/theme#app), the site is very simple and thanks to Parcel I can add Tailwind to the compilation process to take advantage of it with a very little configuration.

## Development

If you want to make use of this project it is only necessary that you have Node installed and fork it.


### 1. Install the dependencies

```bash
yarn install
```

### 2. Run the project

```bash
yarn start
```

### 3. Make it yours

Most of the code is in `ìndex.html`. You could [customise the theme with tailwind](https://tailwindcss.com/docs/theme#app).


### 4. Build and deploy

This command will generate the static site on `/dist`, you could serve it in any HTTP server, like [Netlify](https://app.netlify.com/) o GHPages
```bash
yarn build
```

### 5. Additional notes

You probably will not need `.well-known` and the assets