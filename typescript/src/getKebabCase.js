import { getDashCase } from './utils.js'
import getLowerCase from './getLowerCase.js'

const HYPHEN = '-'

function getKebabCase(string, options = {}) {
    return getDashCase(string, getLowerCase, HYPHEN, options)
}

export default getKebabCase
