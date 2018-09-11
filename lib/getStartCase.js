const { getCapitalizedWord, getDelimiter } = require('./utils.js')

function getStartCase(string, options = {}) {
    const delimiter = options.delimiter || getDelimiter(string)
    const words = string.split(delimiter)
    const capitalizedWords = words.map(getCapitalizedWord)
    return capitalizedWords.join(' ')
}

module.exports = getStartCase
