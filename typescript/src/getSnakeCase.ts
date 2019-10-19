import { getDashCase } from './utils.js'
import getLowerCase from './getLowerCase.js'

const UNDERSCORE = '_'

function getSnakeCase(string, options = {}) {
    return getDashCase(string, getLowerCase, UNDERSCORE, options)
}

export default getSnakeCase
