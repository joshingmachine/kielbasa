const { getDelimiter } = require('./utils.js')

const DASH = '-'
const PUNCTUATION_REGEXP = /([^a-zA-Z\d\s:])/gi

function getTrainCase(string, options = {}) {
    const upperCaseString = string.toUpperCase()
    const noPunctuationString = upperCaseString.replace(PUNCTUATION_REGEXP, '')
    const delimiter = options.delimiter || getDelimiter(noPunctuationString)

    if (delimiter !== DASH) {
        const delimiterRegExp = new RegExp(delimiter, 'gi')
        return noPunctuationString.replace(delimiterRegExp, DASH)
    }

    return noPunctuationString
}

module.exports = getTrainCase
