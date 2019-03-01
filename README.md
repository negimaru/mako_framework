# <center> ![MAKO](./docs/MakoCSSLogo.png) </center>




Basic blank structure of a project based on ITCSS (Scalable and Maintainable CSS Architecture) and BEMIT (BEM) Methodology.

It is a CSS framework for web artisans. It is another framework to be able to start developing your project with a predefined base based on OOCSS, working through BEMIT (BEM + ITCSS). In this way we can develop our project in a coherent, clean and orderly way and can be maintained and scaled without any difficulty.

The framework has some components developed to start working, the styles of each component are generic styles and are designed to be edited according to the needs of the project with which you use it, although if they seem beautiful, they are ready to use them!

## Getting Started

Clone the repository in local and install the dependencies, then run dev & build scripts.

**Install:**

```bash
git clone https://github.com/klaufel/polygoncss.git
cd polygoncss
npm install
```

If you have a problem with install `node-sass`, use the next command line:
```bash
sudo npm i gulp-sass -ES --unsafe-perm=true
```

**Development script:**
```bash
npm run dev
```

**Build script:**
```bash
npm run build
```

**Specificity graph:** Generate a specificity graph in a `specificity-graph` folder.
```bash
npm run graph
```

## Documentation

For more information you can visit the official documentation of polygonCSS- https://polygoncss.com/docs.

if you want to display the local docs, run the local server with `docsify serve`. You can preview your site in your browser on `http://localhost:3000`.

```bash
npm i docsify-cli -g
docsify serve docs
```

## Project folder structure

```
src/
├── 01_settings/
│   ├── settings.scss
│   ├── settings__config.scss
│   ├── settings__variables.scss
│   ├── settings__breakpoints.scss
│   ├── settings__colors.scss
│   └── settings__fonts.scss
│ 
├── 02_tools/
│   ├── tools.scss
│   ├── tools__mixins.scss
│   └── tools__media-queries.scss
│ 
├── 03_generic/
│   ├── generic.scss
│   ├── generic__normalize.scss
│   ├── generic__box-sizing.scss
│   ├── generic__global.scss
│   └── generic__print.scss
│ 
├── 04_elements/
│   ├── elements.scss
│   ├── elements__headings.scss
│   ├── elements__paragraphs.scss
│   ├── elements__anchors.scss
│   └── elements__images.scss
│
├── 05_headings/
│   ├── headings.scss
│   ├── headings__title.scss
│   ├── headings__heading.scss
│   ├── headings__headline.scss
│   └── headings__subtitle.scss
│ 
├── 06_objects/
│   ├── objects.scss
│   ├── objects__container.scss
│   ├── objects__grid.scss
│   ├── objects__section.scss
│   └── objects__table.scss
│ 
├── 07_components/
│   ├── components.scss
│   ├── components__button.scss
│   ├── components__input.scss
│   ├── components__progress-bar.scss
│   └── structure/
│       ├── components__header.scss
│       └── components__footer.scss
│ 
├── 08_utilities/
│   ├── utilities.scss
│   ├── utilities__widths.scss
│   ├── utilities__colors.scss
│   ├── utilities__trumps.scss
│   └── utilities__debug.scss
│ 
└── style.scss
```

