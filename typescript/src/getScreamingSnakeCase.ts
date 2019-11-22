import { getDelimiter, getDelimiterRegExp, removePunctuation } from './utils'
import getUpperCase from './getUpperCase'

const UNDERSCORE = '_'

type Options = {
    delimiter?: string
}

function getScreamingSnakeCase(originalString: string, options: Options = {}): string {
    const delimiter = options.delimiter || getDelimiter(originalString)
    const upperCaseString = getUpperCase(originalString)
    const punctuationRemovedString = removePunctuation(upperCaseString)

    if (delimiter === UNDERSCORE) {
        return punctuationRemovedString
    }

    const delimiterRegExp = getDelimiterRegExp(delimiter)
    const screamingSnakeCaseString = punctuationRemovedString.replace(delimiterRegExp, UNDERSCORE)

    return screamingSnakeCaseString
}

export default getScreamingSnakeCase
