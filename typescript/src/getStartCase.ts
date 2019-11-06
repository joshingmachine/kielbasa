import { getCapitalizedWord, getDelimiter } from './utils'

const ALPHABETIC_REGEXP = /([a-zA-Z])/gi

// This is to account for sections
//     1) With no alphabetic characters
//     2) With leading characters that are not alphabetic
function getSectionWithCapitalizedWord(section: string): string {
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
    const capitalizedWord = getCapitalizedWord(uncapitalizedWord)
    const sectionWithCapitalizedWord = leadingCharacters + capitalizedWord

    return sectionWithCapitalizedWord
}

type Options = {
    delimiter?: string
}

function getStartCase(originalString: string, options: Options = {}): string {
    const delimiter = options.delimiter || getDelimiter(originalString)
    const sections = originalString.split(delimiter)
    const capitalizedSections = sections.map(getSectionWithCapitalizedWord)
    const startCaseString = capitalizedSections.join(' ')

    return startCaseString
}

export default getStartCase
