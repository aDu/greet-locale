# greet-locale

Greets a user in a particular language.

Given the locale, returns the greeting (as a string) most relevant to that locale.

Install via npm: `npm i -S greet-locale`.

Note: I recently hacked this package out, so doesn't support that many languages yet.

Code is extremely simple (see `/index.js` and `/greetings.js`).

# Usage
Give the locale as the parameter as depicted below.

```
var greetLocale = require('greet-locale')
console.log(greetLocale('ro')) // "Bună"
console.log(greetLocale('de')) // "Hallo"
console.log(greetLocale('ru')) // "Здравствуй"
console.log(greetLocale('en')) // "Hi"
```

# Contribution

Does not support many languages at all yet! Feel free to make a pull request.

# Future ideas

Formality and gender of the greeting as optional parameters.
Also include an option to return the greeting as latin characters.