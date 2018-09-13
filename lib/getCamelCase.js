const {
    getCapitalizedWord,
    getDelimiter,
    getStringWithoutPunctuation,
} = require('./utils.js')
const getLowerCase = require('./getLowerCase.js')

function getCamelCase(string, options = {}) {
    const modifiedString = getLowerCase(string)
    const delimiter = options.delimiter || getDelimiter(modifiedString)
    const noPunctuationString = getStringWithoutPunctuation(modifiedString)
    const stringArray = noPunctuationString.split(delimiter)

    return stringArray.reduce((acc, word) => acc + getCapitalizedWord(word))
}

module.exports = getCamelCase
