const { getDashCase } = require('./utils.js')
const getUpperCase = require('./getUpperCase.js')

const UNDERSCORE = '_'

function getScreamingSnakeCase(string, options = {}) {
    return getDashCase(string, getUpperCase, UNDERSCORE, options)
}

module.exports = getScreamingSnakeCase
