import {
    getCapitalizedWord,
    getDelimiter,
    getStringWithoutPunctuation,
} from './utils'
import getLowerCase from './getLowerCase'

type Options = {
    delimiter?: string
}

function getCamelCase(string: string, options: Options = {}): string {
    const modifiedString = getLowerCase(string)
    const delimiter = options.delimiter || getDelimiter(modifiedString)
    const noPunctuationString = getStringWithoutPunctuation(modifiedString)
    const stringArray = noPunctuationString.split(delimiter)

    return stringArray.reduce((acc, word) => acc + getCapitalizedWord(word))
}

export default getCamelCase
