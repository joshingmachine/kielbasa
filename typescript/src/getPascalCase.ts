import {
    getCapitalizedWord,
    getDelimiter,
    getStringWithoutPunctuation,
} from './utils.js'
import getLowerCase from './getLowerCase.js'

type Options = {
    delimiter?: string
}

function getPascalCase(string: string, options: Options = {}) {
    const modifiedString = getLowerCase(string)
    const delimiter = options.delimiter || getDelimiter(modifiedString)
    const noPunctuationString = getStringWithoutPunctuation(modifiedString)
    const stringArray = noPunctuationString.split(delimiter)

    return stringArray.reduce((acc, word) => acc + getCapitalizedWord(word), '')
}

export default getPascalCase
