const fs = require('fs');
const express = require('express');
const humans = require('humans-generator');

const route = '/humans.txt';

/**
 * This express middleware loads the file content (or generates the humans.txt
 * content, depending on its use). Once done, it will always serve the same file
 * from the memory.
 * To avoid this behavior and serve the content dynamically, pass the
 * 'dynamic: true' parameter in the middleware options.
 */
function middleware(config, opts) {
  // TODO: 'opts.dynamic'

  async function getContent() {
    let content = '';

    if (config) {
      if (typeof config === 'string') {
        // Config is file path
        content = fs.readFileSync(config, 'utf8');
      } else {
        // Config is humans.txt as an object
        content = await generateContent(config);
      }
    }

    return content;
  }

  const app = express();

  app.get(route, function(req, res, next) {
    getContent()
      .then((content) => {
        if (content === '') {
          res.header('Content-Type', 'text/plain');
          res.status(404).send('404 : Not Found');
        } else {
          res.header('Content-Type', 'text/plain');
          res.status(200).send(content);
        }
      })
    .catch((err) => {
      res.status(500).send('500 : No humans.txt found !');
    });
  });

  return app;
}

function generateContent(config) {
  return new Promise((resolve, reject) => {
    humans(config, (err, content) => {
      if (err) {
        reject(err);
      } else {
        resolve(content.join('\n'));
      }
    });
  });
}

module.exports = middleware;
