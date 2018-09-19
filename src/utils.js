const PUNCTUATION_REGEXP = /([^a-zA-Z\d\s:])/gi

export function getCapitalizedWord(word) {
    /* eslint-disable no-magic-numbers */
    const firstCharacter = word.charAt(0).toUpperCase()
    const trailingCharacters = word.substring(1).toLowerCase()
    /* eslint-enable no-magic-numbers */

    return firstCharacter + trailingCharacters
}

export function getDelimiter() {
    // TODO: actually parse string
    // to figure out delimiter
    return ' '
}

export function getDashCase(
    string,
    getModifiedString,
    caseDelimiter,
    options = {}
) {
    const modifiedString = getModifiedString(string)
    const noPunctuationString = getStringWithoutPunctuation(modifiedString)
    const delimiter = options.delimiter || getDelimiter(noPunctuationString)

    if (delimiter !== caseDelimiter) {
        const delimiterRegExp = new RegExp(delimiter, 'gi')
        return noPunctuationString.replace(delimiterRegExp, caseDelimiter)
    }

    return noPunctuationString
}

export function getStringWithoutPunctuation(string) {
    return string.replace(PUNCTUATION_REGEXP, '')
}
