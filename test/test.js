const assert = require('assert')

const greetLocale = require('../index')

describe('Greet', function() {
    it('should work for supported languages', () => {
        assert.equal("Hallo", greetLocale("de"))
        assert.equal("Hi", greetLocale("en"))
        assert.equal("Buna", greetLocale("ro"))
    })
})
