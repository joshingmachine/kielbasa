import { getDelimiter, getDelimiterRegExp, removePunctuation } from './utils'
import { UNDERSCORE } from './constants'
import getLowerCase from './getLowerCase'

type Options = {
    delimiter?: string
}

function getSnakeCase(originalString: string, options: Options = {}): string {
    const delimiter = options.delimiter || getDelimiter(originalString)
    const lowerCaseString = getLowerCase(originalString)
    const punctuationRemovedString = removePunctuation(lowerCaseString)

    if (delimiter === UNDERSCORE) {
        return punctuationRemovedString
    }

    const delimiterRegExp = getDelimiterRegExp(delimiter)
    const snakeCaseString = punctuationRemovedString.replace(delimiterRegExp, UNDERSCORE)

    return snakeCaseString
}

export default getSnakeCase
