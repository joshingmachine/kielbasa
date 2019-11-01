import { getDashCase } from './utils'
import getUpperCase from './getUpperCase'

const UNDERSCORE = '_'

function getScreamingSnakeCase(string: string, options = {}): string {
    return getDashCase(string, getUpperCase, UNDERSCORE, options)
}

export default getScreamingSnakeCase
