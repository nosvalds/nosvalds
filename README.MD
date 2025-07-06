# Site Notes

## Prerequisites

- Node.js (recommend install with nvm)

## Getting started

- `npm install`

## Tooling
- `npm run build` - uses `gulp` to compile to `/dist`
- `npm run watch` - uses `gulp watch` to watch and auto-compile during development

- Right click "use live server" on `/dist/index.html` to run the site locally for development

## Deployment
 (first time `git remote add git@github.com:nosvalds/nosvalds.git`)

 - `gulp` to build into `dist/` directory
 - Merge to `gh-pages` branch
 - git mv to `docs/` directory
 - `git push remote gh-pages` branch
 - Then github pages will automatically publish from the github.com/nosvalds/nosvalds repo to www.nikolaso.com
