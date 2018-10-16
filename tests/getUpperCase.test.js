import getUpperCase from '../src/getUpperCase.js'

test('returns expected upper case string (A)', () => {
    expect(getUpperCase('Hello, world!')).toBe('HELLO, WORLD!')
})
