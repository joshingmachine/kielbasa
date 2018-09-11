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

module.exports = {
    getCapitalizedWord,
    getDelimiter,
}
