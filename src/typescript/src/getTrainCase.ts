import { getDashCase } from './utils'
import getUpperCase from './getUpperCase'

const DASH = '-'

function getTrainCase(string: string, options = {}): string {
    return getDashCase(string, getUpperCase, DASH, options)
}

export default getTrainCase
