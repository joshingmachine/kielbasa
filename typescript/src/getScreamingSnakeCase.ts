import { getDashCase } from './utils.js'
import getUpperCase from './getUpperCase.js'

const UNDERSCORE = '_'

function getScreamingSnakeCase(string, options = {}) {
    return getDashCase(string, getUpperCase, UNDERSCORE, options)
}

export default getScreamingSnakeCase
