const ghpages = require('gh-pages');

/**
 * This task pushes to the `master` branch of the configured `repo`.
 */
ghpages.publish('dist', {
    branch: 'master',
    repo: 'ssh://nikolaso@nikolaso.com:22007/home/nikolaso/deploy'
  }, (err) => {
      if (err) {
        console.log("Error deploying to nikolaso.com" + err)
      }
  });