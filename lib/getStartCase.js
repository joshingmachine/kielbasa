// TODO: actually parse string for delimiter,
// move this to a utility function
function getDelimiter() {
    return ' '
}

// TODO: move this to a utility function
function capitalizeWord(word) {
    /* eslint-disable no-magic-numbers */
    const firstCharacter = word.charAt(0).toUpperCase()
    const trailingCharacters = word.substring(1).toLowerCase()
    /* eslint-enable no-magic-numbers */

    return firstCharacter + trailingCharacters
}

function getStartCase(string) {
    const delimiter = getDelimiter(string)
    const words = string.split(delimiter)
    const capitalizedWords = words.map(capitalizeWord)
    return capitalizedWords.join(' ')
}

module.exports = getStartCase
