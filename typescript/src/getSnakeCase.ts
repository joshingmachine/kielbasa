import { getDashCase } from './utils'
import getLowerCase from './getLowerCase'

const UNDERSCORE = '_'

function getSnakeCase(string: string, options = {}): string {
    return getDashCase(string, getLowerCase, UNDERSCORE, options)
}

export default getSnakeCase
