const PUNCTUATION_REGEXP = /([^a-zA-Z\d\s:])/gi

function getCapitalizedWord(word) {
    /* eslint-disable no-magic-numbers */
    const firstCharacter = word.charAt(0).toUpperCase()
    const trailingCharacters = word.substring(1).toLowerCase()
    /* eslint-enable no-magic-numbers */

    return firstCharacter + trailingCharacters
}

function getDelimiter() {
    // TODO: actually parse string
    // to figure out delimiter
    return ' '
}

function getDashCase(string, getModifiedString, caseDelimiter, options = {}) {
    const modifiedString = getModifiedString(string)
    const noPunctuationString = modifiedString.replace(PUNCTUATION_REGEXP, '')
    const delimiter = options.delimiter || getDelimiter(noPunctuationString)

    if (delimiter !== caseDelimiter) {
        const delimiterRegExp = new RegExp(delimiter, 'gi')
        return noPunctuationString.replace(delimiterRegExp, caseDelimiter)
    }

    return noPunctuationString
}

module.exports = {
    getCapitalizedWord,
    getDashCase,
    getDelimiter,
}
