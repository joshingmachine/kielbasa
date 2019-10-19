import getStartCase from '../src/getStartCase.js'

const strings = [
    ['Hello, world!', 'Hello, World!'],
    ["Mr. Popper's Penguins", "Mr. Popper's Penguins"],
    [
        'Star Wars: Episode V – The Empire Strikes Back',
        'Star Wars: Episode V – The Empire Strikes Back',
    ],
    ["When you're here, you're family", "When You're Here, You're Family"],
]

strings.forEach(string => {
    test(`returns expected start case string for "${string[0]}"`, () => {
        expect(getStartCase(string[0])).toBe(string[1])
    })
})
