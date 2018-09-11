const { getCapitalizedWord, getDelimiter } = require('./utils.js')

const ALPHABETIC_REGEXP = /([a-zA-Z])/gi

// This is to account for sections
//     1) With no alphabetic characters
//     2) With leading characters that are not alphabetic
function getSectionWithCapitalizedWord(section) {
    const firstAlphabeticCharacterIndex = section.search(ALPHABETIC_REGEXP)
    // eslint-disable-next-line no-magic-numbers
    if (firstAlphabeticCharacterIndex === -1) {
        return section
    }

    const leadingCharacters = section.substring(
        // eslint-disable-next-line no-magic-numbers
        0,
        firstAlphabeticCharacterIndex
    )
    const uncapitalizedWord = section.substring(firstAlphabeticCharacterIndex)

    return leadingCharacters + getCapitalizedWord(uncapitalizedWord)
}

function getStartCase(string, options = {}) {
    const delimiter = options.delimiter || getDelimiter(string)
    const sections = string.split(delimiter)
    const capitalizedSections = sections.map(getSectionWithCapitalizedWord)
    return capitalizedSections.join(' ')
}

module.exports = getStartCase
