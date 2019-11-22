export const PUNCTUATION_REGEXP = /([^a-zA-Z\d\s])/gi

type Options = {
    delimiter?: string
}

export function getCapitalizedWord(word: string) {
    /* eslint-disable no-magic-numbers */
    const firstCharacter = word.charAt(0).toUpperCase()
    const trailingCharacters = word.substring(1).toLowerCase()
    /* eslint-enable no-magic-numbers */
    const capitalizedWord = firstCharacter + trailingCharacters

    return capitalizedWord
}

export function getDelimiter(originalString?: string) {
    // TODO: actually parse string
    // to figure out delimiter
    return ' '
}

export function getDelimiterRegExp(delimiter: string) {
    const delimiterRegExp = new RegExp(`${delimiter}+`, 'gi')

    return delimiterRegExp
}

export function removePunctuation(originalString: string) {
    const punctuationRemovedString = originalString.replace(PUNCTUATION_REGEXP, '')

    return punctuationRemovedString
}

export function getStringWithoutPunctuation(originalString: string) {
    const noPunctuationString = originalString.replace(PUNCTUATION_REGEXP, '')

    return noPunctuationString
}
