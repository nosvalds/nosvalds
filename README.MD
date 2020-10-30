# Site Notes
## Tooling
`gulp` to compile to `/dist`
`gulp watch` to watch and auto-compile during development

View changes locally with `/dist/index.html`

## Deployment

### Green deployment
`deployment.yaml` contains github actions set up. When you commit on master and push, it SSH's to Kualo and runs gulp to deploy.

### Old
  - Deploys to github pages from `/dist`
  `npm run deploy`



