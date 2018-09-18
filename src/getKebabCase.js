const { getDashCase } = require('./utils.js')
const getLowerCase = require('./getLowerCase.js')

const HYPHEN = '-'

function getKebabCase(string, options = {}) {
    return getDashCase(string, getLowerCase, HYPHEN, options)
}

module.exports = getKebabCase
