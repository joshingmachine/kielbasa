import getUpperCase from '../src/getUpperCase.js'

const strings = [
    ['Hello, world!', 'HELLO, WORLD!'],
    ["Mr. Popper's Penguins", "MR. POPPER'S PENGUINS"],
    [
        'Star Wars: Episode V – The Empire Strikes Back',
        'STAR WARS: EPISODE V – THE EMPIRE STRIKES BACK',
    ],
]

strings.forEach(string => {
    test(`returns expected upper case string for "${string[0]}"`, () => {
        expect(getUpperCase(string[0])).toBe(string[1])
    })
})
