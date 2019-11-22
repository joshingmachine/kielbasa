import { getDelimiter, getDelimiterRegExp, removePunctuation } from './utils'
import { HYPHEN } from './constants'
import getLowerCase from './getLowerCase'

type Options = {
    delimiter?: string
}

function getKebabCase(originalString: string, options: Options = {}): string {
    const delimiter = options.delimiter || getDelimiter(originalString)
    const lowerCaseString = getLowerCase(originalString)
    const punctuationRemovedString = removePunctuation(lowerCaseString)

    if (delimiter === HYPHEN) {
        return punctuationRemovedString
    }

    const delimiterRegExp = getDelimiterRegExp(delimiter)
    const kebabCaseString = punctuationRemovedString.replace(delimiterRegExp, HYPHEN)

    return kebabCaseString
}

export default getKebabCase
