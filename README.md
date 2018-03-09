# greet-locale

Greets a user in a particular language.

Install via npm: `npm i -S greet-locale`.

Quickly hacked this package out, doesn't support many languages yet.

Code is extremely simple (see `/index.js`).

# Usage

```
var greetLocale = require('greet-locale')
console.log(greetLocale('ro')) // "Buna"
console.log(greetLocale('de')) // "Hallo"
```

# Contribution

Does not support many languages at all yet! Feel free to make a pull request.

# Future ideas

Formality and gender of the greeting as optional parameters.
