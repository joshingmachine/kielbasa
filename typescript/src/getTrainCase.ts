import { getDelimiter, getDelimiterRegExp, removePunctuation } from './utils'
import { HYPHEN } from './constants'
import getUpperCase from './getUpperCase'

type Options = {
    delimiter?: string
}

function getTrainCase(originalString: string, options: Options = {}): string {
    const delimiter = options.delimiter || getDelimiter(originalString)
    const upperCaseString = getUpperCase(originalString)
    const punctuationRemovedString = removePunctuation(upperCaseString)

    if (delimiter === HYPHEN) {
        return punctuationRemovedString
    }

    const delimiterRegExp = getDelimiterRegExp(delimiter)
    const trainCase = punctuationRemovedString.replace(delimiterRegExp, HYPHEN)

    return trainCase
}

export default getTrainCase
