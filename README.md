# express-humans

![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)

[![npm version][version-badge]][version-url]
[![Known Vulnerabilities][vulnerabilities-badge]][vulnerabilities-url]
[![dependency status][dependency-badge]][dependency-url]
[![devdependency status][devdependency-badge]][devdependency-url]
[![build status][build-badge]][build-url]
[![downloads][downloads-badge]][downloads-url]

[![NPM][npm-stats-badge]][npm-stats-url]

> Express middleware for generating a humans.txt or responding with an existing file.

## Usage

First run :

`npm install express-humans` (both npm and Yarn locks are supported)

then :

```javascript
const humans = require('express-humans');
const express = require('express');

const app = express();

app.use(humans({
  team: [
    {
      'Original developer': 'Hayden Bleasel',
      Twitter: '@haydenbleasel'
    }, {
      Maintainer: 'Alexis Paques',
      Github: '@AlexisTM'
    }
  ],
  thanks: [
    'Node',
    'Gulp'
  ],
  site: {
    'Standards': 'HTML5, CSS3',
    'Components': 'jQuery, Normalize.css',
    'Softwares': 'Atom, SublimeText'
  },
  note: 'Built with love by Hayden Bleasel.'
}));

app.listen(3000);
```

or :

```javascript
// Using the path of the humans.txt file
app.use(humans('./humans.txt'));
```

## API

`humans(options)`

* `options` : `String` or `Object`
  * if `String` : the path of the humans.txt file to serve
  * if `Object` : [the `humans-generator` package config](https://www.npmjs.com/package/humans-generator)

## Development

```bash
npm run build # Or "yarn run build"
npm test # Or "yarn test"
```

## Credits

Inspired of [express-robots](https://www.npmjs.com/package/express-robots).

## License

MIT License

Copyright (c) 2017 **Nicolas COUTIN**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[version-badge]: https://img.shields.io/npm/v/express-humans.svg
[version-url]: https://www.npmjs.com/package/express-humans
[vulnerabilities-badge]: https://snyk.io/test/npm/express-humans/badge.svg
[vulnerabilities-url]: https://snyk.io/test/npm/express-humans
[dependency-badge]: https://david-dm.org/ilshidur/express-humans.svg
[dependency-url]: https://david-dm.org/ilshidur/express-humans
[devdependency-badge]: https://david-dm.org/ilshidur/express-humans/dev-status.svg
[devdependency-url]: https://david-dm.org/ilshidur/express-humans#info=devDependencies
[build-badge]: https://travis-ci.org/Ilshidur/express-humans.svg
[build-url]: https://travis-ci.org/Ilshidur/express-humans
[downloads-badge]: https://img.shields.io/npm/dt/express-humans.svg
[downloads-url]: https://www.npmjs.com/package/express-humans
[npm-stats-badge]: https://nodei.co/npm/express-humans.png?downloads=true&downloadRank=true
[npm-stats-url]: https://nodei.co/npm/express-humans
