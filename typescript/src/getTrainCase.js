import { getDashCase } from './utils.js'
import getUpperCase from './getUpperCase.js'

const DASH = '-'

function getTrainCase(string, options = {}) {
    return getDashCase(string, getUpperCase, DASH, options)
}

export default getTrainCase
