var fs = require('fs');
var express = require('express');
var humans = require('humans-generator');

/**
 * This express middleware loads the file content (or generates the humans.txt
 * content, depending on its use). Once done, it will always serve the same file
 * from the memory.
 * To avoid this behavior and serve the content dynamically, pass the
 * 'dynamic: true' parameter in the middleware options.
 */
function middleware(config, opts) {
  // TODO: 'opts.dynamic'

  var content = '';

  if (config) {
    if (typeof config === 'string') {
      // Config is file path
      content = fs.readFileSync(config, 'utf8');
    } else {
      // Config is humans.txt as an object
      content = generateContent(config);
    }
  }

  var router = express.Router();

  router.get('/humans.txt', function(req, res, next) {
    res.header('Content-Type', 'text/plain');
    res.send(content);
  });

  return router;
}

function generateContent(config) {
  return humans(config);
}

module.exports = middleware;
