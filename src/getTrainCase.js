const { getDashCase } = require('./utils.js')
const getUpperCase = require('./getUpperCase.js')

const DASH = '-'

function getTrainCase(string, options = {}) {
    return getDashCase(string, getUpperCase, DASH, options)
}

module.exports = getTrainCase
