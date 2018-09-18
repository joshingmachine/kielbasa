const { getDashCase } = require('./utils.js')
const getLowerCase = require('./getLowerCase.js')

const UNDERSCORE = '_'

function getSnakeCase(string, options = {}) {
    return getDashCase(string, getLowerCase, UNDERSCORE, options)
}

module.exports = getSnakeCase
