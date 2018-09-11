const { getDelimiter } = require('./utils.js')

const UNDERSCORE = '_'
const PUNCTUATION_REGEXP = /([^a-zA-Z\d\s:])/gi

function getSnakeCase(string, options = {}) {
    const lowerCaseString = string.toLowerCase()
    const noPunctuationString = lowerCaseString.replace(PUNCTUATION_REGEXP, '')
    const delimiter = options.delimiter || getDelimiter(noPunctuationString)

    if (delimiter !== UNDERSCORE) {
        const delimiterRegExp = new RegExp(delimiter, 'gi')
        return noPunctuationString.replace(delimiterRegExp, UNDERSCORE)
    }

    return noPunctuationString
}

module.exports = getSnakeCase
