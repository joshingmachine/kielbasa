const DASH = '-'
const PUNCTUATION_REGEXP = /(?![a-zA-Z0-9 -])/gi

// TODO: actually parse string for delimiter,
// move this to a utility function
function getDelimiter() {
    return ' '
}

function getKebabCase(string) {
    const lowerCaseString = string.toLowerCase()
    const noPunctuationString = lowerCaseString.replace(PUNCTUATION_REGEXP, '')
    const delimiter = getDelimiter(noPunctuationString)

    if (delimiter !== DASH) {
        const delimiterRegExp = new RegExp(delimiter, 'gi')
        return noPunctuationString.replace(delimiterRegExp, DASH)
    }

    return noPunctuationString
}

module.exports = getKebabCase
