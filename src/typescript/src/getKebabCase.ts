import { getDashCase } from './utils'
import getLowerCase from './getLowerCase'

const HYPHEN = '-'

function getKebabCase(string: string, options = {}): string {
    return getDashCase(string, getLowerCase, HYPHEN, options)
}

export default getKebabCase
