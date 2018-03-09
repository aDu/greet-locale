var locale = require("locale")
var greetings = require('./greetings')

var supported = new locale.Locales(Object.keys(greetings))

module.exports = givenLocale => {
    var bestLocale = (new locale.Locales(givenLocale)).best(supported).toString()

    if (!greetings[bestLocale]) return greetings.en
    return greetings[bestLocale]
}
