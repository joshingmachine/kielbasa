const { getDelimiter } = require('./utils.js')

const UNDERSCORE = '_'
const PUNCTUATION_REGEXP = /([^a-zA-Z\d\s:])/gi

function getScreamingSnakeCase(string, options = {}) {
    const upperCaseString = string.toUpperCase()
    const noPunctuationString = upperCaseString.replace(PUNCTUATION_REGEXP, '')
    const delimiter = options.delimiter || getDelimiter(noPunctuationString)

    if (delimiter !== UNDERSCORE) {
        const delimiterRegExp = new RegExp(delimiter, 'gi')
        return noPunctuationString.replace(delimiterRegExp, UNDERSCORE)
    }

    return noPunctuationString
}

module.exports = getScreamingSnakeCase
