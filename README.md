# express-humans

![stability-stable](https://img.shields.io/badge/stability-stable-green.svg)
[![Build Status][build-badge]][build-url]

[![npm version][version-badge]][version-url]
[![Known Vulnerabilities][vulnerabilities-badge]][vulnerabilities-url]
[![dependency status][dependency-badge]][dependency-url]
[![devdependency status][devdependency-badge]][devdependency-url]
[![build status][build-badge]][build-url]
[![Code Climate][maintainability-badge]][maintainability-url]
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

MIT

<hr/>

<p align="center">
  Don't forget to 🌟 Star 🌟 the repo if you like this npm package !<br/>
  <a href="https://github.com/Ilshidur/express-humans/issues/new">Your feedback is appreciated</a>
</p>

[build-badge]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2FIlshidur%2Fexpress-humans%2Fbadge&style=flat
[build-url]: https://actions-badge.atrox.dev/Ilshidur/express-humans/goto
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
[maintainability-badge]: https://api.codeclimate.com/v1/badges/88f5bf63731c1cc35f9e/maintainability
[maintainability-url]: https://codeclimate.com/github/Ilshidur/express-humans/maintainability
[downloads-badge]: https://img.shields.io/npm/dt/express-humans.svg
[downloads-url]: https://www.npmjs.com/package/express-humans
[npm-stats-badge]: https://nodei.co/npm/express-humans.png?downloads=true&downloadRank=true
[npm-stats-url]: https://nodei.co/npm/express-humans
