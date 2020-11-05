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


## Pushing to Kualo

gh-pages is pushing there but not deploying automatically

nikolaso@capulet.ldn.kualo.net ~/deploy $ ll
total 44
drwx------  6 nikolaso nikolaso  4096 Nov  5 21:49 ./
drwx--x--x 24 nikolaso nikolaso  4096 Nov  5 21:40 ../
-rw-rw-r--  1 nikolaso nikolaso   108 Nov  5 21:49 .cpanel.yml
drwxrwxr-x  2 nikolaso nikolaso  4096 Nov  5 21:37 css/
drwx------  8 nikolaso nikolaso  4096 Nov  5 21:49 .git/
drwxrwxr-x  4 nikolaso nikolaso  4096 Nov  5 21:37 images/
-rw-rw-r--  1 nikolaso nikolaso 16157 Nov  5 21:37 index.html
drwxrwxr-x  2 nikolaso nikolaso  4096 Nov  5 21:37 js/
nikolaso@capulet.ldn.kualo.net ~/deploy $ cd ../public_html
nikolaso@capulet.ldn.kualo.net ~/public_html $ ll
total 20
drwxr-x---  4 nikolaso nobody   4096 Nov  5 21:42 ./
drwx--x--x 24 nikolaso nikolaso 4096 Nov  5 21:40 ../
drwxrwxr-x  2 nikolaso nikolaso 4096 Nov  5 21:42 cgi-bin/
-rw-r--r--  1 nikolaso nikolaso   28 Feb  6  2019 .htaccess
drwxr-xr-x  4 nikolaso nikolaso 4096 Nov  3 08:35 .well-known/
nikolaso@capulet.ldn.kualo.net ~/public_html $ 

